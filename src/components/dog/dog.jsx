import React, { Component } from 'react'
import { getClient } from '../../utils';

export class Dog extends Component {
    state = {
        dogurl: "",
        dogname:""
    }
    http = null;

    componentDidMount() {
        this.http = getClient('https://dog.ceo/api/breeds/image');
        this.makeNetworkRequest();
    }
    /* 
    Arrow functions inherit their parents' context, thus we can access the classes 
    'this' without having to bind the context inside of the constructor.
    */
    makeNetworkRequest = async () => {
        try {
            const response = await this.http.get('/random');
            this.setState({dogurl: response.data.message, dogname: response.data.message.split("/")[4]})
            
        } catch (error) {
            alert(error.message);   
        }
    }
    render() {
        return (
            <div id="center">
                <p id="text">I'm a {this.state.dogname.replace(/-/g, " ")}</p>
                <div id="image-container"><img id="image" src={this.state.dogurl} alt={this.state.dogname}/></div>
            </div>
        )
    }
}