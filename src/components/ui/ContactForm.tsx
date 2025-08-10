import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData for Formspree
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xdkdydwy', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error - you might want to show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md z-20 relative bg-background shadow-main p-7 rounded-xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border-[1.5px] border-primary-text bg-transparent rounded-lg focus:outline-none hover:border-primary-accent focus:border-primary-accent transition-colors duration-300 placeholder-primary-text/50"
            placeholder="Your name"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border-[1.5px] border-primary-text bg-transparent rounded-lg focus:outline-none hover:border-primary-accent focus:border-primary-accent transition-colors duration-300 placeholder-primary-text/50"
            placeholder="your.email@example.com"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 border-[1.5px] border-primary-text bg-transparent rounded-lg focus:outline-none hover:border-primary-accent focus:border-primary-accent transition-colors duration-300 placeholder-primary-text/50 resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </motion.div>

        {/* Remove file upload UI and file list UI from the form */}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          className="py-4 px-6 mt-4" // matches your old padding and margin
          label={
            isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-primary-text border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : isSubmitted ? (
              <div className="flex items-center justify-center space-x-2">
                <span>✓</span>
                <span>Message Sent!</span>
              </div>
            ) : (
              "Send Message"
            )
          }
        />


        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-4 bg-secondary-accent/20 border border-secondary-accent/30 rounded-lg"
          >
            <p className="text-primary-text">Thank you! Your message has been sent successfully.</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
