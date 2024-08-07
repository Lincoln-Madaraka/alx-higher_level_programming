$(function () {
  $list = $('UL.my_list');
  $('DIV#add_item').on('click', function () {
    $list.append('<li>Item</li>');
  });
  $('DIV#remove_item').on('click', function () {
    $list.children().last().remove();
  });
  $('DIV#clear_list').on('click', function () {
    $list.children().detach();
  });
});

