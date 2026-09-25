import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Card from '../../components/common/Card';
import { getLessonContent } from '../../services/curriculumService';

export default function ActivityPage() {
  const { activityId } = useParams();
  const lesson = getLessonContent(activityId);
  const [selected, setSelected] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleCheck = () => {
    if (selected === lesson.interactiveActivity.correctAnswer) {
      setCompleted(true);
    }
  };

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
                className={`choice-button ${selected === choice ? 'selected' : ''}`}
                onClick={() => setSelected(choice)}
              >
                {choice}
              </button>
            ))}
          </div>

          {completed ? (
            <p className="success-message">Great job! You completed the activity.</p>
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
