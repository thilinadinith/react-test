import { IProductData } from "../Types/ProductType";

//props productdata defined by common interface of productData
//used picture tag for future perfomance with diffrent image resloutions

interface ICardData {
  productData: IProductData;
}
require("./Card.scss")

export const Card = (props: ICardData) => {
  //tag show logic according to the isSales and isExclusive
  const showTag = () =>{
    let tagvalue=<div className="tag-none"><div></div></div>
    if(props.productData.isSale)
    tagvalue = <div className="tag tag-red"><div>Sale</div></div>
    else if(props.productData.isExclusive)
    tagvalue = <div className="tag tag-green"><div>Exclusive</div></div>
    return tagvalue
  }
  return (
    <div className="card">
      <div className="card-body">
        <picture>
          <source
            media="(min-width: 650px)"
            srcSet={require("../../assets/images/Products/" + props.productData.productImage)}
          />
          <source
            media="(min-width: 465px)"
            srcSet={require("../../assets/images/Products/" + props.productData.productImage)}
          />
          <img
            src={require("../../assets/images/Products/" + props.productData.productImage)}
            alt={props.productData.productName}
          />
        </picture>
        {
          showTag()
        }
        <div className="description">
          <div>{props.productData.productName}</div>
          <div> <p>{props.productData.price}</p></div>
        </div>
        <h1></h1>
       
      </div>
    </div>
  );
};

export default Card;
