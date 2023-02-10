import React from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

export default class Main extends React.Component {

    state = {
        movie: [],
        loading: true
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=a2cfcb56&s=panda")
            .then(res=>res.json())
            .then(data=>this.setState({movie: data.Search, loading: false}))
    }

    searchMovie = (str, type="all")=>{
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=a2cfcb56&s=${str}${type !== "all" ? `&type=${type}` : " "}`)
            .then(res=>res.json())
            .then(data=>this.setState({movie: data.Search, loading: false}))
    }

    render() {
        return(
            
            <div className='container content' >
                <Search searchMovie={this.searchMovie} />
                {this.state.loading ? <Loader />  : <Movies movies={this.state.movie} /> }
                
            </div>
        )
    }
};
