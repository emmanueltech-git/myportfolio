import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center">
        <p className={styles.sectionSubText}>Technologies I work with</p>
      </div>

      {/* Tech grid */}
      <div className="mt-10 flex flex-wrap justify-center gap-12">
        {technologies.map(technology => (
          <div
            key={technology.name}
            className="
              w-24
              flex flex-col items-center gap-3
              transition-transform duration-300
              hover:scale-105
            "
          >
            <div
              className="
                w-16 h-16
                rounded-xl
                bg-tertiary
                flex items-center justify-center
                border border-white/10
              "
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <p className="text-secondary text-sm text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
