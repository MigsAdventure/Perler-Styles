import React from 'react';
import { perler_cards } from '../../data/perler_cards';
import Button from './Button';

export default function PerlerTable () {

  function testing() {
    console.log('clicked');
  }

  return(
    <div className="cards-table">
      {
        perler_cards.map((card, i) => {
          return (
            <div className="card" key={i}>
              <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
                <Button text={'Add'} callback={testing}/>
            </div>
          )
        })
      }
    </div>
  );
}
