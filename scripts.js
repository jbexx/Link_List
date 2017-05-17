
// =========Variables=========

var titleInput = $('#website-title').val();
var urlInput = $('#website-url').val();
var enterInput = $('#enter-button');
var readInput = $('#read');
var deleteInput = $('#delete');
var recordCount = 0;

// ==========Event Listeners========

$('.input').on('keyup', disableBtn);

$('#enter-button').on('click', function() {
  createRecord()
  $('#website-title').val('');
  $('#website-url').val('');
  $('.bookmark-count').text('Bookmarks: ' + recordCount);
  disableBtn();
});

$('.child-2').on('click', '.read-btn', readRecord);

$('.child-2').on('click', '.delete-btn', deleteRecord);

// ============Functions===========

function createRecord() {
  var titleInput = $('#website-title').val();
  var urlInput = $('#website-url').val();

    if (titleInput === '') {
      alert("You are missing the title!")
    } else if (urlInput === '') {
      alert("You are missing the URL!")
    } else if (!validUrl(urlInput)) {
      alert("Your URL is invalid!")
    } else {
      recordCount++;
      inject(titleInput, urlInput);
      console.log('record count: ' + recordCount);
    }
}

function inject(title, url) {$('.child-2').prepend(`
  <div class="bookmark">
    <h3 class="site-title">${title}</h3>
    <hr>
    <a href="${url}" class="siteurl clickable">${url}</a>
    <hr>
      <div class="read-delete-buttons">
        <button class="read-btn clickable" name="read-btn" type="button">Read</button>
        <button class="delete-btn clickable" name="delete-btn" type="button">Delete</button>
      </div>
  </div>
`)
}

function readRecord() {
  $(this).parent().parent().toggleClass('read-card');
  $(this).toggleClass('red-btn');
  // $('read-count').text('Read: ' + );
}

function deleteRecord() {
  recordCount--;
  $(this).parent().parent().remove();
  $('.bookmark-count').text('Bookmarks: ' + recordCount);
  console.log('record count: ' + recordCount);
}

function readRecordCount() {
  return $('.read-card').length;
}

// function validUrl(url) {
//   var pattern = new RegExp('^(https?:\\/\\/)?'+
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
//     '((\\d{1,3}\\.){3}\\d{1,3}))'+
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
//     '(\\?[;&a-z\\d%_.~+=-]*)?'+
//     '(\\#[-a-z\\d_]*)?$','i');
//     console.log(pattern.test(url));
//  return pattern.test(url);
//  }

function disableBtn() {
  if ($('#website-title').val() !== '' && $('#website-url').val() !== '') {
    $('#enter-button').prop('disabled', false);
  } else {
      $('#enter-button').prop('disabled', true);
  }
}

function unreadRecordCount() {
  return recordCount - readRecordCount();
}

function clearRead() {
  $( ".read-card" ).remove();
}

function validUrl(url) {
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var pattern = new RegExp(regexQuery,"i");
    return pattern.test(url);
}
