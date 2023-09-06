import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





/**** DISCUSSION OF MOVIE APP DATA *****/


// BAD IDEA
const moviesAndReviews = [
    {
        id: 0,
        name: "Star Wars",
        reviews: [
            {
                text: "It was great"
            }
        ]
    },
    {
        id: 1,
        name: "Star Trek",
        reviews: [
            {
                text: "It wasn't great"
            }
        ]
    }
]

// does not need to be in state (never changes)
const movies = [
    {
        id: 0,
        name: "Star Wars",
        reviews: [
        ]
    },
    {
        id: 1,
        name: "Star Trek",
        reviews: [
        ]
    }
]

// Reviews in a seperate array (in state)
const reviews = [
    {
        movieId: 0,
        text: "It was great"
    },
    {
        movieId: 1,
        text: "It wasn't great"
    }
]
// filter to get the reviews for one particular movie

