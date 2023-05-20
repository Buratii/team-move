import { getFontSize } from '@helpers/getFontSize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  justify-content: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_secondary};
  border: 1px solid ${({ theme }) => theme.colors.dark_highlight};
`;

export const StyledTextInput = styled.TextInput`
  font-size: ${getFontSize(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
