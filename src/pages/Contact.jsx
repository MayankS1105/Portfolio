import React from 'react';

const Contact = () => {
  return (
    <div className="text-white min-h-screen flex flex-col md:flex-row gap-8 md:gap-32 px-4 md:px-20 pt-24 md:pt-36">
      {/* Left Side: Form */}
      <div className="w-full md:w-2/3 ">
        <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-2xl mb-6">I'd love to hear from you!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full max-w-lg p-3 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-lg p-3 rounded bg-gray-700 text-white outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full max-w-lg p-3 rounded bg-gray-700 text-white h-32 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-slate-400 text-white px-6 py-3 rounded hover:bg-gray-300 hover:text-slate-600 transition duration-300 block mt-2 text-left"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: GIF */}
      <div className='w-full md:w-1/3 flex justify-end mt-8 md:mt-0'>
         <div className="h-[180px] w-[140px] md:h-[330px] md:w-[260px] md:block hidden">
        <img src="/Contact-unscreen.gif" alt="Contact" className="w-full h-full object-contain" />
      </div>
      </div>
     
    </div>
  );
};

export default Contact;
