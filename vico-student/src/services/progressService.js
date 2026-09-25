export function getProgressOverview() {
  return {
    overall: 68,
    foundation: 74,
    chapterProgress: [
      { label: 'Computer Basics', value: 82 },
      { label: 'Hardware', value: 66 },
      { label: 'Keyboard Skills', value: 54 },
    ],
    lessons: [
      { title: 'What is a Machine?', status: 'Completed', progress: 100 },
      { title: 'Computer — A Smart Machine', status: 'In Progress', progress: 65 },
      { title: 'Types of Machines', status: 'Available', progress: 0 },
    ],
  };
}

export function getAchievements() {
  return [
    { title: 'First Lesson Completed', description: 'You completed the first lesson of Foundation 1.', icon: '🏆', unlocked: true },
    { title: 'First Quiz Completed', description: 'You scored well in your first quiz.', icon: '🎯', unlocked: true },
    { title: 'Chapter 1 Explorer', description: 'You reached the end of Chapter 1.', icon: '🌟', unlocked: false },
    { title: 'Learning Streak', description: 'Keep learning for five days in a row.', icon: '🔥', unlocked: false },
  ];
}

export function getRecentActivity() {
  return [
    { title: 'Completed: What is a Machine?', time: '2 hours ago', type: 'Lesson' },
    { title: 'Quiz score: 80%', time: 'Yesterday', type: 'Quiz' },
    { title: 'Unlocked: First Lesson Completed', time: '2 days ago', type: 'Achievement' },
  ];
}
