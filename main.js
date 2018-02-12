window.onload = () => {
  var url = new URL(location.href);
  var urlFlash = url.searchParams.get('urlFlash');
  console.log(urlFlash);
  var emb = document.getElementsByTagName("embed")[0];
  emb.src=urlFlash;
};
