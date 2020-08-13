function UrlQuery(window, document, undefined){
  try {
    let hashParams = window.location.href.substr(1).split('?');
    hashParams = hashParams[1].split('&');
    let p = hashParams[0].split('=');
    return document.getElementById('query').value = p[1];
  }
  catch(err) {
    return "";
  }
}