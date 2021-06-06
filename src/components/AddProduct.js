import {useState} from 'react'
import styled from 'styled-components';
import {device} from '../breakpoints';

function AddProduct({onAdd,show}) {

    const [productName,setProductName] = useState('');
    const [productQuantity,setProductQuantity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!productName || !productQuantity){
            alert('Wprowadź nazwę oraz ilość produktu')
            return
        }   

        onAdd({productName,productQuantity})

        setProductName('')
        setProductQuantity('')
    }
    

    return (
        <AddProductForm show={show} onSubmit={onSubmit}>
                <input placeholder="Nazwa produktu" value={productName} onChange={(e) => setProductName(e.target.value)}></input>
                <input placeholder="Ilość" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)}></input>
                <button type='submit' onClick={onAdd}>Dodaj</button>
        </AddProductForm>
    )
}

export default AddProduct

const AddProductForm = styled.form`
    display:${props => props.show ? 'flex' : 'none'}; 
    height:80%;
    width:100%;
    transition:.2s linear;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    input{
        width:70%;
        height:30px;
        padding:7px;
        margin:10px 0;
        font-size:15px;
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom:${props => props.theme.inputBorder};
        border-radius:${props => props.theme.inputBorderRadius};
        font-weight:500;
        ::placeholder{
            font-weight:500;
        }
    }

    input:focus{
        outline:none;
    }

    button{
        width:100px;
        height:40px;
        margin-top:10px;
        background-color:${props => props.theme.buttonColor};
        color:${props => props.theme.buttonFontColor};
        font-size:15px;
        font-weight:500;
        cursor:pointer;
        border:none;
        border-radius:20px;
    }

    @media ${device.desktop}{
        width:90%;
        height:100%;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;

        input{
            width:200px;
            font-size:18px;
        }

        button{
            margin-top:0;
            font-size:18px;
        }
     }
`

