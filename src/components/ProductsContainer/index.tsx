import React, { useState } from 'react';
import Image from 'next/image'
import { Montserrat } from '@next/font/google'

import { Container, Content, Product } from '../../styles/ProductsContainerStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, Product as IProduct, ProductState } from '../../features/productsSlice';
import { increment } from '../../features/cartSlice';

const montserrat = Montserrat({ subsets: ['latin'] })

const ProductsContainer: React.FC = () => {
  let productStore = useSelector(getProducts)

  let dispatch = useDispatch()

  let handleProductInCart = (product: IProduct) => dispatch(increment(product.id))
  

  return (
    <Container>
      <Content>
        {productStore.products.map((product, index) => {
          return (
            <Product key={product.id} >
              <Image src={product.photo} loading='lazy' alt={`${product.photo} image`} fill className='productImage' />
              <div className="texts">
                <div className="title">
                  <h2>{product.name}</h2>
                  <div className="price">R${product.price}</div>
                </div>
                <div className="description">
                  {product.description}
                </div>
              </div>
              <button className="buy-btn" onClick={() => handleProductInCart(product)} >
                <Image src='/shopping-bag.svg' alt='Shopping bag' width={14} height={15.5} />
                COMPRAR
              </button>
            </Product>
          )
        })}
      </Content>
    </Container>
  );
}

export default ProductsContainer;