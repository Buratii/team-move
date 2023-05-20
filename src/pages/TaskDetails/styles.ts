import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import Button from '@components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

export const ProgressBar = styled(Progress.Bar)`
  margin: 4px 0 20px;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 44px;

  width: 100%;
`;
