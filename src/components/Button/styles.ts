import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ bgColor?: string }>`
  height: 48px;
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled
      ? theme.colors.dark_secondary
      : bgColor ?? theme.colors.action_blue};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
