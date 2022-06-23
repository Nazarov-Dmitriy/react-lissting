import React from "react";

export default function Listing(props) {
  const { ...items } = props;
  const codeValute = (cod, price) => {
    if (cod === "USD") {
      return "$" + price;
    } else if (cod === "EUR") {
      return "€" + price;
    } else {
      return price + " " + cod;
    }
  };

  const itemClassQuantity = (quantity) => {
    if (quantity <= 10) {
      return <p className="item-quantity level-low">{quantity} left</p>;
    } else if (quantity > 10 && quantity <= 20) {
      return <p className="item-quantity level-medium ">{quantity} left</p>;
    } else {
      return <p className="item-quantity level-high  ">{quantity} left </p>;
    }
  };

  console.log(items);
  return (
    <div className="item-list">
      {items.items.map(
        (item) =>
          item.state === "active" && (
            <div className="item" key={item.MainImage.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt={props.title} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">
                  {item.title.length > 50
                    ? item.title.slice(0, 51) + "..."
                    : item.title}
                </p>
                <p className="item-price">
                  {codeValute(item.currency_code, item.price)}
                </p>
                {itemClassQuantity(item.quantity)}
              </div>
            </div>
          )
      )}
    </div>
  );
}
