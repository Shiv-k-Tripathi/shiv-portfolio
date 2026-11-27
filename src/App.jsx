import { useState, useEffect } from "react";
import {
  Code2,
  Smartphone,
  Server,
  Wrench,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Star,
  Quote,
  Plus,
  X,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  CheckCircle2,
  Menu,
  Terminal,
  Cpu,
  Layers,
  Palette,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import {
  profileData,
  skillCategories,
  experienceData,
  projectsData,
  educationData,
  initialTestimonials,
} from "./data/portfolioData";

const themes = {
  cyber: {
    name: "Cyber Cyan",
    bg: "bg-[#070B14]",
    surface: "bg-[#0D1322]/90",
    surfaceHover: "hover:bg-[#131C31]",
    border: "border-slate-800/90",
    borderHover: "hover:border-cyan-500/50",
    textPrimary: "text-white",
    textSecondary: "text-slate-300",
    textMuted: "text-slate-400",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500",
    accentBgHover: "hover:bg-cyan-400",
    accentBtnText: "text-slate-950",
    accentSoft: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
    gradient: "from-cyan-400 via-sky-300 to-indigo-400",
    glow: "bg-cyan-500/15",
    gridColor: "rgba(34,211,238,0.06)",
    navBg: "bg-[#070B14]/85",
  },
  royal: {
    name: "Midnight Gold",
    bg: "bg-[#09090B]",
    surface: "bg-[#121216]/90",
    surfaceHover: "hover:bg-[#19191F]",
    border: "border-zinc-800",
    borderHover: "hover:border-amber-500/50",
    textPrimary: "text-zinc-50",
    textSecondary: "text-zinc-300",
    textMuted: "text-zinc-400",
    accentText: "text-amber-400",
    accentBg: "bg-amber-400",
    accentBgHover: "hover:bg-amber-300",
    accentBtnText: "text-zinc-950",
    accentSoft: "bg-amber-500/10 border-amber-500/25 text-amber-300",
    gradient: "from-amber-300 via-orange-300 to-yellow-200",
    glow: "bg-amber-500/10",
    gridColor: "rgba(251,191,36,0.05)",
    navBg: "bg-[#09090B]/85",
  },
  light: {
    name: "Crisp Daylight",
    bg: "bg-slate-50",
    surface: "bg-white",
    surfaceHover: "hover:bg-slate-50",
    border: "border-slate-200",
    borderHover: "hover:border-indigo-400",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-700",
    textMuted: "text-slate-500",
    accentText: "text-indigo-600",
    accentBg: "bg-indigo-600",
    accentBgHover: "hover:bg-indigo-500",
    accentBtnText: "text-white",
    accentSoft: "bg-indigo-50 border-indigo-200 text-indigo-700",
    gradient: "from-indigo-600 via-blue-600 to-cyan-600",
    glow: "bg-indigo-500/10",
    gridColor: "rgba(79,70,229,0.06)",
    navBg: "bg-white/85",
  },
};

const categoryIcons = {
  Frontend: Code2,
  "Mobile & Hardware": Smartphone,
  "Backend & Database": Server,
  "DevOps & Tools": Wrench,
};

export default function App() {
  const [themeKey, setThemeKey] = useState("cyber");
  const t = themes[themeKey];

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("shiv_portfolio_testimonials");
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [selectedTestimonialCat, setSelectedTestimonialCat] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    category: "Mobile & POS",
    rating: 5,
    message: "",
  });

  useEffect(() => {
    document.title = `${profileData.name} | ${profileData.role}`;

    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag(
      "description",
      `${profileData.name} — ${profileData.role} based in ${profileData.location}. ${profileData.summary}`
    );
    setMetaTag(
      "keywords",
      "Shiv Kumar Tripathi, Full Stack Developer, React.js, React Native, Node.js, MongoDB, POS Integration, Android SDK, Bluetooth Printing, Pune Developer"
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "shiv_portfolio_testimonials",
      JSON.stringify(testimonials)
    );
  }, [testimonials]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    showToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const cycleTheme = () => {
    const keys = Object.keys(themes);
    const next = keys[(keys.indexOf(themeKey) + 1) % keys.length];
    setThemeKey(next);
    showToast(`Theme switched to ${themes[next].name}`);
  };

  const testimonialCategories = [
    "All",
    ...new Set(testimonials.map((item) => item.category).filter(Boolean)),
  ];

  const filteredTestimonials =
    selectedTestimonialCat === "All"
      ? testimonials
      : testimonials.filter((item) => item.category === selectedTestimonialCat);

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      role: formData.role.trim() || "Colleague / Client",
      category: formData.category,
      rating: Number(formData.rating),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      message: formData.message.trim(),
    };

    setTestimonials([newEntry, ...testimonials]);
    setFormData({
      name: "",
      role: "",
      category: "Mobile & POS",
      rating: 5,
      message: "",
    });
    setIsModalOpen(false);
    showToast("Thank you! Your testimonial has been published.");
  };

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Education", href: "#education" },
  ];

  return (
    <div
      className={`min-h-screen ${t.bg} ${t.textPrimary} font-sans antialiased transition-colors duration-300 relative`}
      style={{
        backgroundImage: `radial-gradient(${t.gridColor} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      {/* Subtle Top Ambient Glow */}
      <div
        className={`pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[22rem] rounded-full ${t.glow} blur-3xl -z-0`}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 ${t.surface} border ${t.border} px-4 py-3 rounded-xl shadow-2xl`}
        >
          <CheckCircle2 className={`w-5 h-5 ${t.accentText} shrink-0`} />
          <span className={`text-sm font-medium ${t.textPrimary}`}>
            {toastMessage}
          </span>
        </div>
      )}

      {/* Glass Navbar */}
      <nav
        className={`sticky top-0 z-40 ${t.navBg} backdrop-blur-xl border-b ${t.border}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg">
            <span
              className={`w-9 h-9 rounded-xl ${t.accentBg} ${t.accentBtnText} flex items-center justify-center font-black text-sm shadow-md`}
            >
              ST
            </span>
            <span className={t.textPrimary}>
              Shiv<span className={t.accentText}>.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${t.textSecondary} hover:${t.accentText} transition`}
              >
                {link.label}
              </a>
            ))}

            {/* Theme Switcher Button */}
            <button
              onClick={cycleTheme}
              title="Switch Color Theme"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${t.border} ${t.surface} text-xs font-medium ${t.textSecondary} cursor-pointer transition`}
            >
              <Palette className={`w-3.5 h-3.5 ${t.accentText}`} />
              <span>{t.name}</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className={`${t.accentBg} ${t.accentBgHover} ${t.accentBtnText} px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer shadow-sm`}
            >
              + Add Review
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={cycleTheme}
              className={`p-2 rounded-lg border ${t.border} ${t.surface}`}
              aria-label="Switch Theme"
            >
              <Palette className={`w-4 h-4 ${t.accentText}`} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${t.textPrimary}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${t.surface} border-b ${t.border} px-6 py-4 space-y-3`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 text-sm font-medium ${t.textSecondary}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className={`w-full ${t.accentBg} ${t.accentBtnText} py-2.5 rounded-lg text-sm font-semibold`}
            >
              + Leave a Testimonial
            </button>
          </div>
        )}
      </nav>

      {/* Split Hero Section */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Intro & CTAs */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-6 ${t.accentSoft}`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.availability}</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4 ${t.textPrimary}`}
            >
              Hi, I’m{" "}
              <span
                className={`block sm:inline bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
              >
                {profileData.name}
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl font-semibold ${t.accentText} mb-5`}
            >
              {profileData.role}
            </p>

            <p
              className={`${t.textSecondary} text-base sm:text-lg leading-relaxed mb-8 max-w-2xl`}
            >
              {profileData.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={`mailto:${profileData.email}`}
                className={`inline-flex items-center gap-2 ${t.accentBg} ${t.accentBgHover} ${t.accentBtnText} font-semibold px-6 py-3.5 rounded-xl transition shadow-lg`}
              >
                <Mail className="w-4 h-4" />
                Hire / Contact Me
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 ${t.surface} ${t.surfaceHover} border ${t.border} ${t.textPrimary} font-medium px-4 py-3.5 rounded-xl transition cursor-pointer`}
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className={`w-4 h-4 ${t.accentText}`} />
                )}
                <span className="text-sm">{profileData.email}</span>
              </button>
            </div>

            {/* Metadata Strip */}
            <div
              className={`flex flex-wrap items-center gap-5 text-sm ${t.textMuted}`}
            >
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className={`inline-flex items-center gap-1.5 hover:${t.accentText} transition`}
              >
                <Phone className={`w-4 h-4 ${t.accentText}`} />
                {profileData.phone}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className={`w-4 h-4 ${t.accentText}`} />
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Right Column: Engineering Profile Bento Card */}
          <div className="lg:col-span-5">
            <div
              className={`${t.surface} border ${t.border} rounded-2xl p-6 shadow-2xl`}
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span
                  className={`text-xs font-mono ${t.textMuted} flex items-center gap-1.5`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  engineer.profile.ts
                </span>
              </div>

              <pre
                className={`text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto ${t.textSecondary}`}
              >
                <code>{`const shiv = {
  role: "Full Stack & Mobile Dev",
  experience: "4+ Years",
  company: "Amonex Technology",
  coreStack: [
    "React.js", "React Native",
    "Node.js", "MongoDB"
  ],
  hardwareSDK: [
    "Android / iOS POS",
    "Bluetooth / WiFi / USB"
  ]
};`}</code>
              </pre>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-800/60">
                {profileData.highlights.map((stat) => (
                  <div key={stat.label}>
                    <p className={`text-[11px] uppercase ${t.textMuted}`}>
                      {stat.label}
                    </p>
                    <p className={`text-sm font-bold mt-0.5 ${t.textPrimary}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Technical Stack Bento Grid */}
      <section
        id="skills"
        className={`max-w-6xl mx-auto px-6 py-16 border-t ${t.border}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Cpu className={`w-4 h-4 ${t.accentText}`} />
          <span
            className={`text-xs font-bold uppercase tracking-widest ${t.accentText}`}
          >
            Capabilities
          </span>
        </div>
        <h2 className={`text-3xl font-bold mb-10 ${t.textPrimary}`}>
          Technical Stack & Hardware Integrations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group) => {
            const IconComponent = categoryIcons[group.title] || Layers;
            return (
              <div
                key={group.title}
                className={`${t.surface} border ${t.border} ${t.borderHover} rounded-2xl p-6 transition shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${t.accentSoft}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold ${t.textPrimary}`}>
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${t.border} ${t.textSecondary}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`max-w-6xl mx-auto px-6 py-16 border-t ${t.border}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className={`w-4 h-4 ${t.accentText}`} />
          <span
            className={`text-xs font-bold uppercase tracking-widest ${t.accentText}`}
          >
            Career History
          </span>
        </div>
        <h2 className={`text-3xl font-bold mb-10 ${t.textPrimary}`}>
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`${t.surface} border ${t.border} rounded-2xl p-6 sm:p-8 shadow-sm`}
            >
              <div
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 mb-6 border-b ${t.border}`}
              >
                <div>
                  <h3 className={`text-2xl font-bold ${t.textPrimary}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-sm font-medium mt-1 ${t.accentText}`}>
                    {exp.company}{" "}
                    <span className={t.textMuted}>• {exp.location}</span>
                  </p>
                </div>
                <span
                  className={`self-start sm:self-center px-3.5 py-1.5 rounded-full text-xs font-bold border ${t.accentSoft}`}
                >
                  {exp.period}
                </span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.bullets.map((point, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${t.textSecondary}`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 ${t.accentText} shrink-0 mt-0.5`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`max-w-6xl mx-auto px-6 py-16 border-t ${t.border}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <FolderGit2 className={`w-4 h-4 ${t.accentText}`} />
          <span
            className={`text-xs font-bold uppercase tracking-widest ${t.accentText}`}
          >
            Production Systems
          </span>
        </div>
        <h2 className={`text-3xl font-bold mb-10 ${t.textPrimary}`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className={`${t.surface} border ${t.border} ${t.borderHover} rounded-2xl p-6 flex flex-col justify-between transition shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md border ${t.accentSoft}`}
                  >
                    {project.role}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${t.textMuted}`} />
                </div>

                <h3 className={`text-xl font-bold mb-2.5 ${t.textPrimary}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${t.textMuted}`}>
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className={`text-xs flex items-start gap-2 ${t.textSecondary}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${t.accentBg} mt-1.5 shrink-0`}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex flex-wrap gap-1.5 pt-4 border-t ${t.border}`}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-md border ${t.border} ${t.textSecondary}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Wall */}
      <section
        id="testimonials"
        className={`max-w-6xl mx-auto px-6 py-16 border-t ${t.border}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Quote className={`w-4 h-4 ${t.accentText}`} />
              <span
                className={`text-xs font-bold uppercase tracking-widest ${t.accentText}`}
              >
                Wall of Love
              </span>
            </div>
            <h2 className={`text-3xl font-bold ${t.textPrimary}`}>
              Client & Team Testimonials
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className={`inline-flex items-center gap-2 self-start sm:self-auto ${t.accentBg} ${t.accentBgHover} ${t.accentBtnText} text-sm font-semibold px-5 py-2.5 rounded-xl transition cursor-pointer shadow-sm`}
          >
            <Plus className="w-4 h-4" />
            Leave a Testimonial
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {testimonialCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTestimonialCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${selectedTestimonialCat === cat
                  ? `${t.accentBg} ${t.accentBtnText} border-transparent`
                  : `${t.surface} ${t.textMuted} ${t.border}`
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <article
              key={item.id}
              className={`${t.surface} border ${t.border} ${t.borderHover} rounded-2xl p-6 flex flex-col justify-between transition shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${idx < item.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-600"
                          }`}
                      />
                    ))}
                  </div>
                  <span className={`text-xs font-medium ${t.textMuted}`}>
                    {item.category}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${t.textSecondary}`}>
                  "{item.message}"
                </p>
              </div>

              <div
                className={`flex items-center justify-between pt-4 border-t ${t.border}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-sm ${t.accentSoft}`}
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${t.textPrimary}`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs ${t.textMuted}`}>{item.role}</p>
                  </div>
                </div>
                <span className={`text-xs ${t.textMuted}`}>{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`max-w-6xl mx-auto px-6 py-16 border-t ${t.border}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className={`w-4 h-4 ${t.accentText}`} />
          <span
            className={`text-xs font-bold uppercase tracking-widest ${t.accentText}`}
          >
            Academics
          </span>
        </div>
        <h2 className={`text-3xl font-bold mb-8 ${t.textPrimary}`}>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className={`${t.surface} border ${t.border} rounded-2xl p-6 flex items-start gap-4`}
            >
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${t.accentSoft}`}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${t.textPrimary}`}>
                  {edu.degree}
                </h3>
                <p className={`text-sm mt-1 ${t.textMuted}`}>
                  {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${t.border} mt-10`}>
        <div
          className={`max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${t.textMuted}`}
        >
          <p>
            © {new Date().getFullYear()} {profileData.name} • Pune, India
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${profileData.email}`}
              className={`hover:${t.accentText} transition`}
            >
              {profileData.email}
            </a>
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
              className={`hover:${t.accentText} transition`}
            >
              {profileData.phone}
            </a>
          </div>
        </div>
      </footer>

      {/* Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className={`${t.surface} border ${t.border} rounded-2xl max-w-md w-full p-6 shadow-2xl`}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className={`text-xl font-bold ${t.textPrimary}`}>
                Share Your Experience
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`${t.textMuted} hover:${t.textPrimary} p-1 cursor-pointer`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm mb-1 ${t.textSecondary}`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Rohan Sharma"
                  className={`w-full ${t.bg} border ${t.border} rounded-lg px-3 py-2 ${t.textPrimary} focus:outline-none`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-sm mb-1 ${t.textSecondary}`}>
                    Role / Company
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="Product Lead"
                    className={`w-full ${t.bg} border ${t.border} rounded-lg px-3 py-2 ${t.textPrimary} focus:outline-none`}
                  />
                </div>
                <div>
                  <label className={`block text-sm mb-1 ${t.textSecondary}`}>
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className={`w-full ${t.bg} border ${t.border} rounded-lg px-3 py-2 ${t.textPrimary} focus:outline-none`}
                  >
                    <option value="Mobile & POS">Mobile & POS</option>
                    <option value="Web App">Web App</option>
                    <option value="Analytics Dashboard">
                      Analytics Dashboard
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm mb-1 ${t.textSecondary}`}>
                  Rating
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  className={`w-full ${t.bg} border ${t.border} rounded-lg px-3 py-2 ${t.textPrimary} focus:outline-none`}
                >
                  <option value={5}>5 Stars — Excellent</option>
                  <option value={4}>4 Stars — Great</option>
                  <option value={3}>3 Stars — Good</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm mb-1 ${t.textSecondary}`}>
                  Testimonial *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write a few sentences about working with Shiv..."
                  className={`w-full ${t.bg} border ${t.border} rounded-lg px-3 py-2 ${t.textPrimary} focus:outline-none`}
                />
              </div>

              <button
                type="submit"
                className={`w-full ${t.accentBg} ${t.accentBgHover} ${t.accentBtnText} font-semibold py-2.5 rounded-lg transition cursor-pointer`}
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}