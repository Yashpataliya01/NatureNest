import React, { useState, useEffect } from "react";
import styles from "./Myrewards.module.css";

function Myrewards() {
  const [userReward, setUserReward] = useState([]);

  const userRewards = async () => {
    try {
      const res = await fetch("/api/post/getuserpost", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data = await res.json();
      console.log("data", data);
      setUserReward(data.rewards || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    userRewards();
  }, []);

  return (
    <>
      <div className={styles.firstdiv}>
        <h1>As a Thanks for Supporting Us 🌴</h1>
        <p>
          We want to extend our heartfelt thanks to you for planting a tree.
          Your contribution helps us create a greener future for all.
        </p>
      </div>
      <div className={styles.rewardHeader}>
        <h1>Your Rewards</h1>
      </div>
      <div className={styles.cardContainer}>
        {userReward.map((item) => (
          <div className={styles.eachcard} key={item._id}>
            <img
              className={styles.rewardImage}
              src={item.image}
              alt={item.name}
            />
            <div className={styles.cardContent}>
              <h2>{item.name}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Myrewards;
