import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductData } from "../../redux/productSlice";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { IProductData } from "../Types/ProductType";
require("./WomenClothes.scss");
//page component created for women clothes
//this component will render two components which is header and cards.

export const WomenClothes = () => {
  const [filteredItems, setFilteredItems] = React.useState<IProductData[]>([]);
  const [selectedSize, setSelectedSize] = React.useState<string>("All");
  const [title, setTitle] = React.useState("Womens' Clothes");

  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.page);

  React.useEffect(() => {
    let filtered: Array<IProductData> = [];
    filtered =
      selectedSize !== "All"
        ? userState.data.filter((item) => item.size.includes(selectedSize))
        : userState.data;

    setFilteredItems(filtered);
  }, [selectedSize, userState.data]);

  React.useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <div className="page_women-clothes">
      <Header
        title={title}
        sizes={userState.sizes}
        setSelectedSize={setSelectedSize}
      />
      <div className={filteredItems.length?"showcase":"showcase-loading"}>
        {filteredItems.length ? (
          filteredItems.map((item: IProductData, index: number) => (
            <Card key={index} productData={item} />
          ))
        ) : (
          <div className="loading-title">Loading Data</div>
        )}
      </div>
    </div>
  );
};
