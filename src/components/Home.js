var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');
const link = './logo.jpg';
 
function Movies (props) {
    console.log(props);
    return(
        <div className="row movies">
                {props.movies.map(function(movie,index){
                    return(
                            <div className='col-md-3' key={movie.id} > 
                                <div className='well text-center'>
                                    <img className='img-responsive' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='No Preview Available' />
                                    <h5 style={{textAlign: 'center'}}>{movie.original_title}</h5>
                                    <Link to={`/movie/${movie.id}`}> <button 
                                    className='btn btn-primary'
                                    onClick={this.movieSelected}>
                                        Movie Details 
                                    </button></Link>
                                </div>
                            </div>)
                })
            }
        </div>
    )
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
          return {
            title: value
          }
        });
      }

     handleSubmit(event) {
        event.preventDefault();
         api.getMovies(this.state.title)
         .then((movies)=>{
            console.log(movies);
            return this.setState({ bean : movies });
        }).catch((err) => {
            console.log(err);
        });
    };
    
    render() {
        return (
          <div className='parent' >
                <img src={link} className='logo text-center animated fadeInDown' alt='beanne' />
            <div className='jumbotron'>
                <h3 className='text-center'>CinemaBot : The Movie Search Engine<sub>©</sub></h3>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search a Movie"
                    value={this.state.title} 
                    onChange={this.handleChange}
                    required />
               </form>
            </div>
            <div className="container">
            {(this.state.bean === undefined ) 
                ? null 
                :<Movies movies={this.state.bean} />
                }    
            </div>
          </div>
      )
    }
  }
  
  module.exports = Home;