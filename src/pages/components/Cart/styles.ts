import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: end;
  transition: 400ms;
`;


export const Content = styled.div`
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  width: 30rem;
  height: 100%;
  padding: 3rem 3rem 0rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    width: 15rem;
    color: #fff;
    ::selection {
      display: none;
    }
  }
  button {
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0.25rem .75rem;
    border-radius: 50%;
    color: #fff;
    background: #000000;
    border: none;
    outline: none;

    cursor: pointer;
  }
`

export const Footer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`

export const FinallyPurchase = styled.button`
  width: 30rem;
  padding: 1.5rem;
  font-weight: 700;
  font-size: 28px;
  background: #000;
  color: #fff;
`

export const Products = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
`