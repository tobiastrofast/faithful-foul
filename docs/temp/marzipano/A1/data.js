// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'A-huset',
  room:'A1',
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
      "id": "0-entrdrr",
      "name": "Entrédörr",
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
        "yaw": 0.7201709107705412,
        "pitch": 0.30156566048205313,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15,
          "pitch": 0.15,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": 1.2,
          "pitch": -0.13,
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
        "yaw": -0.03720639310397367,
        "pitch": 0.3479521489618538,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0473820000561318,
          "pitch": -0.028775108254826876,
          "rotation": 0,
          "target": "2-auditorium"
        },
        {
          "yaw": 1.3930866461090616,
          "pitch": 0.3038110799557998,
          "rotation": 0,
          "target": "0-entrdrr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08,
          "pitch": -0.25,
          "title": "Podium-kamera",
          "text": texter.kameror.kamera_podium
        },
        {
          "yaw": -3.08,
          "pitch": -1.15,
          "title": "Auditorium-kamera",
          "text": texter.kameror.kamera_auditorium
        },
        {
          "yaw": -0.98,
          "pitch": 0.48,
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
          "yaw": 0.05,
          "pitch": 0.65,
          "title": "Kontrollpanel",
          "text": texter.kontrollpanel_touch
        },
        {
          "yaw": -0.27,
          "pitch": 0.52,
          "title": "Dokumentkamera",
          "text": texter.dokumentkamera
        },
      {
          "yaw": 0.63,
          "pitch": 0.3,
          "title": "Deltagarskärm",
          "text": texter.deltagarskarm
        },
        {
          "yaw": 0.25,
          "pitch": 0.4,
          "title": "Touch-skärm",
          "text": texter.touchskarm
        },
        {
          "yaw": 0.95,
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
        "yaw": -0.03848937217654047,
        "pitch": 0.24915092147887208,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.038489397431728634,
          "pitch": 0.26555833597255685,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": -0.6359853742002528,
          "pitch": 0.26907658721001937,
          "rotation": 0,
          "target": "0-entrdrr"
        }
      ],
      "infoHotspots": [],
      "permHotspots": [],
    }
  ],
  "name": "Linköpings Universitet - Campus Valla - A1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};