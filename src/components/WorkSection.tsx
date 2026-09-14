import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkSection() {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-8" aria-labelledby="work-heading">
      <div className="max-w-2xl">
        <h2 id="work-heading" className="text-2xl font-semibold text-gray-900 mb-8">{t('work.heading')}</h2>

        <div className="space-y-8">
          <div className="pt-2">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('work.projects.title')}</h3>
            <div className="space-y-4">
              <div className="group">
                <a
                  href="https://www.instagram.com/p/DVdi5nAEnPC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="View Raksha Ayurcare inauguration promo on Instagram (opens in new tab)"
                >
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                    {t('work.projects.raksha')}
                  </span>
                </a>
                <p className="text-sm text-gray-500 mt-1 ml-6">
                  {t('work.projects.rakshaDesc')}
                </p>
              </div>

              <div className="group">
                <a
                  href="https://behance.net/aswinmv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="View portfolio on Behance (opens in new tab)"
                >
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                    {t('work.projects.behance')}
                  </span>
                </a>
              </div>
              <div className="group">
                <a
                  href="https://dribbble.com/aswinmv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="View work on Dribbble (opens in new tab)"
                >
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                    {t('work.projects.dribbble')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
