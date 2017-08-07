export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '37, 37, 37',
  grey: '221, 221, 221',
  lightGrey: '248, 248, 248',
  darkGrey: '128, 128, 128',
  blue: '97, 218, 251',
  gold: '246, 203, 71',
  green: '16, 173, 82',
  red: '221, 69, 65'
};

export const fonts = {
  small: '12px',
  medium: '16px',
  large: '20px',
  h1: '40px',
  h2: '32px',
  h3: '28px',
  h4: '20px',
  h5: '16px',
  h6: '14px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const padding = {
  smallPadding: '15px',
  mediumPadding: '25px',
  largePadding: '50px'
};

export const responsive = {
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px'
  },
  sm: {
    min: 'min-width: 599px',
    max: 'max-width: 600px'
  },
  md: {
    min: 'min-width: 899px',
    max: 'max-width: 900px'
  },
  lg: {
    min: 'min-width: 1199px',
    max: 'max-width: 1200px'
  }
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');

  html, body, #root, #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(${colors.lightGrey});
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: ${fonts.medium};
    color: rgb(${colors.dark});
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: ${fonts.h1};
  }
  h2 {
    font-size: ${fonts.h2};
  }
  h3 {
    font-size: ${fonts.h3};
  }
  h4 {
    font-size: ${fonts.h4};
  }
  h5 {
    font-size: ${fonts.h5};
  }
  h6 {
    font-size: ${fonts.h6};
  }
  p {
    font-size: ${fonts.medium};
  }
  span {
    font-size: ${fonts.small};
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }
`;
