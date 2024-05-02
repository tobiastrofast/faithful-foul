const viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#container'),
    panorama: 'Idris_Equirecatangular.jpg',
    plugins: [
        [PhotoSphereViewer.MarkersPlugin, {
            defaultHoverScale: {amount: 1.1},
            markers: [
                {
                    id: 'neatbar',
                    position: { yaw: '2deg', pitch: '-3deg' },
                    image: 'drop-pin.png',
                    size: { width: 32, height: 32 },
                    scale: { 
                        // zoom-level of marker in relation to user zoom
                        zoom: [2,2], 
                        // zoom-level of marker in relation to pan angle
                        yaw: [1,1]},
                    opacity: 0.8,
                    tooltip: {
                        content: document.querySelector("#t1--content").innerText,
                        trigger: "click",
                        className: "t1--class",
                        },
                    // content: "<p>Hello World!</p>",
                },
                {
                    id: 'neatpad',
                    position: { yaw: '0deg', pitch: '-23deg' },
                    image: 'drop-pin.png',
                    size: { width: 32, height: 32 },
                    scale: { 
                        // zoom-level of marker in relation to user zoom
                        zoom: [2,2], 
                        // zoom-level of marker in relation to pan angle
                        yaw: [1,1]},
                    opacity: 0.8,
                    tooltip: {
                        content: document.querySelector("#t2--content").innerText,
                        trigger: "click",
                        className: "t1--class",
                        },
                    // content: "<p>Hello World!</p>",
                },
            ],


        }],

    ]
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.addEventListener('select-marker', ({ marker }) => {
    console.log(`Clicked on marker ${marker.id}`);

});






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