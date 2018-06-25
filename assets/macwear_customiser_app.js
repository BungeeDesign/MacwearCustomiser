// Macwear Customiser For Shopify
// Version 1.0 - Property of Bungee Design Limtied
// Built with ❤ by Bungee Design
// Project Manage Via MacwearCustomiser Git Repo

//Temp Notes:
// All console logs will be reomved once in Production Release
// Add in Google Drive, One Drive and Dropbox support for image upload

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

    var switchTeeImage = document.querySelector(".switchTeeImage");
    switchTeeImage.addEventListener("click", teeToggle);

    var switchTeeText = document.querySelector(".switchTeeText");
    switchTeeText.addEventListener("click", teeToggle);

    var nextBtn = document.querySelector(".mcNext");
    nextBtn.addEventListener("click", typeScreenTrigger);

    var prevBtn = document.querySelector(".mcPrevious");
    prevBtn.addEventListener("click", locationsScreenBack);    

    var imageLogoBtn = document.querySelector(".imageEmbroidery");
    imageLogoBtn.addEventListener("click", imageLogoEmrboidery);

    var textBtn = document.querySelector(".textEmbroidery");
    textBtn.addEventListener("click", textEmrboidery);

    var uploadImageBtn = document.querySelector(".uploadImage");
    uploadImageBtn.addEventListener("click", imageUpload);

    //File Change Event
    var formUploadInput = document.querySelector("#custom_photo");
    formUploadInput.addEventListener('change', imageUploadProcessing, false);
    
    


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
var selectionMade = false;
function locationSelect() {
    //Add Active State to Selection Map Points
    this.classList.toggle("mpActive");

    //Set selection var to true
    selectionMade = true;
    nextScreenCheck();
}

// Switch to back T-Shirt
function teeToggle() {
    console.log("SwitchTee");
    //Add Rotate Icon State
    this.classList.toggle("switchIconRotate");

    //Add Rotations States

    var frontTee = document.querySelector(".frontTeeContainer");
    var backTee = document.querySelector(".backTeeContainer");
    var frontTeeImage = document.querySelector(".frontTeeContainerImage");
    var backTeeImage = document.querySelector(".backTeeContainerImage");
    var frontTeeText = document.querySelector(".frontTeeContainerText");
    var backTeeText = document.querySelector(".backTeeContainerText");

    frontTee.classList.toggle("frontRotate");
    backTee.classList.toggle("backRotate");
    frontTeeImage.classList.toggle("frontRotate");
    backTeeImage.classList.toggle("backRotate");
    frontTeeText.classList.toggle("frontRotate");
    backTeeText.classList.toggle("backRotate");

    //Toggle Back Map Selection Points
    var lmFront = document.querySelector(".locationMap");
    var lmBack = document.querySelector(".locationMapBack");
    
    lmFront.classList.toggle("locationMapHidden");
    lmBack.classList.toggle("locationMapBackActive");

}

// Next Screen - Text Or Embroidery

function nextScreenCheck() {
    var nextBtnCheck = document.querySelector(".mcNext");
    if (selectionMade == true) {
        nextBtnCheck.classList.add("mcNextActive");
    }
}

// Embroidery Type Screen Move / Trigger
function typeScreenTrigger() {
    //Add Active Move Screen State to mcEditor
    var mcLocations = document.querySelector(".mcEditorLocations");
    mcLocations.classList.add("mcEditorLocationsMove");

    //Previous Button Active
    var prevBtnCheck = document.querySelector(".mcPrevious");
    prevBtnCheck.classList.add("mcPreviousActive");

    //Ativate Embroidery Type View
    var mcType = document.querySelector(".mcEditorType");
    mcType.classList.add("mcTypeActive");

    //Activate Type Sequence
    var cTitle = document.querySelector(".c");
    cTitle.classList.add("cActive");

    //Add remove b title
    var bTitle = document.querySelector(".b");
    bTitle.classList.add("bRemoveActive");
}

// First Screen Embroidery Locations Tirgger Back
function locationsScreenBack() {
    //Add Active Move Screen State to mcEditor
    var mcLocations = document.querySelector(".mcEditorLocations");
    mcLocations.classList.remove("mcEditorLocationsMove");

    //Previous Button Active
    var prevBtnCheck = document.querySelector(".mcPrevious");
    prevBtnCheck.classList.remove("mcPreviousActive");

    //Remove Ativate Embroidery Type View
    var mcType = document.querySelector(".mcEditorType");
    mcType.classList.remove("mcTypeActive");

    //Remove Activate of C Title
    var cTitle = document.querySelector(".c");
    cTitle.classList.remove("cActive");

    //Remove b bRemoveActive class
    var bTitle = document.querySelector(".b");
    bTitle.classList.remove("bRemoveActive");

    var dTitle = document.querySelector(".d");
    dTitle.classList.remove("dActive");




}



// Image/Logo Embroidery
function imageLogoEmrboidery() {

    //Add Image Upload Title Seqeunce
    var dTitle = document.querySelector(".d");
    dTitle.classList.add("dActive");

    //Remove Activate of C Title
    var cTitle = document.querySelector(".c");
    cTitle.classList.remove("cActive");
    
    //Add Image + Text Button Move State Class
    this.classList.add("imageEmbroideryMove");
    textBtn = document.querySelector(".textEmbroidery");
    textBtn.classList.add("textEmbroideryMove");

    //Add Image Edit Active State
    var imgEdit = document.querySelector(".imageEdit");
    imgEdit.classList.add("ieActive");




}


function imageUpload() {
    var formUploadInput = document.querySelector("#custom_photo");
    formUploadInput.click();

}

function imageUploadProcessing(evt) {
     //Get Uploaded Image Data

     var files = evt.target.files; // FileList object

     // Loop through the FileList and render image files as thumbnails.
     for (var i = 0, f; f = files[i]; i++) {
 
       // Only process image files.
       if (!f.type.match('image.*')) {
         continue;
       }
 
       var reader = new FileReader();
 
       // Closure to capture the file information.
       reader.onload = (function(theFile) {
         return function(e) {
           // Render thumbnail.
           
            // Conditon For Selected Positions

            // Map Positions 
            var ct = document.querySelector(".centerTee");
            var lb = document.querySelector(".leftBreast");
            var rb = document.querySelector(".rightBreast");
            var rs = document.querySelector(".rightShoulder");
            var ls = document.querySelector(".leftShoulder");
            var ctb = document.querySelector(".centerTeeBack");

            if (ct.classList.contains("mpActive")) {
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontCenter').insertBefore(span, null);
            }  

            if (lb.classList.contains("mpActive")) {
                var span2 = document.createElement('span');
                span2.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontLeftBreast').insertBefore(span2, null);
            } 
            
            if (rb.classList.contains("mpActive")) {
                var span3 = document.createElement('span');
                span3.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontRightBreast').insertBefore(span3, null);
            } 
            
            if (rs.classList.contains("mpActive")) {
                var span4 = document.createElement('span');
                span4.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontRightShoulder').insertBefore(span4, null);
            } 
            
            if (ls.classList.contains("mpActive")) {
                var span5 = document.createElement('span');
                span5.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontLeftShoulder').insertBefore(span5, null);
            } 
            
            if (ctb.classList.contains("mpActive")) {
                var span6 = document.createElement('span');
                span6.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('#mcImgFrontCenterTeeBack').insertBefore(span6, null);
            }
         };
       })(f);
 
       // Read in the image file as a data URL.
       reader.readAsDataURL(f);
     }
}


// Text Embroidery
function textEmrboidery() {

    //Add Image + Text Button Move State Class
    this.classList.add("textEmbroideryMove");
    imageBtn = document.querySelector(".imageEmbroidery");
    imageBtn.classList.add("imageEmbroideryMove");

    //Add Text Edit Active State
    var txtEdit = document.querySelector(".textEdit");
    txtEdit.classList.add("teActive");


}