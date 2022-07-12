import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import s from './feedback.module.scss';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = event => {
    this.setState({ [event.target.name]: this.state[event.target.name] + 1 }, () => {
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    });
  };


  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: Number((prevState.good / prevState.total * 100).toFixed(0)),
    }));
  };


  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div className={s.feedbackWrapper}>
        <Section title={'Please Leave Feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {
            total > 0
              ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
              : <Notification message="There is no feedback"/>
          }

        </Section>
      </div>
    );
  }
}

export default Feedback;
