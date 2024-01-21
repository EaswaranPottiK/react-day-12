import { Link } from "react-router-dom";

function Header(){
    return(
        <header
  style={{
    height: "9vh",
    maxWidth: "100%",
    backgroundColor: "#111827",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8% 0 8%",
    fontSize: "larger"
  }}
>
  <div style={{ display: "flex", gap: 10 }}>
    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
    <h1>GeekFoods</h1>
  </div>
  <div
    className="headerLinks"
    style={{ display: "flex", gap: "10%", marginRight: 170 }}
  >
    <p><Link to="/" style={{color:'#3B82F6', textDecoration:'none'}}>Home </Link></p>
    <p><Link to="/quote" style={{color:'white', textDecoration:'none'}}>Quote </Link></p>
    <p><Link to="/Resturants" style={{color:'white', textDecoration:'none'}}>Resturants </Link></p>
    <p><Link to="/quote" style={{color:'white', textDecoration:'none'}}>Foods </Link></p>
    <p><Link to="/quote" style={{color:'white', textDecoration:'none'}}>Contact </Link></p>
  </div>
  <div>
    <button
      style={{
        backgroundColor: "#2563EB",
        color: "white",
        width: 100,
        height: "5vh",
        borderRadius: 8,
        border: "none"
      }}
    >
      Get started
    </button>
  </div>
</header>

    )
}

export default Header;