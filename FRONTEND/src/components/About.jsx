import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <div className={styles.abouthead}>
        <div className={styles.herotag}>
          <h1>We ARE</h1>
          <h2>
            Dedicated to a greener, fairer world, we plant trees to combat
            climate change and use donations to build schools and homes for
            those in need. Join us in making a lasting impact!
          </h2>
          <button className={styles.btn23}>
            <span className={styles.text}>Come </span>
            <span aria-hidden="" className={styles.marquee}>
              Join US
            </span>
          </button>
          <div className={styles.brands}>
            <img
              src="https://ecologi.com/_next/image?url=%2Fimages%2Fapp%2Feco-restoration.png&w=256&q=75"
              alt=""
            />
            <img
              src="https://ecologi.com/_next/image?url=%2Fimages%2Fapp%2Fb-corp.png&w=96&q=75"
              alt=""
            />
            <img
              className={styles.image3}
              src="https://www.khexteriors.net/wp-content/uploads/2020/02/5-Star-Reviews-on-Thumbtack.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.massage}>
          <div className={styles.imgsec}>
            <div className={styles.leftdiv}>
              <h1>Our 2024 Impact Report</h1>
              <h5>
                We're very proud of the impact we are having year on year.
              </h5>
              <p>
                Download our 2024 Impact Report to see how we have made our mark
                and what we are planning next!
              </p>
              <button className={styles.download}>
                <span className={styles.buttoncontent}>Download </span>
              </button>
            </div>
            <div className={styles.rightdiv}>
              <img
                src="https://plus.unsplash.com/premium_photo-1683134055585-3d84cb07b60e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className={styles.imgsec}>
            <div className={styles.rightdiv}>
              <img
                src="https://images.unsplash.com/photo-1442522772768-9032b6d10e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className={styles.leftdiv}>
              <h1 style={{ color: "Brown" }}>
                We're losing more than just trees
              </h1>
              <h5></h5>
              <p>
                Not only does deforestation lead to the loss of habitats and the
                extinction of tens of thousands of species worldwide, it also
                destroys sources of carbon capture, soil stabilisation, and
                water regulation.
              </p>
              <button className={styles.download}>
                <span className={styles.buttoncontent}>Find Out More </span>
              </button>
            </div>
          </div>
          <div className={styles.imgsec}>
            <div className={styles.leftdiv}>
              <h1 style={{ color: "#88be" }}>Want to help ?</h1>
              <h5>
                If you can spare a few hours a month to help spread the word,
                please check out our Ambassador scheme.
              </h5>
              <p></p>
              <button className={styles.download}>
                <span className={styles.buttoncontent}>Help ? </span>
              </button>
            </div>
            <div className={styles.rightdiv}>
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
