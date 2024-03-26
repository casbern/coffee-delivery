import styled from "styled-components"

export const HeroContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5.6rem;
padding: 9rem 0;

//!FIX
@media (max-width: 768px) {
  flex-direction: column-reverse;
  justify-content: center;
}

.hero-info {
  & h1 {
    color: ${ props => props.theme["base-title"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 1.6rem;
  }

  & p {
    color: ${ props => props.theme["base-subtitle"]};
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 7rem;
  }
}

.hero-tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
}
`

interface HeroTagProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const HeroTag = styled.div<HeroTagProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 2rem;
    }
    

    & svg {
      background-color: ${ props => props.theme[props.variant]};
      color: ${ props => props.theme['white']};

      border-radius: 100%;
      padding: 8px;
      box-sizing: content-box;
    }
`