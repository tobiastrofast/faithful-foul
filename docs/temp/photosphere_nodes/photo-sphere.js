// import { Viewer } from '@photo-sphere-viewer/core';
// import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
// import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
// import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const baseUrl = './assets/'

const viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#container'),
    navbar: [
        'zoom',
        'move',
        'caption',
        'fullscreen'
        ],
    plugins: [
        [PhotoSphereViewer.MarkersPlugin],
        [PhotoSphereViewer.VirtualTourPlugin, {
            positionMode: 'manual'
        }]

    ]
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

const navMarker = {
    id: 'marker-1',
    image: baseUrl + 'nav-arrow45deg.png',
    size: {width: 32, height: 32},
    position: { textureX: 1500, textureY: 780 }
    };

virtualTour.setNodes([
    {
        id: '1',
        panorama: baseUrl + 'A1-01.jpg',
        name: 'Entre',
        links: [{ nodeId: '2', position: { textureX: 6000, textureY: 3600}}],
        // markers: [navMarker]

    },
    {
        id: '2',
        panorama: baseUrl + 'A1-02.jpg',
        name: 'Podium',
        links: [{ nodeId: '1', position: { textureX: 9000, textureY: 3600}}],
        position: { yaw: '0deg', pitch: '10deg'},
        // markers: [navMarker]
    }
    ], ['2'])






// let tooltip;

// function onMouseMove(e) {
//     if (!tooltip) {
//         tooltip = viewer.createTooltip({
//             content: '&copy; Damien Sorel',
//             left: e.clientX,
//             top: e.clientY,
//             position: 'top right',
//         });
//     } else {
//         tooltip.move({
//             left: e.clientX,
//             top: e.clientY,
//             position: 'top right',
//         });
//     }
// }

// function onMouseLeave() {
//     if (tooltip) {
//         tooltip.hide();
//         tooltip = null;
//     }
// }

// viewer.addEventListener('ready', () => {
//     viewer.parent.addEventListener('mousemove', onMouseMove);
//     viewer.parent.addEventListener('mouseleave', onMouseLeave);
// }, { once: true });