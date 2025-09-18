import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import * as Yup from "yup";

const MyForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Your Email is required"),
    subject: Yup.string(), 
    message: Yup.string().required("Your Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://ashik.innovexasolution.com/api/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      const result = await response.json();
      toast.success("Message sent successfully!");
      resetForm();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full bg-[#1A1A1A] px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.name && touched.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Phone Field */}
          <div>
            <Field
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={`w-full px-4 py-3 border bg-[#1A1A1A]  rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone && touched.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Email Field */}
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 border bg-[#1A1A1A]  rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email && touched.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Subject Field */}
          <div>
            <Field
              type="text"
              name="subject"
              placeholder="Subject"
              className={`w-full px-4 py-3 border rounded-md bg-[#1A1A1A]  focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.subject && touched.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Message Field */}
          <div className="col-span-2">
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              rows="8"
              className={`w-full px-4 py-3 border rounded-md bg-[#1A1A1A]  focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                errors.message && touched.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group col-span-2 md:col-span-1 bg-[#1A1A1A]  relative border-2 border-[#fb1359] bg-[#fb1359] text-white font-semibold py-4 px-6 rounded-full cursor-pointer flex items-center justify-center overflow-hidden"
          >
            <FaArrowRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
            <span className="relative z-10 mx-2 scale-95 group-hover:translate-x-4 transition-all duration-500">
              {isSubmitting ? "Sending..." : "Appointment Now"}
            </span>
            <FaArrowRight className="transition-all duration-300 group-hover:opacity-0" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
