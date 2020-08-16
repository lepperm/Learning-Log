function UrlQuery(window, document, undefined){
  try {
    let hashParams = window.location.href.substr(1).split('?');
    hashParams = hashParams[1].split('=');
    let query = hashParams[1].split('&');
    //console.log("query: " + query[0]);

    const searchExists = document.getElementById("query");
    if (searchExists) {
      document.getElementById('query').value = query;
    }

    if (query === undefined || query.length == 0) {
      query = query.push("");
    }
    return query;
  }
  catch(err) {
    return [""];
  }
}