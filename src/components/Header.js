import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import {device} from '../breakpoints';

const Header = ({click,changeColor}) => {
    return (
        <Nav>
            <h1>Lista zakupów</h1>
            <IconButton onClick={click}>
                <Brightness6Icon style={{color:changeColor ? '#000' : '#fff'}}/>    
            </IconButton>
        </Nav>
    ) 
}

export default Header;

const Nav = styled.div`
    height:61px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    background-color:${props => props.theme.nav};
    box-shadow: 1px 1px 1px rgba(0, 0,0, 0.2);

    h1{
       font-weight:400;
       font-size:20px;
       color:${props => props.theme.fontColor}
    }

    @media ${device.tablet}{
        h1{
            font-size:25px;
        }
    }

    @media ${device.desktop}{
        h1{
            font-size:25px;
        }
    }

`




