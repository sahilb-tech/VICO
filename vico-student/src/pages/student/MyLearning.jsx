import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import { getCurriculumByGrade } from '../../services/curriculumService';
import { getMockStudent } from '../../services/authService';

export default function MyLearning() {
  const student = getMockStudent();
  const foundation = getCurriculumByGrade(student.grade);

  return (
    <div className="page-stack">
      <Card title="My Learning" subtitle={`Grade ${student.grade} • ${foundation.name}`}>
        <div className="foundation-panel">
          <div>
            <span className="eyebrow">Current pathway</span>
            <h3>{foundation.name}</h3>
            <p>{foundation.description}</p>
          </div>
          <Link to={`/student/foundation/${foundation.id}`} className="vico-btn vico-btn-primary">
            View foundation
          </Link>
        </div>
      </Card>

      {foundation.chapters.map((chapter) => (
        <Card key={chapter.id} title={chapter.title} subtitle={chapter.description}>
          <div className="lesson-list">
            {chapter.lessons.map((lesson) => (
              <div key={lesson.id} className={`lesson-item ${lesson.status.toLowerCase().replace(/\s+/g, '-')}`}>
                <div>
                  <strong>{lesson.title}</strong>
                  <small>{lesson.type}</small>
                </div>
                <div className="lesson-meta">
                  <span>{lesson.duration}</span>
                  <span className="status-pill">{lesson.status}</span>
                </div>
                <Link to={`/student/lesson/${lesson.id}`} className="vico-link">
                  {lesson.status === 'Locked' ? 'Locked' : 'Open'}
                </Link>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
