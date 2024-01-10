document.addEventListener('DOMContentLoaded', function() {
    let heads = 0;
    let tails = 0;

    let flipBtn = document.getElementById('flip');
    let resetBtn = document.getElementById("reset");
    let displayText = document.getElementById("headsortails");

    flipBtn.addEventListener("click", function() {
        flipBtn.disabled = true;
        resetBtn.disabled = true;

        flipping();
    });

    resetBtn.addEventListener("click", function() {
        heads = 0;
        tails = 0;
        displayText.innerHTML = "Heads";
        updateStats();
    });

    function updateStats() {
        let headslbl = document.getElementById("heads");
        let tailslbl = document.getElementById("tails");

        headslbl.innerHTML = "Heads: " + heads;
        tailslbl.innerHTML = "Tails: " + tails;
        flipBtn.disabled = false;
        resetBtn.disabled = false;
    }

    function isHeads(text) {
        if (text == "Heads") {
            heads++;
            updateStats();
        } else {
            tails++;
            updateStats();
        }
    }
    
    function flipping() {
        for (let i = 0; i <= 50; i++) {
          setTimeout(function() {
            const result = Math.floor(Math.random() * 2) < 1 ? "Heads" : "Tails";
            displayText.innerHTML = result;
          }, Math.floor(Math.random() * 901) + 400);
        }
        setTimeout(function() {
            isHeads(displayText.textContent);
        }, 2000)  
    }
  });
  