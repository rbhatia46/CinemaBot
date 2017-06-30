$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get("https://api.themoviedb.org/3/search/movie?api_key=a3bdaae66f8cf705750820e17c0e9471&query="+searchText)
    .then((response) => {
      console.log(response);
	  let movies= response.data.results;
	  let output='';
	  $.each(movies, (index,movie)=>{
		  output += ` 
		    <div class="col-md-3">
                 <div class="well text-center">
				 <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"/ class="img-responsive" onerror="this.onerror=null;this.src='https://s3.amazonaws.com/ae-plugins/shared/images/default-thumb-300x300.png';" />			
			  <h5> 	${movie.original_title}</h5>
			  <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
			  </div>
			</div> 
		  `;
	  });
	   
	  $('#movies').html(output);
	})
	.catch((err)=>{
		console.log(err);
	});
}

function movieSelected(id){
	sessionStorage.setItem('movieId',id);
	window.location="movie.html";
	return false;
}

function getMovie(){
	let movieId = sessionStorage.getItem('movieId');
	
	axios.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=a3bdaae66f8cf705750820e17c0e9471")
    .then((response) => {
	console.log(response);
	  let movie= response.data;
      let output = ` 
	  <div class="row">
	   <div class="col-md-4">
	   <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" class="thumbnail"  alt="No Preview Available" onerror="this.onerror=null;this.src='https://s3.amazonaws.com/ae-plugins/shared/images/default-thumb-300x300.png';" />
	   </div>
	   <div class="col-md-8">
	   <h2>${movie.original_title}</h2>
	   <ul class="list-group">
	    <li class="list-group-item"><strong>Genre :</strong>${(movie.genres[0].name=='undefined')?('None'):(movie.genres[0].name)}</li>
	    <li class="list-group-item"><strong>Status ,Release Date :</strong> ${movie.status} , ${movie.release_date}</li>
		<li class="list-group-item"><strong>Runtime :</strong> ${movie.runtime} min</li>
		<li class="list-group-item"><strong>Average Vote(out of 10):</strong> ${movie.vote_average}</li>
		<li class="list-group-item"><strong>Vote Count :</strong> ${movie.vote_count}</li>
		</ul>
	   </div>
	  </div>
	  <div class="row">
	   <div class="well" >
	    <h3> Plot </h3>
		${movie.overview}
		<hr />
		<a href="http://www.imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">View on IMDb</a>
		<a href="index.html" class="btn btn-default">Back to CinemaBot</a>
	    </div>
	  </div>
	  `;	   
	  $('#movie').html(output);
	})
	.catch((err)=>{
		console.log(err);
	});
}
