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
    document.querySelector("div.button").style.backgroundColor = "#dddddd";
    document.querySelector("div.button").style.border = "4px solid #fff";
    document.querySelector("div.button").style.color = "black";
    document.querySelector("div.box-button").style.border = "4px solid black";
    var alternate_color = "black";
  } else if (color == "black") {
    var alternate_color = "white";
    document.querySelector("div.button").style.backgroundColor = "#5f63689e";
    document.querySelector("div.button").style.borderColor = "#121212";
    document.querySelector("div.button").style.color = "white";
    document.querySelector("div.box-button").style.border = "4px solid #000";
  }
  var element = document.querySelector("c-wiz.SSPGKf.p2ZbV");
  if (element) {
    element.style.backgroundColor = alternate_color;
  }
  element = document.querySelector("#browser-extension-end-buttons");

  if (element) {
    element.style.color = color;
  }

  element = document.querySelector(".X3H8c.P9KVBf");
  if (element) {
    element.style.color = color;
  }
  element = document.querySelector(".Sdwpn.P9KVBf");
  if (element) {
    element.style.color = color;
  }

  localStorage.setItem("color_meet", alternate_color);
}
