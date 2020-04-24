import React,{Component} from 'react';
import './cardList-component.css';
import { Card } from '../Cards/cards-component';
export class CardList extends Component{
    render(){
        return(<div className='card-list'>
          {this.props.monsters.map(monsters=>
           <Card key={monsters.id} monsters={monsters} />)}
        </div>);
    }
}
