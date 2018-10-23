import React, { Component } from 'react';
// import { perler_cards } from '../../data/perler_cards';
import Button from './Button';
import { connect } from "react-redux";
import { getAllCards, addCard, removeCard } from "../../actions/cardActions";

class PerlerTable extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  componentDidMount() {
      this.props.getAllCards();
  }

  addCard(card) {
      const { current_user, addCard } = this.props;
      if (card && card.user) {
          return;
      }
      // handle endpoint to check for user
      addCard(card._id, {"user_name":current_user.givenName, "email": current_user.email});
  }

    removeCard(card) {
        const { current_user, removeCard } = this.props;
        // handle endpoint to check for user
        removeCard(card._id, {"email": current_user.email});
    }

  render() {
    const { current_user, all_cards } = this.props;
    return(
      <div className="cards-table">
        {
            all_cards.length ?
          all_cards.map((card, i) => {
            return (
              <div className="card" key={i}>
                <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
                  {
                      card && card.user && current_user.givenName && <Button type={'remove-btn'} text={'Remove'} callback={() => this.removeCard(card)}/>

                  }
                  {
                  current_user && current_user.googleId && <Button type={card && card.user && 'disabled'} text={(card && card.user) || 'Add'} callback={() => this.addCard(card)}/>
                  }
              </div>
            )
          })
            :
            <img className={"loader"} src={'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FkuWN0iF9BLQKk%2Fgiphy.gif'} />
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
        removeCard: (id, user) => {
            dispatch(removeCard(id, user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerlerTable)