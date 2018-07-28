import React from 'react';
import { perler_cards } from '../../data/perler_cards';

export default function PerlerTable () {
  return(
    <div className="cards-table">
      {
        perler_cards.map((card, i) => {
          return (
            <div className="card" key={i}>
              <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
            </div>
          )
        })
      }
    </div>
  );
}
