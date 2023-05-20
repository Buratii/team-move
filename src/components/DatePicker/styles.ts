import styled from 'styled-components/native';

export const ToggleButton = styled.TouchableOpacity`
  height: 56px;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_secondary};
  border: 1px solid ${({ theme }) => theme.colors.dark_highlight};
`;
