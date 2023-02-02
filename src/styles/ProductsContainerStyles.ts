import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 61%;
  height: 80%; 
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 32px;
  justify-content: center;
  overflow-y: auto;
`

export const Product = styled.div`
  width: 17rem;
  height: 21rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;

  &.loading {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      background: #9f9fa1;
      width: 100%;
      height: 100%;
      z-index: 2;
      border-radius: .5rem;
    }
  }

  .productImage {
    position: relative !important;
    width: 11rem !important;
    height: unset;
    object-fit: contain;
  }

  .texts {
    max-width: 80%;
    .title {
      display: flex;
      align-items: center;
      h2 {
        font-weight: 400;
        font-size: 1rem;
        color: #2C2C2C;
        width: 70%;
      }
      .price {
        background: #373737;
        display: flex;
        border-radius: .5rem;
        padding: .25rem .8rem;

        font-weight: 700;
        font-size: 1rem;
        color: #fff;
      }
    }

    .description {
      margin-top: .25rem;
      font-weight: 300;
      font-size: 12px;
      color: #2C2C2C;
    }
  }



  .buy-btn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius:  0 0 .5rem .5rem;
    width: 100%;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0F52BA;

    font-weight: 600;
    font-size: 14px;
    color: #fff;

    img {
      margin-right: 0.5rem;
    }
  }
`