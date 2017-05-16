
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

$('#enter-button').on('click', createRecord);

$('.child-2').click(function () {
  readRecord();
});

$('.child-2').on('click', '.delete-btn', deleteRecord);

// $(function () {
//   $('div.bookmark-card').toggleClass('read');
// });

// function recordPrepend() {
//   var titleInput = $('#website-title').val();
//   var urlInput = $('#website-url').val();
//   creatRecord(titleInput, urlInput);


//}

function createRecord() {
  var titleInput = $('#website-title').val();
  var urlInput = $('#website-url').val();

    if (titleInput === null) {
      alert("You are missing the title!")
    } else if (urlInput === null) {
      alert("You are missing the URL!")
    } else if (!validURL(urlInput)) {
      alert("Your URL is invalid!")
    } else {
      recordCount++;
      inject(titleInput, urlInput);
    }
}

function inject(title, url) {$('.child-2').prepend(`
  <div class="bookmark">
    <h3 class="site-title">${title}</h3>
    <hr>
    <a href="${url}" class="siteurl clickable">${url}</a>
    <hr>
      <div class="flex">
      <button class="read-btn clickable" name="read-btn" type="button">Read</button>
      <button class="delete-btn clickable" name="delete-btn" type="button">Delete</button>
      </div>
  </div>
`)
}

function readRecord() {
  $( this ).parent().toggleClass('read');
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
