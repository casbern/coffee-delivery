import styled from 'styled-components'

export const CartButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  cursor: pointer;
`
export const CartContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    right: -8.345px;
    top: -8px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;

    border-radius: 100%;
    background: ${(props) => props.theme['yellow-dark']};

    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;
  }
`
