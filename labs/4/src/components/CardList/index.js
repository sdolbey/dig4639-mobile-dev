// Dynmaically creates each card
// Passes a click listener function so that each card can remove themselves - done via an element or button with the CSS class Close
// Uses attributes to pass data to each Card - each card needs a unique key
// Imports data.json and uses the data

import React from 'react';
import Card from "../Card/index.js";
import data from '../../../src/data.json';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards: data.cards};
    }

    deleteCard = (event) => {
        console.log("Clicked delete");
        let cardID = event.target.getAttribute("dataname");
        let oldCards = this.state.cards;
        let newCards = oldCards.filter((card) => {
            console.log(card.title + " " + cardID);
            return card.title !== cardID;
        });
        this.setState({ cards: newCards});
    }
    
    render() {
        return(
            this.state.cards.map((card, i) => {
                return <Card 
                    key={i} 
                    deleteCard={this.deleteCard} 
                    title={card.title} 
                    content={card.content}
                ></Card>
            })
        );
    }
}


export default CardList;