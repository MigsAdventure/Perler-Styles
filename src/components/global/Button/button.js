import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import '../../../_styles/components/global/button.css';

const Button = (props) => {
  const { text, type, large, isExternal, url, isActive, callback } = props;
  let content = null;
  let buttonClass = classnames({
    'btn': true,
    [type]: (type),
    'active': (isActive),
    'large': (large)
  })

  if(isExternal){
    content = (
      <a className={classnames(buttonClass)} href={url}>
        {text}
      </a>
    )
  } else {
    content = (
      <div
        className={classnames(
          buttonClass,
          { ['no-url']: !url }
        )}
        onClick={(callback) ? (e) => {callback(e)} : () => {return false}}
      >
        {
          (url) ? <Link to={url}>{text}</Link> : text
        }
      </div>
    )
  }
  return content;
}

Button.defaultProps = {
  type: '',
  text: 'Add',
  isExternal: false,
  isActive: false,
  large: false,
  arrow: false
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  large: PropTypes.bool,
  url: PropTypes.string,
  isExternal: PropTypes.bool,
  isActive: PropTypes.bool,
  callback: PropTypes.func
}

export default Button;
