import React, { useState, useRef } from "react";
import "./ContactfForm.scss";
import { Button } from "../../Components/index";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const contactForm = useRef();
  const [res, setIsRes] = useState({
    sending: false,
    sent: false,
    err: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !e.target[0].value.trim() ||
      !e.target[1].value.trim() ||
      !e.target[2].value.trim() ||
      !e.target[3].value.trim() ||
      !e.target[4].value.trim()
    ) {
      setIsRes((prev) => {
        return {
          ...prev,
          err: true,
        };
      });
    } else {
      setIsRes((prev) => {
        return {
          ...prev,
          err: false,
          sending: true,
        };
      });

      emailjs
        .sendForm(
          "gmail",
          "template_w1jd3rl",
          contactForm.current,
          "user_aZUlxr77j4b0Vq1hWXrFl"
        )
        .then(
          (res) => {
            setIsRes((prev) => {
              return {
                ...prev,
                sending: false,
                sent: true,
              };
            });
          },
          (err) => {
            setIsRes((prev) => {
              return {
                ...prev,
                sending: false,
                sent: false,
                err: true,
              };
            });
          }
        );
      e.target.reset();
    }
  };

  return (
    <div className="mh__contactForm">
      <form ref={contactForm} onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="number" name="phone" placeholder="Your telephone" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea rows="10" name="message" placeholder="Message" />
        <div>
          <Button type="submit" className="submit-button">
            {res.sending ? "Sending" : "Send"}
          </Button>
          {res.sent && (
            <p className="seccess">Your Email Is Sent Seccessfully</p>
          )}
          {res.err && (
            <p className="error">An Error Accured or Form is Empty</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
