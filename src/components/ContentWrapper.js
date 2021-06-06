import styled from "styled-components";
import Products from "./Products";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AddProduct from "./AddProduct";
import { device } from "../breakpoints";

function ContentWrapper({
  products,
  onDelete,
  onClick,
  show,
  onAdd,
  changeColor,
}) {
  return (
    <ProductListCointainer>
      <AddWrapper>
        <AddProduct onAdd={onAdd} show={show} />
        <AddIconWrapper>
          <IconButton
            onClick={onClick}
            style={{ color: changeColor ? "#000" : "#fff" }}
          >
            <AddIcon
              style={{ color: fontColor, fontSize: fontSize, cursor: cursor }}
            />
          </IconButton>
        </AddIconWrapper>
      </AddWrapper>
      <PorductsContainer>
        <Products products={products} onDelete={onDelete} />
      </PorductsContainer>
    </ProductListCointainer>
  );
}

export default ContentWrapper;

const fontSize = "30px";
const cursor = "pointer";
const fontColor = `${(props) => props.theme.fontColor}`;

const ProductListCointainer = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  width: 80%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  box-shadow: 3px 2px 5px -1px rgba(0, 0, 0, 0.75),
    -3px -2px 5px -1px rgba(200, 200, 200, 0.3);
  border-radius: 20px;

  @media ${device.tablet} {
    width: 70%;
    min-height: 300px;
  }
`;
const AddWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  margin-top: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  @media ${device.desktop} {
    max-height: 50px;
    flex-direction: row;
  }
`;

const AddIconWrapper = styled.div`
     height:20%;
     width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media ${device.desktop}{
        justify-content:center
        height:100%;
        width:10%;
     }
`;

const PorductsContainer = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;
