$(function () {
  $('INPUT#btn_translate').on('click', function () {
    greet();
  });
  $('INPUT#language_code').on('foucs', function () {
    $(this).on('keypress', function (key) {
      if (key.keyCode === 13) {
        greet();
      }
    });
  });
});

function greet () {
  $lang = $('INPUT#language_code').val();
  $.ajax({
    method: 'GET',
    url: `https://hellosalut.stefanbohacek.dev/?lang=${$lang}`,
    success: function (greeting) {
      $('DIV#hello').html(greeting.hello);
    }
  });
}
