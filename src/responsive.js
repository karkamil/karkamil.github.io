import {css} from "styled-components"

export const desktop = (props) =>{
  return css`
    @media only screen and (max-width: 1024px){
      ${props}
    }
  `;
};

export const small = (props) =>{
  return css`
    @media only screen and (max-width: 740px){
      ${props}
    }
  `;
};

export const mobile = (props) =>{
  return css`
    @media only screen and (max-width: 512px){
      ${props}
    }
  `;
};