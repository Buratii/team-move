import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import * as Yup from 'yup';

import Input from '@components/Input';
import { CreateTaskFormData } from '@interfaces/task.interface';

import DatePicker from '@components/DatePicker';
import theme from '@styles/theme';

import {
  AddChecklist,
  ChecklistInput,
  Container,
  ResumeInput,
  SubmitButton,
  Title,
} from './styles';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTask } from '@hooks/task';
import { useNavigation } from '@react-navigation/native';

const createFormSchema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório.'),
  date: Yup.string().required('Data é obrigatória'),
  resume: Yup.string(),
  checklist: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required('Necessário pelo menos um campo'),
    }),
  ),
});

export default function Schedule() {
  const { addTask, loadTasks } = useTask();
  const { navigate } = useNavigation();

  const { control, handleSubmit } = useForm<CreateTaskFormData>({
    resolver: yupResolver(createFormSchema),
    defaultValues: {
      title: '',
      date: new Date(),
      resume: '',
      checklist: [{ value: '', checked: false }],
      status: 'incomplete',
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'checklist',
  });

  const handleRegister: SubmitHandler<CreateTaskFormData> = async values => {
    try {
      addTask({
        id: String(uuid.v4()),
        ...values,
      });
      navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Title text="Título da atividade" size={12} weight={600} required />
        <Controller
          control={control}
          name="title"
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              value={value}
              placeholder="Adicione um título"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Title text="Data" size={12} weight={600} required />
        <Controller
          control={control}
          name="date"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker value={field.value} onChange={field.onChange} />
          )}
        />

        <Title text="Resumo" size={12} weight={600} />
        <Controller
          control={control}
          name="resume"
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, value } }) => (
            <ResumeInput
              value={value}
              placeholder="Adicione um resumo para a atividade"
              onChangeText={onChange}
              onBlur={onBlur}
              multiline
              numberOfLines={3}
            />
          )}
        />

        <Title text="Checklist" size={12} weight={600} required />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 0, maxHeight: 220 }}
        >
          {fields.map((field, index) => (
            <Controller
              key={field.id}
              control={control}
              name={`checklist.${index}.value`}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <ChecklistInput
                  value={value}
                  placeholder="Adicione um título"
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          ))}
        </ScrollView>

        <AddChecklist
          label="+ novo item"
          bgColor={theme.colors.dark_secondary}
          onPress={() => append({ value: '', checked: false })}
        />

        <SubmitButton
          label="Cadastrar tarefa"
          onPress={handleSubmit(handleRegister)}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
