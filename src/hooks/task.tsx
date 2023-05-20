import { sortTasks } from '@helpers/sortTasks';
import { Checklist, Task } from '@interfaces/task.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type TaskContextData = {
  addTask: (task: Task) => void;
  updateChecklist: (index: number, updatedChecklist: Checklist[]) => void;
  tasks: Task[];
};

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext({} as TaskContextData);

function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    } catch (error) {
      throw Error('Failed to get task.');
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('@tasks');
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);
        const sortedTasks = sortTasks(parsedTasks);
        setTasks(sortedTasks);
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    const sortedTasks = sortTasks(updatedTasks);
    setTasks(sortedTasks);
  };

  const updateChecklist = (index: number, updatedChecklist: Checklist[]) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checklist = updatedChecklist;

    const validateChecks = updatedChecklist.find(data => data.checked === true);

    if (validateChecks) {
      updatedTasks[index].status = 'complete';
    }

    const sortedTasks = sortTasks(updatedTasks);

    setTasks(sortedTasks);
  };

  return (
    <TaskContext.Provider value={{ addTask, updateChecklist, tasks }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTask must be used within an TaskProvider');
  }

  return context;
}

export { TaskProvider, useTask };
