import { useContext, useEffect, useState } from 'react'

import { Touchable, Text, TouchableModal, ViewModal, TitleModal, SubTitleModal, Title, TextActions, FlatList, ViewMainModal, Modal, ViewModalHeader, ViewTitleHeader, Input } from './styles'

import api from '../../../../services/api'
import { UserContext } from '../../../../context/UserContext'

export default SelectProduct = ({ options, onChange, initialSelect = [], title = "", max }) => {

  const { userEmail } = useContext(UserContext);
  const [selectedProductById, setSelectedProductById] = useState('')
  const [products, setProducts] = useState([])
  const [price, setPrice] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    ; (async () => {
      let response = await api.get("/products")
      const responseProducts = response.data
      response = await api.get(`/products/producer/${userEmail}`)

      const { products } = responseProducts

      const producerProducts = products
      // Talvez esse diff não dê certo
      const diffArray = responseProducts.filter(
        (p) => !producerProducts.includes(p)
      )
      console.log(diffArray);
      setProducts(diffArray)
    })()
  }, [])

  const addProduct = async () => {
    const response = await api.post(
      "/producers/add/product",
      {
        producerEmail: userEmail,
        productId: selectedProductId,
        price,
      },
      {
        validateStatus: (status) => status < 500,
      }
    )

    if (response.status === 201) {
      // sucesso
    } else {
      // deu ruim, tratar cada status
    }
  }

  return (
    <Touchable onPress={() => setVisible(true)}>
      <Text> Selecione o produto </Text>
      <Text> + </Text>

      <Modal onRequestClose={() => setVisible(false)} visible={visible} animationType={'slide'}>

        <ViewMainModal>

          <ViewModal>
            <Title>
              Selecione seus Produtos
            </Title>

            <ViewModalHeader>
              {/* Aqui entraria a renderização dos produtos não consegui usar o código do professor
                E quando não dá erro na renderização da no useContext e até agr não descobri */}
              <TouchableModal onPress={() => setVisible(false)}>
                <TextActions>Voltar</TextActions>
              </TouchableModal>

              <ViewTitleHeader>
                <TitleModal>{title}</TitleModal>
                <SubTitleModal>{`Selecione até ${max} opeções`}</SubTitleModal>
              </ViewTitleHeader>

              <TouchableModal onPress={() => setVisible(false)}>
                <TextActions>Concluir</TextActions>
              </TouchableModal>

            </ViewModalHeader>


            <Input placeholder='Pesquisar' placeholderTextColor={"#fff"} />
          </ViewModal>


          <FlatList />
        </ViewMainModal>

      </Modal>

    </Touchable>
  )
}