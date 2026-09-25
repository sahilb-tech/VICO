import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/common/Card';
import { getLessonContent } from '../../services/curriculumService';

export default function QuizPage() {
  const { quizId } = useParams();
  const lesson = useMemo(() => getLessonContent('lesson-what-is-machine'), []);
  const targetQuiz = lesson.quiz.id === quizId ? lesson.quiz : { ...lesson.quiz, questions: [] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = targetQuiz.questions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="page-stack">
        <Card title="Quiz" subtitle="No questions available yet">
          <p>There are no active quiz questions for this lesson.</p>
        </Card>
      </div>
    );
  }

  const handleAnswer = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleNext = () => {
    if (currentIndex < targetQuiz.questions.length - 1) {
      setCurrentIndex((index) => index + 1);
      return;
    }
  };

  const score = Object.keys(answers).length;

  return (
    <div className="page-stack">
      <Card title={targetQuiz.title} subtitle={`Question ${currentIndex + 1} of ${targetQuiz.questions.length}`}>
        <div className="quiz-panel">
          <h3>{currentQuestion.text}</h3>
          <div className="choice-grid vertical">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${answers[currentQuestion.id] === option ? 'selected' : ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="action-row">
            <button type="button" className="vico-btn vico-btn-primary" onClick={handleNext}>
              {currentIndex === targetQuiz.questions.length - 1 ? 'Review result' : 'Next question'}
            </button>
            {score > 0 && (
              <Link to={`/student/result/${targetQuiz.id}`} className="vico-btn vico-btn-secondary">Show result</Link>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
