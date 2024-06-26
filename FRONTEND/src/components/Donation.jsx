import React from "react";
import styles from "./donation.module.css";

function Donation() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          backgroundImage:
            'url("https://img.freepik.com/free-photo/donate-sign-charity-campaign_53876-127165.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.modal}>
          <form className={styles.form}>
            <div className={styles.paymentoptions}>
              <button name="paypal" type="button" aria-label="Pay with PayPal">
                <img
                  src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
                  alt=""
                />
              </button>
              <button name="paypal" type="button" aria-label="Pay with PayPal">
                <img
                  src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg"
                  alt=""
                />
              </button>
              <button
                name="Gpay"
                type="button"
                aria-label="Pay with google pay"
              >
                <img
                  src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
                  alt=""
                />
              </button>
            </div>
            <div className={styles.separator}>
              <hr className={styles.line} />
              <p>or pay using credit card</p>
              <hr className={styles.line} />
            </div>
            <div className={styles.creditcardinfoform}>
              <div className={styles.input_container}>
                <label for="password_field" className={styles.input_label}>
                  Card holder full name
                </label>
                <input
                  id="password_field"
                  className={styles.input_field}
                  type="text"
                  name="input-name"
                  title="Inpit title"
                  placeholder="Enter your full name"
                />
              </div>
              <div className={styles.input_container}>
                <label for="password_field" className={styles.input_label}>
                  Card Number
                </label>
                <input
                  id="password_field"
                  className={styles.input_field}
                  type="number"
                  name="input-name"
                  title="Inpit title"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className={styles.input_container}>
                <label for="password_field" className={styles.input_label}>
                  Expiry Date / CVV
                </label>
                <div className={styles.split}>
                  <input
                    id="password_field"
                    className={styles.input_field}
                    type="text"
                    name="input-name"
                    title="Expiry Date"
                    placeholder="01/23"
                  />
                  <input
                    id="password_field"
                    className={styles.input_field}
                    type="number"
                    name="cvv"
                    title="CVV"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <button className={styles.purchasebtn}>Checkout</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Donation;
