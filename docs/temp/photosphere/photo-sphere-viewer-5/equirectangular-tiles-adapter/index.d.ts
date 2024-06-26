import { PanoData, PanoDataProvider, EquirectangularAdapterConfig, AbstractAdapter, Viewer, TextureData } from '@photo-sphere-viewer/core';
import { Texture, Mesh, SphereGeometry, MeshBasicMaterial } from 'three';

/**
 * Configuration of a tiled panorama
 */
type EquirectangularTilesPanorama = {
    /**
     * low resolution panorama loaded before tiles
     */
    baseUrl?: string;
    /**
     * panoData configuration associated to low resolution panorama loaded before tiles
     */
    basePanoData?: PanoData | PanoDataProvider;
    /**
     * complete panorama width (height is always width/2)
     */
    width: number;
    /**
     * number of vertical tiles (must be a power of 2)
     */
    cols: number;
    /**
     * number of horizontal tiles (must be a power of 2)
     */
    rows: number;
    /**
     * function to build a tile url
     */
    tileUrl: (col: number, row: number) => string | null;
};
type EquirectangularTileLevel = {
    /**
     * Lower and upper zoom levels (0-100)
     */
    zoomRange: [number, number];
    /**
     * complete panorama width (height is always width/2)
     */
    width: number;
    /**
     * number of vertical tiles (must be a power of 2)
     */
    cols: number;
    /**
     * number of horizontal tiles (must be a power of 2)
     */
    rows: number;
};
/**
 * Configuration of a tiled panorama with multiple tiles configurations
 */
type EquirectangularMultiTilesPanorama = {
    /**
     * low resolution panorama loaded before tiles
     */
    baseUrl?: string;
    /**
     * panoData configuration associated to low resolution panorama loaded before tiles
     */
    basePanoData?: PanoData | PanoDataProvider;
    /**
     * Configuration of tiles by zoom level
     */
    levels: EquirectangularTileLevel[];
    /**
     * function to build a tile url
     */
    tileUrl: (col: number, row: number, level: number) => string | null;
};
type EquirectangularTilesAdapterConfig = EquirectangularAdapterConfig & {
    /**
     * shows a warning sign on tiles that cannot be loaded
     * @default true
     */
    showErrorTile?: boolean;
    /**
     * applies a blur effect to the low resolution panorama
     * @default true
     */
    baseBlur?: boolean;
};

type EquirectangularMesh = Mesh<SphereGeometry, MeshBasicMaterial[]>;
type EquirectangularTexture = TextureData<Texture, EquirectangularTilesPanorama | EquirectangularMultiTilesPanorama>;
/**
 * Adapter for tiled panoramas
 */
declare class EquirectangularTilesAdapter extends AbstractAdapter<EquirectangularTilesPanorama | EquirectangularMultiTilesPanorama, Texture> {
    static readonly id = "equirectangular-tiles";
    static readonly supportsDownload = false;
    static readonly supportsOverlay = false;
    private readonly NB_VERTICES;
    private readonly NB_GROUPS;
    private readonly config;
    private readonly state;
    private adapter;
    private readonly queue;
    private readonly loader?;
    constructor(viewer: Viewer, config: EquirectangularTilesAdapterConfig);
    destroy(): void;
    supportsTransition(panorama: EquirectangularTilesPanorama | EquirectangularMultiTilesPanorama): boolean;
    supportsPreload(panorama: EquirectangularTilesPanorama | EquirectangularMultiTilesPanorama): boolean;
    loadTexture(panorama: EquirectangularTilesPanorama | EquirectangularMultiTilesPanorama): Promise<EquirectangularTexture>;
    createMesh(scale?: number): EquirectangularMesh;
    /**
     * Applies the base texture and starts the loading of tiles
     */
    setTexture(mesh: EquirectangularMesh, textureData: EquirectangularTexture, transition: boolean): void;
    private __setTexture;
    setTextureOpacity(mesh: EquirectangularMesh, opacity: number): void;
    /**
     * @throws {@link PSVError} always
     */
    setOverlay(): void;
    disposeTexture(textureData: TextureData<Texture>): void;
    /**
     * Compute visible tiles and load them
     */
    private __refresh;
    /**
     * Loads tiles and change existing tiles priority
     */
    private __loadTiles;
    /**
     * Loads and draw a tile
     */
    private __loadTile;
    private __loadImage;
    /**
     * Applies a new texture to the faces
     */
    private __swapMaterial;
    /**
     * Clears loading queue, dispose all materials
     */
    private __cleanup;
}

export { EquirectangularMultiTilesPanorama, EquirectangularTileLevel, EquirectangularTilesAdapter, EquirectangularTilesAdapterConfig, EquirectangularTilesPanorama };
