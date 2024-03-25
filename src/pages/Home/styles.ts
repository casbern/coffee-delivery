import styled from "styled-components"

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;


  .hero-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    margin-bottom: 2rem;
    margin-right: 4rem;

    & svg {
      background-color: red;
      color: ${ props => props.theme['white']};

      border-radius: 100%;
      padding: 8px;
      box-sizing: content-box;
    }
  }
}
`