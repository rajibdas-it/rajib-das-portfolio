/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Email = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kcs796n",
        "template_lkg71wx",
        form.current,
        "V8qUwv4mUYLQJ8-cg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("your message has been sent", { autoClose: 1500 });
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
          toast.error(`${error.text}`, { autoClose: 1500 });
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            type="text"
            name="user_firstName"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <input
            type="text"
            name="user_lastName"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>
      </div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          name="user_email"
          placeholder="type your email here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Messages</span>
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24"
          placeholder="type your message here..."
        ></textarea>
      </label>
      <button
        type="submit"
        className="flex justify-center items-center mt-5 btn btn-outline w-full lg:w-2/6 text-center  btn-primary"
      >
        Send
      </button>
    </form>
  );
};

export default Email;
