
var titleInput = $('#website-title').val();
var urlInput = $('#website-url').val();
var enterInput = $('#enter-button');
var readInput = $('#read');
var deleteInput = $('#delete');
var recordCount = 0;

$('#website-title').click(function () {

});

$('#website-url').click(function () {

});

$('#enter-button').click(function () {

});

$('#read').click(function () {

});

$('#delete').click(function () {
  deleteRecord();
});

$(function () {
  $('div.bookmark-card').toggleClass('read');
});

function recordPrepend(id) {
  $('child-2').append(`
    <div id="bookmark-" class="bookmark-card">
      <h3 class="site-title">${titleInput}</h3>
      <hr>
      <a href="" id="${urlInput}" class="siteurl clickable">${urlInput}</a>
      <hr>
      <button id="read" class="read-btn clickable" name="read-btn" type="button">Read</button>
      <button id="delete" class="delete-btn clickable" name="delete-btn" type="button">Delete</button>
    </div>
  `)
}

function createRecord(title, url) {
  var idNumber = 0;

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
    $( this ).parent().remove;
}

function readRecordCount(x) {
  return $('.read').length;
}

function unreadRecordCount(x) {
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
