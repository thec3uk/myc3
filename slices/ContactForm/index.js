import React, { useState } from "react";
import { RichText } from "prismic-reactjs";

const ContactForm = ({ slice }) => {
  const {
    form_name,
    name_label,
    email_label,
    category_label,
    subject_label,
    message_label,
    submit_button_label,
    consent_label,
    thank_you_message,
  } = slice.primary;

  const categories = slice.items || [];
  const formName = form_name || "contact";

  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (categories.length > 0 && !formData.category)
      newErrors.category = "Please select a category";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must agree to continue";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formName,
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject,
          message: formData.message,
          consent: formData.consent ? "yes" : "no",
        }),
      });
      setFormState("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setFormState("error");
    }
  };

  const inputClasses =
    "w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const errorClasses = "text-red-500 text-sm mt-1";

  if (formState === "success") {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 justify-center items-center my-6">
        <div className="md:col-span-1 md:col-start-2 prose px-4">
          {thank_you_message && thank_you_message.length > 0 ? (
            <RichText render={thank_you_message} />
          ) : (
            <p>Thank you for your message. We will be in touch soon.</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 justify-center items-center my-6">
      <div className="md:col-span-1 md:col-start-2 px-4">
        <form
          onSubmit={handleSubmit}
          noValidate
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Honeypot */}
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          {/* Name */}
          <div className="mb-4">
            <label htmlFor={`name-${formName}`} className={labelClasses}>
              {name_label || "Name"}
            </label>
            <input
              type="text"
              id={`name-${formName}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.name && <p className={errorClasses}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor={`email-${formName}`} className={labelClasses}>
              {email_label || "Email"}
            </label>
            <input
              type="email"
              id={`email-${formName}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.email && <p className={errorClasses}>{errors.email}</p>}
          </div>

          {/* Category */}
          {categories.length > 0 && (
            <div className="mb-4">
              <label htmlFor={`category-${formName}`} className={labelClasses}>
                {category_label || "Category"}
              </label>
              <select
                id={`category-${formName}`}
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">-- Select --</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat.category_name}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className={errorClasses}>{errors.category}</p>
              )}
            </div>
          )}

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor={`subject-${formName}`} className={labelClasses}>
              {subject_label || "Subject"}
            </label>
            <input
              type="text"
              id={`subject-${formName}`}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.subject && <p className={errorClasses}>{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor={`message-${formName}`} className={labelClasses}>
              {message_label || "Message"}
            </label>
            <textarea
              id={`message-${formName}`}
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.message && <p className={errorClasses}>{errors.message}</p>}
          </div>

          {/* Consent */}
          <div className="mb-6">
            <label className="flex items-start space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="text-sm text-gray-700 prose prose-sm">
                {consent_label && consent_label.length > 0 ? (
                  <RichText render={consent_label} />
                ) : (
                  "I consent to my data being processed."
                )}
              </span>
            </label>
            {errors.consent && <p className={errorClasses}>{errors.consent}</p>}
          </div>

          {/* Error banner */}
          {formState === "error" && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              Something went wrong. Please try again.
            </div>
          )}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="transition duration-200 text-lg py-3 px-8 border shadow bg-white text-gray-900 hover:text-red-500 active:text-red-400 hover:translate-y-px hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "submitting"
                ? "Sending..."
                : submit_button_label || "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
