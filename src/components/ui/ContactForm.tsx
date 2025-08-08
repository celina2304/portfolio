import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  files: File[];
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    files: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", files: [] });
      setIsSubmitted(false);
    }, 3000);
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
            rows={3}
            className="w-full px-3 py-2 border-[1.5px] border-primary-text bg-transparent rounded-lg focus:outline-none hover:border-primary-accent focus:border-primary-accent transition-colors duration-300 placeholder-primary-text/50 resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </motion.div>

        {/* File Upload */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <label htmlFor="files" className="block text-sm font-medium text-primary-text mb-2">
            Attachments (Optional)
          </label>
          <div className="border-2 border-dashed border-primary-text rounded-lg p-3 text-center hover:border-primary-accent transition-colors duration-300 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}>
            <input
              ref={fileInputRef}
              type="file"
              id="files"
              multiple
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
            />
            <div className="space-y-1">
              <div className="text-2xl">📎</div>
              <p className="text-sm text-primary-text/70">Click to upload files</p>
              <p className="text-xs text-primary-text/50">PDF, DOC, TXT, Images (max 10MB each)</p>
            </div>
          </div>
        </motion.div>

        {/* File List */}
        {formData.files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h4 className="text-sm font-medium text-primary-text">Attached Files:</h4>
            <div className="space-y-2">
              {formData.files.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-3 bg-primary-accent/10 rounded-lg border border-primary-accent/20"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-primary-text">📄</span>
                    <span className="text-sm text-primary-text truncate">{file.name}</span>
                    <span className="text-xs text-primary-text/50">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-primary-accent hover:text-primary-text transition-colors duration-200"
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-4"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-accent text-primary-text font-semibold py-4 px-6 rounded-lg hover:bg-secondary-accent transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
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
            )}
          </button>
        </motion.div>

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
