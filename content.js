let currentUrl = location.href;
let btn;

function onUrlChange() {
  // Match meeting URLs like:
  // https://meet.google.com/abc-defg-hij
  if (
    /https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}/.test(
      location.href,
    )
  ) {
    injectButton();
  }
}

function injectButton() {
  if (document.getElementById("my-meet-btn")) return;

  const style = document.createElement("style");

  style.textContent = `
    .box-button {
      cursor: pointer;
      border: 4px solid black;
      background-color: gray;
      padding-bottom: 10px;
      transition: 0.1s ease-in-out;
      user-select: none;
    }

    .button {
      background-color: #dddddd;
      border: 4px solid #fff;
      padding: 3px 8px;
    }

    .button span {
      font-size: 1.2em;
      letter-spacing: 1px;
    }

    .box-button:active {
      padding: 0;
      margin-bottom: 10px;
      transform: translateY(10px);
    }
`;

  document.head.appendChild(style);

  const boxButton = document.createElement("div");
  boxButton.className = "box-button";

  const button = document.createElement("div");
  button.className = "button";

  const span = document.createElement("span");
  span.textContent = "Toggle Theme";

  button.appendChild(span);
  boxButton.appendChild(button);

  // document.body.appendChild(boxButton);

  boxButton.style.position = "fixed";
  boxButton.style.top = "20px";
  boxButton.style.right = "50%";
  boxButton.style.zIndex = "999999";

  if (
    document.documentElement.style.colorScheme == null ||
    !document.documentElement.style.colorScheme ||
    document.documentElement.style.colorScheme == "light" ||
    !localStorage.getItem("color_meet")
  ) {
    localStorage.setItem("color_meet", "white");
  } else {
    localStorage.setItem("color_meet", "black");
  }

  boxButton.onclick = () => {
    var col = localStorage.getItem("color_meet");

    color_toggle(col);
  };

  document.body.appendChild(boxButton);
}

new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    onUrlChange();
  }
}).observe(document, {
  subtree: true,
  childList: true,
});

onUrlChange();

function color_toggle(color) {
  if (color == "white") {
    var alternate_color = "black";
    // button appreance change
    document.querySelector("div.button").style.backgroundColor = "#dddddd";
    document.querySelector("div.button").style.border = "4px solid #fff";
    document.querySelector("div.button").style.color = "black";
    document.querySelector("div.box-button").style.border = "4px solid black";

    // permission required mic, speaker, camera: before
    document
      .querySelectorAll(
        "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-SfQLQb-suEOdc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.lQq6Xc.JJF7Md.nAzhfb.MdzDJe.JJF7Md.nAzhfb",
      )
      .forEach((element) => {
        element.style.backgroundColor = color;
      });

    // permission required appreance : before
    element = document.querySelector(
      "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-SfQLQb-suEOdc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.JJF7Md.nAzhfb.l9bjJd",
    );
    if (element) {
      element.style.backgroundColor = color;
    }
    element = document.querySelector(
      "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.JJF7Md.nAzhfb.l9bjJd",
    );
    if (element) {
      element.style.backgroundColor = color;
    }
  } else if (color == "black") {
    var alternate_color = "white";

    // button appreance change
    document.querySelector("div.button").style.backgroundColor = "#5f63689e";
    document.querySelector("div.button").style.borderColor = "#121212";
    document.querySelector("div.button").style.color = "white";
    document.querySelector("div.box-button").style.border = "4px solid #000";

    // permission required mic, speaker, camera: before
    document
      .querySelectorAll(
        "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-SfQLQb-suEOdc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.lQq6Xc.JJF7Md.nAzhfb.MdzDJe.JJF7Md.nAzhfb",
      )
      .forEach((element) => {
        element.style.backgroundColor = "";
      });

    // permission required appreance : before
    element = document.querySelector(
      "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-SfQLQb-suEOdc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.JJF7Md.nAzhfb.l9bjJd",
    );
    if (element) {
      element.style.backgroundColor = "";
    }
    element = document.querySelector(
      "button.vNWS4-LgbsSe.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd.vNWS4-LgbsSe-OWXEXe-Bz112c-M1Soyc.vNWS4-LgbsSe-OWXEXe-Bz112c-j4gsHd-J42Xof-M1Soyc.vNWS4-LgbsSe-OWXEXe-dgl2Hf.vNWS4-LgbsSe-OWXEXe-zcdHbf.XpeoU.JJF7Md.nAzhfb.l9bjJd",
    );
    if (element) {
      element.style.backgroundColor = "";
    }
  }

  // background of screen overall
  var element = document.querySelector("c-wiz.SSPGKf.p2ZbV");
  if (element) {
    element.style.backgroundColor = alternate_color;
  }

  // message, tools, host control, bottom right: after
  element = document.querySelector("#browser-extension-end-buttons");
  if (element) {
    element.style.color = color;
  }

  // time, meeting id, infobox, top left : after
  element = document.querySelector(".X3H8c.P9KVBf");
  if (element) {
    element.style.color = color;
  }

  // central bottom meeting control : after
  element = document.querySelector(".Sdwpn.P9KVBf");
  if (element) {
    element.style.color = color;
  }

  // email top left: before
  element = document.querySelector(".ASy21.Duq0Bf");
  if (element) {
    element.style.color = color;
  }

  // 'Switch account' top left: before
  element = document.querySelector("a.Kx3qp.IOxzuf");
  if (element) {
    element.style.color = color;
  }

  // 'Ready to join?' : before
  element = document.querySelector("div.u6vdEc");
  if (element) {
    element.style.color = color;
  }

  // 'No one else is here' : before
  element = document.querySelector("div.tJifFd");
  if (element) {
    element.style.color = color;
  }

  localStorage.setItem("color_meet", alternate_color);
}
