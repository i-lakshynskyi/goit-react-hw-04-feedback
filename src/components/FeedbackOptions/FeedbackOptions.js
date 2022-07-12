import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback/feedback.module.scss';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func
  };


  render() {
    const {onLeaveFeedback} = this.props;
    return(
      <div className={s.buttons}>
        <button onClick={onLeaveFeedback} name='good'>Good</button>
        <button onClick={onLeaveFeedback} name='neutral'>Neutral</button>
        <button onClick={onLeaveFeedback} name='bad'>Bad</button>
      </div>
    )
  }
}

export default FeedbackOptions;
