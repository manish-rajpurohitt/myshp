import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Shop Name</h1>
      </div>
      <div className="right">
        <div className="search">
          <input type="textarea" placeholder="search products..." />
        </div>
        <button className="cart">
        <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt="Girl in a jacket" width="30" height="30"/>
        </button>
      </div>
            
    </div>
  );
}
