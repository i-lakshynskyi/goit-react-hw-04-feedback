import React, { useReducer } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import s from './feedback.module.scss';


const reviewsCounterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'good':
      return { ...state, good: state.good + payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + payload };
    case 'bad':
      return { ...state, bad: state.bad + payload };
    default:
      return state;
  }
};

const init = (initState) => {
  return initState;
};

const Feedback = () => {
  const [state, dispatch] = useReducer(reviewsCounterReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  }, init);

  const showStatistics = state.good > 0 || state.neutral > 0 || state.bad > 0;

  const onLeaveFeedback = event => {
    const name = event.currentTarget.name;
    dispatch({ type: name, payload: 1 });
  };

  return (
    <div className={s.feedbackWrapper}>
      <Section title={'Please Leave Feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={['Good', 'Neutral', 'Bad']} />
      </Section>

      <Section title={'Statistics'}>
        {
          showStatistics
            ? <Statistics good={state.good} neutral={state.neutral} bad={state.bad}/>
            : <Notification message='There is no feedback' />
        }
      </Section>
    </div>
  );
};

export default Feedback;
