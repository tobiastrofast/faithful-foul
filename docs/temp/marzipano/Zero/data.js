// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'Zenit',
  room:'Zero',
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
      "id": "0-auditorium",
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
        "yaw": -0.10121612019002058,
        "pitch": 0.18725418250338954,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.01163879420111158,
          "pitch": 0.12377316936272464,
          "rotation": 0,
          "target": "1-podium"
        }
      ],
      "infoHotspots": [],
      "permHotspots": [
        {
          "yaw": 0,
          "pitch": -0.3,
          "title": roomData.room + " (" + roomData.building + ", " + roomData.campus + ")",
          "text": "Zero är en öppen yta med flexibel möblering för upp till 60 personer. Här finns display, ljud- och ljusutrustning, scen med mera.",
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
        "yaw": -0.07785855399231068,
        "pitch": 0.13846259973840702,
        "fov": 1.446604494409654
      },
      "linkHotspots": [
        {
          "yaw": 0.16601584167950456,
          "pitch": 0.18443644353189192,
          "rotation": 0,
          "target": "0-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1,
          "pitch": 0.2,
          "title": "Kontrollpanel",
          "text": "Här kan du starta och styra rummets utrustning. Här finns och kablage för anslutning av dator."
        }
      ],
      "permHotspots": [ {
        "yaw": 0,
        "pitch": -0.3,
        "title": roomData.room + " (" + roomData.building + ", " + roomData.campus + ")",
        "text": "Zero är en öppen yta med flexibel möblering för upp till 60 personer. Här finns display, ljud- och ljusutrustning, scen med mera.",
      },]
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
