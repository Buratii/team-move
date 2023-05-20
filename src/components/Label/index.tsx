import theme from '@styles/theme';
import { StyleProp, ViewStyle } from 'react-native';

import { Container, StyledText, Required } from './styles';

interface LabelProps {
  text: string;
  color?: string;
  weight?: number;
  size?: number;
  required?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function Label({
  text,
  size = 16,
  color = theme.colors.white,
  weight = 400,
  required = false,
  style,
}: LabelProps) {
  return (
    <Container style={style}>
      <StyledText size={size} color={color} weight={weight}>
        {text}
      </StyledText>
      {required && <Required>*</Required>}
    </Container>
  );
}
