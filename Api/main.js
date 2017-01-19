$(document).ready(function(){
$.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=popularity.desc',function(data, status){
 
  $.each(data['results'],function(key,value){
     var container = $('#container');
     var movie=$('section id="movie"><span id="header">'+ value['name'])+'</span>'
     var movie= move+('<img poster="poster" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2'+value['poster_path']+'"></section>')
    container.append(movie);
  })
})
});