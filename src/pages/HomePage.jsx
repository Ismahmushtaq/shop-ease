import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const shopNowHandler = () => {
    navigate("/products");
  };

  const learnMoreHandler = () => {
    navigate("/about");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f8f7f2",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "10px",
          }}
        >
          Welcome to ShopEase
        </h1>

        <h2
          style={{
            color: "#000",
            marginBottom: "20px",
          }}
        >
          Shop Smart, Live Better
        </h2>

        <p
          style={{
            width: "70%",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "30px",
            color: "#444",
          }}
        >
          Discover the latest fashion, accessories, rings, shoes, bags and
          much more. ShopEase provides high-quality products at affordable
          prices with a secure shopping experience.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={shopNowHandler}
            style={{
              padding: "12px 30px",
              backgroundColor: "#000",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "15px",
              fontSize: "16px",
            }}
          >
            Shop Now
          </button>

          <button
            onClick={learnMoreHandler}
            style={{
              padding: "12px 30px",
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "260px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "60px" }}>🚚</div>

          <h3>Fast Delivery</h3>

          <p>
            Get your favorite products delivered quickly and safely.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "60px" }}>💎</div>

          <h3>Premium Quality</h3>

          <p>
            We offer high-quality fashion products at affordable prices.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "60px" }}>💳</div>

          <h3>Secure Payment</h3>

          <p>
            Shop with confidence using our safe payment system.
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}>
        <h2>Shop by Category</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <div style={{ margin: "20px" }}>
            <div style={{ fontSize: "60px" }}>👕</div>
            <h4>Clothes</h4>
          </div>

          <div style={{ margin: "20px" }}>
            <div style={{ fontSize: "60px" }}>💍</div>
            <h4>Rings</h4>
          </div>

          <div style={{ margin: "20px" }}>
            <div style={{ fontSize: "60px" }}>⌚</div>
            <h4>Watches</h4>
          </div>

          <div style={{ margin: "20px" }}>
            <div style={{ fontSize: "60px" }}>👟</div>
            <h4>Shoes</h4>
          </div>

          <div style={{ margin: "20px" }}>
            <div style={{ fontSize: "60px" }}>👜</div>
            <h4>Bags</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;