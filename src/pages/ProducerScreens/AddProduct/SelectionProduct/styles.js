import styled from "styled-components/native"

// Estilização antes de abrir o Modal
export const Touchable = styled.TouchableOpacity`
  height: 50px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border-color: #fff;
  border-width: 1px;
  padding: 0 12px;
`

// Styles after open the Modal
export const Modal = styled.Modal``

export const ViewMainModal = styled.View`
  flex: 1;
  background-color: #006400;
`
export const Text = styled.Text`
  color: white;
  font-size: 18px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: white;
  text-align: center;
`

export const ViewModal = styled.View`
  background-color: #006400;
  margin: 20px;
`
export const ViewModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TouchableModal = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
`

export const TextActions = styled.Text`
  font-size: 14px;
  color: #00f;
  font-weight: 500;
`

export const TitleModal = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: #777;
`
export const SubTitleModal = styled.Text`
  font-size: 13px;
  text-align: center;
  font-weight: 400;
  color: #999;
`

export const FlatList = styled.FlatList``
export const ViewTitleHeader = styled.View``

// Input configuration
export const Input = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #fff;
  color: #fff;
  padding: 0 10px;
  margin: 10px 0 0 0;
`
