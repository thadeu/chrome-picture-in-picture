document.addEventListener(
  "DOMContentLoaded",
  function() {
    var turnOn = document.querySelector(".turn-on");
    var turnOff = document.querySelector(".turn-off");

    turnOn.addEventListener(
      "click",
      function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(
          tabs
        ) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "turn-on" });
        });
      },
      false
    );

    turnOff.addEventListener(
      "click",
      function() {
        chrome.tabs.query({ currentWindow: true }, function(tabs) {
          tabs.forEach(tab => {
            console.log(tab);
            chrome.tabs.sendMessage(tab.id, { action: "turn-off" });
          });
        });
      },
      false
    );
  },
  false
);
