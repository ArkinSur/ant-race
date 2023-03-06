import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 40,
  },
})`
  background-color: #fff266;
  padding: 20px 0 20px 0;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #4f2d13;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 70%;
  border-radius: 8px;
  background-color: #4f2d13;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 700;
`;

export const LoadingContainer = styled.View`
  height: 120px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const CardsContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const RaceTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RaceText = styled.Text`
  margin: 20px 0 20px 0;
  color: #4f2d13;
  font-weight: 600;
  font-size: 18px;
`;
