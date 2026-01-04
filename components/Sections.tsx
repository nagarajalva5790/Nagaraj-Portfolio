import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PERSONAL_INFO, 
  SKILL_GROUPS, 
  EXPERIENCES, 
  EDUCATION, 
  AWARDS 
} from '../constants';
import { Skill } from '../types';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SkillMeter: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="space-y-2 group cursor-default">
    <div className="flex justify-between items-end">
      <span className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">
        {skill.name}
      </span>
      <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">
        {skill.level}%
      </span>
    </div>
    <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/50 dark:border-slate-800">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      />
    </div>
  </div>
);

const RadarVisual: React.FC = () => {
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  const categories = SKILL_GROUPS.map(g => g.category);
  const angleStep = (Math.PI * 2) / categories.length;

  const points = SKILL_GROUPS.map((group, i) => {
    const skills = group.skills as Skill[];
    const avg = skills.reduce((acc, s) => acc + s.level, 0) / skills.length;
    const r = (avg / 100) * radius;
    const angle = i * angleStep - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative flex justify-center items-center py-10 opacity-80 hover:opacity-100 transition-opacity">
      <svg width={size} height={size} className="overflow-visible">
        {[0.25, 0.5, 0.75, 1].map((step, i) => (
          <circle 
            key={i} 
            cx={center} cy={center} r={radius * step} 
            className="fill-none stroke-slate-300 dark:stroke-slate-800" 
            strokeWidth="1" 
          />
        ))}
        {categories.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line 
              key={i} 
              x1={center} y1={center} 
              x2={center + radius * Math.cos(angle)} y2={center + radius * Math.sin(angle)} 
              className="stroke-slate-300 dark:stroke-slate-800" 
              strokeWidth="1" 
            />
          );
        })}
        {categories.map((cat, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const lx = center + (radius + 25) * Math.cos(angle);
          const ly = center + (radius + 25) * Math.sin(angle);
          return (
            <text 
              key={i} x={lx} y={ly} 
              className="text-[9px] font-black fill-slate-400 dark:fill-slate-500 uppercase tracking-[0.2em]"
              textAnchor="middle" alignmentBaseline="middle"
            >
              {cat}
            </text>
          );
        })}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          d={pathData} 
          className="fill-blue-500/10 stroke-blue-500" 
          strokeWidth="3" 
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="text-center">
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Mastery</p>
         </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden section-id-anchor">
    {/* Animated background highlights */}
    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl text-center space-y-10"
    >
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        <span>{PERSONAL_INFO.visa_status}</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-slate-900 dark:text-white">
        {PERSONAL_INFO.name.split(' ').map((n, i) => (
          <span key={i} className={i >= 1 ? 'gradient-text block md:inline' : 'block md:inline'}>{n} </span>
        ))}
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
        {PERSONAL_INFO.role} with <span className="text-blue-600 dark:text-blue-500 font-bold">{PERSONAL_INFO.experience_years} Experience</span> architecting world-class platforms.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
        <a 
          href="#experience"
          className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
        >
          View Experience
        </a>
        <a 
          href="#contact"
          className="w-full sm:w-auto px-10 py-5 border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 bg-white dark:bg-transparent text-slate-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
        >
          Contact Me
        </a>
      </div>
      
      <div className="pt-16 flex flex-wrap justify-center gap-10 opacity-50 text-[10px] font-black uppercase tracking-[0.3em]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
          <span>Open for Relocation</span>
        </div>
        <span>📍 {PERSONAL_INFO.location}</span>
        <span>📧 {PERSONAL_INFO.email}</span>
      </div>
    </motion.div>
  </section>
);

export const About: React.FC = () => (
  <section id="about" className="py-32 max-w-7xl mx-auto px-6 section-id-anchor">
    <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-20 items-start">
      <div className="space-y-8">
        <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Engineering <span className="text-blue-500">Excellence</span></h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
          {PERSONAL_INFO.summary}
        </p>
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm">
            <p className="text-4xl font-black text-blue-600 dark:text-blue-500">10+</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mt-2">Years Exp</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm">
            <p className="text-4xl font-black text-blue-600 dark:text-blue-500">9+</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mt-2">Scale Apps</p>
          </div>
        </div>
      </div>
      <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 space-y-8 shadow-sm">
        <h3 className="text-xl font-bold tracking-tight">Key Domains</h3>
        <div className="flex flex-wrap gap-3">
          {SKILL_GROUPS.find(g => g.category === "Expertise Areas")?.skills.map((skill: any, i) => (
            <span key={i} className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-widest cursor-default">
              {skill.name || skill}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium italic opacity-60 border-l-4 border-blue-500 pl-4">
          "Expert in bridging technical complexity with elite user experience."
        </p>
      </div>
    </motion.div>
  </section>
);

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 bg-slate-100 dark:bg-slate-900/30 overflow-hidden section-id-anchor">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">The <span className="text-blue-500">Arsenal</span></h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto">Visualizing a decade of specialized engineering craft.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-4 p-10 rounded-[3rem] bg-white dark:bg-slate-800/50 flex flex-col items-center border border-slate-200 dark:border-white/5 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 mb-8">Skill Radar</h3>
            <RadarVisual />
            <div className="mt-10 space-y-6 w-full">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <span>Architecture</span>
                  <span className="text-blue-600">90%</span>
               </div>
               <div className="h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                  <motion.div initial={{width:0}} whileInView={{width:'90%'}} viewport={{once:true}} className="h-full bg-blue-500 rounded-full" />
               </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-10">
            <div className="flex flex-wrap gap-3">
              {SKILL_GROUPS.map((group, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
                    activeTab === idx 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-10 p-12 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm"
              >
                {(SKILL_GROUPS[activeTab].skills as Skill[]).map((skill, sIdx) => (
                  <SkillMeter key={sIdx} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Experience: React.FC = () => (
  <section id="experience" className="py-32 max-w-7xl mx-auto px-6 section-id-anchor">
    <motion.div {...fadeInUp} className="mb-20 space-y-6">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Project <span className="text-blue-500">History</span></h2>
      <p className="text-slate-600 dark:text-slate-400 font-medium max-w-2xl">Proven track record across international fintech and media sectors.</p>
    </motion.div>

    <div className="space-y-16">
      {EXPERIENCES.map((exp, idx) => (
        <motion.div key={idx} {...fadeInUp} className="group">
          <div className="md:grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1 mb-6 md:mb-0">
              <span className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em]">{exp.duration}</span>
              <h3 className="text-2xl font-black mt-3 leading-tight tracking-tighter uppercase">{exp.company}</h3>
              <p className="text-xs font-bold opacity-40 mt-2 uppercase tracking-widest">{exp.role}</p>
            </div>
            
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                {exp.achievements.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                    <span className="mr-5 text-blue-500 mt-2 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect width="10" height="10" rx="2" fill="currentColor"/></svg>
                    </span>
                    <p className="text-base font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {exp.projects && (
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all shadow-sm">
                      <h4 className="font-black text-blue-600 dark:text-blue-500 uppercase text-xs tracking-[0.2em] mb-2">{proj.title}</h4>
                      <p className="text-[10px] font-bold opacity-40 mb-4 uppercase tracking-widest">{proj.stack}</p>
                      <p className="text-sm opacity-80 leading-relaxed font-medium">{proj.description[0]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {idx !== EXPERIENCES.length - 1 && <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mt-16 opacity-50"></div>}
        </motion.div>
      ))}
    </div>
  </section>
);

export const EducationAndAwards: React.FC = () => (
  <section id="education" className="py-32 bg-slate-100 dark:bg-slate-900/30 section-id-anchor">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
      <motion.div {...fadeInUp} className="space-y-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">Academic <span className="text-blue-500">Degree</span></h2>
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="p-10 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight uppercase leading-none">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-blue-500 font-bold mt-2 text-sm uppercase tracking-widest">{edu.institution}</p>
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <span className="px-5 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">{edu.details}</span>
              <span className="text-xs font-black opacity-30 uppercase tracking-widest">{edu.year}</span>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div {...fadeInUp} className="space-y-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">Elite <span className="text-blue-500">Recognition</span></h2>
        {AWARDS.map((award, idx) => (
          <div key={idx} className="p-10 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm flex items-start space-x-8">
            <div className="w-16 h-16 rounded-[1.2rem] bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 border border-blue-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tight uppercase leading-none">{award.title}</h3>
              <p className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-widest mt-1">{award.issuer}</p>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-3 text-sm">{award.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-6 section-id-anchor">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <motion.div {...fadeInUp} className="space-y-10">
          <h2 className="text-6xl font-black tracking-tighter leading-tight uppercase">Let's connect <span className="gradient-text">today</span>.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
            Ready to deploy full-stack expertise for your mission-critical applications.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-6 p-6 rounded-[2rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Email</p>
                <p className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 rounded-[2rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">LinkedIn</p>
                <p className="text-lg font-black tracking-tight text-slate-900 dark:text-white">Profile & Network</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="p-12 rounded-[3.5rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-xl relative">
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Your Name</label>
              <input 
                required
                type="text" 
                className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all font-bold dark:text-white"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Email</label>
              <input 
                required
                type="email" 
                className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all font-bold dark:text-white"
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all font-bold resize-none dark:text-white"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button 
              disabled={status !== 'idle'}
              type="submit"
              className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.4em] transition-all disabled:opacity-50 shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              {status === 'idle' ? 'Send Transmission' : status === 'sending' ? 'Sending...' : 'Transmission Sent!'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};