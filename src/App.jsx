import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';

import { MoviesProvider } from './context/MovieContext';


import { keys } from './keys';

import './assets/styles/fonts.css';
import './assets/styles/default.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            focusedBlock: 'MAIN_TRACK'
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e) {
        switch(this.state.focusedBlock){
            case 'MAIN_TRACK':
                alert('move main track to the adasdasad')
            break;
            case keys.KEY_DOWN:
                
            break;
            case keys.KEY_LEFT:

            break;
            case keys.KEY_RIGHT:
                    if(this.state.focusedBlock === 'MAIN_TRACK'){
                        alert('pressionou right')
                    }
            break;
            case keys.KEY_ENTER:

            break;
            default:

            break;
        }
    }

    render(){
        return (
            <MoviesProvider>
                <div className="app">
                    <Sidebar focusedBlock={this.state.focusedBlock} />
                    <main>
                        <MovieDetail focusedBlock={this.state.focusedBlock} />
                        <MovieList onRef={ref => (this.movieList = ref)} focusedBlock={this.state.focusedBlock}/>
                    </main>
                </div>
            </MoviesProvider>
        );
    }
}