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
          "yaw": -0.21147000229216673,
          "pitch": 0.26169679920264066,
          "rotation": 0,
          "target": "1-podium"
        },
        {
          "yaw": 1.2076772358035424,
          "pitch": -0.11953149178850708,
          "rotation": 0,
          "target": "2-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01133737840386928,
          "pitch": 0.1550589928453192,
          "title": "Podium",
          "texter": ""
        },
        {
          "yaw": 1.2198633007851232,
          "pitch": -0.22173264315717134,
          "title": "Podium-kamera",
          "text": texter.cam_podium
        },
        {
          "yaw": 0.6945770412612688,
          "pitch": -0.2545749737595653,
          "title": "Projektor 1",
          "text": texter.projektor
        },
        {
          "yaw": 1.126599001680706,
          "pitch": -0.3542446725509052,
          "title": "Projektor 2",
          "text": texter.projektor
        },
        {
          "yaw": -0.4151656979656053,
          "pitch": -0.3015645443928463,
          "title": "Auditorie-kamera",
          "text": texter.cam_auditorium
        }
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
