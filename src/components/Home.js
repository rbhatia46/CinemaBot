var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');
const link = './logo.jpg';

function Movie(props) {
    return(
        <ul className='popular-list'>
                {props.movies.map(function(movie,index){
                    return(
                        <li key={movie.id} > 
                            <div>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='rander' />
                        <h3 style={{textAlign: 'center'}}>{movie.title}</h3>
                        <Link className='button' to='/movies'>
                            Movie Details
                        </Link>
                    </div>
                        </li>
                        
                    )
            })
        }
        </ul>)
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          bean: [],
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
                <img src={link} className='logo' alt='beanne' />
            <div className='text-area'>
                <h3 className='text-center'>CinemaBot : The Movie Search Engine<sub>©</sub></h3>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    className="input" 
                    placeholder="Search a Movie"
                    value={this.state.title} 
                    onChange={this.handleChange}
                    required />
               </form>
            </div>
            <Movie movies={this.state.bean}/>
          </div>
      )
    }
  }
  
  module.exports = Home;