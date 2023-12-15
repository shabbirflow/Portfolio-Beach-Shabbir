"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Loader } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Too short!")
        .max(25, "Too long!")
        .required("Required"),
      subject: Yup.string()
        .min(3, "Too short!")
        .max(25, "Too long!")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .min(3, "Too short!")
        .max(25, "Too long!"),
      message: Yup.string()
        .min(3, "Too short!")
        .required("Required")
        .max(120, "Too"),
    }),
    onSubmit: (values) => {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_API_KEY as string
        )
        .then(
          (result) => {
            console.log("SENT EMAIL", result.text);
            setToast(true);
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .catch((err: Error) => {
          throw new Error(err.message);
        });
    },
  });
  return (
    
      <form
        onSubmit={formik.handleSubmit}
        className="md:w-[95%] w-[100vw] md:p-0 p-2"
        ref={formRef}
      >
        {toast && (
          <div
            className="toast toast-middle toast-end cursor-pointer z-30"
            onClick={() => setToast(false)}
          >
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        )}

        <div className="flex flex-row h-28 p-2 justify-between w-full">
          <div className="flex flex-col">
            <input
              className="input input-bordered input-primary h-16 text-base md:w-[22vw] w-[43vw] shadow-sm shadow-accent z-10"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-error p-0.5">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <input
              className="input input-bordered input-primary h-16 text-base md:w-[22vw] w-[43vw] shadow-sm shadow-accent z-10"
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-error p-0.5">{formik.errors.subject}</div>
            ) : null}
          </div>
        </div>

        <div className=" h-28 p-2 flex flex-col">
          <input
            className="input input-bordered input-primary h-16 text-base w-full shadow-sm shadow-accent z-10"
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-error p-0.5">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="p-2 flex flex-col h-44">
          <textarea
            className="textarea textarea-primary w-full h-32 shadow-sm shadow-accent z-10"
            placeholder="Message"
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-error p-0.5">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="w-full p-2 z-20">
          <button
            type="submit"
            className="btn btn-success h-20 w-full z-10 cursor-pointer"
            disabled={!formik.isValid}
          >
            {formik.isSubmitting && !toast ? <Loader /> : "Send Message"}
          </button>
        </div>
      </form>
  );
};

export default ContactForm;
