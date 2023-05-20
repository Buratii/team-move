import styled from 'styled-components/native';
import Button from '@components/Button';
import Label from '@components/Label';
import Input from '@components/Input';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Title = styled(Label)`
  margin: 20px 0 8px 0;
`;

export const ResumeInput = styled(Input)`
  height: 124px;
  justify-content: flex-start;
`;

export const ChecklistInput = styled(Input)`
  margin-bottom: 8px;
`;

export const AddChecklist = styled(Button)`
  margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 44px;

  width: 100%;
`;
