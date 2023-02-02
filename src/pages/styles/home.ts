import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  background: #0F52BA;
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
`

export const Footer = styled.footer`
  font-weight: 400;
  font-size: 12px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEEEEE;
`


export const Logo = styled.p`
  width: fit-content;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "Sistemas";
    position: absolute;
    font-weight: 300;
    font-size: 1.2rem;

    margin-right: -12rem;
  }
`
