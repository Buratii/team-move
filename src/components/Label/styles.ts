import { getFontSize } from '@helpers/getFontSize';
import styled from 'styled-components/native';

interface StyledTextProps {
  color: string;
  weight: number;
  size: number;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({ size }) => getFontSize(size)}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;

export const Required = styled.Text`
  color: ${({ theme }) => theme.colors.danger_red};
`;
