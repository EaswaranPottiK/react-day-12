
function Hero(){
    return (
        <div className="content" style={{ position: "relative" }}>
  <img
    src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    alt=""
    width="100%"
    style={{ maxHeight: "92vh", objectFit: "cover" }}
  />
  <div style={{ position: "absolute", top: "25%", left: "10%" }}>
    <p style={{ fontSize: "3rem", fontWeight: 900, paddingLeft: 70 }}>
      Let us find your
    </p>
    <p
      style={{
        fontSize: "3rem",
        fontWeight: 900,
        paddingLeft: 90,
        color: "#BE123C"
      }}
    >
      Forever Food.
    </p>
    <p style={{ fontSize: "x-large" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    <p style={{ fontSize: "x-large", marginLeft: 20 }}>
      Nesciunt illo tenetur fuga ducimus numquam ea!
    </p>
    <div style={{ marginTop: 25 }}>
      <button
        style={{
          cursor: "pointer",
          marginRight: 10,
          fontSize: 14,
          padding: "15px 45px",
          color: "white",
          backgroundColor: "#E11D48",
          borderRadius: 6,
          border: "none"
        }}
      >
        Search Now
      </button>
      <button
        style={{
          cursor: "pointer",
          fontSize: 14,
          padding: "15px 45px",
          backgroundColor: "white",
          color: "#E11D48",
          borderRadius: 6,
          border: "none"
        }}
      >
        Know More
      </button>
    </div>
  </div>
</div>

    )
}

export default Hero;