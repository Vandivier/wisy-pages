/*todo:
    download HTML -> download files and includes folder, css, html, using File Name
    clean empty class tags and non-utf characters during round 4, clean up
    improve documentation
*/

var errCount = 0;
$(function () {
  bindEvents();
});

function bindEvents() {
  $('#fileInput').change(function () {
    var file = fileInput.files[0];
    var textType = /html.*/;
    if (file.type.match(textType)) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var guessName = file.name.split(" ")[0];
        var guessName = guessName.split(".")[0];
        $('#form-name').val(guessName);
        $.when(renderPreview(reader.result))
          .then(renderMarkup());
      }
      reader.readAsText(file);
    } else {
      $('#fileStringDisplayArea').val("File not supported!");
    }
  });
  $('.johnv').click(function () {
    $('#fileInput').trigger('click');
  });
  $('#nativeScript').click(function () {
    nativeScript()
  });
  $('#customScript').click(function () {
    customScript()
  });
  $('#customStyle').click(function () {
    customStyle()
  });
  $('#fileStringDisplayArea').keyup(function () {
    renderPreview()
  });
  $('#renderDisplayArea').keyup(function () {
    renderMarkup()
  });
  $('#preview').click(function (e) {
    var newWinHtml = $('#renderDisplayArea').parent().html();
    //newWinHtml = '<link rel="stylesheet" type="text/css" href="../oc-ui/web/gadgets/formGadget/formGadget.css">' + newWinHtml;
    var newWin = window.open();
    newWin.document.write(newWinHtml);
  });
  $('#downloadDisplayArea').click(function (e) {
    saveTextAsFile(fileStringDisplayArea.value);
  });

  /*source=http://stackoverflow.com/questions/7826379/jquery-removeclass-but-not-certain-classes*/
  jQuery.fn.removeClassExcept = function (val) {
    return this.each(function (index, el) {
      var keep = val.split(" "),
        reAdd = [],
        $el = $(el);
      for (var c = 0; c < keep.length; c++) {
        if ($el.hasClass(keep[c])) reAdd.push(keep[c]);
      }
      $el.removeClass().addClass(reAdd.join(' '));
    });
  }
}

function logError(string, context) {
  errCount++;
  errText = '';
  if ($('#moreED')[0].checked) errText += '\nError Number: ' + errCount + '\nContext: ' + context + '\n';
  errText += 'Error Text: ' + string;
  console.log(errText);
}

function saveTextAsFile(inputTextToSave) {
  var textFileAsBlob = new Blob([inputTextToSave], {
    type: 'text/html'
  });
  var fileNameToSaveAs = jQuery('#fileInput').val();
  fileNameToSaveAs = fileNameToSaveAs.slice(0, fileNameToSaveAs.lastIndexOf('.'));
  fileNameToSaveAs = fileNameToSaveAs + '.html';
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

function renderPreview(stringToRender) {
  stringToRender = stringToRender || $('#fileStringDisplayArea').val();
  var formName = $('#form-name').val();
  $('.gadget.formGadget').removeAttr('class').addClass('gadget formGadget ' + formName);
  $('#renderDisplayArea').html(stringToRender);
}

function renderMarkup(stringToRender) {
  var stringToRender = stringToRender || $('#renderDisplayArea').html();
  $('#fileStringDisplayArea').val(html_beautify(stringToRender));
}

function nativeScript() {
  //Round 1, initial cleaning and anchor to field conversion
  // TODO: allowedClassStrArray external, sorted alpha
  var allowedClassStrArray = 'page font-family-times-new-roman font-family-arial bold italics underline text-align-center ';
  allowedClassStrArray = allowedClassStrArray + 'vertical-align-top text-align-right float-right float-left ';
  allowedClassStrArray = allowedClassStrArray + $('#allowed-classes').val();

  fileString = $('#fileStringDisplayArea').val();
  fileString = fileString.replace(/&nbsp;/g, '');

  $('#renderDisplayArea').html(fileString);
  $('#renderDisplayArea meta, #renderDisplayArea style, #renderDisplayArea title').remove();
  $('#renderDisplayArea *').removeClassExcept(allowedClassStrArray);
  $('#renderDisplayArea *').removeAttr('style').removeAttr('border').removeAttr('cellpadding').removeAttr('cellspacing').removeAttr('height').removeAttr('width').removeAttr('lang');
  $('#renderDisplayArea [valign]').removeAttr('valign').addClass('top');
  $('#renderDisplayArea [align]').removeAttr('align').addClass('align-center');
  $('#renderDisplayArea link').remove();
  $('#renderDisplayArea [class]').each(function () {
    if ($(this).attr('class').length < 1) $(this).removeAttr('class');
  });

  var fields = $('#renderDisplayArea a');
  $.each(fields, function (i, field) {
    var fieldName = $(field).attr('name');
    if (typeof fieldName === 'undefined') {
      $(field).replaceWith('<input type="text" class="error" id="' + fieldName + '" name="' + fieldName + '"/>');
      logError('Undefined field.', $(this).context.outerHTML);
    } else {
      var fieldNameLC = fieldName.toLowerCase();
      if (fieldNameLC.indexOf('text') > -1 || fieldNameLC.indexOf('txt') > -1) {
        $(field).replaceWith('<input type="text" id="' + fieldName + '" name="' + fieldName + '"/>');
      } else if (fieldNameLC.indexOf('check') > -1 || fieldNameLC.indexOf('chk') > -1) {
        $(field).replaceWith('<input type="checkbox" id="' + fieldName + '" name="' + fieldName + '"/>');
      }
    }
  });

  $.when(renderMarkup())
    .then(renderPreview());

  //Round 2, tag replacement
  for (var i = 0; i < 10; i++) {
    $('#renderDisplayArea b').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      } else {
        $(this).wrap('<span class="bold"></span>');
        $(this).replaceWith($(this).html());
      }
    });
    $('#renderDisplayArea i').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      } else {
        $(this).wrap('<span class="italics"></span>');
        $(this).replaceWith($(this).html());
      }
    });
    $('#renderDisplayArea u').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      } else {
        $(this).wrap('<span class="underline"></span>');
        $(this).replaceWith($(this).html());
      }
    });
    $('#renderDisplayArea span').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      } else if (!$(this)[0].hasAttribute('class')) {
        $(this).replaceWith($(this).html());
      }
    });
    $('#renderDisplayArea p').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      }
    });
    $('#renderDisplayArea div').each(function () {
      if ($.trim($(this).html()) === '') {
        $(this).remove();
      } else if (!$(this)[0].hasAttribute('class')) {
        $(this).replaceWith($(this).html());
      }
    });
  }

  $.when(renderMarkup())
    .then(renderPreview());

  //Round 3, formerly some-useful-functions.js
  $('#renderDisplayArea input, #renderDisplayArea textarea').not('[type=checkbox]').not('[type=date]').not('[type=radio]').each(function () {
    $this = $(this);
    that = {};
    $.each(this.attributes, function () {
      that[this.name] = this.value;
    });
    temp = $('<div></div>').attr(that).not('[contentEditable]').attr('contentEditable', 'true');
    if (!temp.hasClass('form-element')) temp.addClass('form-element');
    $this.replaceWith(temp);
  });
  $('#renderDisplayArea div[contentEditable]').removeAttr('type');
  $('#renderDisplayArea .top').removeClass('top');
  $('#renderDisplayArea [contentEditable]').addClass('form-element');
  $('#renderDisplayArea input').addClass('form-element');
  $('#renderDisplayArea .form-element').removeAttr('name');
  $('#renderDisplayArea .form-element').each(function () {
    var $this = $(this),
      id = $this.attr('id');
    $this.attr('data-field', id).removeAttr('id');
  });
  $('#renderDisplayArea').each(function () {
    var $this = $(this),
      htmlStr = $this.html();
    regex = /(class="")/g;
    var newHtml = htmlStr.replace(regex, "");
    $this.html(newHtml);
  });
  //change h tags to spans with size class
  $("#renderDisplayArea h1, #renderDisplayArea h2, #renderDisplayArea h3, #renderDisplayArea h4, #renderDisplayArea h5, #renderDisplayArea h6").each(function () {
    var preserveContent = $(this).html();
    $(this).replaceWith('<p class="large bold">' + preserveContent + '</p>');
  });
  for (i = 0; i < 5; i++) {
    //replace <p> + whitespace + </p> with <br>
    $('#renderDisplayArea').each(function () {
      var $this = $(this),
        htmlStr = $this.html();
      regex = /((<p>|\s|<\/p>)+)<\/p>/g;
      var newHtml = htmlStr.replace(regex, "<br>");
      $this.html(newHtml);
    });
    //replace </p> + whitespace + <p> with <br>
    $('#renderDisplayArea').each(function () {
      var $this = $(this),
        htmlStr = $this.html();
      regex = /((<\/p>|\s|<p>)+)<p>/g;
      var newHtml = htmlStr.replace(regex, "<br>");
      $this.html(newHtml);
    });
  }

  //Round 4, Cleanup
  renderMarkup();
  fileString = $('#renderDisplayArea').html().replace(/(?!(?:\n )*(\n )(?:\n )*\1)[\n\r\t ]+/g, ' ').trim();
  fileString = fileString.replace(/\uFFFD/g, '');
  fileString = fileString.replace(/(contenteditable="true")/g, 'contenteditable');
  fileString = fileString.replace(/(> <)/g, '><');
  fileString = fileString.replace(/(\s)+<br>/g, '<br>');

  renderMarkup(fileString);
  renderPreview();
}

function customScript() {
  $('.custom-code script').remove();
  var newScript = document.createElement('script');
  newScript.innerHTML = $('textarea.custom-script').val();
  newScript.id = 'custom-script';
  $('.custom-code').append(newScript);
}

function customStyle() {
  $('.custom-code .custom-style').html($('textarea.custom-style').val());
}