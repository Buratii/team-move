import Label from '@components/Label';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  min-height: 62px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.dark_secondary};
  ${({ disabled }) => disabled && 'opacity: 0.5'};
  border-radius: 12px;
  margin-bottom: 12px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ResumeLabel = styled(Label)`
  margin-top: 6px;
`;
