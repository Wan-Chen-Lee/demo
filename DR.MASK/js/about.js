windows.onscroll = function() {
  var  headerMain = document.getElementById('headerMain');
  if(window.pageXOffset >= 10) {
    headerMain.classList.add('headerMain-bg');
  } else {
    headerMain.classList.remove('headerMain-bg');
  }
}

