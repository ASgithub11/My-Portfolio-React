import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        return isValidEmail ? '' : 'Your email is invalid';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });

        let newErrors = { ...errors };

        if (!value) {
            newErrors[name] = `${name} is required`;
        } else {
            if (name === 'email') {
                newErrors.email = validateEmail(value);
            } else {
                newErrors[name] = '';
            }
        }

        setErrors(newErrors);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        if (!value) {
            newErrors[name] = `${name} is required`;
        } else if (name === 'email') {
            newErrors.email = validateEmail(value);
        }

        setErrors(newErrors);
    };

    return (
        <section className="contact">
            <h1>Contact</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
