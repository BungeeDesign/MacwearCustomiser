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

    var customiseBtn = document.querySelector(".customiseBtn");
    customiseBtn.addEventListener("click", open);

    var mapPoint = document.querySelector(".centerTee");
    mapPoint.addEventListener("click", locationSelect);

    var mapPoint = document.querySelector(".centerTeeBack");
    mapPoint.addEventListener("click", locationSelect);

    var mapPoint = document.querySelector(".leftBreast");
    mapPoint.addEventListener("click", locationSelect);

    var mapPoint = document.querySelector(".rightBreast");
    mapPoint.addEventListener("click", locationSelect);

    var mapPoint = document.querySelector(".rightShoulder");
    mapPoint.addEventListener("click", locationSelect);

    var mapPoint = document.querySelector(".leftShoulder");
    mapPoint.addEventListener("click", locationSelect);

    var switchTee = document.querySelector(".switchTee");
    switchTee.addEventListener("click", teeToggle);

    
    


}

//Global for close

var yesClick = "no";
var noClick = "no";
var closeView = document.querySelector(".closeView");
var mcContainer = document.querySelector(".macwearCustomiserContainer");
var mcEditor = document.querySelector(".mcEditor");

function close() {

    console.log("Close");
    //Make Sure they want to close
    closeView = document.querySelector(".closeView");
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
        mcEditor = document.querySelector(".mcEditor");
        mcEditor.classList.add("mcEditorClose");

        closeView = document.querySelector(".closeView");
        closeView.classList.toggle("cvActive");
        yesClick = "no";

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



// Open

function open() {
    console.log("Open");
    mcContainer = document.querySelector(".macwearCustomiserContainer");
    mcPreloader = document.querySelector(".mcPreload");

    //Show Preloader
    mcPreloader.classList.add("preloaderActive");

    //Remove Close Classes
    setTimeout(function() {
        mcContainer.classList.remove("mcContainerCloseDisplay");
    }, 1000);

    setTimeout(function() {
        mcContainer.classList.remove("mcContainerClose");
    }, 2000);

    setTimeout(function() {
        mcPreloader.classList.remove("preloaderActive");
    }, 2500);



}


// Location Selection
function locationSelect() {
    //Add Active State to Selection Map Points
    this.classList.toggle("mpActive");
}

// Switch to back T-Shirt
function teeToggle() {
    console.log("SwitchTee");
    //Add Rotate Icon State
    this.classList.toggle("switchIconRotate");

    //Add Rotations States

    var frontTee = document.querySelector(".frontTeeContainer");
    var backTee = document.querySelector(".backTeeContainer");

    frontTee.classList.toggle("frontRotate");
    backTee.classList.toggle("backRotate");

    //Toggle Back Map Selection Points
    var lmFront = document.querySelector(".locationMap");
    var lmBack = document.querySelector(".locationMapBack");
    
    lmFront.classList.toggle("locationMapHidden");
    lmBack.classList.toggle("locationMapBackActive");




}