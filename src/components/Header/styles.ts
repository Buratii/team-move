import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  height: 72px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark_secondary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 28px;
`;
