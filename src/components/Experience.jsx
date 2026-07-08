import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="relative pl-16 pb-16 last:pb-0">
      {/* Timeline line */}
      <span className="absolute left-6 top-0 h-full w-px bg-white/10" />

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center border border-white/20 shadow-md"
        style={{ backgroundColor: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Content */}
      <div
        className="
          bg-tertiary
          rounded-2xl
          p-6
          border border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-white text-lg font-bold">{experience.title}</h3>
            <p className="text-secondary text-sm font-medium">
              {experience.company_name}
            </p>
          </div>

          <p className="text-secondary text-xs whitespace-nowrap">
            {experience.date}
          </p>
        </div>

        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li key={index} className="text-white/90 text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      {/* Timeline */}
      <div className="mt-20 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
