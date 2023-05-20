import { Task as TaskParams } from '@interfaces/task.interface';
import Label from '@components/Label';
import Badge from '@components/Badge';

import { Container, ResumeLabel, Wrapper } from './styles';
import theme from '@styles/theme';
import { TouchableOpacityProps } from 'react-native';

interface TaskProps extends TouchableOpacityProps {
  task: TaskParams;
}

export default function Task({ task, disabled, ...rest }: TaskProps) {
  return (
    <Container activeOpacity={0.7} disabled={disabled} {...rest}>
      <Wrapper>
        <Label text={task.title} size={18} weight={700} />
        <Badge completed={disabled} date={task.date} />
      </Wrapper>
      {task?.resume && (
        <ResumeLabel text={task.resume} color={theme.colors.placeholder} />
      )}
    </Container>
  );
}
