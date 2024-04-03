import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 4rem;
  margin-bottom: 4rem;
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

    header {
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
  }

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

  header {
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
  }

  .payment-buttons {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 12px;

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
      padding: .8rem;

      border-bottom: 1px solid ${ props => props.theme["base-button"]};


      img {
        width: 64px;
        height: 64px;
        margin-right: 2rem;
      }

      .summary-info {
        display: flex;
        flex-direction: column;
        flex: 2;
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

            &:hover {
              border: 1px solid ${ props => props.theme["purple"]};
              background: ${ props => props.theme["purple-light"]};
            }
          }
        }
      }
    }
  }

  
`