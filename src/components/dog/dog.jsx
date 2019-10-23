import React, { Component } from 'react';
import './style.css';
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

    rightArticle = () => {
        const vowels = ["a", "e", "i", "o", "u"];
        if(vowels.includes(this.state.dogname.charAt(0))) {
            return "an"
        } else {
            return "a"
        }
    }

    dogSpeech = () => {
        const speeches = [
            "Please, love me! because I will ;)",
            "Choose me, I'm The underdog ! ^^",
            "Can you give me a hug ?",
            "Hey, if there are no dogs in haven, let me die, so I will be the first !",
            "Look at here, No one appreciates the very special genius of your conversation as much as I do.",
            "With me, you will never fill uggly and alone ;)",
            "Come on, give me a kiss ! ksosko",
            "Do you fill that connection between you and me ? Yeeees you dooooo !"
        ]
        return speeches[Math.floor(Math.random() * 8)];
    }

    render() {
        return (
            <div id="center">
                <p id="text">I'm {this.rightArticle()} {this.state.dogname.replace(/-/g, " ")}</p>
                <div id="image-container"><img id="image" src={this.state.dogurl} alt={this.state.dogname}/></div>
                <p id="speech-dog">{this.dogSpeech()}</p>
            </div>
        )
    }
}