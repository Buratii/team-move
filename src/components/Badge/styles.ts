import styled from 'styled-components/native';

export const Container = styled.View<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 0 18px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
