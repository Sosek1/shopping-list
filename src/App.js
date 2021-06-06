import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  //changing theme

  const [theme, setTheme] = useState("light");
  const [themeBool, setThemeBool] = useState(true);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const boolToogler = () => {
    themeBool === true ? setThemeBool(false) : setThemeBool(true);
  };

  //addForm

  const [showAddForm, setShowAddForm] = useState(false);

  //products

  const [productList, setProductList] = useState([
    {
      id: 1,
      productName: "product1",
      quantity: 1,
    },

    {
      id: 2,
      productName: "product2",
      quantity: 2,
    },

    {
      id: 3,
      productName: "product3",
      quantity: 3,
    },
  ]);

  //add product

  const addProduct = (product) => {
    const { productName, productQuantity } = product;
    const id = Math.floor(Math.random() * 1000) + 1;
    const newProduct = { id, productName, quantity: productQuantity };
    setProductList([...productList, newProduct]);
  };

  //delete product

  const deleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header
          click={() => {
            themeToggler();
            boolToogler();
          }}
          changeColor={themeBool}
        />
        <ContentWrapper
          products={productList}
          onAdd={addProduct}
          onDelete={deleteProduct}
          onClick={() => setShowAddForm(!showAddForm)}
          show={showAddForm}
          changeColor={themeBool}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
