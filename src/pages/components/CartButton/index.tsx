import React from 'react';

import Image from 'next/image';
import { Montserrat } from '@next/font/google'
import { Container, Content } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { toggleOpened, selectCart } from '../../../features/cartSlice'


const CartButton: React.FC = () => {
  let dispatch = useDispatch()
  let cartStore = useSelector(selectCart)

  let handleCart = () => {
    dispatch(toggleOpened())
  }

  return (
    <Container onClick={handleCart} >
      <Content>
        <Image src='/cart.svg' alt='Cart icon' width={18} height={18} />
        <p>{cartStore.products.length}</p>
      </Content>
    </Container>
  );
}

export default CartButton;