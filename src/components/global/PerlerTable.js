import React, { Component } from 'react';
import { perler_cards } from '../../data/perler_cards';
import Button from './Button';

class PerlerTable extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
  }

  addCard() {
    console.log('clicked');
  }

  render() {
    return(
      <div className="cards-table">
        {
          perler_cards.map((card, i) => {
            return (
              <div className="card" key={i}>
                <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
                  <Button text={'Add'} callback={this.addCard}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default PerlerTable;
