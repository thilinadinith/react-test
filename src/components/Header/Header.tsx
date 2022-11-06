require("./Header.scss")
//interface definition for header props
//parent function binded to get triggerd value of filter
interface IHeaderProps {
  setSelectedSize: Function;
  title: string;
  sizes: Array<string>;
}

function Header(props: IHeaderProps) {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Womens' Clothes</h1>
      </div>
      <div className="filter">
        <select onChange={(e) => props.setSelectedSize(e.target.value)}>
          {props.sizes.map((item: string, index:number) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
