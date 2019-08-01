import React, { Component, createRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';

import { MoviesProvider } from './context/MovieContext';

import './assets/styles/fonts.css';
import './assets/styles/default.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            focusedBlock: 'MOVIE_LIST'
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setFocus = this.setFocus.bind(this);

        this.movieListComponent = createRef();
        this.movieDetailComponent = createRef();
        this.sideBarComponent = createRef();
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e) {
        switch(this.state.focusedBlock){
            case 'MOVIE_LIST':
                this.movieListComponent.current.handleKeyPress(e);
            break;
            case 'SIDE_BAR':
                this.sideBarComponent.current.handleKeyPress(e);
            break;
            case 'MOVIE_DETAIL':
                this.movieDetailComponent.current.handleKeyPress(e);
            break;
            default:

            break;
        }
    }

    setFocus(block){
        this.setState({focusedBlock: block})
    }

    render(){
        return (
            <MoviesProvider>
                <div className="app">
                    <Sidebar ref={this.sideBarComponent} focusedBlock={this.state.focusedBlock} setFocus={this.setFocus} />
                    <main>
                        <MovieDetail ref={this.movieDetailComponent} focusedBlock={this.state.focusedBlock} setFocus={this.setFocus} />
                        <MovieList ref={this.movieListComponent} focusedBlock={this.state.focusedBlock} setFocus={this.setFocus}/>
                    </main>
                </div>
            </MoviesProvider>
        );
    }
}