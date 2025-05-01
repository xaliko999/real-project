import React, { useState } from 'react';
import './Map.css';

function Map() {
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = () => {
        if (!email || !age || !name || !number) {
            alert('Please enter a message or password!');
        } else {
            alert('Muvaffaqiyatli yuborildi!');
            setEmail('');
            setAge('');
            setName('');
            setNumber('');
        }
    };

    return (
        <div id='contact'>
          <div className="m">
        
          <div className="div"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="800">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23966.10310777122!2d69.2102608!3d41.3357691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1738840992100!5m2!1sru!2s"
                    width="700px" 
                    height="600px" 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe> 
            </div>
            
            <div className="fiv" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="800">
          
                <div className="input-group">
                    <h1>Register</h1>   
                <div className="mop">
                <input 
                        type="text" 
                        placeholder="Special Request" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Age" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Your Phone Number" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                    />
                    
                    <br />
                    <br />
                    <button onClick={handleSubmit}>Send</button>
                </div>
                    
                </div>
            </div>
          </div>
        </div>
    );
}

export default Map;
