import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.css';
import './animate.css';

    //    window.sr = ScrollReveal();
    //     sr.reveal('.img-responsive', {
    //       duration: 2500,
    //       origin:'bottom'
    //     });
	// 	sr.reveal('.jumbotron', {
    //       duration: 3000,
    //       origin:'left'
    //     });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
