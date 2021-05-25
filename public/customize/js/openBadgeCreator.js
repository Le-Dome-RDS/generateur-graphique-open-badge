window.OpenBadgeCreator = {
  ui: {
    pictoLevel: "main",
  },
  getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  getLayerId(id) {
    return this.layers[id] ? this.layers[id].id : null;
  },
  update(param, value) {
    this.ui[param] = value;
  },
};
