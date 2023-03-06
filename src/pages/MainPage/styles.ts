import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 70%;
  border-radius: 8px;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 700;
`;
