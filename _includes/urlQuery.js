(function(window, document, undefined){
  // code that should be taken care of right away
  window.onload = init;
  function init(){
    try {
      var hashParams = window.location.href.substr(1).split('?');
      hashParams = hashParams[1].split('&');
      var p = hashParams[0].split('=');
      document.getElementById('query').value = p[1];
    }
    catch(err) {
    }
  }
})(window, document, undefined);