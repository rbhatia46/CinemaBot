var axios = require('axios');

var API_KEY = 'a3bdaae66f8cf705750820e17c0e9471';

module.exports = {
    getMovies: (title) => {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`)
        .then(function(movies){
           return movies.data.results
       }).catch((err)=>{
           console.log(err);
       });
       },
    getMovie:(id) =>  {  
        return axios.get(`https://api.themoviedb.org/3/movie/"+${id}+"?api_key=${API_KEY}`)
        .then(function (response) {
          return response.data;
        }).catch((err)=>{
            console.log(err);
        });
    }
}