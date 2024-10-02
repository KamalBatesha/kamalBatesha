import React, { useEffect, useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnnaelee");
  if (state.succeeded) {
    return (
      <div className="border-neutral-900 pb-4 my-10">
        <p className="text-center text-4xl icon capitalize">
          Thanks for contact!
        </p>
      </div>
    );
  }

  return (
    <div className="border-b border-neutral-900 pb-4 mb-10">
      <h2 className="my-20 text-center text-4xl capitalize">
        <i className="fas fa-envelope mr-2"></i>Contact us
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <form className="max-w-md mx-auto w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@gmail.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium "
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a message..."
                defaultValue={""}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              send
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <SiMinutemailer className="icon text-[200px]" />
        </div>
      </div>
    </div>
  );
}
/*

<form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

*/
/*



*/
