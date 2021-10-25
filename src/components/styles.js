import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};

  section {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;

    @media screen and (max-width: 590px) {
      width: 100%;
      padding-top: 1;
    }
  }

  .headerLogo {
    width: 250px;

    @media screen and (max-width: 590px) {
      width: 120px;
    }
  }
`;
