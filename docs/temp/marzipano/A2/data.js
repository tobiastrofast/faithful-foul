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
