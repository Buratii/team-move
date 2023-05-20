import Label from '@components/Label';
import { Container } from './styles';
import { formatDistanceToNowStrict, isAfter, isToday } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import theme from '@styles/theme';

interface BadgeProps {
  date: Date;
  completed?: boolean;
}

export default function Badge({ date, completed }: BadgeProps) {
  const currentDate = new Date();

  const getBadgeData = () => {
    if (isToday(new Date(date))) {
      return {
        label: 'hoje',
        color: theme.colors.warning_yellow,
      };
    }

    if (isAfter(currentDate, new Date(date))) {
      return {
        label: `${formatDistanceToNowStrict(new Date(date), { locale })}`,
        color: theme.colors.danger_red,
      };
    }

    return {
      label: `${formatDistanceToNowStrict(new Date(date), { locale })}`,
      color: theme.colors.success_green,
    };
  };

  const badgeData = getBadgeData();

  return (
    <Container
      bgColor={completed ? theme.colors.success_green : badgeData.color}
    >
      <Label text={completed ? 'Concluido' : badgeData.label} size={12} />
    </Container>
  );
}
