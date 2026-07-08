import { styles } from '../styles';
import { logo, profileImg } from '../assets';

/* Accurate experience calculation */
const getYearsOfExperience = () => {
  const startDate = new Date('2023-01-20'); // adjust if needed
  const now = new Date();
  const diffInMs = now - startDate;
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-black text-[18px] sm:text-[40px] leading-tight">
               Software Developer • AI Programmer • Web Creator<br />
              <span className="text-[#915eff]">EMMANUEL</span>
            </h1>

            <p className="text-[#dfd9ff] max-w-xl text-[18px] leading-relaxed">
              I build modern software, AI-powered applications, and high-performance websites 
              that combine innovation, clean architecture, and exceptional user experiences.
            </p>

            <div className="flex gap-8 mt-4">
              <div>
                <p className="text-white text-2xl font-bold">10+</p>
                <p className="text-secondary text-sm">Projects</p>
              </div>

              <div>
                <p className="text-white text-2xl font-bold">
                  {getYearsOfExperience()}+
                </p>
                <p className="text-secondary text-sm">Years Of Experience</p>
              </div>

              <div>
                <p className="text-white text-2xl font-bold">Software Developer</p>
                <p className="text-secondary text-sm">Core Focus</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center relative">
            <img
              src={profileImg}
              alt="Ibitoye Favour"
              className="
                w-[360px] h-[460px]
                object-cover
                rounded-2xl
                shadow-2xl
                border border-white/10
              "
            />

            {/* Static glow (CSS only) */}
            <div className="absolute -z-10 w-[380px] h-[480px] rounded-2xl bg-[#915eff]/20 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Static scroll hint (no animation) */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a
          href="#about"
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
        >
          <div className="w-3 h-3 rounded-full bg-secondary mt-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
