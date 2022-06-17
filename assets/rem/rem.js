;(function(win, doc) {
  'use strict';
  const options = {width: 375, dpr: win.devicePixelRatio};
  const html = doc.documentElement,
    width = html.getAttribute('data-width') || options.width,
    dpr = html.getAttribute('data-dpr') || options.dpr,
    viewPort = doc.querySelector('meta[name="viewport"]'),
    rotate = win.onorientationchange ? 'orientationchange' : 'resize';

  // 设置html fontSize
  function setSize() {
    const winWidth = win.innerWidth || html.clientWidth;
    html.style.fontSize = 100 * winWidth / width + 'px';
  }

  // 设置 initial-scale
  function setScale() {
    setSize();
    const viewContent = viewPort.getAttribute('content');
    const reg = /initial-scale=(\d(.\d+)?)/i;
    const matchRes = viewContent.match(reg);
    const scale = 1 / parseInt(dpr);
    if (matchRes && matchRes[1] == scale) {
      return;
    }
    const newContent = viewContent.replace(reg, function (a, b) {
      return a.replace(/\d(.\d+)?/i, scale);
    });
    viewPort.setAttribute('content', newContent);
  }

  win.addEventListener(rotate, setSize);
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  requestAnimationFrame(setScale);
}(window, document));
