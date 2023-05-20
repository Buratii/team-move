import { AntDesign } from '@expo/vector-icons';
import { AddTask, AddTaskLabel, Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import Label from '@components/Label';
import { useTask } from '@hooks/task';
import Task from '@components/Task';
import { ScrollView } from 'react-native';

export default function Home() {
  const { tasks } = useTask();
  const { navigate } = useNavigation();

  function handleOpenDetails(id: string, index: number) {
    navigate('TaskDetails', {
      taskId: id,
      taskIndex: index,
    });
  }

  return (
    <Container>
      <ScrollView
        style={{ marginBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {tasks.map((task, index) => (
          <Task
            disabled={task.status === 'complete'}
            key={task.id}
            task={task}
            onPress={() => handleOpenDetails(task.id, index)}
          />
        ))}
      </ScrollView>

      <AddTask onPress={() => navigate('Schedule')}>
        <AntDesign name="plus" size={24} color="white" />
        <AddTaskLabel text="Adicionar Tarefa" size={14} />
      </AddTask>
    </Container>
  );
}
