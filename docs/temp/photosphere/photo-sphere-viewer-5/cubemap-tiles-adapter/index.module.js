/*!
 * PhotoSphereViewer.CubemapTilesAdapter 5.1.5
 * @copyright 2023 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */

// src/CubemapTilesAdapter.ts
import { AbstractAdapter, CONSTANTS, events, PSVError as PSVError3, utils } from "@photo-sphere-viewer/core";
import { CubemapAdapter } from "@photo-sphere-viewer/cubemap-adapter";
import {
  BoxGeometry,
  Frustum,
  ImageLoader,
  Matrix4,
  Mesh,
  MeshBasicMaterial as MeshBasicMaterial2,
  Vector2,
  Vector3
} from "three";

// ../shared/Queue.ts
var Task = class {
  constructor(id, priority, fn) {
    this.id = id;
    this.priority = priority;
    this.fn = fn;
    this.status = 1 /* PENDING */;
  }
  start() {
    this.status = 2 /* RUNNING */;
    return this.fn(this).then(
      () => {
        this.status = 4 /* DONE */;
      },
      () => {
        this.status = 5 /* ERROR */;
      }
    );
  }
  cancel() {
    this.status = 3 /* CANCELLED */;
  }
  isCancelled() {
    return this.status === 3 /* CANCELLED */;
  }
};
var Queue = class {
  constructor(concurency = 4) {
    this.concurency = concurency;
    this.runningTasks = {};
    this.tasks = {};
  }
  enqueue(task) {
    this.tasks[task.id] = task;
  }
  clear() {
    Object.values(this.tasks).forEach((task) => task.cancel());
    this.tasks = {};
    this.runningTasks = {};
  }
  setPriority(taskId, priority) {
    const task = this.tasks[taskId];
    if (task) {
      task.priority = priority;
      if (task.status === 0 /* DISABLED */) {
        task.status = 1 /* PENDING */;
      }
    }
  }
  disableAllTasks() {
    Object.values(this.tasks).forEach((task) => {
      task.status = 0 /* DISABLED */;
    });
  }
  start() {
    if (Object.keys(this.runningTasks).length >= this.concurency) {
      return;
    }
    const nextTask = Object.values(this.tasks).filter((task) => task.status === 1 /* PENDING */).sort((a, b) => b.priority - a.priority).pop();
    if (nextTask) {
      this.runningTasks[nextTask.id] = true;
      nextTask.start().then(() => {
        if (!nextTask.isCancelled()) {
          delete this.tasks[nextTask.id];
          delete this.runningTasks[nextTask.id];
          this.start();
        }
      });
      this.start();
    }
  }
};

// ../shared/tiles-utils.ts
import { PSVError } from "@photo-sphere-viewer/core";
import {
  CanvasTexture,
  LineSegments,
  MeshBasicMaterial,
  WireframeGeometry
} from "three";
function checkTilesLevels(levels) {
  let previous = 0;
  levels.forEach((level, i) => {
    if (!level.zoomRange || level.zoomRange.length !== 2) {
      throw new PSVError(`Tiles level ${i} is missing "zoomRange" property`);
    }
    if (level.zoomRange[0] >= level.zoomRange[1] || level.zoomRange[0] !== previous || i === 0 && level.zoomRange[0] !== 0 || i === levels.length - 1 && level.zoomRange[1] !== 100) {
      throw new PSVError(`Tiles levels' "zoomRange" are not orderer or are not covering the whole 0-100 range`);
    }
    previous = level.zoomRange[1];
  });
}
function getTileIndexByZoomLevel(levels, zoomLevel) {
  return levels.findIndex((level) => {
    return zoomLevel >= level.zoomRange[0] && zoomLevel <= level.zoomRange[1];
  });
}
function buildErrorMaterial() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${canvas.width / 5}px serif`;
  ctx.fillStyle = "#a22";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("\u26A0", canvas.width / 2, canvas.height / 2);
  const texture = new CanvasTexture(canvas);
  return new MeshBasicMaterial({ map: texture });
}
function createWireFrame(geometry) {
  const wireframe = new WireframeGeometry(geometry);
  const line = new LineSegments(wireframe);
  line.material.depthTest = false;
  line.material.opacity = 0.25;
  line.material.transparent = true;
  return line;
}
var DEBUG_COLORS = ["dodgerblue", "limegreen", "indianred"];
function buildDebugTexture(image, level, id) {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = DEBUG_COLORS[level % DEBUG_COLORS.length];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "multiply";
  ctx.drawImage(image, 0, 0);
  const fontSize = image.width / 7;
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "white";
  ctx.font = `${fontSize}px monospace`;
  ctx.textAlign = "center";
  id.split("\n").forEach((id2, i) => {
    ctx.fillText(id2, image.width / 2, image.height / 2 + fontSize * (0.3 + i));
  });
  return canvas;
}

// src/utils.ts
import { PSVError as PSVError2 } from "@photo-sphere-viewer/core";
import { MathUtils } from "three";
function isMultiTiles(panorama) {
  return !!panorama.levels;
}
function computeTileConfig(tile, level, data) {
  return {
    ...tile,
    level,
    tileSize: tile.faceSize / tile.nbTiles,
    facesByTile: data.CUBE_SEGMENTS / tile.nbTiles
  };
}
function getTileConfig(panorama, zoomLevel, data) {
  let tile;
  let level;
  if (!isMultiTiles(panorama)) {
    level = 0;
    tile = {
      ...panorama,
      zoomRange: [0, 100]
    };
  } else {
    level = getTileIndexByZoomLevel(panorama.levels, zoomLevel);
    tile = panorama.levels[level];
  }
  return computeTileConfig(tile, level, data);
}
function getTileConfigByIndex(panorama, level, data) {
  if (!isMultiTiles(panorama) || !panorama.levels[level]) {
    return null;
  } else {
    return computeTileConfig(panorama.levels[level], level, data);
  }
}
function checkPanoramaConfig(panorama, data) {
  if (typeof panorama !== "object" || !panorama.tileUrl) {
    throw new PSVError2("Invalid panorama configuration, are you using the right adapter?");
  }
  if (isMultiTiles(panorama)) {
    panorama.levels.forEach((level) => checkTile(level, data));
    checkTilesLevels(panorama.levels);
  } else {
    checkTile(panorama, data);
  }
}
function checkTile(tile, data) {
  if (!tile.faceSize || !tile.nbTiles) {
    throw new PSVError2("Invalid panorama configuration, are you using the right adapter?");
  }
  if (tile.nbTiles > data.CUBE_SEGMENTS) {
    throw new PSVError2(`Panorama nbTiles must not be greater than ${data.CUBE_SEGMENTS}.`);
  }
  if (!MathUtils.isPowerOfTwo(tile.nbTiles)) {
    throw new PSVError2("Panorama nbTiles must be power of 2.");
  }
}
function isTopOrBottom(face) {
  return face === 2 || face === 3;
}

// src/CubemapTilesAdapter.ts
var CUBE_SEGMENTS = 16;
var NB_VERTICES_BY_FACE = 6;
var NB_VERTICES_BY_PLANE = NB_VERTICES_BY_FACE * CUBE_SEGMENTS * CUBE_SEGMENTS;
var NB_VERTICES = 6 * NB_VERTICES_BY_PLANE;
var NB_GROUPS_BY_FACE = CUBE_SEGMENTS * CUBE_SEGMENTS;
var ATTR_UV = "uv";
var ATTR_ORIGINAL_UV = "originaluv";
var ATTR_POSITION = "position";
var CUBE_HASHMAP = ["left", "right", "top", "bottom", "back", "front"];
var ERROR_LEVEL = -1;
function tileId(tile) {
  return `${tile.face}:${tile.col}x${tile.row}/${tile.config.level}`;
}
function prettyTileId(tile) {
  return `${tileId(tile)}
${CUBE_HASHMAP[tile.face]}`;
}
var getConfig = utils.getConfigParser({
  flipTopBottom: false,
  showErrorTile: true,
  baseBlur: true,
  blur: false,
  debug: false
});
var frustum = new Frustum();
var projScreenMatrix = new Matrix4();
var vertexPosition = new Vector3();
var CubemapTilesAdapter = class extends AbstractAdapter {
  constructor(viewer, config) {
    super(viewer);
    this.state = {
      tileConfig: null,
      tiles: {},
      faces: {},
      geom: null,
      materials: [],
      errorMaterial: null,
      inTransition: false
    };
    this.queue = new Queue();
    this.config = getConfig(config);
    if (this.viewer.config.requestHeaders) {
      utils.logWarn(
        'CubemapTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.'
      );
    } else {
      this.loader = new ImageLoader();
      if (this.viewer.config.withCredentials) {
        this.loader.setWithCredentials(true);
      }
    }
    this.viewer.addEventListener(events.PositionUpdatedEvent.type, this);
    this.viewer.addEventListener(events.ZoomUpdatedEvent.type, this);
  }
  destroy() {
    this.viewer.addEventListener(events.PositionUpdatedEvent.type, this);
    this.viewer.addEventListener(events.ZoomUpdatedEvent.type, this);
    this.__cleanup();
    this.state.errorMaterial?.map?.dispose();
    this.state.errorMaterial?.dispose();
    delete this.state.geom;
    delete this.state.errorMaterial;
    super.destroy();
  }
  /**
   * @internal
   */
  handleEvent(e) {
    if (e instanceof events.PositionUpdatedEvent || e instanceof events.ZoomUpdatedEvent) {
      this.__refresh();
    }
  }
  supportsTransition(panorama) {
    return !!panorama.baseUrl;
  }
  supportsPreload(panorama) {
    return !!panorama.baseUrl;
  }
  loadTexture(panorama) {
    try {
      checkPanoramaConfig(panorama, { CUBE_SEGMENTS });
    } catch (e) {
      return Promise.reject(e);
    }
    if (panorama.baseUrl) {
      if (!this.adapter) {
        if (!CubemapAdapter) {
          throw new PSVError3("CubemapTilesAdapter requires CubemapAdapter");
        }
        this.adapter = new CubemapAdapter(this.viewer, {
          blur: this.config.baseBlur
        });
      }
      return this.adapter.loadTexture(panorama.baseUrl).then((textureData) => ({
        panorama,
        texture: textureData.texture
      }));
    } else {
      return Promise.resolve({ panorama, texture: null });
    }
  }
  createMesh(scale = 1) {
    const cubeSize = CONSTANTS.SPHERE_RADIUS * 2 * scale;
    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize, CUBE_SEGMENTS, CUBE_SEGMENTS, CUBE_SEGMENTS).scale(1, 1, -1).toNonIndexed();
    geometry.clearGroups();
    for (let i = 0, k = 0; i < NB_VERTICES; i += NB_VERTICES_BY_FACE) {
      geometry.addGroup(i, NB_VERTICES_BY_FACE, k++);
    }
    geometry.setAttribute(ATTR_ORIGINAL_UV, geometry.getAttribute(ATTR_UV).clone());
    return new Mesh(geometry, []);
  }
  /**
   * Applies the base texture and starts the loading of tiles
   */
  setTexture(mesh, textureData, transition) {
    const { texture } = textureData;
    if (transition) {
      this.state.inTransition = true;
      this.__setTexture(mesh, texture);
      return;
    }
    this.__cleanup();
    this.__setTexture(mesh, texture);
    this.state.materials = mesh.material;
    this.state.geom = mesh.geometry;
    this.state.geom.setAttribute(ATTR_UV, this.state.geom.getAttribute(ATTR_ORIGINAL_UV).clone());
    if (this.config.debug) {
      const wireframe = createWireFrame(this.state.geom);
      this.viewer.renderer.addObject(wireframe);
      this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection, wireframe);
    }
    setTimeout(() => this.__refresh());
  }
  __setTexture(mesh, texture) {
    for (let i = 0; i < 6; i++) {
      let material;
      if (texture) {
        if (this.config.flipTopBottom && isTopOrBottom(i)) {
          texture[i].center = new Vector2(0.5, 0.5);
          texture[i].rotation = Math.PI;
        }
        material = new MeshBasicMaterial2({ map: texture[i] });
      } else {
        material = new MeshBasicMaterial2({ opacity: 0, transparent: true });
      }
      for (let j = 0; j < NB_GROUPS_BY_FACE; j++) {
        mesh.material.push(material);
      }
    }
  }
  setTextureOpacity(mesh, opacity) {
    for (let i = 0; i < 6; i++) {
      mesh.material[i * NB_GROUPS_BY_FACE].opacity = opacity;
      mesh.material[i * NB_GROUPS_BY_FACE].transparent = opacity < 1;
    }
  }
  /**
   * @throws {@link PSVError} always
   */
  setOverlay() {
    throw new PSVError3("EquirectangularTilesAdapter does not support overlay");
  }
  disposeTexture(textureData) {
    textureData.texture?.forEach((texture) => texture.dispose());
  }
  /**
   * Compute visible tiles and load them
   */
  __refresh() {
    if (!this.state.geom || this.state.inTransition) {
      return;
    }
    const camera = this.viewer.renderer.camera;
    camera.updateMatrixWorld();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);
    const panorama = this.viewer.config.panorama;
    const zoomLevel = this.viewer.getZoomLevel();
    const tileConfig = getTileConfig(panorama, zoomLevel, { CUBE_SEGMENTS });
    const verticesPosition = this.state.geom.getAttribute(ATTR_POSITION);
    const tilesToLoad = {};
    for (let i = 0; i < NB_VERTICES; i += 1) {
      vertexPosition.fromBufferAttribute(verticesPosition, i);
      vertexPosition.applyEuler(this.viewer.renderer.sphereCorrection);
      if (frustum.containsPoint(vertexPosition)) {
        const face = Math.floor(i / NB_VERTICES_BY_PLANE);
        const segmentIndex = Math.floor((i - face * NB_VERTICES_BY_PLANE) / 6);
        const segmentRow = Math.floor(segmentIndex / CUBE_SEGMENTS);
        const segmentCol = segmentIndex - segmentRow * CUBE_SEGMENTS;
        let config = tileConfig;
        while (config) {
          let row = Math.floor(segmentRow / config.facesByTile);
          let col = Math.floor(segmentCol / config.facesByTile);
          const angle = vertexPosition.angleTo(this.viewer.state.direction);
          const tile = {
            face,
            row,
            col,
            angle,
            config,
            url: null
          };
          if (this.config.flipTopBottom && isTopOrBottom(face)) {
            col = config.nbTiles - col - 1;
            row = config.nbTiles - row - 1;
          }
          const id = tileId(tile);
          if (tilesToLoad[id]) {
            tilesToLoad[id].angle = Math.min(tilesToLoad[id].angle, angle);
            break;
          } else {
            tile.url = panorama.tileUrl(CUBE_HASHMAP[face], col, row, config.level);
            if (tile.url) {
              tilesToLoad[id] = tile;
              break;
            } else {
              config = getTileConfigByIndex(panorama, config.level - 1, { CUBE_SEGMENTS });
            }
          }
        }
      }
    }
    this.state.tileConfig = tileConfig;
    this.__loadTiles(Object.values(tilesToLoad));
  }
  /**
   * Loads tiles and change existing tiles priority
   */
  __loadTiles(tiles) {
    this.queue.disableAllTasks();
    tiles.forEach((tile) => {
      const id = tileId(tile);
      if (this.state.tiles[id]) {
        this.queue.setPriority(id, tile.angle);
      } else {
        this.state.tiles[id] = true;
        this.queue.enqueue(new Task(id, tile.angle, (task) => this.__loadTile(tile, task)));
      }
    });
    this.queue.start();
  }
  /**
   * Loads and draw a tile
   */
  __loadTile(tile, task) {
    return this.__loadImage(tile.url).then((image) => {
      if (!task.isCancelled()) {
        if (this.config.debug) {
          image = buildDebugTexture(image, tile.config.level, prettyTileId(tile));
        }
        const material = new MeshBasicMaterial2({ map: utils.createTexture(image) });
        this.__swapMaterial(tile, material, false);
        this.viewer.needsUpdate();
      }
    }).catch(() => {
      if (!task.isCancelled() && this.config.showErrorTile) {
        if (!this.state.errorMaterial) {
          this.state.errorMaterial = buildErrorMaterial();
        }
        this.__swapMaterial(tile, this.state.errorMaterial, true);
        this.viewer.needsUpdate();
      }
    });
  }
  __loadImage(url) {
    if (this.loader) {
      return new Promise((resolve, reject) => {
        this.loader.load(url, resolve, void 0, reject);
      });
    } else {
      return this.viewer.textureLoader.loadImage(url);
    }
  }
  /**
   * Applies a new texture to the faces
   */
  __swapMaterial(tile, material, isError) {
    const uvs = this.state.geom.getAttribute(ATTR_UV);
    for (let c = 0; c < tile.config.facesByTile; c++) {
      for (let r = 0; r < tile.config.facesByTile; r++) {
        const faceCol = tile.col * tile.config.facesByTile + c;
        const faceRow = tile.row * tile.config.facesByTile + r;
        const firstVertex = tile.face * NB_VERTICES_BY_PLANE + 6 * (CUBE_SEGMENTS * faceRow + faceCol);
        if (isError && this.state.faces[firstVertex] > ERROR_LEVEL) {
          continue;
        }
        if (this.state.faces[firstVertex] > tile.config.level) {
          continue;
        }
        this.state.faces[firstVertex] = isError ? ERROR_LEVEL : tile.config.level;
        const matIndex = this.state.geom.groups.find((g) => g.start === firstVertex).materialIndex;
        this.state.materials[matIndex] = material;
        let top = 1 - r / tile.config.facesByTile;
        let bottom = 1 - (r + 1) / tile.config.facesByTile;
        let left = c / tile.config.facesByTile;
        let right = (c + 1) / tile.config.facesByTile;
        if (this.config.flipTopBottom && isTopOrBottom(tile.face)) {
          top = 1 - top;
          bottom = 1 - bottom;
          left = 1 - left;
          right = 1 - right;
        }
        uvs.setXY(firstVertex, left, top);
        uvs.setXY(firstVertex + 1, left, bottom);
        uvs.setXY(firstVertex + 2, right, top);
        uvs.setXY(firstVertex + 3, left, bottom);
        uvs.setXY(firstVertex + 4, right, bottom);
        uvs.setXY(firstVertex + 5, right, top);
      }
    }
    uvs.needsUpdate = true;
  }
  /**
   * Clears loading queue, dispose all materials
   */
  __cleanup() {
    this.queue.clear();
    this.state.tiles = {};
    this.state.faces = {};
    this.state.inTransition = false;
    this.state.materials.forEach((mat) => {
      mat?.map?.dispose();
      mat?.dispose();
    });
    this.state.materials.length = 0;
  }
};
CubemapTilesAdapter.id = "cubemap-tiles";
CubemapTilesAdapter.supportsDownload = false;
CubemapTilesAdapter.supportsOverlay = false;
export {
  CubemapTilesAdapter
};
//# sourceMappingURL=index.module.js.map