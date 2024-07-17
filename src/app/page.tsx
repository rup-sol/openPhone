"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter(); 

  return (
    <div className={styles.container}>
      <div className={styles.loginItem}>
        <h1 className="text-center">Login to Your Account</h1>
        <h5 className="text-center text-secondary">
          "Welcome to the Admin Portal.{" "}
        </h5>
        <h5 className="text-center text-secondary">
          Please log in to access and manage your system's settings and data
          securely."
        </h5>{" "}
      </div>
      <div
        className={`d-flex justify-content-between align-items-center p-3  ${styles.textBox}`}
      >
        <div className={styles.inputBoxLeft}>
          <div className="input-group ">
            <input
              type="text"
              aria-label="First name"
              className={`form-control p-3 ${styles.textBorder}`}
              placeholder="Email"
            />
          </div>
          <div className="input-group ">
            <input
              type="text"
              aria-label="First name"
              className={`form-control p-3 mt-2  ${styles.textBorder}`}
              placeholder="Password"
            />
          </div>
          <div className="text-left">
            <button
              className={`btn btn-outline-secondary text-black p-3 mt-2 ${styles.loginButton}`}
              onClick={() => router.push("/Dashboard")}
            >
              {" "}
              Login to Your Account
            </button>
          </div>
          {/* <div className="text-secondary">Don't have an account yet? <span className="text-dark">Register now!</span></div> */}
        </div>
        <div>
          {/* <div className={styles.inputBoxRight}>
            <div className="">
              <button
                aria-label="First name"
                className={`p-3 ${styles.buttonSet}`}
              > Sign in With Google</button>
            </div>
            <div>
              <button
                aria-label="First name"
                className={`p-3 mt-2 ${styles.buttonSet}`}
              >Sign in With Facebook</button>
            </div>  
            <div className="">
            <button
                aria-label="First name"
                className={`p-3 mt-2 ${styles.buttonSet}`}
              >Sign in with Apple Account</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
