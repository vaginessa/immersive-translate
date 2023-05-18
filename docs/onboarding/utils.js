function isMobile() {
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
}
function isSafari() {
  var userAgentString = navigator.userAgent;
  // Detect Chrome
  var chromeAgent = userAgentString.indexOf("Chrome") > -1;
  // Detect Safari
  var safariAgent = userAgentString.indexOf("Safari") > -1;
  // Discard Safari since it also matches Chrome
  if ((chromeAgent) && (safariAgent)) safariAgent = false;
  return safariAgent;
}
function isFirefox() {
  var userAgentString = navigator.userAgent;
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
  return firefoxAgent;
}