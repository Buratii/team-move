import theme from '@styles/theme';
import { Container, StyledTextInput } from './styles';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

export default function Input({ style, ...rest }: InputProps) {
  return (
    <Container style={style}>
      <StyledTextInput
        placeholderTextColor={theme.colors.placeholder}
        {...rest}
      />
    </Container>
  );
}
