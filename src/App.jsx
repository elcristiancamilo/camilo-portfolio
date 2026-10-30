import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Layers, 
  Box, 
  Printer, 
  Compass, 
  Film, 
  Tv, 
  Eye,
  ExternalLink
} from 'lucide-react';

// --- EASY CONFIGURATION: EDIT YOUR LINKS & EMAIL HERE ---
const PROFILE_LINKS = {
  email: 'camilo.ramirez.design@gmail.com',
  location: 'Edmonton, AB, Canada',
  resumePdfUrl: '/Camilo_Ramirez_Resume.pdf',
  imdb: 'https://www.imdb.com',
  instagram: 'https://www.instagram.com',
  linkedin: 'https://www.linkedin.com',
  youtube: 'https://www.youtube.com'
};

// --- PORTFOLIO PROJECTS DATA ---
const PROJECTS = [
  {
    id: 'walter-boys',
    title: 'My Life with the Walter Boys',
    category: 'Film',
    subCategory: 'Series (Netflix)',
    role: 'Set Dresser (Daily)',
    location: 'Alberta, Canada',
    year: '2024',
    production: 'Netflix / Sony Pictures Television',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: 'Ranch interior set dressing — warm natural textures and lived-in family continuity.'
      },
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
        caption: 'Residential bedroom dressing — detailed prop layering and character-specific decor.'
      },
      {
        url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=85',
        caption: 'Exterior porch and rural architectural set dressing elements.'
      }
    ],
    summary: 'Contributed to the Set Decoration department as a daily Set Dresser on large-scale residential and ranch locations, executing cohesive dressing layouts, prop placement, and rapid set turnarounds.',
    highlights: [
      'Dressed multi-room residential interiors and exterior ranch environments to match established production design tone.',
      'Collaborated with Leadman and Set Decorator on period and contemporary furniture staging and texture layering.',
      'Maintained strict visual continuity and safety standards across high-volume shooting schedules.'
    ],
    tools: ['Set Dressing', 'Material Sourcing', 'Continuity Tracking', 'On-Set Staging']
  },
  {
    id: 'land-of-nod',
    title: 'The Land of Nod',
    category: 'Film',
    subCategory: 'Feature Film',
    role: 'Art Department Trainee',
    location: 'Edmonton, AB',
    year: '2024',
    production: 'Independent Feature',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Architectural space study and mood lighting reference for primary interior sets.'
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        caption: 'Technical drafting, spatial measurement, and 3D Rhino visualization workflow.'
      },
      {
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
        caption: 'Material finishes and surface texture sampling for set construction.'
      }
    ],
    summary: 'Supported the Production Designer and Art Director with script breakdowns, 3D spatial modeling in Rhinoceros, graphic design clearances, and local vendor material sourcing.',
    highlights: [
      'Built accurate 3D digital set models in Rhinoceros to pre-visualize camera angles and architectural modifications.',
      'Managed granular script breakdowns, graphic tracking spreadsheets, and prop checklists.',
      'Coordinated production printing, signage mockups, and material pickups with local Edmonton fabricators.'
    ],
    tools: ['Rhinoceros 3D', 'Adobe Illustrator', 'Photoshop', 'Script Breakdown', 'Material Sourcing']
  },
  {
    id: 'intuit-commercial',
    title: 'Intuit — Commercial Campaign',
    category: 'Commercial',
    subCategory: 'Broadcast & Digital Commercial',
    role: 'On-Set Dresser',
    location: 'Canada',
    year: '2024',
    production: 'Commercial Production',
    coverImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
        caption: 'Modern small-business studio workspace styled for camera-ready commercial takes.'
      },
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        caption: 'Clean architectural lines and curated color palette matching brand identity.'
      }
    ],
    summary: 'Worked directly with the camera and art teams as an On-Set Dresser, executing fine-tuned frame adjustments, hero prop positioning, and workspace styling.',
    highlights: [
      'Maintained frame-by-frame set aesthetics in direct collaboration with the Director of Photography and Production Designer.',
      'Styled contemporary commercial office and retail environments with clean, intentional visual hierarchy.',
      'Executed fast resets and lens-specific prop adjustments between takes.'
    ],
    tools: ['On-Set Dressing', 'Frame Styling', 'Hero Props', 'Continuity']
  },
  {
    id: 'unwell-summer-games',
    title: 'Unwell Summer Games',
    category: 'Film',
    subCategory: 'Unscripted / Series Special',
    role: 'Set Dresser',
    location: 'Canada',
    year: '2024',
    production: 'Unwell Network',
    coverImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85',
        caption: 'Large-scale event and competition set installation with custom branded elements.'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85',
        caption: 'Environmental graphics, signage placement, and multi-camera set dressing.'
      }
    ],
    summary: 'Executed rapid set dressing and environmental staging for a multi-camera production, integrating large-scale custom signage, branded props, and outdoor/indoor set pieces.',
    highlights: [
      'Installed and dressed large-format branded graphics, banners, and competition structures.',
      'Adapted quickly to dynamic multi-camera blocking and weather/location requirements.',
      'Supported strike, inventory organization, and safe transport of set decoration assets.'
    ],
    tools: ['Set Decoration', 'Signage Installation', 'Prop Staging', 'Multi-Camera Sets']
  },
  {
    id: 'the-drifter',
    title: 'The Drifter',
    category: 'Film',
    subCategory: 'Short Narrative Film',
    role: 'Art Department — Props & Graphics',
    location: 'Canada',
    year: '2023',
    production: 'Narrative Short',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85',
        caption: 'Moody nocturnal interior set piece with custom aged paper props and signage.'
      },
      {
        url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=85',
        caption: 'Bespoke printed ephemera, period documents, and graphic props designed in Illustrator.'
      }
    ],
    summary: 'Developed comprehensive Art Department script breakdowns, custom graphic props, and weathered environmental signage for an atmospheric narrative film.',
    highlights: [
      'Created a complete scene-by-scene Art Department & Prop Master breakdown spreadsheet tracking acquisition and aging status.',
      'Designed and printed custom hero graphic props, labels, and environmental signage using Adobe Illustrator and Photoshop.',
      'Applied industrial design fabrication and aging techniques to achieve realistic on-camera patina.'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Production Printing', 'Prop Fabrication', 'Script Breakdown']
  },
  {
    id: 'heritage-workspace-spot',
    title: 'Heritage Craft — Broadcast Spot',
    category: 'Commercial',
    subCategory: 'National Commercial',
    role: 'Graphic Designer & Props Assistant',
    location: 'Colombia / Canada',
    year: '2023',
    production: 'Commercial Spot',
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
        caption: 'Artisan workshop set featuring custom-designed packaging, labels, and industrial tools.'
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
        caption: 'Color-calibrated material palette and hero product staging.'
      }
    ],
    summary: 'Designed cleared commercial packaging, custom vinyl graphics, and tactile hero props for a high-craft broadcast commercial.',
    highlights: [
      'Designed camera-ready packaging dielines, vintage labels, and storefront vinyl graphics.',
      'Managed print production workflows, paper stock selection, and surface finishing.',
      'Assisted the Property Master with hero prop handling and on-set continuity.'
    ],
    tools: ['Adobe Illustrator', 'Packaging Design', 'Print Production', 'Props Assistance']
  },
  {
    id: 'rhino-set-concepts',
    title: '3D Set Visualizations & CAD Fabrication',
    category: 'Film',
    subCategory: 'Concept & Technical Design',
    role: 'Industrial Designer / 3D Modeler',
    location: 'Edmonton, AB',
    year: '2023–2024',
    production: 'Art Department Portfolio',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        caption: 'Rhinoceros 3D spatial massing, orthographic elevations, and set construction drawings.'
      },
      {
        url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=85',
        caption: 'Precision CAD modeling for custom hero props and architectural millwork.'
      }
    ],
    summary: 'Bridging Industrial Design and Film Production Design through precision 3D modeling in Rhinoceros, orthographic drafting, and rapid prop prototyping.',
    highlights: [
      'Translates rough director/designer sketches into accurate 3D Rhino models for construction estimation and camera blocking.',
      'Produces clean scale drawings, cut lists, and material specifications for carpentry and prop fabrication teams.',
      'Integrates real-world manufacturing, ergonomics, and material science into film set and prop design.'
    ],
    tools: ['Rhinoceros 3D', 'CAD Drafting', 'Industrial Design', 'Material Specifications']
  },
  {
    id: 'nocturne-bogota',
    title: 'Crónicas Urbanas (Urban Chronicles)',
    category: 'Film',
    subCategory: 'Feature Film',
    role: 'Props Assistant & Graphic Designer',
    location: 'Colombia',
    year: '2021',
    production: 'Narrative Feature',
    coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85',
        caption: 'On-set production still featuring custom street graphics and atmospheric prop dressing.'
      },
      {
        url: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1400&q=85',
        caption: 'Night exterior set dressing with custom neon and weathered architectural signage.'
      }
    ],
    summary: 'Worked across the Art and Props departments on narrative productions in Colombia, fabricating custom graphic props, municipal signage, and set dressing elements.',
    highlights: [
      'Designed period-accurate identification documents, newspapers, street posters, and commercial signage.',
      'Sourced specialty materials and vintage props across local markets and fabrication shops.',
      'Supported on-set prop handoffs, actor rehearsals, and continuity logging.'
    ],
    tools: ['Graphic Design', 'Prop Fabrication', 'Set Dressing', 'Adobe Creative Suite']
  },
  {
    id: 'architectural-retail-spot',
    title: 'Modern Living — Commercial Campaign',
    category: 'Commercial',
    subCategory: 'Commercial Spot',
    role: 'Set Dresser',
    location: 'Canada',
    year: '2023',
    production: 'Commercial Production',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Contemporary architectural interior dressed with curated mid-century and modern furnishings.'
      }
    ],
    summary: 'Full interior set dressing and material styling for a high-contrast architectural commercial shoot.',
    highlights: [
      'Coordinated furniture prep, soft goods styling, and lighting fixture installation.',
      'Worked closely with the Set Decorator to execute rapid look changes across multiple room setups in a single shoot day.',
      'Managed wrap, condition reporting, and vendor returns with zero damage.'
    ],
    tools: ['Set Decoration', 'Interior Styling', 'Vendor Coordination', 'On-Set Turnarounds']
  }
];

export default function App() {
  const [activeNav, setActiveNav] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // Lightbox Modal State
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Contact Interactive States
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Filter projects for grid
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeNav === 'Commercial') return project.category === 'Commercial';
    if (activeNav === 'Film') return project.category === 'Film';
    return true;
  });

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  const handleStepProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
    setActiveGalleryIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') handleStepProject(1);
      if (e.key === 'ArrowLeft') handleStepProject(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${isDark ? 'bg-[#121212] text-neutral-100' : 'bg-white text-neutral-900'} font-sans selection:bg-sky-500 selection:text-white`}>
      
      <div>
        {/* --- MAIN PORTFOLIO HEADER (Top-Left Brand, Top-Right Links on Desktop, Burger ONLY on Phones/Tablets) --- */}
        <header className={`w-full px-5 sm:px-8 lg:px-10 pt-7 pb-5 transition-colors ${isDark ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
            
            {/* Top-Left Brand Identity */}
            <button
              onClick={() => handleNavClick('all')}
              className="text-left group focus:outline-none"
            >
              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-light tracking-tight leading-snug">
                <span className="font-normal group-hover:text-sky-500 transition-colors">Camilo Ramírez Martínez</span>
              </h1>
              <p className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] mt-1 font-light ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Industrial Designer • Production Designer
              </p>
            </button>

            {/* Top-Right Desktop Navigation: Visible on Desktop/Preview Window (md+) with ZERO hamburger icon */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[12px] lg:text-[13px] tracking-[0.14em] uppercase font-light shrink-0">
              <nav className="flex items-center space-x-6 lg:space-x-8">
                {['Commercial', 'Film', 'About', 'Resume', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`py-1 transition-all border-b ${
                      activeNav === item
                        ? isDark ? 'border-white text-white font-normal' : 'border-neutral-900 text-neutral-900 font-normal'
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              {/* Subtle Light/Dark Gallery Toggle on Desktop */}
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`p-2 rounded-full border transition ${
                  isDark ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700' : 'border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-300'
                }`}
                title={isDark ? 'Switch to Light Gallery' : 'Switch to Dark Cinema'}
                aria-label="Toggle color theme"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Hamburger Button: Strictly hidden on Desktop (md:hidden) — ONLY appears on smaller screens */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`p-2 rounded-md transition ${
                  isDark ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-neutral-100 text-neutral-700'
                }`}
                aria-label="Toggle color theme"
              >
                {isDark ? <Sun className="w-5 h-5 stroke-[1.5]" /> : <Moon className="w-5 h-5 stroke-[1.5]" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-md transition ${
                  isDark ? 'hover:bg-neutral-800 text-neutral-200' : 'hover:bg-neutral-100 text-neutral-800'
                }`}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </header>

        {/* --- SLIDE-OUT MOBILE NAVIGATION DRAWER --- */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end md:hidden">
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div className={`relative w-72 sm:w-80 h-full shadow-2xl z-10 flex flex-col justify-between p-8 sm:p-10 transition-colors ${
              isDark ? 'bg-[#181818] text-white' : 'bg-[#f8f9fa] text-neutral-900'
            }`}>
              <div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 -ml-1 mb-10 text-sky-500 hover:text-sky-600 transition-transform hover:rotate-90 duration-200"
                  aria-label="Close Menu"
                >
                  <X className="w-8 h-8 stroke-[1.25]" />
                </button>

                <nav className="flex flex-col space-y-5 text-xl font-light tracking-wide">
                  <button
                    onClick={() => handleNavClick('all')}
                    className={`text-left transition-colors ${
                      activeNav === 'all' ? 'text-sky-500 font-normal' : 'hover:text-sky-500'
                    }`}
                  >
                    Home
                  </button>
                  {['Commercial', 'Film', 'About', 'Resume', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className={`text-left transition-colors ${
                        activeNav === item ? 'text-sky-500 font-normal' : 'hover:text-sky-500'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>

              <div className={`pt-6 border-t text-xs space-y-4 ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'}`}>
                <div className="space-y-1">
                  <p className={`font-medium uppercase tracking-wider ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    Camilo Ramírez Martínez
                  </p>
                  <p className="text-[11px] uppercase tracking-widest">
                    Industrial Designer • Production Designer
                  </p>
                  <p className="flex items-center gap-1 text-[11px] pt-1">
                    <MapPin className="w-3 h-3 text-sky-500" /> {PROFILE_LINKS.location}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href={PROFILE_LINKS.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="IMDb Profile"
                    className={`px-2 py-0.5 rounded-sm border text-[10px] font-bold tracking-tight transition-all ${
                      isDark
                        ? 'border-neutral-700 text-neutral-200 hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-black'
                        : 'border-neutral-300 text-neutral-800 hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-black'
                    }`}
                  >
                    IMDb
                  </a>
                  <a
                    href={PROFILE_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`p-1.5 rounded-full border transition-all ${
                      isDark ? 'border-neutral-800 hover:border-pink-500/60 hover:text-pink-400' : 'border-neutral-300 hover:border-pink-500 hover:text-pink-600'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href={PROFILE_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`p-1.5 rounded-full border transition-all ${
                      isDark ? 'border-neutral-800 hover:border-sky-500/60 hover:text-sky-400' : 'border-neutral-300 hover:border-sky-600 hover:text-sky-600'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href={PROFILE_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className={`p-1.5 rounded-full border transition-all ${
                      isDark ? 'border-neutral-800 hover:border-red-500/60 hover:text-red-500' : 'border-neutral-300 hover:border-red-600 hover:text-red-600'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3v6Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MAIN CONTENT AREA --- */}
        <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-10 pb-20">
          
          {/* 1. PORTFOLIO GRID VIEW ('all', 'Commercial', or 'Film') */}
          {(activeNav === 'all' || activeNav === 'Commercial' || activeNav === 'Film') && (
            <div>
              {/* Brief Introduction Banner */}
              <div className={`mb-6 py-4 px-5 rounded-sm border transition-all ${
                isDark 
                  ? 'bg-neutral-900/50 border-neutral-800/80 text-neutral-300' 
                  : 'bg-neutral-50/80 border-neutral-200/80 text-neutral-700'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm font-light leading-relaxed max-w-4xl">
                    I am an <strong className={`font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>industrial designer</strong> who began working in film in Colombia in 2019, before expanding my career to Canada in 2023. My experience spans multiple areas across the{' '}
                    <span className="underline decoration-sky-500/50 underline-offset-4">Art Department, Props, and Set Decoration</span>.{' '}
                    I have worked as a graphic designer, props assistant, set dresser, and art department trainee on various productions, including several feature films and commercials shot in Edmonton.
                  </p>
                  <button
                    onClick={() => handleNavClick('About')}
                    className="text-xs uppercase tracking-widest text-sky-500 hover:underline flex items-center gap-1 font-medium shrink-0"
                  >
                    Read Bio <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Category Section Header when filtered */}
              {activeNav !== 'all' && (
                <div className="text-center my-6 sm:my-8">
                  <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
                    {activeNav === 'Film' ? 'Film & Television' : 'Commercials'}
                  </h2>
                  <p className={`text-xs uppercase tracking-[0.2em] mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Selected Art Department, Props & Set Decoration Credits
                  </p>
                </div>
              )}

              {/* PORTFOLIO RESPONSIVE PHOTO GRID (1 col phone, 2 cols tablet, 3 cols desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openProject(project)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-medium mb-1">
                          {project.category} • {project.year}
                        </span>
                        <h3 className="text-white text-lg sm:text-xl font-light tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-neutral-300 text-xs font-light mt-0.5">
                          {project.role} — {project.location}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/90 uppercase tracking-widest">
                          <Eye className="w-3.5 h-3.5 text-sky-400" /> View Stills & Breakdown
                        </div>
                      </div>

                      <div className="sm:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-white text-sm font-medium">{project.title}</p>
                        <p className="text-neutral-300 text-[11px]">{project.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. ABOUT VIEW */}
          {activeNav === 'About' && (
            <div className="max-w-5xl mx-auto py-8 sm:py-12 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900 relative">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85"
                      alt="Camilo Ramírez Martínez — Industrial Design & Art Department"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-400">{PROFILE_LINKS.location}</p>
                      <p className="text-lg font-light mt-0.5">Camilo Ramírez Martínez</p>
                    </div>
                  </div>

                  <div className={`p-5 border text-xs space-y-2 ${isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                    <div className="font-medium uppercase tracking-wider text-sky-500">Quick Profile</div>
                    <div className="flex justify-between py-1 border-b border-current/10">
                      <span className="opacity-70">Background</span>
                      <span className="font-medium">Industrial Designer</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-current/10">
                      <span className="opacity-70">Film Experience</span>
                      <span className="font-medium">Since 2019 (Colombia & Canada)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-current/10">
                      <span className="opacity-70">Departments</span>
                      <span className="font-medium">Art Dept, Props & Set Dec</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="opacity-70">Base Location</span>
                      <span className="font-medium">Edmonton / Calgary / Toronto</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-sky-500 font-medium">
                      Biography
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-light tracking-tight mt-2">
                      Bridging Industrial Design Precision with Cinematic Storytelling.
                    </h2>
                  </div>

                  <div className={`space-y-4 text-sm sm:text-base font-light leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <p>
                      I am an industrial designer who began working in film in Colombia in 2019, before expanding my career to Canada in 2023. My experience spans multiple areas across the <strong>Art Department, Props, and Set Decoration</strong>.
                    </p>
                    <p>
                      I have worked as a graphic designer, props assistant, set dresser, and art department trainee on various productions, including narrative feature films, television series (such as Netflix’s <em>My Life with the Walter Boys</em> and <em>Unwell Summer Games</em>), and national commercials.
                    </p>
                    <p>
                      With a formal foundation in Industrial Design, I bring hands-on technical fluency in <strong>3D modeling (Rhinoceros)</strong>, material sourcing, custom prop fabrication, production printing, and Adobe Creative Suite (Illustrator & Photoshop). Whether drafting 3D spatial layouts for the Art Department or dressing camera-ready residential and commercial sets, I focus on visual authenticity, organization, and collaborative problem-solving.
                    </p>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">
                      Core Competencies & Technical Toolkit
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className={`p-4 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/50'}`}>
                        <Box className="w-5 h-5 text-sky-500 mb-2 stroke-[1.5]" />
                        <h4 className="font-medium text-sm">3D Modeling & Drafting</h4>
                        <p className="text-xs opacity-75 mt-1 leading-relaxed">
                          Rhinoceros 3D set visualizations, orthographic technical drawings, spatial planning, and custom prop CAD modeling.
                        </p>
                      </div>

                      <div className={`p-4 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/50'}`}>
                        <Printer className="w-5 h-5 text-sky-500 mb-2 stroke-[1.5]" />
                        <h4 className="font-medium text-sm">Graphics & Print Production</h4>
                        <p className="text-xs opacity-75 mt-1 leading-relaxed">
                          Adobe Illustrator & Photoshop, cleared packaging, period ephemera, large-format signage, and vinyl production printing.
                        </p>
                      </div>

                      <div className={`p-4 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/50'}`}>
                        <Layers className="w-5 h-5 text-sky-500 mb-2 stroke-[1.5]" />
                        <h4 className="font-medium text-sm">Set Decoration & Dressing</h4>
                        <p className="text-xs opacity-75 mt-1 leading-relaxed">
                          On-set and prep dressing, residential & commercial staging, continuity tracking, and rapid multi-camera resets.
                        </p>
                      </div>

                      <div className={`p-4 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/50'}`}>
                        <Compass className="w-5 h-5 text-sky-500 mb-2 stroke-[1.5]" />
                        <h4 className="font-medium text-sm">Breakdowns & Sourcing</h4>
                        <p className="text-xs opacity-75 mt-1 leading-relaxed">
                          Granular Art Dept & Prop script breakdowns, vendor material sourcing, budget tracking, and prop fabrication.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => handleNavClick('Resume')}
                      className={`px-6 py-3 text-xs uppercase tracking-widest font-medium transition ${
                        isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'
                      }`}
                    >
                      View Full Resume & Credits
                    </button>
                    <button
                      onClick={() => handleNavClick('Contact')}
                      className={`px-6 py-3 text-xs uppercase tracking-widest border transition ${
                        isDark ? 'border-neutral-700 hover:border-white' : 'border-neutral-300 hover:border-neutral-900'
                      }`}
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. RESUME VIEW */}
          {activeNav === 'Resume' && (
            <div className="max-w-4xl mx-auto py-8 sm:py-12 animate-fadeIn">
              <div className={`flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b gap-4 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-sky-500 font-medium">
                    Curriculum Vitae
                  </span>
                  <h2 className="text-3xl font-light tracking-tight mt-1">
                    Camilo Ramírez Martínez
                  </h2>
                  <p className="text-sm opacity-70 mt-1">
                    Industrial Designer • Production Designer
                  </p>
                </div>

                <a
                  href={PROFILE_LINKS.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs uppercase tracking-widest font-medium transition shrink-0"
                >
                  <Download className="w-4 h-4" /> Download PDF Resume
                </a>
              </div>

              <div className="mt-10 space-y-10">
                <section>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 font-semibold mb-4 flex items-center gap-2">
                    <Film className="w-4 h-4" /> Selected Film & Television Credits
                  </h3>
                  <div className={`divide-y border-t border-b ${isDark ? 'divide-neutral-800 border-neutral-800' : 'divide-neutral-200 border-neutral-200'}`}>
                    {[
                      { project: 'My Life with the Walter Boys (Season 2)', role: 'Set Dresser (Daily)', loc: 'Alberta, Canada', year: '2024' },
                      { project: 'The Land of Nod', role: 'Art Department Trainee', loc: 'Edmonton, AB', year: '2024' },
                      { project: 'Unwell Summer Games', role: 'Set Dresser', loc: 'Canada', year: '2024' },
                      { project: 'The Drifter', role: 'Art Dept / Props & Graphics', loc: 'Canada', year: '2023' },
                      { project: 'Crónicas Urbanas', role: 'Props Assistant & Graphic Designer', loc: 'Colombia', year: '2021' },
                      { project: 'Selected Narrative Productions (2019–2022)', role: 'Art Dept / Set Dressing & Props', loc: 'Colombia', year: '2019–2022' },
                    ].map((credit, idx) => (
                      <div key={idx} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline text-sm">
                        <div className="sm:col-span-5 font-medium">{credit.project}</div>
                        <div className="sm:col-span-4 opacity-85">{credit.role}</div>
                        <div className="sm:col-span-3 sm:text-right text-xs opacity-60">{credit.loc} • {credit.year}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 font-semibold mb-4 flex items-center gap-2">
                    <Tv className="w-4 h-4" /> Selected Commercial Credits
                  </h3>
                  <div className={`divide-y border-t border-b ${isDark ? 'divide-neutral-800 border-neutral-800' : 'divide-neutral-200 border-neutral-200'}`}>
                    {[
                      { project: 'Intuit Commercial Campaign', role: 'On-Set Dresser', loc: 'Canada', year: '2024' },
                      { project: 'Heritage Craft Broadcast Spot', role: 'Graphic Designer & Props Assistant', loc: 'Canada / Colombia', year: '2023' },
                      { project: 'Modern Living Architectural Spot', role: 'Set Dresser', loc: 'Canada', year: '2023' },
                    ].map((credit, idx) => (
                      <div key={idx} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline text-sm">
                        <div className="sm:col-span-5 font-medium">{credit.project}</div>
                        <div className="sm:col-span-4 opacity-85">{credit.role}</div>
                        <div className="sm:col-span-3 sm:text-right text-xs opacity-60">{credit.loc} • {credit.year}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className={`p-6 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/60'}`}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-sky-500 font-semibold mb-3">
                      Software & Fabrication Skills
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm font-light">
                      <li>• <strong>3D Modeling & CAD:</strong> Rhinoceros 3D, Technical Orthographic Drafting</li>
                      <li>• <strong>Graphic Design:</strong> Adobe Illustrator, Adobe Photoshop, InDesign</li>
                      <li>• <strong>Production & Craft:</strong> Large-format Printing, Vinyl Signage, Prop Aging & Fabrication</li>
                      <li>• <strong>Art Dept Administration:</strong> Granular Script Breakdowns, Google Sheets Tracking, Vendor Sourcing</li>
                      <li>• <strong>Languages:</strong> English & Spanish (Fluent)</li>
                    </ul>
                  </div>

                  <div className={`p-6 border ${isDark ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50/60'}`}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-sky-500 font-semibold mb-3">
                      Education & Industry Training
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm font-light">
                      <li>
                        <div className="font-medium">Bachelor of Industrial Design</div>
                        <div className="text-xs opacity-70">Product, Spatial & Material Design</div>
                      </li>
                      <li>
                        <div className="font-medium">IATSE 212 & Industry Courses</div>
                        <div className="text-xs opacity-70">Set Etiquette, Sign Painting for Film, Safety & Art Dept Workflows</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. CONTACT VIEW */}
          {activeNav === 'Contact' && (
            <div className="max-w-3xl mx-auto py-8 sm:py-14 animate-fadeIn">
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-sky-500 font-medium">
                  Inquiries & Availability
                </span>
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-2">
                  Get in Touch
                </h2>
                <p className={`text-sm font-light mt-2 max-w-lg mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Available for Art Department Trainee, Set Dresser, Graphic Designer, and Props roles across Edmonton, Calgary, Toronto, and throughout Canada.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className={`md:col-span-5 p-6 border flex flex-col justify-between ${isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-50'}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest opacity-60">Direct Email</div>
                      <div className="text-sm font-medium mt-1 break-all">{PROFILE_LINKS.email}</div>
                      <button
                        onClick={handleCopyEmail}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs text-sky-500 hover:underline"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Email Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Copy Email Address
                          </>
                        )}
                      </button>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-widest opacity-60">Location</div>
                      <div className="text-sm font-medium mt-1 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-sky-500 shrink-0" /> {PROFILE_LINKS.location}
                      </div>
                      <p className="text-xs opacity-70 mt-1">
                        Willing to travel for features, series & commercial shoots.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-current/10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider">
                    <a href={PROFILE_LINKS.imdb} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 flex items-center gap-1">
                      IMDb <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 flex items-center gap-1">
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={PROFILE_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 flex items-center gap-1">
                      Instagram <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Netlify-Ready Contact Form */}
                <form
                  name="portfolio-contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="md:col-span-7 space-y-4"
                >
                  <input type="hidden" name="form-name" value="portfolio-contact" />
                  {contactSubmitted ? (
                    <div className={`p-8 border text-center space-y-3 ${isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-50'}`}>
                      <Check className="w-8 h-8 text-sky-500 mx-auto" />
                      <h3 className="text-lg font-light">Message Sent</h3>
                      <p className="text-xs opacity-75">
                        Thank you for reaching out! Camilo will respond promptly regarding your production or inquiry.
                      </p>
                      <button
                        type="button"
                        onClick={() => setContactSubmitted(false)}
                        className="text-xs text-sky-500 underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider opacity-70 mb-1.5">Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Production Designer / Art Director"
                            className={`w-full px-3.5 py-2.5 text-sm border focus:outline-none focus:border-sky-500 transition ${
                              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider opacity-70 mb-1.5">Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@production.com"
                            className={`w-full px-3.5 py-2.5 text-sm border focus:outline-none focus:border-sky-500 transition ${
                              isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider opacity-70 mb-1.5">Production / Role Inquiry</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="e.g., Art Dept Trainee / Set Dresser / 3D Rhino Modeling"
                          className={`w-full px-3.5 py-2.5 text-sm border focus:outline-none focus:border-sky-500 transition ${
                            isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider opacity-70 mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          placeholder="Dates, location, or project details..."
                          className={`w-full px-3.5 py-2.5 text-sm border focus:outline-none focus:border-sky-500 transition ${
                            isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900'
                          }`}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white text-xs uppercase tracking-widest font-medium transition flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" /> Send Inquiry
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* --- MINIMALIST FOOTER (Always shows all links + social icons, zero hamburger icon) --- */}
      <footer className={`border-t py-10 px-5 sm:px-8 lg:px-10 text-xs transition-colors ${
        isDark ? 'border-neutral-800/80 bg-[#0e0e0e] text-neutral-400' : 'border-neutral-200 bg-neutral-50/60 text-neutral-600'
      }`}>
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left">
              <button
                onClick={() => handleNavClick('all')}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-sky-500 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Camilo Ramírez Martínez
              </button>
              <p className="text-[11px] uppercase tracking-[0.18em] mt-0.5 opacity-75">
                Industrial Designer • Production Designer
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 uppercase tracking-[0.16em] text-[11px] font-light">
              <button
                onClick={() => handleNavClick('all')}
                className={`transition-colors hover:text-sky-500 ${
                  activeNav === 'all' ? (isDark ? 'text-white font-medium' : 'text-neutral-900 font-medium') : ''
                }`}
              >
                Home
              </button>
              {['Commercial', 'Film', 'About', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`transition-colors hover:text-sky-500 ${
                    activeNav === item ? (isDark ? 'text-white font-medium' : 'text-neutral-900 font-medium') : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3.5">
              <a
                href={PROFILE_LINKS.imdb}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IMDb Profile"
                title="IMDb Profile"
                className={`px-2 py-1 rounded-sm border text-[11px] font-bold tracking-tight transition-all flex items-center justify-center ${
                  isDark
                    ? 'border-neutral-700 text-neutral-200 hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-black'
                    : 'border-neutral-300 text-neutral-800 hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-black'
                }`}
              >
                IMDb
              </a>

              <a
                href={PROFILE_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className={`p-2 rounded-full border transition-all ${
                  isDark
                    ? 'border-neutral-800 text-neutral-300 hover:border-pink-500/60 hover:text-pink-400 hover:bg-white/5'
                    : 'border-neutral-300 text-neutral-700 hover:border-pink-500 hover:text-pink-600 hover:bg-neutral-100'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={`p-2 rounded-full border transition-all ${
                  isDark
                    ? 'border-neutral-800 text-neutral-300 hover:border-sky-500/60 hover:text-sky-400 hover:bg-white/5'
                    : 'border-neutral-300 text-neutral-700 hover:border-sky-600 hover:text-sky-600 hover:bg-neutral-100'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href={PROFILE_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className={`p-2 rounded-full border transition-all ${
                  isDark
                    ? 'border-neutral-800 text-neutral-300 hover:border-red-500/60 hover:text-red-500 hover:bg-white/5'
                    : 'border-neutral-300 text-neutral-700 hover:border-red-600 hover:text-red-600 hover:bg-neutral-100'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
            </div>

          </div>

          <div className={`pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] opacity-75 ${
            isDark ? 'border-neutral-800/60' : 'border-neutral-200/80'
          }`}>
            <div>
              © {new Date().getFullYear()} Camilo Ramírez Martínez. Industrial Designer • Production Designer.
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-sky-500" /> {PROFILE_LINKS.location}
            </div>
          </div>

        </div>
      </footer>

      {/* --- PROJECT DETAIL LIGHTBOX MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/95 text-white overflow-y-auto animate-fadeIn">
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sky-400">
                {selectedProject.category}
              </span>
              <span className="text-white/30">•</span>
              <h3 className="text-sm sm:text-base font-light tracking-wide">
                {selectedProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleStepProject(-1)}
                className="p-2 hover:bg-white/10 rounded-full transition"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleStepProject(1)}
                className="p-2 hover:bg-white/10 rounded-full transition"
                title="Next Project (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-2 p-2 hover:bg-white/10 rounded-full text-sky-400 transition"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="aspect-video w-full bg-neutral-900 overflow-hidden relative border border-white/10">
                <img
                  src={selectedProject.gallery[activeGalleryIndex]?.url || selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
                <p>{selectedProject.gallery[activeGalleryIndex]?.caption}</p>
                <span className="shrink-0 ml-4">
                  {activeGalleryIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>

              {selectedProject.gallery.length > 1 && (
                <div className="flex gap-3 pt-2 overflow-x-auto pb-2">
                  {selectedProject.gallery.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveGalleryIndex(index)}
                      className={`relative w-28 aspect-video overflow-hidden border-2 transition ${
                        activeGalleryIndex === index ? 'border-sky-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img src={item.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4 bg-neutral-900/90 border border-white/10 p-6 space-y-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-sky-400">
                  {selectedProject.subCategory}
                </div>
                <h2 className="text-2xl font-light mt-1">{selectedProject.title}</h2>
                <p className="text-sm text-neutral-300 mt-1">{selectedProject.role}</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {selectedProject.location} • {selectedProject.year}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {selectedProject.summary}
              </p>

              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2.5">
                  Key Contributions
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300 font-light leading-relaxed">
                  {selectedProject.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                  Skills & Tools Applied
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-200 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}