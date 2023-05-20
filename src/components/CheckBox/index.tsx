import { AntDesign } from '@expo/vector-icons';

import { Box, Container } from './styles';
import Label from '@components/Label';
import theme from '@styles/theme';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <Container onPress={onChange}>
      <Box checked={checked}>
        {checked && (
          <AntDesign name="check" size={18} color={theme.colors.white} />
        )}
      </Box>

      <Label text={label} />
    </Container>
  );
}
