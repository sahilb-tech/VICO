import Card from '../../components/common/Card';
import ProgressCard from '../../components/student/ProgressCard';
import { getProgressOverview } from '../../services/progressService';

export default function Progress() {
  const progress = getProgressOverview();

  return (
    <div className="page-stack">
      <Card title="My Progress" subtitle="Foundation overview and learning status">
        <div className="stacked-progress">
          <ProgressCard label="Overall progress" value={progress.overall} />
          <ProgressCard label="Foundation results" value={progress.foundation} accent="green" />
        </div>
      </Card>

      <Card title="Chapter progress" subtitle="Current areas of focus">
        <div className="stacked-progress">
          {progress.chapterProgress.map((chapter) => (
            <ProgressCard key={chapter.label} label={chapter.label} value={chapter.value} accent="peach" />
          ))}
        </div>
      </Card>

      <Card title="Recently completed" subtitle="Your latest learnings">
        <ul className="list-clean">
          {progress.lessons.map((lesson) => (
            <li key={lesson.title} className="list-row">
              <span>{lesson.title}</span>
              <small>{lesson.status}</small>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
