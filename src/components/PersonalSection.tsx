export default function PersonalSection() {
  return (
    <section id="personal" className="py-8" aria-labelledby="personal-heading">
      <div className="max-w-2xl">
        <h2 id="personal-heading" className="text-2xl font-semibold text-gray-900 mb-8">Personal</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Beyond Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Beyond design, I enjoy music, gaming, cricket, illustration, and writing.
              These passions fuel my creativity and keep me inspired.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Currently</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Reading about design systems and creative processes
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Exploring new illustration techniques and digital art
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Following cricket seasons and local gaming communities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
