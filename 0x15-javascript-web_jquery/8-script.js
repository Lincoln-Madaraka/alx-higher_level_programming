$.ajax({
  method: 'GET',
  url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
  success: function (movies) {
    $list = $('UL#list_movies');
    $.each(movies.results, function (index, movie) {
      $list.append('<li>' + movie.title + '</li>');
    });
  }
});

