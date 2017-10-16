var React = require('react');
var Link = require('react-router-dom').Link;
const link = './logo.jpg';

class Home extends React.Component {
    
    render() {
        return (
          <div className='parent' >
            <img src={link} className='logo' alt='beanne' />
            <div className='text-area'>
                <h3 class='text-center'>CinemaBot : The Movie Search Engine<sub>©</sub></h3>
               <input type="text" className="input" placeholder="Search a Movie" required />
            </div> 
  
            <Link className='button' to='/battle'>
              
            </Link>
          </div>
      )
    }
  }
  
  module.exports = Home;