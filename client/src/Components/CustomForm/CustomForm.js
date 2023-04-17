import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function CustomForm() {
  const [showModal, setShowModal] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_vnzcvkd", "template_99l7t23", form.current, "Kd-Wy1G6wt9g8lOxT").then(
      (result) => {
        console.log(result.text);
        alert("Hey thank you for reaching out. Your message has been sent and Tino will be in touch with you soon.");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div class="text-center py-16">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">Customise Your Product</h2>

        <p class="max-w-sm mx-auto mt-4 text-gray-200">
          Are you looking for a Zibah Creations handbag that is more individual to you? We can help by creating specific colour and design
          combinations...
        </p>

        <a
          class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white border border-teal-600 rounded-full hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500"
          onClick={() => setShowModal(true)}
        >
          Get started
        </a>
      </div>
      {showModal ? (
        <>
          <div>
            <div className=" flex fixed md:ml-20 overflow-y-auto inset-0 z-50 outline-none focus:outline-none ml-4">
              <div className="relative w-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[90vw] bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Product Customisation Form</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                    </button>
                  </div>
                  {/*body*/}

                  <div class="w-full px-4 sm:px-6 sm:py-16 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                      <h1 class="text-2xl font-bold sm:text-3xl">Order yours today</h1>

                      <p class="my-4 text-gray-500">
                        Please enter your personal details and what product you would like to purchase from the shop. Ruth will be in touch with you as soon as possible.
                      </p>
                    </div>

                    <form ref={form} onSubmit={sendEmail} class="space-y-4">
                      <div>
                        <label class="sr-only">Name</label>
                        <input
                          class="w-full rounded-lg border border-gray-200 p-3 text-sm text-black"
                          type="text"
                          placeholder="Full Name"
                          name="user_name"
                        />
                      </div>

                      <div>
                        <label class="sr-only">Email</label>
                        <input
                          class="w-full rounded-lg border border-gray-200 p-3 text-sm text-black"
                          type="email"
                          placeholder="Email address"
                          name="user_email"
                        />
                      </div>

                      <div>
                        <label class="sr-only">Name of Product</label>
                        <textarea
                          class="w-full rounded-lg border border-gray-200 p-3 text-sm text-black"
                          name="message"
                          placeholder="Name of Product"
                        />
                      </div>

                      <div>
                        <label class="sr-only">Custom Design Specifications </label>
                        <textarea
                          class="w-full rounded-lg border border-gray-200 p-3 text-sm text-black"
                          name="message"
                          placeholder="Custom Design Specifications "
                        />
                      </div>
                      <div>
                        <button type="submit" value="Send" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                          {" "}
                          Request Quote{" "}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/*footer*/}
                  <div className="flex justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : null}
    </div>
  );
}
