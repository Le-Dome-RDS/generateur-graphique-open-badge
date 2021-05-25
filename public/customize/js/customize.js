class CustomBadge {
  badgeId = null;
  svgContent = "";
  svgObj = null;
  layers = {};
  defaultFont = {
    family: "Montserrat, Arial",
    size: "12",
    anchor: "middle",
    "dominant-baseline": "auto",
    leading: "1.5em",
    fill: "currentColor",
  };

  constructor(id, url, elementId) {
    return new Promise((successCallback, failureCallback) => {
      this.badgeId = id;
      var instance = this;
      fetch("./models/models.json")
        .then((response) => response.json())
        .then((models) => {
          const layers = models.filter((m) => m.id === instance.badgeId);
          if (layers.length !== 1) {
            throw new Error("cannot find a unique layers model with this id");
          } else {
            instance.layers = layers[0];
            this.fetchSvg(url, (svgContent) => {
              var draw = SVG()
                .size(400, 400)
                .addTo("#" + elementId);
              this.svgContent = svgContent;
              this.svgObj = draw.svg(instance.svgContent);
              this.refresh();
              successCallback(this);
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching model:", error);
        });
    });
  }
  initialize() {
    for (var lKey in this.layers) {
      if (lKey !== "id" && this.layers.hasOwnProperty(lKey)) {
        // clean inner colors
        var layer = this.selectLayer(lKey);
        if (this.layers[lKey].customFill) {
          layer.each(function (i, children) {
            this.fill("currentColor");
          }, true);
        }
        if (this.layers[lKey].customStroke) {
          layer.each(function (i, children) {
            this.stroke("currentColor");
          }, true);
        }
        // apply params
        const l = this.selectLayer(lKey);
        if (this.layers[lKey].color) {
          this.setColor(lKey, this.layers[lKey].color);
        }
        if (this.layers[lKey].size) {
          //  this.setSize(lKey, this.layers[lKey].size.w);
          this.setSize(lKey, l.width());
        }
        if (this.layers[lKey].position) {
          this.setPosition(
            lKey,
            // this.layers[lKey].position.x,
            // this.layers[lKey].position.y
            l.cx(),
            l.cy()
          );
        }
        // default text
        if (this.layers[lKey].defaultText) {
          this.setText(lKey, [this.layers[lKey].defaultText], {});
        }
      }
    }
  }
  clear(layerId) {
    var elementId = this.layers[layerId].id;
    var layer = SVG(document.getElementById(elementId));
    layer.clear();
  }
  setText(layerId, captions, params) {
    var layerFont = this.layers[layerId].font;
    var layerPosition = this.layers[layerId].position;
    var layerPath = this.layers[layerId].path;
    var layerPathId = this.layers[layerId].pathId;
    var fontParams = { ...this.defaultFont, ...layerFont, ...params };
    var textLayerId = this.layers[layerId].id;
    var title = SVG(document.getElementById(textLayerId));
    var newText = title
      .clear()
      .text(function (add) {
        var isFirstLine = true;
        for (var i = 0; i < captions.length; i++) {
          var line = add.tspan(captions[i]);
          if (isFirstLine === false) {
            line.newLine();
          }
          isFirstLine = false;
        }
      })
      .font(fontParams);
    if (layerPathId) {
      var path = SVG(document.getElementById(layerPathId));
      if (!path) {
        throw new Error("cannot find pathId in this model");
      } else {
        var d = path.attr("d");
        if (d) {
          newText = newText.path(d).attr("startOffset", "50%");
        }
      }
    } else if (layerPath) {
      newText = newText.path(layerPath).attr("startOffset", "50%");
    }
    newText.attr("x", layerPosition.x).attr("y", layerPosition.y);
    this.layers[layerId].font.size = fontParams.size;
    this.layers[layerId].font.captions = captions;
    this.refresh();
  }
  setColor(layerId, color) {
    this.layers[layerId].color = color;
    var elementId = this.layers[layerId].id;
    var element = SVG(document.getElementById(elementId));
    element.attr("color", color);
    this.refresh();
  }
  setPicto(layerId, url) {
    this.fetchSvg(url, (svgContent) => {
      this.setPictoContent(layerId, svgContent);
    });
  }
  setPictoContent(layerId, svgContent) {
    var authTypes = [
      "path",
      "polyline",
      "line",
      "circle",
      "rect",
      "ellipse",
      "polygon",
    ];
    var pictoLayerId = this.layers[layerId].id;
    var pictoPosition = this.layers[layerId].position;
    var pictoSize = this.layers[layerId].size;
    var picto = SVG(svgContent);
    var pictoEl = SVG(document.getElementById(pictoLayerId));
    pictoEl.clear();
    const scanEls = function (el, id, children) {
      if (authTypes.indexOf(el.type) !== -1) {
        if (el.css("fill") !== "none" && el.css("fill") !== "") {
          el.css("fill", "currentColor");
        }
        if (el.css("stroke") !== "none" && el.css("stroke") !== "") {
          el.css("stroke", "currentColor");
        }
        pictoEl.add(el);
      } else if (el.type === "g") {
        el.children().each(function (id, children) {
          scanEls(this, id, children);
        });
      }
    };
    if (picto.type === "svg") {
      picto.each(function (id, children) {
        scanEls(this, id, children);
      });
      picto
        .attr("width", null)
        .attr("height", null)
        .attr("x", null)
        .attr("y", null)
        .attr("transform", null);
    } else {
      pictoEl.put(picto);
    }
    pictoEl.size(pictoSize.w).center(pictoPosition.x, pictoPosition.y);
    this.refresh();
  }
  setPictoContentImage(layerId, imageSrc) {
    var pictoLayerId = this.layers[layerId].id;
    var pictoPosition = this.layers[layerId].position;
    var pictoSize = this.layers[layerId].size;
    var PictoSvg = SVG();
    var pictoImage = PictoSvg.image(imageSrc);
    pictoImage
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", 100)
      .attr("y", 100);
    var pictoEl = SVG(document.getElementById(pictoLayerId));
    pictoEl.clear();
    pictoEl.put(pictoImage);
    pictoEl.size(pictoSize.w).center(pictoPosition.x, pictoPosition.y);
    this.refresh();
  }
  changeSize(layerId, step) {
    var elementId = this.layers[layerId].id;
    var element = SVG(document.getElementById(elementId));
    var currentWidth = element.width();
    var newWidth =
      currentWidth + step > 1000
        ? 1000
        : Math.abs(Math.round(currentWidth + step));
    this.changePosition(layerId, -step/2, -step/2);
    //var newHeight = currentWidth + step > 1000 ? 1000 : currentWidth + step;
    this.setSize(layerId, newWidth);
  }
  setSize(layerId, newWidth) {
    var elementId = this.layers[layerId].id;
    var element = SVG(document.getElementById(elementId));
    var newElement = element.size(newWidth);
    this.layers[layerId].size = { w: newWidth, h: newElement.height() };
    this.refresh();
  }
  changePosition(layerId, stepX, stepY) {
    var elementId = this.layers[layerId].id;
    var element = SVG(document.getElementById(elementId));
    element.dmove(parseInt(stepX), parseInt(stepY));
    this.refresh();
  }
  setPosition(layerId, newX, newY) {
    var elementId = this.layers[layerId].id;
    var element = SVG(document.getElementById(elementId));
    element.center(parseInt(newX), parseInt(newY));
    this.layers[layerId].position = { x: newX, y: newY };
    this.refresh();
  }
  updateDlLinks() {
    // SVG
    var dataSvg = this.svgObj.svg();
    var svgBlob = new Blob([dataSvg], {
      type: "image/svg+xml;charset=utf-8",
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var link = document.getElementById("dl-link-svg");
    link.href = svgUrl;
    link.download = this.badgeId + ".svg";
  }
  saveAsPng(e) {
    saveSvgAsPng(this.svgObj.node, this.badgeId + ".png");
  }
  refresh() {
    this.updateDlLinks();
  }

  fetchSvg(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // instance.svgContent = this.responseXML.body.innerHTML;
        callback(this.response);
      } else {
        console.log("Error");
      }
    };
    xhr.onerror = function () {
      // There was a connection error of some sort
      console.log("Connection error");
    };
    xhr.open("GET", url, true);
    //xhr.responseType = "document";
    xhr.send();
  }

  analyze() {
    var svgParameters = {};
    for (var lKey in this.layers) {
      if (this.layers.hasOwnProperty(lKey)) {
        const l = this.selectLayer(lKey);
        svgParameters[lKey] = {
          id: this.layers[lKey].id,
          color: l.attr("color"),
          size: { w: l.width(), h: l.height() },
          position: { x: l.x(), y: l.y() },
        };
      }
    }
    console.log(svgParameters);
  }
  selectLayer(layerId) {
    var elementId = this.layers[layerId].id;
    return SVG(document.getElementById(elementId));
  }
}
