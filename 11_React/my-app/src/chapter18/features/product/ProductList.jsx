import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProduct } from "./productSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();

  const product = useSelector(selectProduct);

  const [productName, setProductName] = useState('');

  const handleInputChange = (e) => {
    setProductName(e.target.value);
  };

  const handleAddProduct = () => {
    dispatch(addToProductList(productName));
    setProductName('');
  };

  return (
    <>
      <p>
        상품추가:
        {/* <input type="text" onChange={(e)=>setInputValue(e.target.value)} /> */}
        <input type="text" 
                value={productName} 
                onChange={handleInputChange} 
                onKeyUp={(e) => {if(e.key === 'Enter') {handleAddProduct()}}} />
        <button type="button" onClick={handleAddProduct}>
          추가
        </button>
      </p>

      <p>상품목록</p>
      <ul>
        {/* 반복 렌더링 */}
        {product.map((p, index) => <li key={index}>{p}</li>)}
      </ul>
    </>
  );
};

export default ProductList;