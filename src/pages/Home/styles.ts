import Label from '@components/Label';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin: 20px 0;
`;

export const AddTask = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 28px;
  width: 178px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.action_blue};
  border-radius: 16px;
`;

export const AddTaskLabel = styled(Label)`
  margin-left: 12px;
`;
