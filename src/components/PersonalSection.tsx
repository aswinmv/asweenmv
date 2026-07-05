import { useLanguage } from '../contexts/LanguageContext';

export default function PersonalSection() {
  const { t } = useLanguage();

  return (
    <section id="personal" className="py-8" aria-labelledby="personal-heading">
      <div className="max-w-2xl">
        <h2 id="personal-heading" className="text-2xl font-semibold text-gray-900 mb-8">{t('personal.heading')}</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{t('personal.beyond.title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('personal.beyond.content')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{t('personal.currently.title')}</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              {t('personal.currently.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
