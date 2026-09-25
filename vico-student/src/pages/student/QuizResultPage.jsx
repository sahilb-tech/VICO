import { Link, useParams } from 'react-router-dom';
import Card from '../../components/common/Card';

export default function QuizResultPage() {
  const { resultId } = useParams();

  return (
    <div className="page-stack">
      <Card title="Quiz result" subtitle={`Result ${resultId}`}>
        <div className="result-box">
          <div className="score-ring">80%</div>
          <div>
            <h3>Great effort!</h3>
            <p>You answered 8 out of 10 questions correctly. Keep going to build confidence.</p>
          </div>
        </div>
      </Card>

      <div className="action-row">
        <Link to="/student/dashboard" className="vico-btn vico-btn-primary">Back to dashboard</Link>
        <Link to="/student/learning" className="vico-btn vico-btn-secondary">Continue learning</Link>
      </div>
    </div>
  );
}
