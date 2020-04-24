import React,{Component} from 'react';
import './cards-component.css';

export class Card extends Component{
    render(){
        return(
        <div className="card-container">
            <img alt="monsters" src={'https://robohash.org/'+this.props.monsters.id+'?set=set2'} />
                <h1>{this.props.monsters.username}</h1>
            </div>);
    }
}