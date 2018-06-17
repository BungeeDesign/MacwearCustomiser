// Macwear Customiser For Shopify
// Version 1.0 - Property of Bungee Design Limtied
// Built with ❤ by Bungee Design
// Project Manage Via MacwearCustomiser Git Repo


// Make sure document has fully loaded ready for DOM Control when ready run init
window.onload = function () {
    init();
};


function init() {

    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", close);


}


//Global for close

var yesClick = "no";
var noClick = "no";


function close() {

    console.log("Close");

    var closeView = document.querySelector(".closeView");
    var mcContainer = document.querySelector(".macwearCustomiserContainer");
    var mcEditor = document.querySelector(".mcEditor");

    //Make Sure they want to close
    closeView.classList.add("cvActive");

    var yesBtn = document.querySelector(".yesBtn");
    yesBtn.addEventListener("click", yesClicked);

    var noBtn = document.querySelector(".noBtn");
    noBtn.addEventListener("click", noClicked);

// Closing Logic for Validation Termination and Init 
    if (yesClick === "yes") {

        mcContainer.classList.add("mcContainerClose");
        if (mcContainer.classList.contains("mcContainerClose")) {
            setTimeout(function() {
                mcContainer.classList.add("mcContainerCloseDisplay");
            }, 1000);
        } else {
            mcContainer.classList.add("mcContainerClose");
        }

        mcEditor.classList.add("mcEditorClose");
        noClick = "no";

    } else if (noClick === "yes") {
        console.log("no");
        closeView.classList.remove("cvActive");
        noClick = "no";

    }

}


function yesClicked() {

    yesClick = "yes";
    close();

}

function noClicked() {

    noClick = "yes";
    close();

}