import P from 'prop-types';
import { Component } from 'react';

import './styles.css';

export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;
    return (
      <div className="button-container">
        <button disabled={disabled} className="button" onClick={onClick}>
          {' '}
          {text}
        </button>
      </div>
    );
  }
}
Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
