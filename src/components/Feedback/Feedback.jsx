import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import s from './feedback.module.scss';

function Feedback() {
  const[good, setGood] = React.useState(0);
  const[neutral, setNeutral] = React.useState(0);
  const[bad, setBad] = React.useState(0);
  const[total, setTotal] = React.useState(0);

  const onLeaveFeedback = event => {
    const name = event.currentTarget.name;
    if (name === 'good'){
      setGood(prevState => prevState + 1);
    }
    if (name === 'neutral'){
      setNeutral(prevState => prevState + 1);
    }
    if (name === 'bad'){
      setBad(prevState => prevState + 1);
    }
    setTotal(prevState => prevState + 1);
  };

  return (
    <div className={s.feedbackWrapper}>
      <Section title={'Please Leave Feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={['Good', 'Neutral', 'Bad']}/>
      </Section>

      <Section>
        {
          total > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
            : <Notification message="There is no feedback"/>
        }
      </Section>
    </div>
  );
}

export default Feedback;
