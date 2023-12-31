import { useRef } from "react";
import "../styles/contact.css";
import { MdLockOutline, MdCallEnd } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaUnlockAlt } from "react-icons/fa";
import house from "../img/AL-MUTEENA-TECHNIC-BLDG.jpg";
import emailjs from "@emailjs/browser";
//0701665115
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qjpcd7h",
        "template_fj7s8lr",
        form.current,
        "zLLeWJA3G3UHBTpKC"
      )
      .then(
        (result) => {
          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="house">
        <img src={house} alt="ag house" />
      </div>
      <div className="contact">
        <div className="number">
          <h3>
            AL MUTEENA TECHNIC Building <br />
            6th floor 603 <br />
            Office no 2
          </h3>
          <p>
            <MdCallEnd
              style={{
                color: "#122e53",
                marginRight: "10px",
                fontSize: "20px",
              }}
            />
            +971-048-929-180
          </p>

          <p>
            <BsFillTelephoneFill
              style={{
                color: "#122e53",
                marginRight: "10px",
                fontSize: "15px",
              }}
            />
            +971-569-406-641
          </p>
          <p>
            <BsFillTelephoneFill
              style={{
                color: "#122e53",
                marginRight: "10px",
                fontSize: "15px",
              }}
            />
            +971-545-092-660
          </p>
          <p>
            <BsFillTelephoneFill
              style={{
                color: "#122e53",
                marginRight: "10px",
                fontSize: "15px",
              }}
            />
            +971-582-590-628
          </p>

          <p>
            <GrMail
              style={{
                color: "#122e53",
                marginRight: "10px",
                fontSize: "14px",
              }}
            />
            <email>info@zahiallown.com</email>
          </p>
        </div>
        <div className="hour">
          <h2>Open Hours</h2>
          <p>Sunday to Thursday</p>
          <p>8:00 AM - 5:00 PM</p>
          <p>
            <FaUnlockAlt
              style={{
                color: "#f26722",
                marginRight: "10px",
                fontSize: "20px",
              }}
            />
            Friday: 8:00 AM - 12:00 PM
          </p>
          <p>
            <MdLockOutline
              style={{
                color: "#f26722",
                marginRight: "10px",
                fontSize: "20px",
              }}
            />
            Saturday: Closed
          </p>
        </div>
        <div className="form-item">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <div>
              <input type="text" name="user_name" />
            </div>
            <label>Email</label>
            <div>
              <input type="email" name="email" />
            </div>
            <label>Message</label>
            <div>
              <textarea name="message" />
            </div>
            <div>
              <input type="submit" value="Send" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
