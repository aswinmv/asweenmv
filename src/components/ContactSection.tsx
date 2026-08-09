import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

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

  return (
    <section id="contact" className="py-8 pb-16" aria-labelledby="contact-heading">
      <div className="max-w-2xl">
        <h2 id="contact-heading" className="text-2xl font-semibold text-gray-900 mb-8">{t('contact.heading')}</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('contact.intro')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-800">{t('contact.form.success')}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">{t('contact.form.error')}</p>
              </div>
            )}
          </form>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-4">{t('contact.connect')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:work@aswinmv.in"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                aria-label={t('contact.email')}
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
