// src/pages/Home.jsx
import { useState } from "react";
import "./Home.css";
import image1 from "../assets/image1.jpg";
import img1 from "../assets/img1.PNG";
import img2 from "../assets/img2.PNG";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img4.PNG";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.PNG";
import img7 from "../assets/img7.PNG";
import img8 from "../assets/img8.PNG";

const PRODUCTS = [
  {
    id: 1,
    brand: "NIKE",
    name: "Bej rangdagi lifestyle krossovka",
    category: "Oyoq kiyim",
    price: 420000,
    image: img1,
    url: "https://uzum.uz/ru/product/shampun-dlya-volos-9122?skuId=11943",
  },
  {
    id: 2,
    brand: "NIKE",
    name: "Ko‘k-sariq Nike krossovka",
    category: "Krossovka",
    price: 420000,
    image: img2,
    url: "https://uzum.uz/ru/product/shampun-dlya-volos-9122?skuId=11943", // keyinchalik alohida link qo'yasan
  },
  {
    id: 3,
    brand: "NIKE",
    name: "Qora sport Nike",
    category: "Krossovka",
    price: 420000,
    image: img3,
    url: "https://uzum.uz/ru/product/shampun-dlya-volos-9122?skuId=11943",
  },
  {
    id: 4,
    brand: "NIKE",
    name: "Binafsha street uslub",
    category: "Krossovka",
    price: 420000,
    image: img4,
    url: "https://uzum.uz/ru/product/shampun-dlya-volos-9122?skuId=11943",
  },
  {
    id: 5,
    brand: "NIKE",
    name: "Qizil classic model",
    category: "Oyoq kiyim",
    price: 420000,
    image: img5,
    url: "https://uzum.uz/ru/product/shampun-dlya-volos-9122?skuId=11943",
  },
  {
    id: 6,
    brand: "Ayollar uchun",
    name: "Ayollar uchun qishki oyoq kiyimlar",
    category: "Oyoq kiyim",
    price: 170100,
    image: img6,
    url: "https://uzum.uz/uz/product/ayollar-uchun-qishki-oyoq-kiyimlar-mango---117-2088908?skuId=7468880",
  },
  {
    id: 7,
    brand: "Ayollar uchun",
    name: "Ayollar uchun qishki oyoq kiyimlar",
    category: "Oyoq kiyim",
    price: 170100,
    image: img7,
    url: "https://uzum.uz/uz/product/ayollar-uchun-qishki-oyoq-kiyimlar-mango---117-2088908?skuId=7468880",
  },
  {
    id: 8,
    brand: "Ayollar uchun",
    name: "Ayollar uchun qishki oyoq kiyimlar",
    category: "Oyoq kiyim",
    price: 170100,
    image: img8,
    url: "https://uzum.uz/uz/product/ayollar-uchun-qishki-oyoq-kiyimlar-mango---117-2088908?skuId=7468880",
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
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card-link"
            >
              <article className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />

                  <button
                    className={`product-like-btn ${isLiked ? "liked" : ""}`}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
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
                    <button
                      className="product-cart-btn"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // bu yerda xohlasang alohida savat logikasini qo'shasan
                      }}
                    >
                      <ion-icon
                        name="cart-outline"
                        className="product-cart-icon"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </article>
            </a>
          );
        })}
      </section>
    </main>
  );
}
