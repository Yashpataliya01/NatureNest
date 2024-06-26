import React, { useState, useEffect, useContext } from "react";
import { useInterval } from "react-use";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/islogin";

function Home() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const { islogin, setislogin, rewardscount, setrewardscount } =
    useContext(AppContext);
  const [rewards, setRewards] = useState([
    {
      name: "Flat 60% OFF",
      details: "On TWS Earbuds, Nackband & Calling Smart Watch",
      uniqueCode: "ERTYJK7412J7485NMN",
      expires: "21-July-2024",
      image:
        "https://images.gizbot.com/img/2021/12/amazon-mivi-days-sale-discount-offers-on-earbuds-headsets-1640235651.jpg",
    },
    {
      name: "Hair Growth",
      details: "Buy 1 Get 1 FREE",
      uniqueCode: "ERTYJK7412J7485NMN",
      expires: "01-Aug-2024",
      image:
        "https://5.imimg.com/data5/GLADMIN/Default/2023/7/322639948/YE/PV/AT/156947208/face-serum-with-hair-oil-combo-pack-offer-buy-one-get-one-free-500x500.jpg",
    },
    {
      name: "90% OFF on Electronics",
      details: "Applicable on Laptops, Tablets, and Accessories",
      uniqueCode: "HGFJHK1234UIJ7896",
      expires: "30-Dec-2024",
      image: "https://cdn.grabon.in/gograbon/images/merchant/1708321808953.jpg",
    },
    {
      name: "50% OFF on Furniture",
      details: "On selected Sofas, Beds, and Dining Sets",
      uniqueCode: "QWERTY1234YUIOP678",
      expires: "10-Sep-2024",
      image:
        "https://www.storieshomes.com/media/weltpixel/owlcarouselslider/images/d/i/dinn-mob-f.jpg",
    },
    {
      name: "Flat 30% OFF",
      details: "On All Groceries",
      uniqueCode: "ZXCVBNM9876LKJH432",
      expires: "05-Oct-2024",
      image:
        "https://www.baapoffers.com/uploads/grofers-get-30-cashback-on-grocery.jpg",
    },
    {
      name: "Exclusive Deal",
      details: "Flat 60% OFF on Premium Watches",
      uniqueCode: "POIUYT4321MNBLK567",
      expires: "20-Nov-2024",
    },
    {
      name: "Special Offer",
      details: "Flat ₹500 Cashback on Flight Bookings",
      uniqueCode: "LKJHGF9876VCXZ123",
      expires: "15-Jul-2024",
      image:
        "https://img.etimg.com/photo/msid-100711573,imgsize-791526/Upto60%25offonwatches.jpg",
    },
    {
      name: "25% OFF",
      details: "On All Beauty Products",
      uniqueCode: "MNBVCX4567LKJH678",
      expires: "30-Jun-2024",
      image: "https://pbs.twimg.com/media/C-J3y-fUQAAhh09.jpg",
    },
    {
      name: "Free Shipping",
      details: "On Orders Above ₹1000",
      uniqueCode: "QAZXSW1234EDCVFR567",
      expires: "01-Jan-2025",
      image:
        "https://cdn.prod.website-files.com/5ef27cb65411b70949a151e9/5fa67b376084e378d68125bc_Free%20shipping%20(1).png",
    },
    {
      name: "30% OFF",
      details: "On All Sports Gear",
      uniqueCode: "PLKMJHGF5678XCVBNM",
      expires: "22-Aug-2024",
      image:
        "https://www.shutterstock.com/image-illustration/30-off-tag-sign30-design-260nw-2295858999.jpg",
    },
    {
      name: "Free Gift",
      details: "With Every Purchase Above ₹1500",
      uniqueCode: "QWERTY9876YUIOP123",
      expires: "05-Nov-2024",
      image:
        "https://t4.ftcdn.net/jpg/04/23/98/19/360_F_423981991_w1ZYf0ah4WWKe1R8BOxd3OgGDRPKEzp1.jpg",
    },
    {
      name: "40% OFF on Books",
      details: "On All Bestsellers and New Releases",
      uniqueCode: "ASDFGH1234JKL5678",
      expires: "28-Aug-2024",
      image:
        "https://bargainbookhutonline.com/public/storage/mobilebanner/hGskWDFvVjz8BE1YXbZAvZKOuw6ZkSe1JVP734E2.jpeg",
    },
    {
      name: "Special Discount",
      details: "Flat 40% OFF on Kitchen Appliances",
      uniqueCode: "HGFJHK1234UIJ7896",
      expires: "18-Oct-2024",
      image:
        "https://www.premierkitchen.in/wp-content/uploads/2022/10/mixer-grinder.jpg",
    },
    {
      name: "Flat ₹1000 OFF",
      details: "On Orders Above ₹5000",
      uniqueCode: "QAZXSW1234EDCVFR567",
      expires: "30-Sep-2024",
      image:
        "https://www.baapoffers.com/uploads/get-flat-rs-1000-off-on-bill-value-of-rs-3890-and-above-at-ajio.jpg",
    },
    {
      name: "Flat 80% OFF",
      details: "On Selected Fashion Items",
      uniqueCode: "PLKMJHGF5678XCVBNM",
      expires: "12-Dec-2024",
      image:
        "https://m.economictimes.com/thumb/height-450,width-600,imgsize-323182,msid-101778071/amazon-prime-day-sale.jpg",
    },
    {
      name: "Exclusive Offer",
      details: "Free Movie Tickets with Orders Above ₹2500",
      uniqueCode: "OIUYTREW4567ASDFG8",
      expires: "15-Aug-2024",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/flipi-sixteen_nine.jpg?VersionId=TAKw0THMhlLk0rh0kPPp9kb98i4vV1Pq",
    },
    {
      name: "50% OFF on Travel Accessories",
      details: "On All Backpacks, Suitcases, and More",
      uniqueCode: "LKJHGF9876VCXZ123",
      expires: "05-Sep-2024",
      image: "https://drillthedeal.com/IMAGE/TA_Hero_BAU_PC_1_51.jpg",
    },
    {
      name: "25% OFF",
      details: "On All Fitness Equipment",
      uniqueCode: "MNBVCX4567LKJH678",
      expires: "30-Jul-2024",
      image:
        "https://divinenutrition.in/cdn/shop/files/DN-Web-Banner-2800x1200.jpg?v=1717588372",
    },
    {
      name: "Special Price",
      details: "₹200 OFF on Your Next Order",
      uniqueCode: "QWERTY1234YUIOP678",
      expires: "01-Oct-2024",
      image:
        "https://www.dealnloot.com/wp-content/uploads/2016/03/Pepperfry-Rs-200-off-on-Rs-1000-or-more-All-users-300x249.gif",
    },
  ]);

  const plantTre = async (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const newreward = rewards[randomIndex];

    try {
      const res = await fetch("api/post/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newreward),
      });
      fetchData();
      setrewardscount((prevcount) => prevcount + 1);
      alert("Thanks for your Support");
    } catch (error) {
      console.log("error");
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch("/api/post/getdata", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data = await res.json();
      setCount(data.count);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>{count}</h1>
          <p className={styles.heroText}>
            Join us in our mission to plant a better future, one tree at a time.
            Your support has helped us plant over {count} trees!
          </p>
          {islogin ? (
            <button
              className={styles.planttree}
              data-text="Awesome"
              onClick={plantTre}
            >
              <span className="actual-text">&nbsp;Plant Tree&nbsp;</span>
              <span aria-hidden="true" className={styles.hovertext}>
                &nbsp;Plant Tree&nbsp;
              </span>
            </button>
          ) : null}
        </div>
        <div className={styles.mainsec}>
          <div className={styles.textContainer}>
            <h2 className={styles.mainsech2}>
              WHERE ARE OUR TREES BEING PLANTED?
            </h2>
            <h1 className={styles.mainsech1}>
              We plant in 35+ countries with local organizations
            </h1>
          </div>
          <div className={styles.cardContainer}>
            <article className={styles.card}>
              <div className={styles.cardimg}>
                <img
                  className={styles.cardImgs}
                  src="https://plus.unsplash.com/premium_photo-1711238062475-5c6b972c1ffb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Brazil"
                />
              </div>
              <div className={styles.projectinfo}>
                <div className={styles.flex}>
                  <div className={styles.projecttitle}>Brazil</div>
                </div>
                <span className={styles.lighter}>
                  Planting projects in Brazil protect thousands of endangered
                  plants and animals.
                </span>
                <button className={styles.cta}>
                  <span>Hover me</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.cardimg}>
                <img
                  className={styles.cardImgs}
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Senegal"
                />
              </div>
              <div className={styles.projectinfo}>
                <div className={styles.flex}>
                  <div className={styles.projecttitle}>Senegal</div>
                </div>
                <span className={styles.lighter}>
                  Planting trees in Senegal helps restore desertified land to
                  its former fertility.
                </span>
                <button className={styles.cta}>
                  <span>Hover me</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.cardimg}>
                <img
                  className={styles.cardImgs}
                  src="https://plus.unsplash.com/premium_photo-1681152778997-6df11cda4ce5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Indonesia"
                />
              </div>
              <div className={styles.projectinfo}>
                <div className={styles.flex}>
                  <div className={styles.projecttitle}>Indonesia</div>
                </div>
                <span className={styles.lighter}>
                  In Indonesia, we help restore forests on former palm oil
                  plantations while creating alternative sources of income.
                </span>
                <button className={styles.cta}>
                  <span>Hover me</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.approchsec}>
          <div className={styles.rightdiv}>
            <h3>OUR TREE PLANTING APPROACH</h3>
            <h1>We restore and protect biodiversity hotspots</h1>
            <h4>
              Instead of monocultures, we grow over 500 different native species
              where they are needed most. Always shoulder-to-shoulder with local
              communities.
            </h4>
          </div>
          <div className={styles.leftdiv}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
              }}
            >
              <img
                width="100%"
                src="https://israel365charity.com/wp-content/uploads/2023/07/before-after-tree-planting.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.imgsection}>
          <h3 className={styles.imgh3}>
            TREES PLANTED BY THE ECOSIA COMMUNITY
          </h3>
          <h1 className={styles.imgh1}>{count}</h1>
          <img
            src="https://www.ecosia.org/static/indexpage/assets/map-dark-mode.61ba233f.svg"
            alt=""
          />
          <div className={styles.activework}>
            <div>
              <h1>20 million</h1>
              <p>people using Plant Future</p>
            </div>
            <div>
              <h1>60+</h1>
              <p>Species</p>
            </div>
            <div>
              <h1>30+</h1>
              <p>countries involved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
