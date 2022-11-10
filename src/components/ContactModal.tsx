import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
type Props = {
  setShowContactModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContactModal({ setShowContactModal }: Props) {
  const form = useRef(null);

  const sendEmail = async (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();

    await emailjs
      .sendForm(
        'service_9xuad1b',
        'template_48sm4b9',
        form.current,
        'gzAnGNLWJxhMbPdcY'
      )
      .then(
        () => {
          alert('Your email has been sent');
        },
        () => {
          alert('There was an error sending your email');
        }
      );
    setShowContactModal(false);
  };
  return (
    <div className=" top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white mx-auto flex items-center flex-col px-2 py-8 text-center w-96">
        <button
          className="text-primary-400 text-lg font-light place-self-end mr-8"
          onClick={() => setShowContactModal(false)}
        >
          X
        </button>
        <form
          className="p-2 rounded leading-loose"
          ref={form}
          id="#contact-us"
          onSubmit={sendEmail}
        >
          <p className="text-primary-400 text-2xl font-bold mt-6">
            Get in touch with us
          </p>
          <p className="text-black text-lg mt-6 font-light">
            Have feedback? Want to collaborate?
          </p>
          <p className="text-black text-lg mt-6 font-light">
            Send a message to us and will get back
            <br />
            to you <span className="text-primary-300 font-bold">ASAP</span>
          </p>
          <input
            type="email"
            name="email"
            required
            className="required rounded-full bg-primary-0 w-80 h-9 mt-6 p-4 text-black font-light"
            placeholder="Your email address"
          ></input>
          <p className="text-primary-400 text-sm">
            We will send our response to your email address
          </p>
          <textarea
            name="message"
            rows={3}
            cols={30}
            required
            className="required rounded-md bg-primary-0 mt-6 p-4 text-black font-light border"
            placeholder="Your message to us"
          ></textarea>
          <button
            className="w-80 h-9 mt-4 items-center bg-primary-0 hover:bg-collaction-300 text-primary-300
        font-semibold hover:text-black py-2 px-4 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
