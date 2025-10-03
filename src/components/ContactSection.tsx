import { ArrowUpRight, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 pb-16" aria-labelledby="contact-heading">
      <div className="max-w-2xl">
        <h2 id="contact-heading" className="text-2xl font-semibold text-gray-900 mb-8">Get in touch</h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm always interested in hearing about new projects, opportunities, or just
            connecting with fellow designers and creatives. Drop me a line!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:aswinmv.ux@gmail.com"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
              aria-label="Send email to aswinmv.ux@gmail.com"
            >
              <Mail size={18} aria-hidden="true" />
              <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                aswinmv.ux@gmail.com
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
              href="https://x.com/Avillmilk?t=WK_jOQ2lvR0cKX_zeBEyAw"
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
    </section>
  );
}
