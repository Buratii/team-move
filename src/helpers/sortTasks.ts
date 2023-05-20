import { Task } from '@interfaces/task.interface';

export const sortTasks = (tasks: Task[]) => {
  return tasks.sort((a: Task, b: Task) => {
    if (a.status === 'incomplete' && b.status === 'complete') {
      return -1;
    }
    if (a.status === 'complete' && b.status === 'incomplete') {
      return 1;
    }

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
};
