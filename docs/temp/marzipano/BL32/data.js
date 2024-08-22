// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'B-huset',
  room:'BL32, Nobel',
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
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1761546776710059,
        "pitch": 0.21758492692529252,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.5465270522545254,
          "pitch": 0.2550520675178305,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": -0.8023638406608864,
          "pitch": -0.23259103059929842,
          "rotation": 0,
          "target": "2-auditorium"
        }
      ],
      "infoHotspots": [],
      "permHotspots": [
        {
          "yaw": -0.5,
          "pitch": -0.1,
          "title": roomData.room + "</br> (" + roomData.building + ", " + roomData.campus + ")",
          "text": texter.salstext.gradäng_hybrid_usb,
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
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.06715322307364424,
        "pitch": 0.36,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": -0.0524574228294572,
          "pitch": -0.23479039815246772,
          "rotation": 0,
          "target": "2-auditorium"
        },
        {
          "yaw": -1.494591639849908,
          "pitch": 0.4329486176215731,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05,
          "pitch": -0.35,
          "title": "Podium-kamera",
          "text": texter.kameror.kamera_podium
        },
        {
          "yaw": -2.45,
          "pitch": -0.98,
          "title": "Auditorium-kamera",
          "text": texter.kameror.kamera_auditorium
        },
        {
          "yaw": 0.7,
          "pitch": 0.5,
          "title": "Dokumentkamera",
          "text": texter.dokumentkamera
        },
        {
          "yaw": -0.08,
          "pitch": 0.65,
          "title": "Kontrollpanel",
          "text": texter.kontrollpanel_nozoom
        },
        {
          "yaw": 0.35,
          "pitch": 0.85,
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
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.053527730172122645,
        "pitch": 0.41669945152029086,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": -0.22217875522883368,
          "pitch": 0.4050603798054748,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": 0.43140933938039083,
          "pitch": 0.43106309532949005,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [],
      "permHotspots":[]
    }
  ],
  "name": "Campus Valla - B-huset - BL32, Nobel",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
