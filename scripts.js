var titleInput = document.getElementByID('website-title').value;
var urlInput = document.getElementByID('website-url').value;
var enterInput = document.getElementByID('enter-button');
var readInput = document.getElementByID('read');
var deleteInput = document.getElementByID('delete');
var recordCount = 0;

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

function recordPrepend(id) {

}

function createRecord(title, url) {
  var idNumber = 0;
  var
    if (title === null) {
      alert("You are missing the title!")
    } else if (url === null) {
      alert("You are missing the URL!")
    } else if (!validURL(url)) {
      alert("Your URL is invalid!")
    } else {
      recordCount++;
      idNumber++;
      recordPrepend(idNumber);
    }
}

function readRecord() {

}

function deleteRecord() {
    recordCount--;
    $( "li.item-a" ).parent().remove;
}

function readRecordCount(?) {
  return $('.read').length;
}

function unreadRecordCount(?) {
  return recordCount - readRecordCount();
}

function clearRead() {
  $( ".read" ).remove();
}

function validURL(url) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
 return pattern.test(url);
 }
