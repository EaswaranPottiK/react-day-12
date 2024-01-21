
function Content(){
    return(
        <section style={{ display: "flex", margin: "50px 25px" }}>
  <img
    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    alt=""
    style={{ maxWidth: "45%", objectFit: "cover" }}
  />
  <div style={{ padding: "10% 3% 0 5%", maxWidth: "45%" }}>
    <p style={{ fontSize: "2rem", fontWeight: 300, paddingLeft: 70 }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
      debitis.
    </p>
    <br />
    <p style={{ paddingLeft: 70, color: "#4B5563" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
      molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores
      provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
      dicta.
    </p>
    <button id="getInTouch">Get in Touch</button>
  </div>
</section>

    )
}

export default Content