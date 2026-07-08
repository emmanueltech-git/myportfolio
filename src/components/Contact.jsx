import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    'Sorry, something went wrong. Please try again.'
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email) {
      setSent(true);
      setStatusMessage('Enter your name and email.');
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ibitoye Favour',
          from_email: form.email,
          to_email: 'ibitoyefavour13@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setStatusMessage(
          'Thank you. I will get back to you as soon as possible.'
        );
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        setSent(true);
        setStatusMessage('Sorry, something went wrong. Please try again.');
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-12">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </div>

        {/* CONTENT */}
        <div className="flex xl:flex-row flex-col gap-10">
          {/* LEFT — INFO */}
          <div
            className="
              xl:flex-1
              rounded-3xl
              bg-gradient-to-br
              from-[#14102a]
              to-[#0b081a]
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              border border-white/10
              flex items-center
              xl:max-w-lg
            "
          >
            <div
              className="
              p-8
                w-full
                h-full
                mx-auto
                space-y-6
                rounded-2xl
                bg-white/3
                border border-white/10
                content-center
                "
            >
              <div>
                <h4 className="text-white text-xs uppercase tracking-wide">
                  What I specialize in
                </h4>
                <ul className="mt-4 text-secondary text-sm space-y-3">
                  <li>→ AI Chatbot Development</li>
                  <li>→ AI Application Development</li>
                  <li>→ Backend Development</li>
                  <li>→ Frontend Development</li>
                  <li>→ Full-Stack Web Development</li>
                  <li>→ UI/UX Implementation</li>
                  <li>→ E-commerce Website Development</li>
                  <li>→ Authentication & Authorization Systems</li>
                </ul>
              </div>

              <div className="border-t border-white/10" />

              <div>
                <h4 className="text-white text-xs uppercase tracking-wide">
                  Prefer email?
                </h4>
                <p className="text-secondary mt-2 text-sm">
                  Reach me directly at{' '}
                  <span className="text-white break-all">
                    ibitoyefavour13@gmail.com
                  </span>
                </p>
              </div>

              <div className="border-t border-white/10" />

              <div>
                <h4 className="text-white text-xs uppercase tracking-wide">
                  Location
                </h4>
                <p className="text-secondary text-sm mt-1">Abuja, Nigeria</p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            className="
              flex-[0.75]
              rounded-3xl
              p-10
              bg-gradient-to-br
              from-[#1a1533]
              to-[#0f0c1f]
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              border border-white/10
              ring-1 ring-[#915eff]/20
            "
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-white/80 text-xs uppercase tracking-wide mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Adam Smith"
                  className="
                    bg-transparent
                    border-b border-white/30
                    py-3
                    text-white
                    outline-none
                    transition-all duration-200
                    focus:border-[#915eff]
                    focus:shadow-[0_2px_0_0_rgba(145,94,255,0.7)]
                    placeholder:text-white/40
                  "
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-white/80 text-xs uppercase tracking-wide mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="adamsmith@example.com"
                  className="
                    bg-transparent
                    border-b border-white/30
                    py-3
                    text-white
                    outline-none
                    transition-all duration-200
                    focus:border-[#915eff]
                    focus:shadow-[0_2px_0_0_rgba(145,94,255,0.7)]
                    placeholder:text-white/40
                  "
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-white/80 text-xs uppercase tracking-wide mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=""
                  className="
                    bg-transparent
                    border-b border-white/30
                    py-3
                    text-white
                    outline-none
                    resize-none
                    transition-all duration-200
                    focus:border-[#915eff]
                    focus:shadow-[0_2px_0_0_rgba(145,94,255,0.7)]
                    placeholder:text-white/40
                  "
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="
                  mt-10
                  w-fit
                  px-10
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#915eff]
                  to-[#7c4dff]
                  text-white
                  font-semibold
                  shadow-[0_10px_30px_rgba(145,94,255,0.35)]
                  hover:opacity-95
                  active:scale-[0.98]
                  transition
                "
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              {sent && (
                <div className="mt-4 text-sm text-secondary">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
