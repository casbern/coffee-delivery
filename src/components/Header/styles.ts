import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const Location = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['purple-light']};

  color: ${(props) => props.theme['purple-dark']};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`
