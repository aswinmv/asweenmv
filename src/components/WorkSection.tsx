import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkSection() {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-8" aria-labelledby="work-heading">
      <div className="max-w-2xl">
        <h2 id="work-heading" className="text-2xl font-semibold text-gray-900 mb-8">{t('work.heading')}</h2>

        <div className="space-y-8">
          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('work.current.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('work.current.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('work.current.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('work.previous.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('work.previous.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('work.previous.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('work.freelance.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('work.freelance.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('work.freelance.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('work.skills.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('work.skills.status')}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {t('work.skills.items').map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('work.projects.title')}</h3>
            <div className="space-y-4">
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
