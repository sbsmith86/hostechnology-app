import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs
            .sendForm('hostechnology', 'contact', form.current, {
                publicKey: 'wOhDJHGBMrTTg_pRh',
            })
            .then(
                () => {
                    setStatus('success');
                },
                (error) => {
                    setStatus('error');
                },
            );
    };

    return (
        <div className="p-4 mx-auto max-w-xl">
            <h1 className="text-3xl text-gray-800 font-extrabold text-center text-primary">How can I help?</h1>
            <form className="mt-8 space-y-4" ref={form} onSubmit={sendEmail}>
                <div className='flex space-x-4'>
                    <input type='text' placeholder='Name' name="user_name" className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                    <input type='email' placeholder='Email' name="user_email" className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                </div>
                <input type='text' placeholder='Subject' name="subject" className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <textarea placeholder='Message' name="message" rows="6" className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                {status === 'loading' ? (
                    <button className="text-white bg-primary hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full cursor-pointer flex space-x-4 flex items-center justify-center" disabled>
                        <span className="loading loading-spinner mr-4"></span>
                        Sending...
                    </button>
                ) : status === 'success' ? (
                    <button className="text-white bg-green-600 tracking-wide rounded-md text-sm px-4 py-3 w-full cursor-pointer" disabled>
                        Sent!
                    </button>
                ) : status === 'error' ? (
                    <button className="text-white bg-red-600 tracking-wide rounded-md text-sm px-4 py-3 w-full cursor-pointer" disabled>
                        Error!
                    </button>
                ) : (
                    <button type="submit" value="Send" className="text-white bg-primary hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full cursor-pointer">
                        Send
                    </button>
                )}

            </form>
        </div>
    );

};