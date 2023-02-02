import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import { setProducts } from '../features/productsSlice'
import { selectCart }  from '../features/cartSlice'

import * as S from '../styles/HomeStyles'

import CartButton from '../components/CartButton'
import ProductsContainer from '../components/ProductsContainer'
import Cart from '../components/Cart'


export default function Home() {
  let dispatch = useDispatch()
  let cartStore = useSelector(selectCart)
  useEffect(() => {
    axios.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products", {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: "ASC"
      }
    }).then(value  => {
      dispatch(setProducts(value.data))
    })
  }, [])
  return (
    <>
      <Head>
        <title>Shopping</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <S.Container>
        { cartStore.opened ? <Cart /> : null }
        <S.Header>
          <S.Logo >MKS</S.Logo>
          <CartButton />
        </S.Header>
        <ProductsContainer />
        <S.Footer >
          MKS sistemas © Todos os direitos reservados
        </S.Footer>
      </S.Container>
    </>
  )
}
