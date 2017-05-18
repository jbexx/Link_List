
var recordCount = 0;



$('.input').on('keyup', disableEnterBtn);

$('#enter-button').on('click', function() {
  createRecord();
  $('#website-title').val('');
  $('#website-url').val('https://');
  $('.bookmark-count').text('Bookmarks: ' + recordCount);
  disableEnterBtn();
});

$('#clear-button').on('click', clearRead);

$('.child-2').on('click', '.read-btn',readRecord);

$('.child-2').on('click', '.delete-btn', deleteRecord);



function createRecord() {
  var titleInput = $('#website-title').val();
  var urlInput = $('#website-url').val();

    if (titleInput === '') {
      alert("You are missing the title!");
    } else if (urlInput === '') {
      alert("You are missing the URL!");
    } else if (!validUrl(urlInput)) {
      alert("Your URL is invalid!");
    } else {
      recordCount++;
      injectHtml(titleInput, urlInput);
    }
}

function injectHtml(titleInput, urlInput) {
  var urlInput = $('#website-url').val();
  $('.child-2').prepend(`
  <div class="bookmark">
    <h3 class="site-title">${titleInput}</h3>
    <hr>
    <a class="siteurl clickable" href="${urlInput}" target="_blank">${urlInput}</a>
    <hr>
      <div class="read-delete-buttons" for="aligning buttons correctly">
        <button class="read-btn clickable" name="read-btn" type="button">Read</button>
        <button class="delete-btn clickable" name="delete-btn" type="button">Delete</button>
      </div>
  </div>
`);
}

function readRecord() {
  $(this).parent().parent().toggleClass('read-card');
  $(this).toggleClass('red-btn');
  var readCount = $('div.read-card').length
  $('.read-count').text('Read: ' + readCount);
  enableClearBtn();
}

function deleteRecord() {
  recordCount--
  $(this).parent().parent().remove();
  $('.bookmark-count').text('Bookmarks: ' + $('div.bookmark').length);
  var readCount = $('div.read-card').length
  $('.read-count').text('Read: ' + readCount);
}

function disableEnterBtn() {
  if ($('#website-title').val() !== '' && $('#website-url').val() !== '') {
    $('#enter-button').prop('disabled', false);
  } else {
      $('#enter-button').prop('disabled', true);
  }
}

function enableClearBtn() {
  if ($('div.read-card').length !== 0) {
    $('#clear-button').prop('disabled', false);
  } else {
    $('#clear-button').prop('disabled', true);
  }
}

function clearRead() {
  $( ".read-card" ).remove();
  $('.bookmark-count').text('Bookmarks: ' + $('div.bookmark').length);
  $('.read-count').text('Read: ' + $('div.read-card').length);
  recordCount = $('div.bookmark').length;
  enableClearBtn();
}

function validUrl(url) {
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var pattern = new RegExp(regexQuery,"i");
    return pattern.test(url);
}
