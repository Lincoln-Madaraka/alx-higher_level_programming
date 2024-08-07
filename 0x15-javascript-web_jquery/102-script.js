$(function () {
  $('INPUT#btn_translate').on('click', function () {
    $lang = $('INPUT#language_code').val();
    $.ajax({
      method: 'GET',
      url: `https://hellosalut.stefanbohacek.dev/?lang=${$lang}`,
      success: function (greeting) {
        $('DIV#hello').html(greeting.hello);
      }
    });
  });
});
