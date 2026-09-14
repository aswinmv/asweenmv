import { useLanguage } from '../contexts/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-8" aria-labelledby="experience-heading">
      <div className="max-w-2xl">
        <h2 id="experience-heading" className="text-2xl font-semibold text-gray-900 mb-8">{t('experience.heading')}</h2>

        <div className="space-y-8">
          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('experience.current.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('experience.current.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('experience.current.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('experience.previous.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('experience.previous.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('experience.previous.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('experience.freelance.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('experience.freelance.status')}</p>
              <p className="text-gray-700 leading-relaxed">
                {t('experience.freelance.description')}
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('experience.skills.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{t('experience.skills.status')}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {t('experience.skills.items').map((skill: string) => (
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
        </div>
      </div>
    </section>
  );
}
