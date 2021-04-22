import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vis-timeline {
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom: 2px solid #A99DE0;
  }

  .vis-group {
    height: 220px !important;
  }

  .vis-item {
    background-color: #fff;
    border-radius: 10px !important;
    padding: 8px;
    border: 2px solid #A99DE0;
    font-size: 14px;
  }

  .vis-panel {
    border: 2px solid #FAFAFA !important;
  }

  .vis-center {
      top: 0 !important;
  }

  .vis-left {
    min-width: 138px !important;
    border: 0 !important;
    top: 80px !important;
    padding-left: 10px;
  }

  .vis-content {
    top: 0 !important;
  }

  .vis-selected {
    background-color: #fff !important;
    border: 2px solid #A99DE0 !important;
  }

  .vis-text {
    color: #AFAFAF !important;
    font-weight: 900;
    font-size: 18px;
  }

`;
 
export default GlobalStyle;