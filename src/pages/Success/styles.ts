import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 8rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    margin-top: 4rem;

    img {
      width: 200px;
      margin-bottom: 4rem;
    }
  }

  img {
    max-width: 492px;
    max-height: 293px;
    flex-shrink: 0;
  }

  .order-confirmation {
    h1 {
      color: ${ props => props.theme["yellow-dark"]};
      font-family: "Baloo 2", sans-serif;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }

    h2 {
      color: ${ props => props.theme["base-subtitle"]};
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      margin-bottom: 4rem;
    }
  }

  .order-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    max-width: 526px;
    padding: 4rem;
    border-radius: 6px 36px;
    border: 1px solid ${ props => props.theme.yellow};

    .order-details {
      
    }
  }
`
interface OrderDetailsProps {
  variant: 'yellow-dark' | 'yellow' | 'purple'
}

export const OrderDetails = styled.div<OrderDetailsProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  & svg {
    padding: .8rem;
    border-radius: 100px;
    background-color: ${ props => props.theme[props.variant]};
    color: ${ props => props.theme.white};
    box-sizing: content-box;
  }
`