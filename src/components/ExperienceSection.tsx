import { useLanguage } from '../contexts/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-8" aria-labelledby="experience-heading">
      <div className="max-w-2xl">
        <h2 id="experience-heading" className="text-2xl font-semibold text-gray-900 mb-8">
          {t('experience.heading')}
        </h2>

        <div className="rounded-xl border border-gray-200 bg-white px-6 sm:px-8 shadow-sm">
          <div className="relative py-7">
            <div className="absolute left-5 top-20 bottom-0 w-px bg-gray-200" aria-hidden="true" />

            <article className="relative flex gap-5 pb-8">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  src="/images/image copy.png"
                  alt="Fulva logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg font-semibold leading-tight text-gray-900">
                  Social Media Manager
                </h3>
                <p className="mt-1 text-base text-gray-700">Fulva | by Calicut Cousins</p>
                <p className="mt-1 text-sm text-gray-500">{t('experience.current.status')}</p>
              </div>
            </article>

            <article className="relative flex gap-5">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  src="/images/image copy 2.png"
                  alt="Whoots logo"
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg font-semibold leading-tight text-gray-900">
                  Creative Strategist
                </h3>
                <p className="mt-1 text-base text-gray-700">Whoots</p>
                <p className="mt-1 text-sm text-gray-500">{t('experience.previous.status')}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
