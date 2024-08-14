// roomData is used to generate the page title (const pageTitle), and is also used in the Marzipano viewer to crete the room name dynimically in index.js // Tobias Trofast
const roomData = {
  campus:' Campus Valla',
  building:'Studenthuset',
  room:'SH63',
}

const pageTitle = 'Linköpings Universitet - ' + roomData.campus + ' - ' + roomData.room;
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
        "yaw": -0.2627726197240605,
        "pitch": 0.3032990279984098,
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
      "infoHotspots": []
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
      "infoHotspots": []
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
      "infoHotspots": []
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
