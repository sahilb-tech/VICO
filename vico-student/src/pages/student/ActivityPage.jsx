import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Card from '../../components/common/Card';
import StateMessage from '../../components/common/StateMessage';
import { getLessonContent } from '../../services/curriculumService';
import { recordActivityCompletion } from '../../services/progressService';

export default function ActivityPage() {
  const { activityId } = useParams();
  const lesson = getLessonContent(activityId);
  const [selected, setSelected] = useState('');
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleCheck = () => {
    if (selected === lesson.interactiveActivity.correctAnswer) {
      recordActivityCompletion({ lessonId: lesson.id, activityId });
      setCompleted(true);
    }
  };

  if (!lesson) {
    return <StateMessage type="error" title="Activity not found" message="This learning activity is not available." />;
  }

  return (
    <div className="page-stack">
      <Card title={lesson.interactiveActivity.title} subtitle={lesson.topic}>
        <div className="activity-panel">
          <p>{lesson.interactiveActivity.description}</p>
          <div className="choice-grid">
            {lesson.interactiveActivity.choices.map((choice) => (
              <button
                key={choice}
                type="button"
                className={`choice-button ${selected === choice ? 'selected' : ''} ${selected === choice && feedback.startsWith('Wrong') ? 'incorrect' : ''}`}
                onClick={() => {
                  setSelected(choice);
                  setFeedback(choice === lesson.interactiveActivity.correctAnswer ? 'Correct answer. Click Check answer to continue.' : 'Wrong answer. Try again.');
                }}
              >
                {choice}
              </button>
            ))}
          </div>

          {completed ? (
            <p className="success-message">Great job! You completed the activity.</p>
          ) : feedback.startsWith('Wrong') ? (
            <p className="error-message" role="alert">{feedback}</p>
          ) : feedback ? (
            <p className="success-message" role="status">{feedback}</p>
          ) : (
            <p className="helper-text">Select the correct answer to continue.</p>
          )}
        </div>
      </Card>

      <div className="action-row">
        <button type="button" className="vico-btn vico-btn-primary" onClick={handleCheck}>Check answer</button>
        {completed && (
          <Link to={`/student/practice/${lesson.id}`} className="vico-btn vico-btn-secondary">Continue to practice</Link>
        )}
      </div>
    </div>
  );
}
