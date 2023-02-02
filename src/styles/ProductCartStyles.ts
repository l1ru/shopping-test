import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  height: 7rem;
  background: #FFFFFF;
  margin-bottom: 28px;
  border-radius: .5rem;
  padding:  1rem 2rem 1rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  .description {
    display: flex;
    align-items: center;
    p {
      width: 5.5rem;
      font-size: 13px;
    }
    .productImage {
      position: relative !important;
      width: 5rem !important;
      height: unset;
      object-fit: contain;
    }

  }
  .value {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  .t-qtd {
    font-size: 10px;
    font-weight: 400;
  }
  .btn-qtd {
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    border: 0.3px solid #BFBFBF;
    border-radius: .5rem;
    width: 5rem;
    padding: .5rem 0;
    p {
      border-right: 0.2px solid #BFBFBF;
      border-left: 0.2px solid #BFBFBF;
      padding: 0 .75rem;
    }
    button {
      background: none;
      border: none;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
    }
  }
`