import "./Home.css";
const Home = () => {
  const items = [
    {
      category: "Shop Multivitamins",
      image:
        "https://images.ctfassets.net/uuc5ok478nyh/28hfBJ1mqho10JHWUltf0X/720c1c1212efc928775e881214f528b8/Category-Multivitamin.jpg?w=580&h=359&q=90&fm=webp",
    },
    {
      category: "Shop Protein",
      image:
        "https://images.ctfassets.net/uuc5ok478nyh/4HeUbLZGWaKoK7JPYdRuWg/0f36a544cda868ee9603f103c9cbefe0/Category-Protein__1_.jpg?w=580&h=359&q=90&fm=webp",
    },
    {
      category: "Shop Pregnency",
      image:
        "https://images.ctfassets.net/uuc5ok478nyh/59zqn8KhaMI6DcFJ38CnDu/98d1899324e223ceec2f7d1aff84c3ee/Category-Pregnancy__1_.jpg?w=580&h=359&q=90&fm=webp",
    },
    {
      category: "Shop Bundles",
      image:
        "https://images.ctfassets.net/uuc5ok478nyh/2RQ7pdzdW9JmLk0z0shhzM/cb2bdddeb740841de6153bea9e1b7d0f/Category-Bundles.jpg?w=580&h=359&q=90&fm=webp",
    },
  ];

  return (
    <div className="home">
      <div className="home__image">
        <img
          src="https://images.ctfassets.net/uuc5ok478nyh/5IMjUB9sibSRJDXXOwa6aV/2477fa4c6b7ed1b755836f0364b8858a/Home-Hero-Desktop.jpg?w=1920&h=747&q=90&fm=webp"
          alt="Main Image"
        />
        <h1>
          <div>The future</div>
          of health
          <div>
            <em style={{ fontWeight: "400" }}> —is clear.</em>
          </div>
          <button>Shop All</button>
        </h1>
      </div>

      <div className="home__products">
        {items.map((item, index) => (
          <div key={index} className="home__card">
            <img src={item.image} alt={item.category} />
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
