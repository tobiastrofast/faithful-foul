// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'A-huset',
  room:'A31',
}

const pageTitle = 'Linköpings Universitet - ' + roomData.campus + ' - ' + roomData.room;

// APP_DATA created by the Marzipano Tool. The data is used to create the scenes, hotspots and links.
// Each scene needs these arrays: linkHotspots, infoHotspots, permHotspots. //Tobias Trofast

// Empty array for reuse: 
// "linkHotspots": [],
// "infoHotspots": [],
// "permHotspots": [],

var APP_DATA = {
  "scenes": [
    {
      "id": "0-podium",
      "name": "Podium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.38239853273239355,
        "pitch": 0.37187098215448167,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": -0.16125856854504228,
          "pitch": 0.12617892536330721,
          "rotation": 0,
          "target": "1-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.37,
          "pitch": 0.42,
          "title": "Kontrollpanel",
          "text": texter.kontrollpanel_projektorpanel
        },
        {
          "yaw": 0.8,
          "pitch": 0.5,
          "title": "Kablar för anslutning",
          "text": texter.kablage_standard
        }
      ],
      "permHotspots": [
        {
          "yaw": 0.4,
          "pitch": -0.1,
          "title": roomData.room + " (" + roomData.building + ", " + roomData.campus + ")",
          "text": texter.salstext.plattsal_standard,
        },
      ]
    },
    {
      "id": "1-auditorium",
      "name": "Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0467151323953825,
        "pitch": 0.20439717104239286,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.3009855232479275,
          "pitch": 0.054005583735140306,
          "rotation": 0,
          "target": "0-podium"
        }
      ],
      "infoHotspots": [],
      "permHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
