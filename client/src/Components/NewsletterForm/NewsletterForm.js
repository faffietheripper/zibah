import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hz4se9h", "template_knwa0el", form.current, "qNsMWr4j71vACFSXb").then(
      (result) => {
        console.log(result.text);
        alert("Thank you for signing up, your email as been received and Ruth will be in touch with you soon ");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div>
      <section>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl"> Sign Up and dont miss our sales</h2>
            <p className=" text-gray-200 sm:mt-4 sm:block">
              {" "}
              Send me the Zibah Creations newsletter. I expressly agree to receive the newsletter and know that I can easily unsubscribe at any time.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form className="sm:flex sm:gap-4" ref={form} onSubmit={sendEmail}>
              <div className="sm:flex-1">
                <label className="sr-only">Email</label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <input
                type="submit"
                value="Send"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
