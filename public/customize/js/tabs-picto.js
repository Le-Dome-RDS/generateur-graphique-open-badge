var tabsPicto = {
  // (A) INIT
  nav: null, // HTML tabs
  con: null, // HTML containers
  init: function () {
    // (A1) GET ALL TABS & SECTIONS
    tabsPicto.nav = document.getElementsByClassName("tabNavPicto");
    tabsPicto.con = document.getElementsByClassName("tabConPicto");

    // (A2) INIT TABS
    for (let i = 0; i < tabsPicto.nav.length; i++) {
      // GET ALL ITEMS & SECTIONS
      let allTabs = tabsPicto.nav[i].getElementsByClassName("tabItemPicto"),
        allSecs = tabsPicto.con[i].getElementsByClassName("tabSecPicto");

      // ATTACH ONCLICK & SHOW FIRST TAB
      for (let j = 0; j < allTabs.length; j++) {
        allTabs[j].dataset.i = i;
        allTabs[j].dataset.j = j;
        allTabs[j].addEventListener("click", tabsPicto.show);
        if (j == 0) {
          allTabs[j].click();
        }
      }
    }
  },

  // (B) SHOW SELECTED TAB
  show: function () {
    // if (this.dataset.i === "0" && this.dataset.j === "1") {
    //     var pictoTabs = tabs.nav[1];
    // }
    // (B1) GET TAB ITEMS & SECTIONS
    let allTabs = tabsPicto.nav[this.dataset.i].getElementsByClassName("tabItemPicto"),
      thisCon = tabsPicto.con[this.dataset.i],
      allSecs = thisCon.getElementsByClassName("tabSecPicto");

    // (B2) UPDATE SELECTED TAB
    for (let i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.remove("active");
    }
    this.classList.add("active");

    // (B3) HIDE SECTIONS
    if (allSecs.length !== 0) {
      for (let j = 0; j < allSecs.length; j++) {
        allSecs[j].classList.remove("active");
      }
    }

    // (B4) "NORMAL TAB" - SHOW SELECTED SECTION
    if (this.dataset.url === undefined) {
      allSecs[this.dataset.j].classList.add("active");
    }

    // (B5) AJAX
    else {
      // AJAX "CACHED CONTENT"
      let aID = `tab-${this.dataset.i}-${this.dataset.j}`,
        aSec = document.getElementById(aID);

      // SHOW IF PREVIOUSLY LOADED
      if (aSec !== null) {
        aSec.classList.add("active");
      }

      // AJAX LOAD IF NOT
      else {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.dataset.url);
        xhr.onload = function () {
          let aSec = document.createElement("div");
          aSec.id = aID;
          aSec.classList.add("tabSecPicto");
          aSec.classList.add("active");
          aSec.innerHTML = this.response;
          thisCon.appendChild(aSec);
        };
        xhr.send();
      }
    }
  },
};
