import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  font-family: Covered;
  color: #777777;
  height: 75vh;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: Covered;
    src: url("font.woff");
  }

  animation: right-in 0.5s ease-out 1;
  @keyframes right-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
      transform: translateX(-1rem);
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .highlight {
    color: #cf5659;
    cursor: help;
  }

  .highlight:hover {
    color: #ac4b4c;
  }
  .highlight::after {
    content: "";
    position: absolute;
  }
  .highlight::after:hover {
    width: 200;
    transition: width linear 3s;
  }
`;

export const TextContainer = styled.div<{ mt?: number; fs?: number; fw?: boolean }>`
  margin-top: ${(props) => props.mt || 1}rem;
  font-size: ${(props) => props.fs || 2}rem;
  font-weight: ${(props) => (props.fw ? "bold" : "normal")};
`;

export const SiteListContainer = styled(TextContainer)`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  gap: 1.5rem;
  align-items: center;
`;

export const Link = styled.a`
  color: #777777;
  &:hover {
    color: black;
  }
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  svg {
    font-size: 0.8em;
    margin-right: 0.2em;
  }
`;
