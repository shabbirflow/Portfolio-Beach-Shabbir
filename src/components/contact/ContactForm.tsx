"use client";
import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<{ show: boolean; type: "success" | "error"; message: string }>({
    show: false,
    type: "success",
    message: "",
  });

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
        .max(50, "Too long!")
        .required("Required"),
      subject: Yup.string()
        .min(3, "Too short!")
        .max(100, "Too long!")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .min(3, "Too short!")
        .max(100, "Too long!"),
      message: Yup.string()
        .min(3, "Too short!")
        .required("Required")
        .max(500, "Too long!"),
    }),
    onSubmit: (_values, { setSubmitting }) => {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_API_KEY as string
        )
        .then(
          () => {
            showToast("success", "Message sent successfully!");
            formik.resetForm();
          },
          () => {
            showToast("error", "Failed to send message. Please try again.");
          }
        )
        .finally(() => setSubmitting(false));
    },
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-4 p-2"
      ref={formRef}
      aria-label="Contact form"
    >
      {toast.show && (
        <div
          className="toast toast-top toast-end cursor-pointer z-30"
          onClick={() => setToast((prev) => ({ ...prev, show: false }))}
          role="alert"
        >
          <div className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-control">
        <input
          className="input w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md rounded-xl"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            aria-invalid={formik.touched.name && !!formik.errors.name}
          />
          {formik.touched.name && formik.errors.name && (
            <label className="label">
              <span className="label-text-alt text-error">{formik.errors.name}</span>
            </label>
          )}
        </div>
        <div className="form-control">
        <input
          className="input w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md rounded-xl"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            aria-invalid={formik.touched.subject && !!formik.errors.subject}
          />
          {formik.touched.subject && formik.errors.subject && (
            <label className="label">
              <span className="label-text-alt text-error">{formik.errors.subject}</span>
            </label>
          )}
        </div>
      </div>

      <div className="form-control">
        <input
          className="input input-bordered input-primary w-full shadow-sm shadow-accent"
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          aria-invalid={formik.touched.email && !!formik.errors.email}
        />
        {formik.touched.email && formik.errors.email && (
          <label className="label">
            <span className="label-text-alt text-error">{formik.errors.email}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <textarea
          className="textarea w-full h-32 bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md rounded-xl resize-none"
          placeholder="Message"
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          aria-invalid={formik.touched.message && !!formik.errors.message}
        />
        {formik.touched.message && formik.errors.message && (
          <label className="label">
            <span className="label-text-alt text-error">{formik.errors.message}</span>
          </label>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary h-14 w-full shadow-[0_0_20px_rgba(var(--p),0.3)] hover:shadow-[0_0_30px_rgba(var(--p),0.5)] border-none text-white rounded-xl transition-all duration-300"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? <Loader className="animate-spin" /> : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
