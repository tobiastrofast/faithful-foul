(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('@photo-sphere-viewer/core')) :
    typeof define === 'function' && define.amd ? define(['exports', 'three', '@photo-sphere-viewer/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.PhotoSphereViewer = global.PhotoSphereViewer || {}, global.PhotoSphereViewer.EquirectangularVideoAdapter = {}), global.THREE, global.PhotoSphereViewer));
})(this, (function (exports, THREE, PhotoSphereViewer) {

/*!
 * PhotoSphereViewer.EquirectangularVideoAdapter 5.1.5
 * @copyright 2023 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */
"use strict";
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };

  // @photo-sphere-viewer/core
  var require_core = () => PhotoSphereViewer;

  // three
  var require_three = () => THREE;

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    EquirectangularVideoAdapter: () => EquirectangularVideoAdapter
  });

  // src/EquirectangularVideoAdapter.ts
  var import_core2 = require_core();
  var import_three2 = require_three();

  // ../shared/AbstractVideoAdapter.ts
  var import_core = require_core();
  var import_three = require_three();
  var AbstractVideoAdapter = class extends import_core.AbstractAdapter {
    constructor(viewer) {
      super(viewer);
      this.viewer.addEventListener(import_core.events.BeforeRenderEvent.type, this);
    }
    destroy() {
      this.viewer.removeEventListener(import_core.events.BeforeRenderEvent.type, this);
      this.__removeVideo();
      super.destroy();
    }
    /**
     * @internal
     */
    handleEvent(e) {
      if (e instanceof import_core.events.BeforeRenderEvent) {
        this.viewer.needsUpdate();
      }
    }
    supportsPreload() {
      return false;
    }
    supportsTransition() {
      return false;
    }
    loadTexture(panorama) {
      if (typeof panorama !== "object" || !panorama.source) {
        return Promise.reject(new import_core.PSVError("Invalid panorama configuration, are you using the right adapter?"));
      }
      if (!this.viewer.getPlugin("video")) {
        return Promise.reject(new import_core.PSVError("Video adapters require VideoPlugin to be loaded too."));
      }
      const video = this.__createVideo(panorama.source);
      return this.__videoLoadPromise(video).then(() => {
        const texture = new import_three.VideoTexture(video);
        return { panorama, texture };
      });
    }
    switchVideo(texture) {
      let currentTime;
      let duration;
      let paused = !this.config.autoplay;
      let muted = this.config.muted;
      let volume = 1;
      if (this.video) {
        ({ currentTime, duration, paused, muted, volume } = this.video);
      }
      this.__removeVideo();
      this.video = texture.image;
      if (this.video.duration === duration) {
        this.video.currentTime = currentTime;
      }
      this.video.muted = muted;
      this.video.volume = volume;
      if (!paused) {
        this.video.play();
      }
    }
    setTextureOpacity(mesh, opacity) {
      mesh.material.opacity = opacity;
      mesh.material.transparent = opacity < 1;
    }
    setOverlay() {
      throw new import_core.PSVError("VideoAdapter does not support overlay");
    }
    disposeTexture(textureData) {
      if (textureData.texture) {
        const video = textureData.texture.image;
        video.pause();
        this.viewer.container.removeChild(video);
      }
      textureData.texture?.dispose();
    }
    __removeVideo() {
      if (this.video) {
        this.video.pause();
        this.viewer.container.removeChild(this.video);
        delete this.video;
      }
    }
    __createVideo(src) {
      const video = document.createElement("video");
      video.crossOrigin = this.viewer.config.withCredentials ? "use-credentials" : "anonymous";
      video.loop = true;
      video.playsInline = true;
      video.style.display = "none";
      video.muted = this.config.muted;
      video.src = src;
      video.preload = "metadata";
      this.viewer.container.appendChild(video);
      return video;
    }
    __videoLoadPromise(video) {
      return new Promise((resolve, reject) => {
        const onLoaded = () => {
          if (this.video && video.duration === this.video.duration) {
            resolve(this.__videoBufferPromise(video, this.video.currentTime));
          } else {
            resolve();
          }
          video.removeEventListener("loadedmetadata", onLoaded);
        };
        const onError = (err) => {
          reject(err);
          video.removeEventListener("error", onError);
        };
        video.addEventListener("loadedmetadata", onLoaded);
        video.addEventListener("error", onError);
      });
    }
    __videoBufferPromise(video, currentTime) {
      return new Promise((resolve) => {
        function onBuffer() {
          const buffer = video.buffered;
          for (let i = 0, l = buffer.length; i < l; i++) {
            if (buffer.start(i) <= video.currentTime && buffer.end(i) >= video.currentTime) {
              video.pause();
              video.removeEventListener("buffer", onBuffer);
              video.removeEventListener("progress", onBuffer);
              resolve();
              break;
            }
          }
        }
        video.currentTime = Math.min(currentTime + 2e3, video.duration);
        video.muted = true;
        video.addEventListener("buffer", onBuffer);
        video.addEventListener("progress", onBuffer);
        video.play();
      });
    }
  };
  AbstractVideoAdapter.supportsDownload = false;
  AbstractVideoAdapter.supportsOverlay = false;

  // src/EquirectangularVideoAdapter.ts
  var getConfig = import_core2.utils.getConfigParser(
    {
      resolution: 64,
      autoplay: false,
      muted: false,
      blur: false
    },
    {
      resolution: (resolution) => {
        if (!resolution || !import_three2.MathUtils.isPowerOfTwo(resolution)) {
          throw new import_core2.PSVError("EquirectangularTilesAdapter resolution must be power of two");
        }
        return resolution;
      }
    }
  );
  var EquirectangularVideoAdapter = class extends AbstractVideoAdapter {
    constructor(viewer, config) {
      super(viewer);
      this.config = getConfig(config);
      this.SPHERE_SEGMENTS = this.config.resolution;
      this.SPHERE_HORIZONTAL_SEGMENTS = this.SPHERE_SEGMENTS / 2;
    }
    loadTexture(panorama) {
      return super.loadTexture(panorama).then(({ texture }) => {
        const video = texture.image;
        const panoData = {
          fullWidth: video.videoWidth,
          fullHeight: video.videoHeight,
          croppedWidth: video.videoWidth,
          croppedHeight: video.videoHeight,
          croppedX: 0,
          croppedY: 0,
          poseHeading: 0,
          posePitch: 0,
          poseRoll: 0
        };
        return { panorama, texture, panoData };
      });
    }
    createMesh(scale = 1) {
      const geometry = new import_three2.SphereGeometry(
        import_core2.CONSTANTS.SPHERE_RADIUS * scale,
        this.SPHERE_SEGMENTS,
        this.SPHERE_HORIZONTAL_SEGMENTS,
        -Math.PI / 2
      ).scale(-1, 1, 1);
      const material = new import_three2.MeshBasicMaterial();
      return new import_three2.Mesh(geometry, material);
    }
    setTexture(mesh, textureData) {
      mesh.material.map?.dispose();
      mesh.material.map = textureData.texture;
      this.switchVideo(textureData.texture);
    }
  };
  EquirectangularVideoAdapter.id = "equirectangular-video";
  __copyProps(__defProp(exports, "__esModule", { value: true }), src_exports);

}));//# sourceMappingURL=index.js.map