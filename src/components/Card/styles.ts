import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  text-align: center;

  img {
    width: 120px;
    /* position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%); */

    display: block;
    margin-top: -25px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.6rem;
  }
`

export const Tag = styled.span`
  padding: 4px 8px;
  margin-right: 0.4rem;

  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin: 1.6rem 0 0.8rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    width: 216px;

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 216px;
  margin: 3.6rem auto 0;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    button {
      padding: 0.8rem;
      border-radius: 6px;
      border: none;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      cursor: pointer;
    }
  }
`
