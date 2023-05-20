import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 56px;
  padding: 0 16px;

  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.dark_secondary};
`;

export const Box = styled.View<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  border-radius: 8px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.action_blue : theme.colors.dark_primary};
  border: 1px solid ${({ theme }) => theme.colors.dark_secondary};
`;
