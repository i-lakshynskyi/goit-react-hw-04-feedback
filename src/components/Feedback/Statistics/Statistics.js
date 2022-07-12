import React from 'react';
import PropTypes from 'prop-types';


class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };


  render() {
    const {good, neutral, bad, total, positivePercentage} = this.props;
    return (
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad:  {bad}</div>
        <div>Total:  {total}</div>
        <div>Positive feedback:  {positivePercentage}%</div>
      </div>
    );
  }
}

export default Statistics;
