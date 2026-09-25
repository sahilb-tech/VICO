import { getMockStudent } from './authService';

export function getStudentProfile() {
  return {
    ...getMockStudent(),
    foundation: 'Foundation 1',
    badge: 'Grade 1 Explorer',
    learningStats: {
      lessonsCompleted: 4,
      quizzesCompleted: 3,
      streak: 5,
      totalMinutes: 82,
    },
  };
}

export function getStudentOverview() {
  return {
    name: 'Aarav Sharma',
    grade: 1,
    foundationLabel: 'Foundation 1',
    currentChapter: 'Chapter 1: The Super Machine: Computer',
    currentTopic: 'What is a Machine?',
    dailyGoal: 30,
    goalComplete: 18,
  };
}
