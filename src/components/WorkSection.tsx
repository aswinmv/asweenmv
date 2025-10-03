import { ExternalLink } from 'lucide-react';

export default function WorkSection() {
  return (
    <section id="work" className="py-8" aria-labelledby="work-heading">
      <div className="max-w-2xl">
        <h2 id="work-heading" className="text-2xl font-semibold text-gray-900 mb-8">Work</h2>

        <div className="space-y-8">
          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Lead Designer at Whoots
              </h3>
              <p className="text-sm text-gray-600 mb-3">Current Role</p>
              <p className="text-gray-700 leading-relaxed">
                Creating innovative design solutions and strategic creative direction for
                diverse projects, focusing on user-centered experiences that drive engagement.
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Freelance Graphic Designer
              </h3>
              <p className="text-sm text-gray-600 mb-3">3+ Years Experience</p>
              <p className="text-gray-700 leading-relaxed">
                Collaborated with international clients across India, the Middle East, and
                Australia, delivering creative solutions for diverse industries and markets.
              </p>
            </div>
          </article>

          <article className="border-l-2 border-gray-200 pl-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Core Skills
              </h3>
              <p className="text-sm text-gray-600 mb-3">Expertise Areas</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Product Design', 'Graphic Design', 'Creative Strategy', 'Illustration', 'UX/UI', 'Figma', 'SMM'].map((skill) => (
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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Projects</h3>
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
                    View Portfolio on Behance
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
                    Creative Work on Dribbble
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
