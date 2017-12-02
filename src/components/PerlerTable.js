import React from 'react';
import { perler_cards } from '../data/perler_cards';

export default function PerlerTable () {
  return(
    <div class="cards-table">
      {
        perler_cards.map((card, i) => {
          return (
            <div class="card">
              <img src={card.url} alt=""/>
            </div>
          )
        })
      }
    </div>
  );
}
