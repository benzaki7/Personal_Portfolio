import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    AOS.init({
        offset: 100,
        duration: 1000,
        once: true,
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-me", name, email, message })
            })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    

        setName('')
        setEmail('')
        setMessage('')
    }
    
    return (
        <section className="contact" id="contact">
            <h2 data-aos="fade-up" className="section-title">Contact</h2>
            <p data-aos="fade-up">Have any questions? I'd love to hear from you!</p>
            <form netlify name="contact" data-aos="fade-up" className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <input type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="row">
                    <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="row">
                    <textarea name="message" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div data-aos="fade" className="social">
                <a target="_blank" href="https://twitter.com/Zaki_Ben77">Twitter</a>
                <a target="_blank" href="https://github.com/benzaki7">Github</a>
                <a href="mailto:benkalizakaria@gmail.com">Email</a>
            </div>
        </section>
    );
};

export default Contact;
