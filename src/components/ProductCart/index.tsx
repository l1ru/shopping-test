import React from 'react';

import { Container, Quantity } from '../../styles/ProductCartStyles';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/productsSlice';
import { decrement, increment } from '../../features/cartSlice';

interface IProductCart {
  id: number
  name: string | undefined
  photo: string | undefined
  qtd: string | undefined
  value: string|  undefined
}

const ProductCart: React.FC<IProductCart> = ({photo = "",name,qtd,value, id = 0}) => {

  let dispatch = useDispatch()


  return (
    <Container>
      <div className="description">
        <Image src={photo} loading='lazy' alt={`${name} image`} fill className='productImage' />
        <p>{name}</p>
      </div>
      <Quantity>
        <p className='t-qtd' >Qtd:</p>
        <div className="btn-qtd">
          <button onClick={() => dispatch(decrement(id))} > - </button>
          <p>{qtd}</p>
          <button onClick={() => dispatch(increment(id))} > + </button>
        </div>
      </Quantity>
      <div className="value">R${value}</div>
    </Container>
  );
}

export default ProductCart;