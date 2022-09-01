import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "NanumSquare";
  }

  html,
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "NanumSquare";
    font-size: 16px;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
  }
`;
