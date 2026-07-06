function AboutPage() {
  return (
    <div
      style={{
        width: "700px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #b5b08c",
        borderRadius: "10px",
        backgroundColor: "#f8f7f2",
      }}
    >
      <h1 style={{textAlign: "center" }}>
        About Our Shopping Store
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "30px" }}>
        Welcome to our Shopping Store! We provide high-quality products at
        affordable prices. Our goal is to make online shopping easy, fast,
        and enjoyable for every customer.
      </p>

      <h2 >What We Offer</h2>

      <ul style={{ fontSize: "17px", lineHeight: "30px" }}>
        <li>👕 Fashion & Clothing</li>
        <li>💍 Rings & Accessories</li>
        <li>👟 Shoes</li>
        <li>⌚ Watches</li>
        <li>👜 Bags</li>
      </ul>

      <h2>Why Choose Us?</h2>

      <ul style={{ fontSize: "17px", lineHeight: "30px" }}>
        <li>✔ High Quality Products</li>
        <li>✔ Affordable Prices</li>
        <li>✔ Fast Delivery</li>
        <li>✔ Easy Shopping Experience</li>
        <li>✔ Friendly Customer Support</li>
      </ul>

      <h2 >Our Mission</h2>

      <p style={{ fontSize: "18px", lineHeight: "30px" }}>
        Our mission is to provide customers with the best shopping experience
        by offering trusted products, secure services, and excellent customer
        satisfaction.
      </p>
    </div>
  );
}

export default AboutPage;