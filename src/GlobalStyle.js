import { createGlobalStyle } from "styled-components";
import backgroundImage from "./backgroundImage.png"

export const GlobaleStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Red Hat Mono", sans-serif;
  background-image: url("${backgroundImage}");
  background-position: center;
  background-size: cover;
  margin: 80px;
  word-break: break-word;
}

@media (max-width: 768px) {
  body {
    background-size: contain;
    margin: 15px;
  }
}
`