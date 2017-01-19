$(document).ready(function(){

   $.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=popularity.desc',function(data, status){
       $.each(data['results'],function(key,value){
           var container = $('#container');
           var movie = '<div id="movie"><span id="header">'+value['title']+'<br>' +
       '<br>'+"Average:  "+value['vote_average'] +'<br>'+"Year:  "+value['release_date']+'</span>'
           movie = movie +('<img id="poster" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2'
           +value['poster_path']+'"></div>');
           container.append(movie);
       });
       
   });
   
});