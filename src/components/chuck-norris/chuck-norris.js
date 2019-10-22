import React, { Component } from 'react'
import { getClient } from '../../utils';

export class ChuckNorrisQuote extends Component {
    state = {
        quote: {}
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
            this.setState({quote: response.data})
            
        } catch (error) {
            alert(error.message);   
        }
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.quote)}
            </div>
        )
    }
}

export default ChuckNorrisQuote
