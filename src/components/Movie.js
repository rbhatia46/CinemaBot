var React = require('react');
var api = require('../utils/api');
var Loading = require('./Loading');
var Link = require('react-router-dom').Link;


function MovieItem (props) {
    console.log(props.movie);
    return (
        <div>
        <div className="row">
        <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} className="thumbnail"  alt="No Preview Available"/>
        </div>
            <div className="col-md-8">
                    <h2>{props.movie.original_title}</h2>
                    <ul className="list-group">
                    <li className="list-group-item"><strong>Genre :</strong>{props.movie.genres[0].name}</li>
                    <li className="list-group-item"><strong>Status ,Release Date :</strong> {props.movie.status} , {props.movie.release_date}</li>
                    <li className="list-group-item"><strong>Runtime :</strong> {props.movie.runtime} min</li>
                    <li className="list-group-item"><strong>Average Vote(out of 10):</strong> {props.movie.vote_average}</li>
                    <li className="list-group-item"><strong>Vote Count :</strong> {props.movie.vote_count}</li>
                    </ul>
            </div>
    </div>
    <div className="row">
            <div className="well" >
                    <h3> Plot </h3>
                    {props.movie.overview}
                    <hr />
                    <a href={`http://www.imdb.com/title/${props.movie.imdb_id}`}  className="btn btn-primary">View on IMDb</a>
                    <Link to={"/"}><button className="btn btn-default">Back to CinemaBot</button></Link>
            </div>
        </div>
     </div>
    )
}

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   movie: {
        //     genres:[{name: ''}]
        //   }
        };
    }
    componentWillMount() {
        this.showMovieDetails(this.props.match.params.id);
    }

    showMovieDetails(id) {
        api.getMovie(id)
        .then((res)=>{
            console.log(res);
            return this.setState({movie: res})
        }).catch ((err) => {
            console.log(err);
        })
    }
    render() {
            return(
                <div>
                {(this.state.movie === undefined ) 
                ?<Loading /> 
                :<MovieItem movie={this.state.movie} />
                }       
                </div> 
            )
    }
}

module.exports = Movie;