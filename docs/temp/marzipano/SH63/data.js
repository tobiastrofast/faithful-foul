// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'Studenthuset',
  room:'SH63',
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
        "yaw": 0.45,
        "pitch": 0.35,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.5850789831143324,
          "pitch": 0.2712921140894231,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": -0.5707584951118072,
          "pitch": 0.10723213141391952,
          "rotation": 0,
          "target": "2-auditorium"
        }
      ],
      "infoHotspots": [{
        "yaw": 1.18,
        "pitch": 0.01,
        "title": "Kontrollpanel",
        "text": texter.kontrollpanel_nozoom
      },
      {
        "yaw": 1.3,
        "pitch": 0.5,
        "title": "Kablar för anslutning",
        "text": texter.kablage_standard
      }

    ],
      "permHotspots": [{
        "yaw": -0.3,
        "pitch": -0.1,
        "title": roomData.room + "</br> (" + roomData.building + ", " + roomData.campus + ")",
        "text": texter.salstext.plattsal_standard,
      },],
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
        "yaw": -0.09051046256282902,
        "pitch": 0.31648594225923077,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.08853249735937219,
          "pitch": 0.1130112568559607,
          "rotation": 0,
          "target": "2-auditorium"
        },
        {
          "yaw": -1.554847972792274,
          "pitch": 0.536063946902015,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1,
          "pitch": 0.1,
          "title": "Kontrollpanel",
          "text": texter.kontrollpanel_nozoom
        },
        {
          "yaw": -2.05,
          "pitch": 0.45,
          "title": "Kablar för anslutning",
          "text": texter.kablage_standard
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
        "yaw": 0.09342689820872607,
        "pitch": 0.39428417481008715,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.31349058405829666,
          "pitch": 0.0723137976862489,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": 0.6703340033056566,
          "pitch": 0.1620468196863296,
          "rotation": 0,
          "target": "0-entredrr"
        }
      ],
      "infoHotspots": [],
      "permHotspots": [],
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
