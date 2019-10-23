import React, { Component } from 'react';
import './style.css';
import { Quote } from '../quote';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.subject
        }
    }
    componentDidMount() {
        this.getSubject();
    }
    getSubject = (sub) => {
        this.setState({subject: sub});
    }
    noSuject = () => {
        alert("New feature are coming soon! Like 'Friends API' and 'Thrump's thoughts API'")
    }
    render() {
        return (
            <div>
                <div id="display-button">
                    <button onClick={()=>this.getSubject("chuck")}>Chuck Norris</button>
                    <button onClick={()=>this.getSubject("dog")}>Dogs</button>
                    <button id="comming" onClick={this.noSuject}>Comming soon</button>
                </div>
                <div>
                <Quote subject={this.state.subject}/>
                </div>
            </div>
        )
    }
}