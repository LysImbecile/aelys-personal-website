import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaDiscord, FaWhatsapp } from "react-icons/fa6";


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [showDiv, setShowDiv] = useState(false);

  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_t0clse1', 'template_rp5cbok', form.current, 'JLs4RrXEyrEoigmxp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
    <div className="animate-fade-in pl-5 flex justify-start items-center bg-cover bg-fixed bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
    <div className="grid grid-cols-2 gap-4 w-full rounded px-8 mt-5 mb-8">
      <form ref={form} onSubmit={sendEmail} className="bg-gradient-to-r from-slate-800 to-transparent w-full max-w-lg  rounded px-8 mt-5 pb-8 mb-4">
        <h1 className='text-center text-white font-bold text-2xl p-5'>Send me an email</h1>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Destinatary Email
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_email" type="email" value="aelyspurecode@gmail.com" disabled />
        </div>
        <label className="block text-white text-sm font-bold mb-2">
            Your name
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_name" type="text" />
        <div className="mb-6">

        <label className="block text-white text-sm font-bold mb-2 pt-2">
            Message topic
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message_topic" name="message_topic" type="text" />
        <div className="mb-6"></div>

          <label className="block text-white text-sm font-bold mb-2">
            Your message
          </label>
          
          <textarea className="shadow opacity-75 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" id="message" name='message' required />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send">
            Send
          </button>
          {showDiv && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"> 
            <strong className="font-bold">Message sent!</strong> </div>}
        </div>
      </form>
      <div className='mr-10 mb-5 mt-5 w-full h-1/2 bg-gradient-to-r from-transparent to-slate-800 rounded-md'>
        <h1 className='text-center text-white text-2xl pt-5 font-bold'>My social medias</h1>
        <div>
          <span className='inline-block pl-10 pt-5 text-white'><FaDiscord className="text-2xl md:text-3xl lg:text-4xl inline-block text-center hover:text-slate-400 duration-300 text-white" /> lowgradeprogramming</span>
          <span className='inline-block pl-10 pt-5 text-white'><FaWhatsapp className="text-2xl md:text-3xl lg:text-4xl inline-block text-center hover:text-slate-400 duration-300 text-white" /> +55 19 98977-0025</span>
        </div>
      </div>
    </div>
    <div>
      </div>
    </div>
    </>
   
  );
}