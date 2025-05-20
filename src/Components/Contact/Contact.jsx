import React from 'react'
import './contact.css'
import msgIcon from '../../assets/msg-icon.png'
import emailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import addressIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0a7bd1c-e0aa-427c-9ef1-a4f010ba3449");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(`Form Submitted Successfully...`);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  console.log(result)
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Messege <img src={msgIcon} alt="" /></h3>
        <p>Feel free to get in touch with us for any inquiries or assistance. Whether you have questions about our services, need support, or just want to provide feedback, we're here to help. Reach out via the contact form below, and our dedicated team will respond promptly. Your input is valuable to us, and we're always eager to connect and assist you in any way we can.</p>
        <ul>
          <li><img src={emailIcon} alt="" />Contact@ArDev's.com</li>
          <li><img src={phoneIcon} alt="" />03028869217</li>
          <li><img src={addressIcon} alt="" />123 Main Street, Suite 456 City, EX 78910</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label htmlFor="">Phone No</label>
          <input type="text" name='tel' placeholder='Enter your phone number ' required />
          <label htmlFor="">Write Your Messege Here</label>
          <textarea name="messege" rows={6} placeholder='Enter your messege' required></textarea>
          <button type='submit' className='btn darkBtn'>Submit Now<img src={whiteArrow} alt="" /></button>
        </form>
        <span className={`${result !== "Form Submitted Successfully..." ? '' : 'color'}`}>
          {result}
          {result === "Form Submitted Successfully..." && '✔'}
        </span>


      </div>

    </div>
  );

}
export default Contact;