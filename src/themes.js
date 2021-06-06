import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    MainColor:'#E8EBED',
    nav:'#fff',
    fontColor:'#000',
    inputBorder:'1px solid #000',
    inputBorderRadius:'0',
    buttonColor:'#000',
    buttonFontColor:'#fff'
}

export const darkTheme = {
    mainColor:'#3D3C3E',
    fontColor:'#fff',
    inputBorder:'none',
    inputBorderRadius:'20px',
    buttonColor:'#fff',
    buttonFontColor:'#000'
}

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
}

body{
    height:100vh;
    background-color:${props => props.theme.mainColor}; 
}

.App{
    height:100vh;
}
`
    
