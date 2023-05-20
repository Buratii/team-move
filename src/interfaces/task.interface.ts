export type Checklist = { value: string; checked: boolean };

export interface Task {
  id: string;
  title: string;
  date: Date;
  resume: string;
  checklist: Checklist[];
  status: 'incomplete' | 'complete';
}

export type CreateTaskFormData = Omit<Task, 'id'>;
