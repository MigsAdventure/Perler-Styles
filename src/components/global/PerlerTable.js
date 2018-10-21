import React, { Component } from 'react';
import { perler_cards } from '../../data/perler_cards';
import Button from './Button';
import {connect} from "react-redux";
import { getAllCards } from "../../actions/cardActions";

class PerlerTable extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
      this.props.getAllCards();
  }

  addCard() {
      // handle endpoint to check for user
  }


  render() {
    const { current_user } = this.props;
    console.log(current_user);
    return(
      <div className="cards-table">
        {
          perler_cards.map((card, i) => {
            return (
              <div className="card" key={i}>
                <a className="card-image" href={card.url} style={{"backgroundImage": `url(${card.url})`}}></a>
                  {
                  current_user && current_user.googleId && <Button text={'Add'} callback={this.addCard}/>
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
        current_user: state.user.user_info
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCards: (res) => {
            dispatch(getAllCards(res));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerlerTable)