// src/pages/Home.jsx
import { useState } from "react";
import "./Home.css";
import image1 from "../assets/image1.jpg";
import img1 from "../assets/img1.PNG";
import img2 from "../assets/img2.PNG";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img4.PNG";


const PRODUCTS = [
  {
    id: 1,
    brand: "NIKE",
    name: "Bej rangdagi lifestyle krossovka",
    category: "Oyoq kiyim",
    price: 420000,
    image: img1,
  },
  {
    id: 2,
    brand: "NIKE",
    name: "Ko‘k-sariq Nike krossovka",
    category: "Krossovka",
    price: 420000,
    image: img2,
  },
  {
    id: 3,
    brand: "NIKE",
    name: "Qora sport Nike",
    category: "Krossovka",
    price: 420000,
    image: img3,
  },
  {
    id: 4,
    brand: "NIKE",
    name: "Binafsha street uslub",
    category: "Krossovka",
    price: 420000,
    image: img4,
  },
  {
    id: 5,
    brand: "NIKE",
    name: "Qizil classic model",
    category: "Oyoq kiyim",
    price: 420000,
    image: image1,
  },
  {
    id: 6,
    brand: "NIKE",
    name: "Oq minimal krossovka",
    category: "Oyoq kiyim",
    price: 420000,
    image: image1,
  },
  {
    id: 7,
    brand: "NIKE",
    name: "Ko‘k yugurish krossovkasi",
    category: "Krossovka",
    price: 420000,
    image: image1,
  },
  {
    id: 8,
    brand: "NIKE",
    name: "Kulrang kundalik model",
    category: "Oyoq kiyim",
    price: 420000,
    image: image1,
  },
];

export default function Home() {
  // Like tugmalar uchun holat
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Krossovkalar va oyoq kiyimlar</h1>
        <p className="home-subtitle">
          Har kuni yangilanadigan krossovkalar kolleksiyasi
        </p>
      </div>

      <section className="product-grid">
        {PRODUCTS.map((item) => {
          const isLiked = likedIds.includes(item.id);

          return (
            <article key={item.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />

                <button
                  className={`product-like-btn ${isLiked ? "liked" : ""}`}
                  type="button"
                  onClick={() => toggleLike(item.id)}
                >
                  {isLiked ? "♥" : "♡"}
                </button>
              </div>

              <div className="product-info">
                <span className="product-brand">{item.brand}</span>
                <h2 className="product-name">{item.name}</h2>
                <span className="product-category">{item.category}</span>

                <div className="product-bottom">
                  <span className="product-price">
                    {item.price.toLocaleString("uz-UZ")} so&apos;m
                  </span>
                  <button className="product-cart-btn" type="button">
                    <ion-icon
                      name="cart-outline"
                      className="product-cart-icon"
                    ></ion-icon>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
