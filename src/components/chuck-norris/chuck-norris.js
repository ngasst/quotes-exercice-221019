import React, { Component } from 'react';
import './style.css';
import { getClient } from '../../utils';

export class ChuckNorrisQuote extends Component {
    state = {
        image: "",
        quote: "",
        link: ""
    }
    http = null;

    componentDidMount() {
        this.http = getClient();
        this.makeNetworkRequest();
    }

    /* 
    Arrow functions inherit their parents' context, thus we can access the classes 
    'this' without having to bind the context inside of the constructor.
    */
    makeNetworkRequest = async () => {
        try {
            const response = await this.http.get('/jokes/random');
            this.setState({
                image: response.data.icon_url,
                quote: response.data.value,
                link: response.data.url
            })
            
        } catch (error) {
            alert(error.message);
        }
    }
    render() {
        return (
            <div id="center">
                <p id="text">Chuck Norris</p>
                <div id="image-container"><img id="image" src={this.state.image} alt="chuck-norris"/></div>
                <p id="speech-norris">{this.state.quote}</p>
            </div>
        )
    }
}

export default ChuckNorrisQuote
