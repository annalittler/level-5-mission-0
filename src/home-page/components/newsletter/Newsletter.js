import React from "react";
import "./Newsletter.css";
import "./NewsletterMQ.css";

export default function Newsletter() {
  return (
    <>
      <div id="newsletter">
        <form action="">
          <input
            type="text"
            placeholder="Enter your email to sign up to our mailing list"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}
