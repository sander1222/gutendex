import "./header.css";

function Header() {
  return (
    <header className="top">
      <img src="/public/Top.png" alt="" />
      <input type="text" placeholder="Search..." className="search-bar" />
    </header>
  );
}

export default Header;
