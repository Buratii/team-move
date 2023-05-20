import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { ToggleButton } from './styles';
import Label from '@components/Label';
import theme from '@styles/theme';
import { format } from 'date-fns';

interface DatepickerProps {
  onChange: (value: any) => any;
  value: any;
}

export default function DatePicker({ value, onChange }: DatepickerProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <ToggleButton onPress={() => setShow(true)}>
        <Label
          text={`${value ? format(value, 'dd/MM/yyyy') : 'Selecione a data'}`}
          color={theme.colors.white}
        />
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={theme.colors.white}
        />
      </ToggleButton>
      {show && (
        <DateTimePicker
          value={new Date(value)}
          minimumDate={new Date()}
          onChange={({ nativeEvent: { timestamp } }) => {
            if (timestamp) {
              onChange(new Date(timestamp));
              setShow(false);
            }
          }}
        />
      )}
    </>
  );
}
