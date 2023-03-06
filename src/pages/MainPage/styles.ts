import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 40,
  },
})`
  background-color: #fff;
  padding: 20px 0 20px 0;
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

export const LoadingContainer = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const CardsContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
