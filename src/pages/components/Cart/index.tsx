import React, { useEffect, useState } from 'react';

import { Container, Content, FinallyPurchase, Footer, Header, Products } from './styles';
import ProductCart from '../ProductCart';

import { useDispatch, useSelector } from 'react-redux';
import { toggleOpened, selectCart } from '@/features/cartSlice';
import { getProducts } from '@/features/productsSlice';

const Cart: React.FC = () => {

  let [total, setTotal] = useState(0)

  let dispatch = useDispatch()
  let cartStore = useSelector(selectCart)
  let productStore = useSelector(getProducts)

  let handleCart = () => {
    dispatch(toggleOpened())
  }

  useEffect(() => {
    // setTotal(0)
    let calculingTotal = 0
    cartStore.products.forEach((product, index) => {
      let findedProduct = productStore.products.find(value => value.id === product.id)
      calculingTotal += Number(findedProduct?.price)
    })
    setTotal(calculingTotal)
  }, [cartStore.products])

  return (
    <Container>
      <Content>
        <Header>
          <h2>Carrinho de compras</h2>
          <button onClick={handleCart} >X</button>
        </Header>
        <Products>
          {cartStore.products.map((product, index) => {
            let findedProduct = productStore.products.find(value => value.id === product.id)
            return (
              <ProductCart 
                id={product.id}
                name={findedProduct?.name}
                photo={findedProduct?.photo}
                qtd={String(product.quantity)}
                value={findedProduct?.price}
                key={product.id}
              />
            )
          })}
        </Products>
        <Footer>
          <p>Total:</p> <p>R${total}</p>
        </Footer>
      </Content>
      <FinallyPurchase>Finalizar Compra</FinallyPurchase>
    </Container>
  );
}

export default Cart;