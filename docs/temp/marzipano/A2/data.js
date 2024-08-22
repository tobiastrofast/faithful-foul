// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  'campus':' Campus Valla',
  'building':'A-huset',
  'room':'A2',
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
      "id": "0-entredrr",
      "name": "Entredörr",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.6179570639163074,
        "pitch": 0.2162171789845324,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18203834292966725,
          "pitch": 0.2148300515016075,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": 1.03,
          "pitch": -0.2,
          "rotation": 0,
          "target": "2-auditorium"
        }
      ],
      "infoHotspots": [],
      "permHotspots": [
        {
          "yaw": 0.4,
          "pitch": -0.1,
          "title": roomData.room + " (" + roomData.building + ", " + roomData.campus + ")",
          "text": texter.salstext.gradang_hybrid_zoom,
        },
      ]
    },
    {
      "id": "1-podium",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.04168739227233509,
        "pitch": 0.24342355010036343,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05397436560374125,
          "pitch": -0.09007275763235967,
          "rotation": 0,
          "target": "2-auditorium"
        },
        {
          "yaw": 1.3576999749497158,
          "pitch": 0.3137137178932843,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1,
          "pitch": -0.25,
          "title": "Podium-kamera",
          "text": texter.kameror.kamera_podium
        },
        {
          "yaw": -3.28,
          "pitch": -0.93,
          "title": "Auditorium-kamera",
          "text": texter.kameror.kamera_auditorium
        },
        {
          "yaw": -0.93,
          "pitch": 0.44,
          "title": "Mikrofoner",
          "text": texter.mikrofoner.mic_fast
        },
        {
          "yaw": -0.8,
          "pitch": 0.44,
          "title": "Kastmikrofon",
          "text": texter.mikrofoner.mic_kast
        },
        {
          "yaw": -0.6,
          "pitch": 0.42,
          "title": "Dokumentkamera",
          "text": texter.dokumentkamera
        },
        {
          "yaw": 0.05,
          "pitch": 0.65,
          "title": "Kontrollpanel",
          "text": texter.kontrollpanel_touch
        },
      {
          "yaw": 0.60,
          "pitch": 0.35,
          "title": "Deltagarskärm",
          "text": texter.deltagarskarm
        },
        {
          "yaw": 0.18,
          "pitch": 0.42,
          "title": "Touch-skärm",
          "text": texter.touchskarm
        },
        {
          "yaw": 0.86,
          "pitch": 0.46,
          "title": "Kablar för anslutning",
          "text": texter.kablage_hybrid
        }

      ],
      "permHotspots": [],
    },
    {
      "id": "2-auditorium",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.0423250311649106,
        "pitch": 0.18901104388051593,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.038562676158438336,
          "pitch": 0.25817852482998305,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": -0.3,
          "pitch": 0.23,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [],
      "permHotspots":[]
    }
  ],
  "name": pageTitle,
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
