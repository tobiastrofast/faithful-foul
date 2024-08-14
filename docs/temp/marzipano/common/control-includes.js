const titleBarControls = document.querySelector('#title-bar-controls');
titleBarControls.innerHTML = `<a href="javascript:void(0)" id="autorotateToggle">
  <img class="icon off" src="../common/img/play-liu-white.svg">
  <img class="icon on" src="../common/img/pause-liu-white.svg">
</a>

<a href="javascript:void(0)" id="fullscreenToggle">
  <img class="icon off" src="../common/img/fullscreen-liu.svg">
  <img class="icon on" src="../common/img/close-liu-white.svg">
</a>

<a href="javascript:void(0)" id="sceneListToggle">
  <h2 class="sceneListTitle">Välj vy</h2>
  <img class="icon off" src="../common/img/collapse-liu.svg">
  <img class="icon on" src="../common/img/expand-liu.svg">
</a>`;

const viewControlWrapper = document.querySelector('#view-control-wrapper');
viewControlWrapper.innerHTML = `<a href="javascript:void(0)" id="viewUp" class="viewControlButton viewControlButton-1">
  <img class="icon" src="../common/img/up-liu.svg">
</a>
<a href="javascript:void(0)" id="viewDown" class="viewControlButton viewControlButton-2">
  <img class="icon" src="../common/img/down-liu.svg">
</a>
<a href="javascript:void(0)" id="viewLeft" class="viewControlButton viewControlButton-3">
  <img class="icon" src="../common/img/left-liu.svg">
</a>
<a href="javascript:void(0)" id="viewRight" class="viewControlButton viewControlButton-4">
  <img class="icon" src="../common/img/right-liu.svg">
</a>
<a href="javascript:void(0)" id="viewIn" class="viewControlButton viewControlButton-5">
  <img class="icon" src="../common/img/plus-liu.svg">
</a>
<a href="javascript:void(0)" id="viewOut" class="viewControlButton viewControlButton-6">
  <img class="icon" src="../common/img/minus-liu.svg">
</a>`;

const titleBarScene = document.querySelector('#titleBar .sceneName');
const titleBarRoomName = roomData.room;
