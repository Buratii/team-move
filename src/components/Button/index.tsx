import Label from '@components/Label';
import { Container } from './styles';
import { TouchableOpacityProps } from 'react-native';
import theme from '@styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  bgColor?: string;
}

export default function Button({
  label,
  bgColor,
  style,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Container disabled={disabled} style={style} bgColor={bgColor} {...rest}>
      <Label
        color={disabled ? theme.colors.placeholder : theme.colors.white}
        text={label}
        weight={600}
      />
    </Container>
  );
}
