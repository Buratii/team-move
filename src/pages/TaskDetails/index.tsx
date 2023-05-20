import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@routes/navigationTypes/NavigationTypes';

import { useTask } from '@hooks/task';
import Task from '@components/Task';
import Label from '@components/Label';
import theme from '@styles/theme';

import { Container, ProgressBar, SubmitButton } from './styles';
import { CheckBox } from '@components/CheckBox';
import { useState } from 'react';

export default function TaskDetails() {
  const route = useRoute<RouteProp<RootStackParamList, 'TaskDetails'>>();
  const { taskId, taskIndex } = route.params;

  const { navigate } = useNavigation();
  const { tasks, updateChecklist } = useTask();

  const item = tasks.find(task => task.id === taskId);

  if (!item) {
    return (
      <Container>
        <Label text="Item not found!" />
      </Container>
    );
  }

  const [checklist, setChecklist] = useState(item.checklist);

  function handleCheckboxClick(index: number) {
    const updatedCheckboxes = [...checklist];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setChecklist(updatedCheckboxes);
  }

  function calculateProgress() {
    const checkedCount = checklist.filter(value => value.checked).length;
    return checkedCount / checklist.length;
  }

  function handleFinishTasks() {
    updateChecklist(taskIndex, checklist);
    navigate('Home');
  }

  return (
    <Container>
      <Task task={item} />
      <ProgressBar
        progress={calculateProgress()}
        width={null}
        height={10}
        color={theme.colors.action_blue}
        unfilledColor={theme.colors.dark_primary}
        borderWidth={0}
      />

      {checklist?.map((checks, index) => (
        <CheckBox
          key={checks.value}
          label={checks.value}
          checked={checks.checked}
          onChange={() => handleCheckboxClick(index)}
        />
      ))}

      <SubmitButton
        disabled={calculateProgress() !== 1}
        onPress={handleFinishTasks}
        label="Finalizar tarefa"
      />
    </Container>
  );
}
