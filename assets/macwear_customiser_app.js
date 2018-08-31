// Macwear Customiser For Shopify
// Version 1.0 - Property of Bungee Design Limtied
// Built with ❤ by Bungee Design
// Project Manage Via MacwearCustomiser Git Repo

// Relase: v1.00
// All code is property of Bungee Design Limited 

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
    mapPoint.addEventListener("click", centerTee);

    var mapPoint = document.querySelector(".centerTeeBack");
    mapPoint.addEventListener("click", centerTeeBack);

    var mapPoint = document.querySelector(".topTeeBack");
    mapPoint.addEventListener("click", topTeeBack);

    var mapPoint = document.querySelector(".leftBreast");
    mapPoint.addEventListener("click", leftBreast);

    var mapPoint = document.querySelector(".rightBreast");
    mapPoint.addEventListener("click", rightBreast);

    var mapPoint = document.querySelector(".rightShoulder");
    mapPoint.addEventListener("click", rightShoulder);

    var mapPoint = document.querySelector(".leftShoulder");
    mapPoint.addEventListener("click", leftShoulder);

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

    //Legaccy
    var uploadImageBtn = document.querySelector(".uploadImage");
    uploadImageBtn.addEventListener("click", imageUpload);

    var imgUploadct = document.querySelector(".imageEmbroCenterTee");
    imgUploadct.addEventListener("click", imgUploadCenterTee);

    var imgUploadlb = document.querySelector(".imageEmbroLeftBreast");
    imgUploadlb.addEventListener("click", imgUploadLeftBreast);

    var imgUploadrb = document.querySelector(".imageEmbroRightBreast");
    imgUploadrb.addEventListener("click", imgUploadRightBreast);

    var imgUploadrs = document.querySelector(".imageEmbroRightShoulder");
    imgUploadrs.addEventListener("click", imgUploadRightShoulder);

    var imgUploadls = document.querySelector(".imageEmbroLeftShoulder");
    imgUploadls.addEventListener("click", imgUploadLeftShoulder);

    var imgUploadctb = document.querySelector(".imageEmbroCenterTeeBack");
    imgUploadctb.addEventListener("click", imgUploadCenterTeeBack);

    //var imgUploadttb = document.querySelector(".imageEmbroTopTeeBack");
    //imgUploadttb.addEventListener("click", imgUploadTopTeeBack);

    //Text

    var txtUploadct = document.querySelector(".textEmbroCenterTee");
    txtUploadct.addEventListener("click", txtUploadCenterTee);

    var txtUploadlb = document.querySelector(".textEmbroLeftBreast");
    txtUploadlb.addEventListener("click", txtUploadLeftBreast);

    var txtUploadrb = document.querySelector(".textEmbroRightBreast");
    txtUploadrb.addEventListener("click", txtUploadRightBreast);

    var txtUploadrs = document.querySelector(".textEmbroRightShoulder");
    txtUploadrs.addEventListener("click", txtUploadRightShoulder);

    var txtUploadls = document.querySelector(".textEmbroLeftShoulder");
    txtUploadls.addEventListener("click", txtUploadLeftShoulder);

    var txtUploadctb = document.querySelector(".textEmbroCenterTeeBack");
    txtUploadctb.addEventListener("click", txtUploadCenterTeeBack);

    var txtUploadttb = document.querySelector(".textEmbroTopTeeBack");
    txtUploadttb.addEventListener("click", txtUploadTopTeeBack);

    var txtConfirmCT = document.querySelector(".confirmCT");
    txtConfirmCT.addEventListener("click", confirmCT);

    var txtConfirmLB = document.querySelector(".confirmLB");
    txtConfirmLB.addEventListener("click", confirmLB);

    var txtConfirmRB = document.querySelector(".confirmRB");
    txtConfirmRB.addEventListener("click", confirmRB);

    var txtConfirmRS = document.querySelector(".confirmRS");
    txtConfirmRS.addEventListener("click", confirmRS);

    var txtConfirmLS = document.querySelector(".confirmLS");
    txtConfirmLS.addEventListener("click", confirmLS);

    var txtConfirmCTB = document.querySelector(".confirmCTB");
    txtConfirmCTB.addEventListener("click", confirmCTB);

    var txtConfirmTTB = document.querySelector(".confirmTTB");
    txtConfirmTTB.addEventListener("click", confirmTTB);


    //File Change Event
    //var formUploadInput = document.querySelector("#custom_photo");
    //formUploadInput.addEventListener('change', imageUploadProcessing, false);
    
    var sumAddToBasket = document.querySelector(".sumAddToBasket");
    sumAddToBasket.addEventListener("click", addToBasket);
    


}

//Global for close

var yesClick = "no";
var noClick = "no";
var closeView = document.querySelector(".closeView");
var mcContainer = document.querySelector(".macwearCustomiserContainer");
var mcEditor = document.querySelector(".mcEditor");
// Price tally counter
var locationCount = 0;

// Location Tally
function tally() {
    console.log(locationCount);
    var priceOutput = document.querySelector(".sumPrice");
    if (locationCount == 1) {
        priceOutput.innerHTML = "Embroidery Price: £FREE";
    } else if (locationCount == 2) {
        priceOutput.innerHTML = "Embroidery Price: £2.50";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886788096054
          });
    } else if (locationCount == 3) {
        priceOutput.innerHTML = "Embroidery Price: £5.00";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886788128822
          });
    } else if (locationCount == 4) {
        priceOutput.innerHTML = "Embroidery Price: £7.50";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886788161590
          });
    } else if (locationCount == 5) {
        priceOutput.innerHTML = "Embroidery Price: £10.00";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886788194358
          });
    } else if (locationCount == 6) {
        priceOutput.innerHTML = "Embroidery Price: £12.50";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886788227126
          });
    } else if (locationCount == 7) {
        priceOutput.innerHTML = "Embroidery Price: £15.00";
        jQuery.post('/cart/add.js', {
            quantity: 1,
            id: 8886802743350
          });
    }
}

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

    // Call tally
    tally();
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

// Seleciton Funcitons First Commented
function centerTee() {
    //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.centerTeeSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function leftBreast() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.leftBreastSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function rightBreast() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.rightBreastSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function rightShoulder() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.rightShoulderSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function leftShoulder() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.leftShoulderSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function centerTeeBack() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.centerTeeBackSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}

function topTeeBack() {
     //Call locationSelect
    locationSelect();
    this.classList.toggle("mpActive");

    //Toggle Related Selection Modal
    var typeSelection = document.querySelector(".typeSelection.topTeeBackSelect");
    typeSelection.classList.toggle("tsActive");

    // Add location to tally
    locationCount++;
}


// Legacy
function imageUpload() {
    var formUploadInput = document.querySelector("#custom_photo");
    formUploadInput.click();

}


function imgUploadCenterTee() {
    var formUploadInput = document.querySelector("#custom_photo_ct");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModala, false);
}

function imgUploadLeftBreast() {
    var formUploadInput = document.querySelector("#custom_photo_lb");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModalb, false);
}

function imgUploadRightBreast() {
    var formUploadInput = document.querySelector("#custom_photo_rb");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModalc, false);
}

function imgUploadRightShoulder() {
    var formUploadInput = document.querySelector("#custom_photo_rs");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModald, false);
}

function imgUploadLeftShoulder() {
    var formUploadInput = document.querySelector("#custom_photo_ls");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModale, false);
}

function imgUploadCenterTeeBack() {
    var formUploadInput = document.querySelector("#custom_photo_ctb");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModalf, false);
}

function imgUploadTopTeeBack() {
    var formUploadInput = document.querySelector("#custom_photo_ttb");
    formUploadInput.click();
    formUploadInput.addEventListener('change', removeModalg, false);
}

function removeModala() {
    var typeSelection = document.querySelector(".typeSelection.centerTeeSelect");
    typeSelection.classList.toggle("tsActive");
}

function removeModalb() {
    var typeSelection = document.querySelector(".typeSelection.leftBreastSelect");
    typeSelection.classList.toggle("tsActive");    
}

function removeModalc() {
    var typeSelection = document.querySelector(".typeSelection.rightBreastSelect");
    typeSelection.classList.toggle("tsActive");
}

function removeModald() {
    var typeSelection = document.querySelector(".typeSelection.rightShoulderSelect");
    typeSelection.classList.toggle("tsActive");
}

function removeModale() {
    var typeSelection = document.querySelector(".typeSelection.leftShoulderSelect");
    typeSelection.classList.toggle("tsActive");
}

function removeModalf() {
    var typeSelection = document.querySelector(".typeSelection.centerTeeBackSelect");
    typeSelection.classList.toggle("tsActive");
}

function removeModalg() {
    var typeSelection = document.querySelector(".typeSelection.topTeeBackSelect");
    typeSelection.classList.toggle("tsActive");
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




function txtUploadCenterTee() {
    console.log("ct");
    var txtSettings = document.querySelector(".textSettings.tsA");
    txtSettings.classList.toggle("txtActive");
}

function txtUploadLeftBreast() {
    console.log("lb");
    var txtSettings = document.querySelector(".textSettings.tsB");
    txtSettings.classList.toggle("txtActive");
}

function txtUploadRightBreast() {
    console.log("rb");
    var txtSettings = document.querySelector(".textSettings.tsC");
    txtSettings.classList.toggle("txtActive");
}

function txtUploadRightShoulder() {
    console.log("rs");
    var txtSettings = document.querySelector(".textSettings.tsD");
    txtSettings.classList.toggle("txtActive");  
}

function txtUploadLeftShoulder() {

    var txtSettings = document.querySelector(".textSettings.tsE");
    txtSettings.classList.toggle("txtActive");  
}

function txtUploadCenterTeeBack() {
    var txtSettings = document.querySelector(".textSettings.tsF");
    txtSettings.classList.toggle("txtActive");   
}

function txtUploadTopTeeBack() {
    var txtSettings = document.querySelector(".textSettings.tsG");
    txtSettings.classList.toggle("txtActive");
}



//Center Tee Text
function confirmCT() {
    //Get Center Tee Form Values
    var textInputCT = document.querySelector("#inputCT").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputCT = document.querySelector("#custom_text_ct");

    //Pass Value into shopify input
    shopifyTextInputCT.value = textInputCT;

    //Get Center Tee Font Selection Value
    var fontSelectionCT = document.querySelector("#optionFontCT");
    var fontValue = fontSelectionCT.options[fontSelectionCT.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectCT = document.querySelector("#choose_an_option_font");

    shopifyFontSelectCT.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionCT = document.querySelector("#optionColourCT");
    var colourValue = colourSelectionCT.options[colourSelectionCT.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectCT = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectCT.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.centerTeeSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsA");
    txtSettings.classList.toggle("txtActive");




}

// Left Breast Tee Text
function confirmLB() {
    //Get Center Tee Form Values
    var textInputLB = document.querySelector("#inputLB").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputLB = document.querySelector("#custom_text_lb");

    //Pass Value into shopify input
    shopifyTextInputLB.value = textInputLB;

    //Get Center Tee Font Selection Value
    var fontSelectionLB = document.querySelector("#optionFontLB");
    var fontValue = fontSelectionLB.options[fontSelectionLB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectLB = document.querySelector("#choose_an_option_font");

    shopifyFontSelectLB.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionLB = document.querySelector("#optionColourLB");
    var colourValue = colourSelectionLB.options[colourSelectionLB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectLB = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectLB.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.leftBreastSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsB");
    txtSettings.classList.toggle("txtActive");




}


function confirmRB() {
    //Get Center Tee Form Values
    var textInputRB = document.querySelector("#inputRB").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputRB = document.querySelector("#custom_text_rb");

    //Pass Value into shopify input
    shopifyTextInputRB.value = textInputRB;

    //Get Center Tee Font Selection Value
    var fontSelectionRB = document.querySelector("#optionFontRB");
    var fontValue = fontSelectionRB.options[fontSelectionRB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectRB = document.querySelector("#choose_an_option_font");

    shopifyFontSelectRB.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionRB = document.querySelector("#optionColourRB");
    var colourValue = colourSelectionRB.options[colourSelectionRB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectRB = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectRB.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.rightBreastSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsC");
    txtSettings.classList.toggle("txtActive");




}


function confirmRS() {
    //Get Center Tee Form Values
    var textInputRS = document.querySelector("#inputRS").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputRS = document.querySelector("#custom_text_rs");

    //Pass Value into shopify input
    shopifyTextInputRS.value = textInputRS;

    //Get Center Tee Font Selection Value
    var fontSelectionRS = document.querySelector("#optionFontRS");
    var fontValue = fontSelectionRS.options[fontSelectionRS.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectRS = document.querySelector("#choose_an_option_font");

    shopifyFontSelectRS.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionRS = document.querySelector("#optionColourRS");
    var colourValue = colourSelectionRS.options[colourSelectionRS.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectRS = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectRS.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.rightShoulderSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsD");
    txtSettings.classList.toggle("txtActive");




}


function confirmLS() {
    //Get Center Tee Form Values
    var textInputLS = document.querySelector("#inputLS").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputLS = document.querySelector("#custom_text_ls");

    //Pass Value into shopify input
    shopifyTextInputLS.value = textInputLS;

    //Get Center Tee Font Selection Value
    var fontSelectionLS = document.querySelector("#optionFontLS");
    var fontValue = fontSelectionLS.options[fontSelectionLS.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectLS = document.querySelector("#choose_an_option_font");

    shopifyFontSelectLS.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionLS = document.querySelector("#optionColourLS");
    var colourValue = colourSelectionLS.options[colourSelectionLS.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectLS = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectLS.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.leftShoulderSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsE");
    txtSettings.classList.toggle("txtActive");




}


function confirmCTB() {
    //Get Center Tee Form Values
    var textInputCTB = document.querySelector("#inputCTB").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputCTB = document.querySelector("#custom_text_ctb");

    //Pass Value into shopify input
    shopifyTextInputCTB.value = textInputCTB;

    //Get Center Tee Font Selection Value
    var fontSelectionCTB = document.querySelector("#optionFontCTB");
    var fontValue = fontSelectionCTB.options[fontSelectionCTB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectCTB = document.querySelector("#choose_an_option_font");

    shopifyFontSelectCTB.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionCTB = document.querySelector("#optionColourCTB");
    var colourValue = colourSelectionCTB.options[colourSelectionCTB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectCTB = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectCTB.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.centerTeeBackSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsF");
    txtSettings.classList.toggle("txtActive");




}

function confirmTTB() {
    //Get Center Tee Form Values
    var textInputTTB = document.querySelector("#inputTTB").value;

    //Get Shopify Form and Set Value
    var shopifyTextInputTTB = document.querySelector("#custom_text_ttb");

    //Pass Value into shopify input
    shopifyTextInputTTB.value = textInputTTB;

    //Get Center Tee Font Selection Value
    var fontSelectionTTB = document.querySelector("#optionFontTTB");
    var fontValue = fontSelectionTTB.options[fontSelectionTTB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyFontSelectTTB = document.querySelector("#choose_an_option_font");

    shopifyFontSelectTTB.value = fontValue;

    //Get Center Tee Color Value 
    var colourSelectionTTB = document.querySelector("#optionColourTTB");
    var colourValue = colourSelectionTTB.options[colourSelectionTTB.selectedIndex].value;

    //Get Shopify Form and Set Value
    var shopifyColourSelectTTB = document.querySelector("#choose_an_option_colour");

    shopifyColourSelectTTB.value = colourValue;

    //Only Visible Action Within This Function
    //Close Settings Modal
    var typeSelection = document.querySelector(".typeSelection.topTeeBackSelect");
    typeSelection.classList.toggle("tsActive");

    //Toggle Text Settings Another Location
    var txtSettings = document.querySelector(".textSettings.tsG");
    txtSettings.classList.toggle("txtActive");




}


//Add to basket

function addToBasket() {
    //Close Editor
    close();
    //Get add to basket button on product page
    var addToBasketButton = document.querySelector("#AddToCart-product-template");
    addToBasketButton.click();
}