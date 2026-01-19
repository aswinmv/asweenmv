import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-8 pb-16" aria-labelledby="contact-heading">
      <div className="max-w-2xl">
        <h2 id="contact-heading" className="text-2xl font-semibold text-gray-900 mb-8">Get in touch</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm always interested in hearing about new projects, opportunities, or just
            connecting with fellow designers and creatives. Drop me a line!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-800">Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">Something went wrong. Please try again or email me directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-4">Or connect with me on:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:work@aswinmv.in"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                aria-label="Send email to work@aswinmv.in"
              >
                <Mail size={18} aria-hidden="true" />
                <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                  work@aswinmv.in
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/aswinmv-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://x.com/asweeenmv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                aria-label="Visit X (Twitter) profile (opens in new tab)"
              >
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                  X (Twitter)
                </span>
              </a>

              <a
                href="https://github.com/aswinmv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
