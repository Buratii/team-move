import Label from '@components/Label';
import { Container } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Label text={title} size={18} weight={700} />
    </Container>
  );
}
