import React from 'react';
import { connect } from 'react-redux';

function MyPerlers(props) {

  return(
    <div id="MyPerlers">
      <h1>{props.user_name + '\'s' + ' Perlers'}</h1>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      user_name: state.user.user_name
    }
};

export default connect(mapStateToProps)(MyPerlers);
