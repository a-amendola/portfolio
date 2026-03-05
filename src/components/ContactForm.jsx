import { useState } from 'react';
import './ContactForm.css'

export function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "43002edc-32a1-4d09-b8ce-e80d571952cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className='contact-form'>
      <input type="hidden" name="subject" value="New Submission from ashleyamendola.com"></input>

      {/* uncomment if i add a success redirect page */}
      {/* <input type="hidden" name="redirect" value="https://ashleyamendola.com/success"></input> */}

      <input type="checkbox" name="botcheck" className="hidden"></input>
      <div className="h-captcha" data-captcha="true"></div>

      <input type="text" name="Name" placeholder='Your name' className="contact-inputs" required/>
      <input type="email" name="Email" placeholder='Your email' className="contact-inputs" required/>
      <input type="text" name="Phone number" placeholder='Your phone number' className="contact-inputs" required></input>
      <textarea name="message" placeholder='Your message...' className="contact-inputs" required></textarea>
      <button type="submit">Submit form</button>
      <span>{result}</span>
    </form>
  );
}