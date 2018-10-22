import React, { Component } from 'react';
// import { perler_cards } from '../../data/perler_cards';
import Button from './Button';
import {connect} from "react-redux";
import { getAllCards, addCard } from "../../actions/cardActions";

class PerlerTable extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
      console.log('mounted');
      this.props.getAllCards();
  }

  addCard(card) {
      const { current_user, addCard } = this.props;
      if (card && card.user) {
          return;
      }
      console.log('adding card');
      // handle endpoint to check for user
      addCard(card._id, {"user_name":current_user.givenName, "email": current_user.email});
  }

  render() {
    const { current_user, all_cards } = this.props;
    return(
      <div className="cards-table">
        {
          all_cards.map((card, i) => {
            return (
              <div className="card" key={i}>
                <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
                  {
                  current_user && current_user.googleId && <Button type={card && card.user && 'disabled'} text={(card && card.user) || 'Add Perler'} callback={() => this.addCard(card)}/>
                  }
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        current_user: state.user.user_info,
        all_cards: state.card.cards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCards: (res) => {
            dispatch(getAllCards(res));
        },
        addCard: (id, user) => {
            dispatch(addCard(id, user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerlerTable)