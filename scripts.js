var titleInput = document.getElementByID('website-title').value;
var urlInput = document.getElementByID('website-url').value;
var enterInput = document.getElementByID('enter-button');
var readInput = document.getElementByID('read');
var deleteInput = document.getElementByID('delete');
var recordCount = 0;
var recordObject = new Object();
var recordObjectArray = new Array[];

titleInput.addEventListener('click', function () {

});

urlInput.addEventListener('click', function () {

});

enterInput.addEventListener('click', function () {

});

readInput.addEventListener('click', function () {

});

deleteInput.addEventListener('click', function () {

});

function recordPrepend() {

}

function createRecord(title, url) {
    if (title === null) {
      alert("You are missing the title!")
    } else if (url === null) {
      alert("You are missing the URL!")
    } else if (!validURL(url)) {
      alert("Your URL is invalid!")
    } else {
      recordCount++;
      // HTML/CSS record injection
      // Should probably be modeled as an Object Array
      // Some functions below should be rolled into the Object    // constructor
    }
}

function readRecord() {

}

function deleteRecord() {
    recordCount--;
}

// function readRecordCount(?) {
//   Should be property in Record Objects
// }

// function unreadRecordCount(?) {
//   Should be property in Record Objects
// }

// function clearRead(?) {
//    Should target Objects with read property as true
//    Should subtract total from recordCount
// }

// function validURL(url) {
//    Find prebuilt/builtin function that makes this check
// })
