import "./header.css";

function Header() {
  return (
    <div className="top">
      <img src="/public/Top.png" alt="" />
      <input type="text" placeholder="Search..." className="search-bar" />
    </div>
  );
}

export default Header;
