import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import {device} from '../breakpoints';

const  Product = ({product,onDelete}) => {
    return (
        <div>
            <SingleProduct >
                <h1>{product.productName}</h1>
                <h1>Ilość: {product.quantity}</h1>
                <DeleteIconWrapper>
                    <DeleteIcon style={{marginRight:20,cursor:'pointer'}} onClick={() => onDelete(product.id)}/>
                </DeleteIconWrapper>
            </SingleProduct>
        </div>
    )
}

export default Product

const SingleProduct = styled.div`
    min-height:50px;
    width:230px;
    margin:20px 0;
    display:flex;
    align-items:center;
    text-align:center;
    background-color:${props => props.theme.mainColor};
    color:${props => props.theme.fontColor};
    border-radius:20px;
    box-shadow:  inset 3px 2px 5px -1px rgba(0,0,0,0.75),  inset -3px -2px 5px -1px rgba(200,200,200,0.3);

    h1{
        width:100%;
        margin-left:20px;
        text-align:center;
        font-size:15px;
        font-weight:400;
        color:${props => props.theme.fontColor};
    }

    @media ${device.tablet}{
        width:400px;
        h1{
            font-size:20px;
        }
    }

    @media ${device.desktop}{
        width:500px;
        h1{
            font-size:20px;
        }
    }
`

const DeleteIconWrapper = styled.div`
    height:100%;
    margin-left:20px;
`

