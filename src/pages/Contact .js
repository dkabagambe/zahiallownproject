// import { useRef } from "react";
import "../styles/contact.css";
import { MdLockOutline, MdCallEnd } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_lbveonj",
  //       "template_tk08jst",
  //       form.current,
  //       "IaD2VR089lJmkpBd2"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);

  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact">
      <div className="number">
        <h3>
          Location m floor office 61 <br />
          Sa lahudin road Ag house
        </h3>
        <p>
          <MdCallEnd
            style={{ color: "#122e53", marginRight: "10px", fontSize: "20px" }}
          />
          +971-048-929-180
        </p>

        <p>
          <BsFillTelephoneFill
            style={{ color: "#122e53", marginRight: "10px", fontSize: "15px" }}
          />
          +971-569-406-641
        </p>
        <p>
          <BsFillTelephoneFill
            style={{ color: "#122e53", marginRight: "10px", fontSize: "15px" }}
          />
          +971-545-092-660
        </p>
        <p>
          <BsFillTelephoneFill
            style={{ color: "#122e53", marginRight: "10px", fontSize: "15px" }}
          />
          +971-582-590-628
        </p>

        <p>
          <GrMail
            style={{ color: "#122e53", marginRight: "10px", fontSize: "14px" }}
          />
          <email>info@zahiallown.com</email>
        </p>
      </div>
      <div className="hour">
        <h2>Open Hours</h2>
        <p>Monday to Friday</p>
        <p>8:00 AM - 5:00 PM</p>
        <p>
          <MdLockOutline
            style={{ color: "#f26722", marginRight: "10px", fontSize: "20px" }}
          />
          Saturday: Closed
        </p>
        <p>
          <MdLockOutline
            style={{ color: "#f26722", marginRight: "10px", fontSize: "20px" }}
          />
          Sunday: Closed
        </p>
      </div>
      <div className="form-item">
        <form>
          <label>Name</label>
          <div>
            <input type="text" name="user_name" />
          </div>
          <label>Email</label>
          <div>
            <input type="email" name="user_email" />
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
  );
};

export default Contact;
