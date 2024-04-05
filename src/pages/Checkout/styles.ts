import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`

export const OrderDetailsHeader = styled.header`

  display: flex;
  gap: 8px;

  svg {
    color: ${ props => props.theme['yellow-dark']};
  }

  div p:first-child {
    color: ${ props => props.theme["base-subtitle"]};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  div p:nth-child(2) {
    color: ${ props => props.theme["base-text"]};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  
`


export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-family: "Balooo 2", sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  .order-address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 32px;
    padding: 4rem;

    border-radius: 6px;
    background: ${ props => props.theme["base-card"]};


  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 16px;

    input {
      padding: 1.2rem;
      border-radius: 4px;
      border: 1px solid ${ props => props.theme["base-button"]};
      background: ${ props => props.theme["base-input"]};
      width: 100%;


      &::placeholder {
        color: ${ props => props.theme["base-label"]};
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }

      &[placeholder="CEP"] {
        width: 200px;
      }
    }

    div {
        display: flex;
        gap: 12px;
        width: 100%;
      }
  }
}

.order-payment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 32px;

    padding: 4rem;
    border-radius: 6px;
    background: ${ props => props.theme["base-card"]};
  }

  .payment-buttons {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 12px;

    @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    }

    button {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 1.6rem;
    width: 100%;

    color: ${ props => props.theme["base-text"]};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    border: 1px solid ${ props => props.theme["base-button"]};
    border-radius: 6px;
    background: ${ props => props.theme["base-button"]};
    cursor: pointer;

    &:hover {
      border: 1px solid ${ props => props.theme["purple"]};
      background: ${ props => props.theme["purple-light"]};
    }

    svg {
      color: ${ props => props.theme.purple};
    }
  }
}
`

export const OrderSummary = styled.div`

  h1 {
      font-family: "Balooo 2", sans-serif;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;

      margin-bottom: 1.2rem;
    }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 448px;
    padding: 4rem;

    border-radius: 6px 44px;
    background: ${ props => props.theme["base-card"]};

    @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 2rem;
  }
    
    /* &::after {
        content: "";
        height: 0;
        width: 100%;
        border-bottom: 1px solid ${ props => props.theme["base-button"]};
        margin-bottom: 2.4rem;
      } */

    .summary-order {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: .2rem;

      border-bottom: 1px solid ${ props => props.theme["base-button"]};


      img {
        width: 64px;
        height: 64px;
        margin-right: 1rem;
      }

      .summary-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-bottom: 2.4rem;


        p {
          color: ${ props => props.theme["base-subtitle"]};
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          margin-bottom: .8rem;
        }

        .summary-action {
          display: flex;
          gap: 8px;

          svg {
            color: ${ props => props.theme.purple};
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 0 .8rem;
            /* height: 32px; */

            border: 1px solid ${ props => props.theme["base-button"]};
            border-radius: 6px;
            background: ${ props => props.theme["base-button"]};
            cursor: pointer;

            color: ${ props => props.theme["base-text"]};
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            text-transform: uppercase;

            @media (max-width: 768px) {
              width: 50%;
            }

            &:hover {
              border: 1px solid ${ props => props.theme["purple"]};
              background: ${ props => props.theme["purple-light"]};
            }
          }
        }
      }
    }
  }

  .summary-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    gap: 12px;

    & div:last-child span {
      color: ${ props => props.theme["base-subtitle"]};
      text-align: right;

      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    & span {
      color: ${ props => props.theme["base-text"]};
      text-align: right;

      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 4px;
    background: ${ props => props.theme.yellow};
    width: 100%;

    padding: 1.2rem .8rem;
    border-radius: 6px;
    border: 1px solid ${ props => props.theme.yellow};

    color: ${ props => props.theme.white};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${ props => props.theme["yellow-dark"]};
      transition: background-color .2s;
    }
  }
`