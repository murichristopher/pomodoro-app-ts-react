import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-shadow: border-box;
  }

  body {
    background-color: ${({ theme }: any) => theme.colors.main};
    font-size: ${({ theme }: any) => theme.sizes.sm};
  }
`;
