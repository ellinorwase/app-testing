import React from 'react';
import ReactDOM from 'react-dom';
import fakePosts from './fakePosts';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './style.css';

const postsInLocalStorage = localStorage.getItem('posts');
if(!postsInLocalStorage){
  localStorage.setItem('posts', JSON.stringify(fakePosts.data));
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
