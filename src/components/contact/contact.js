import React from "react";
import Footer from "../Navigation/footer"

const Contact = () => {
  return (
    <>
      <section className=" h-48 bg-blue-500 flex flex-col justify-center px-20">
        <h1 className="text-3xl font-bold text-white">Contact us</h1>
        <p className=" text-blue-200 italic">Establish a connection with us</p>
      </section>
      <section className="flex lg:flex-row flex-col py-10">
        <div className="flex-1 lg:mb-0 mb-10 px-5 lg:px-32">
          <div>
            <div className="flex mt-4 mb-2">
              <div className=" flex-col mr-6 flex-1">
                <label className="block text-gray-700">Name</label>
                <input
                  className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className=" flex-col flex-1">
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
                  type="email"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" flex-col mb-2">
              <label className="block text-gray-700">Subject</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
                type="text"
                placeholder=""
              />
            </div>

            <div className=" flex-col">
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="10"
                className="w-full outline-none border-0 px-2 rounded  bg-gray-50"
                type="text"
                placeholder=""
              >
                {" "}
              </textarea>
            </div>
            <div className=" w-56">
              <button className="bg-green-50 text-green-500 border border-green-500 w-full py-4 rounded mt-5 text-lg">
                Submit Request
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:px-0 px-5">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="leading-loose">
            Feel free to send us an email or reach us on any <br></br> of our
            contact details below
          </p>

          <div className="flex mb-10 lg:mb-2 lg:mt-0 mt-10">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-11 h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold mb-1">Reach us</p>
              <p>P.O.Box AQ 249</p>
              <p>Accra-Abokobi</p>
              <p>Ghana</p>
            </div>
          </div>

          <div className="flex mb-10 lg:mb-2">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-11 h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold mb-1">Drop A Mail</p>
              <p>support@landlord.com</p>
              <p>jdotcole233@gmail.com</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-11 h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold mb-1">Call Us</p>
              <p>+233 (503) 848 404</p>
              <p>+233 (503) 848 404</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
