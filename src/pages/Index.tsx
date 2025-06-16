import { Button } from "@/components/ui/button";
import NavLinks from "@/components/NavLinks";
import { Menu } from "lucide-react";
import React from "react";
import "./floating-card.css";
import { motion, AnimatePresence } from "framer-motion";

const skills = ["web design", "ui/ux design", "databases", "business cards"];
const services = [
  { title: "3D ARTIST", tags: ["Game Design", "Environment Artist", "3D Artist", "Avatar Artist"], img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80" },
  { title: "GRAPHIC DESIGN", tags: ["Presentation", "Modern graphic design", "User Interface Design", "Print design", "Logo Design"], img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80" },
];
const videoExplainerService = { title: "VIDEO EXPLAINER", tags: ["Animated Explainer", "3D explainer", "Live-action explainer"], img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80" };
const digitalMarketingService = { title: "DIGITAL MARKETING", tags: ["Advertising", "Search Engine Optimization", "Affiliate Marketing", "Email Marketing", "Content"], img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80" };
const freelancers = Array.from({ length: 12 }, (_, i) => `https://randomuser.me/api/portraits/men/${i + 10}.jpg`);

const reviews = [
  {
    text: "I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thomas Karlov",
    title: "CEO at Cakar ltd.",
    companyLogo: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="M20 10l4 7h-8l4-7zm0 20l-4-7h8l-4 7zm-7-7l-4-7 4-7 4 7-4 7zm14 0l4-7-4-7-4 7 4 7z" fill="#aec3c3"/></svg>,
    company: "CAKAR"
  },
  {
    text: "The platform made it so easy to find the perfect freelancer for my business. The onboarding was seamless and the support team was always there to help. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jessica Lee",
    title: "Marketing Lead at BrightCo",
    companyLogo: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><rect x="12" y="12" width="16" height="16" rx="8" fill="#aec3c3"/></svg>,
    company: "BrightCo"
  },
  {
    text: "I love how curated the talent pool is. Every freelancer I've worked with has been professional, skilled, and a joy to collaborate with.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Priya Sharma",
    title: "Founder at Designify",
    companyLogo: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><polygon points="20,10 30,30 10,30" fill="#aec3c3"/></svg>,
    company: "Designify"
  },
  {
    text: "The process was so much faster than other platforms. I found a great freelancer in less than a day and the results were fantastic.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Carlos Mendez",
    title: "Product Manager at TechFlow",
    companyLogo: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><path d="M10 20h20" stroke="#aec3c3" strokeWidth="4"/><path d="M20 10v20" stroke="#aec3c3" strokeWidth="4"/></svg>,
    company: "TechFlow"
  },
  {
    text: "Every freelancer I've hired here has been reliable and delivered high-quality work. It's my go-to platform for finding top women talent.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Fatima Noor",
    title: "Operations at GreenLeaf",
    companyLogo: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff"/><ellipse cx="20" cy="20" rx="10" ry="6" fill="#aec3c3"/></svg>,
    company: "GreenLeaf"
  }
];

const AnimatedMenuButton = ({ open, onClick, inMenu = false }: { open: boolean, onClick: () => void, inMenu?: boolean }) => (
  <button
    aria-label={open ? 'Close main menu' : 'Open main menu'}
    className={`p-2 rounded-full transition focus:outline-none flex flex-col justify-center items-center w-10 h-10 group z-50 ${inMenu ? '' : 'ml-2'}`}
    onClick={onClick}
    style={inMenu ? { position: 'absolute', top: 18, right: 18 } : {}}
  >
    <span
      className={`block h-0.5 w-7 bg-black rounded transition-all duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}
      style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
    ></span>
    <span
      className={`block h-0.5 w-7 bg-black rounded transition-all duration-300 ease-in-out my-1 ${open ? 'opacity-0' : ''}`}
      style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
    ></span>
    <span
      className={`block h-0.5 w-7 bg-black rounded transition-all duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''}`}
      style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
    ></span>
  </button>
);

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [currentReview, setCurrentReview] = React.useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
      {/* Main colored area with white border */}
      <div className="bg-white m-2 mt-4 rounded-xl md:rounded-3xl">
        {/* Header/Nav */}
        <div className="[background-color:#aec3c3] py-2 md:py-3 lg:py-4 shadow rounded-t-xl md:rounded-t-[2.5rem] w-full">
          <nav className="grid grid-cols-[auto_1fr_auto] items-center relative w-full" style={{ gridTemplateColumns: "auto 1fr auto" }}>
            <span className="text-xl md:text-2xl font-bold text-black drop-shadow-sm ml-4 md:ml-8 col-start-1 row-start-1">HerPlace</span>
          <div className="hidden md:flex justify-center col-start-2 row-start-1">
            <NavLinks />
          </div>
          <div className="flex flex-row items-center gap-2 md:gap-4 col-start-3 row-start-1 pr-2 md:pr-4">
              <button 
                className="border border-black text-black font-medium px-3 py-1 rounded-full text-sm shadow-none bg-[#aec3c3] transition-all duration-300 relative z-50 pointer-events-auto md:px-7 md:py-2 md:text-lg md:hover:bg-black md:hover:text-white md:active:bg-black md:active:text-white md:focus:bg-black md:focus:text-white focus:outline-none active:bg-[#aec3c3] active:text-black focus:bg-[#aec3c3] focus:text-black"
                style={{ 
                  position: 'relative',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
                onMouseEnter={window.innerWidth >= 768 ? (e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                } : undefined}
                onMouseLeave={window.innerWidth >= 768 ? (e) => {
                  e.currentTarget.style.backgroundColor = '#aec3c3';
                  e.currentTarget.style.color = 'black';
                } : undefined}
            >
              Log in
              </button>
              <button 
                className="bg-black text-white font-semibold px-3 py-1 rounded-full text-sm border border-black transition-all duration-300 relative z-50 pointer-events-auto md:px-7 md:py-2 md:text-lg md:hover:bg-[#aec3c3] md:hover:text-black md:active:bg-[#aec3c3] md:active:text-black md:focus:bg-[#aec3c3] md:focus:text-black focus:outline-none active:bg-black active:text-white focus:bg-black focus:text-white"
                style={{ 
                  position: 'relative',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
                onMouseEnter={window.innerWidth >= 768 ? (e) => {
                  e.currentTarget.style.backgroundColor = '#aec3c3';
                  e.currentTarget.style.color = 'black';
                } : undefined}
                onMouseLeave={window.innerWidth >= 768 ? (e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                } : undefined}
              id="joinus-btn"
            >
              Join us
              </button>
            <div className="flex md:hidden items-center">
                <AnimatedMenuButton open={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
            </div>
          </div>
        </nav>
        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-start justify-end md:hidden bg-black/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="mt-4 mr-4 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl bg-white/60 w-64 max-w-[90vw] p-6 flex flex-col gap-4 relative"
                style={{
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
                }}
                onClick={e => e.stopPropagation()}
              >
                <AnimatedMenuButton open={true} onClick={() => setMobileMenuOpen(false)} inMenu />
                <div className="mt-12" />
                <NavLinks onClick={() => setMobileMenuOpen(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        {/* Hero Section */}
        <div className="relative [background-color:#aec3c3] rounded-b-xl md:rounded-b-[2.5rem] overflow-visible min-h-[420px] pb-24 w-full px-0">
          <div className="w-full flex flex-col pt-8 md:pt-12 lg:pt-16">
            <div className="w-full flex items-center px-2 sm:px-4 md:px-6 lg:px-8 relative">
            <div className="w-full overflow-hidden">
                <span className="font-bricolage text-white font-extrabold uppercase select-none pointer-events-none z-10 block text-left leading-tight w-full" style={{ fontSize: "clamp(2.5rem, 18vw, 12rem)", lineHeight: 0.95, fontWeight: 900, letterSpacing: "clamp(-0.05em, -0.02em, 0em)", textShadow: "0px 2px 8px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.09)", width: "100%", transform: "scaleX(clamp(1.1, 1.3, 1.4))", transformOrigin: "left center" }}>FREELANCE</span>
              </div>
            </div>
            {/* Search bar and tags */}
            <div className="w-full flex flex-col items-start mt-6 ml-2 sm:ml-4 md:ml-6 lg:ml-8 z-30 relative">
              <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md px-4 py-2">
                <svg className="w-5 h-5 text-gray-400 mr-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" placeholder="Search for any services..." className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base px-2 pointer-events-auto" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button className="ml-2 bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-800 transition pointer-events-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="8"/></svg>
                </button>
              </div>
              {/* Popular skills label and tags in a row */}
              <div className="flex items-center gap-2 mt-4 z-40 relative">
                <span className="font-semibold text-gray-700 mr-2">Popular skills:</span>
                {skills.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium cursor-pointer" onClick={() => setSearchValue(skill)}>{skill}</span>
                ))}
              </div>
            </div>
            {/* Subheading/description */}
            <div className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 mt-6 max-w-2xl text-gray-800 text-base md:text-lg">
              A curated freelance platform connects agencies with female talent, facilitating premium hiring and flexible collaboration.
            </div>
            {/* Trusted Freelancers Card */}
            <div className="ml-2 mr-2 sm:ml-4 sm:mr-4 md:ml-6 md:mr-6 lg:ml-8 lg:mr-8 mt-6 flex items-center gap-4 rounded-[2.5rem] shadow-lg px-6 py-5 max-w-md floating-card z-40" style={{backgroundColor: '#f3fcfb', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
              <div className="flex -space-x-2">
                {freelancers.slice(0, 6).map((src, i) => (
                  <img key={i} src={src} alt="avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Trusted Freelancers</span>
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-gray-500 text-sm">200+ Satisfied Customers</span>
              </div>
            </div>
          </div>
          {/* Woman with laptop image and profile overlay */}
          <div className="absolute right-0 -bottom-48 z-10 flex flex-col items-end">
            <img src="/lovable-uploads/70ff0b38-73ba-4b64-adaf-26cb0d9b84a9.png" alt="Woman working on laptop" className="w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] md:w-[900px] md:h-[900px] lg:w-[1000px] lg:h-[1000px] xl:w-[1100px] xl:h-[1100px] object-contain drop-shadow-2xl" />
            <div className="-mt-64 mr-8 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-start w-64 opacity-0">
              <div className="flex items-center gap-3 mb-2">
                <img src="/lovable-uploads/70ff0b38-73ba-4b64-adaf-26cb0d9b84a9.png" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <span className="font-semibold">@jenny</span>
                  <div className="text-xs text-gray-500">Ui/Ux Designer</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <span>80+ projects completed</span>
                <span>•</span>
                <span>$30 per hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Services */}
      <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">SHE'S GOT SKILLS</h2>
          <div className="flex gap-2 -ml-2">
            <button type="button" aria-label="Previous" className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white">
              <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>
            <button type="button" aria-label="Next" className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-black">
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-800 mb-8 font-normal mt-0">
          From beautifully crafted content to razor-sharp digital strategy,<br/>
          discover women-led expertise that's not just talented — it's transformational.
        </p>
        <div className="w-full max-w-7xl mx-auto border-2 border-black rounded-3xl bg-white p-1 mb-16">
          <div className="grid grid-rows-2 grid-cols-4 gap-0 h-full relative">
            {/* Horizontal dividing line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-black opacity-0 z-20" style={{transform: 'translateY(-50%)'}}></div>
            {/* Vertical dividing lines for top row */}
            <div className="absolute top-0 left-1/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            <div className="absolute top-0 left-2/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            <div className="absolute top-0 left-3/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            {/* Vertical dividing lines for bottom row */}
            <div className="absolute top-1/2 left-1/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            <div className="absolute top-1/2 left-2/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            <div className="absolute top-1/2 left-3/4 h-1/2 w-0.5 bg-black opacity-0 z-20" style={{transform: 'translateX(-1px)'}}></div>
            {/* Top row */}
            {/* 1st card: 3D ARTIST */}
            <div className="flex flex-col justify-between p-6">
              <h3 className="font-extrabold text-lg mb-2">{services[0].title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {services[0].tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium border border-gray-300">{tag}</span>
                ))}
              </div>
              <button type="button" aria-label="Learn More" className="mt-2 w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg self-end arrow-btn group">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="arrow-svg transition-transform duration-300 group-hover:-rotate-45"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
            {/* 2nd card: IMAGE for Video Explainer */}
            <div className="w-full h-full flex">
              <img src={videoExplainerService.img} alt="Video Explainer" className="w-full h-full object-cover rounded-3xl" style={{minHeight: 0, minWidth: 0, flex: 1}} />
            </div>
            {/* 3rd card: GRAPHIC DESIGN */}
            <div className="flex flex-col justify-between p-6">
              <h3 className="font-extrabold text-lg mb-2">{services[1].title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {services[1].tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium border border-gray-300">{tag}</span>
                ))}
              </div>
              <button type="button" aria-label="Learn More" className="mt-2 w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg self-end arrow-btn group">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="arrow-svg transition-transform duration-300 group-hover:-rotate-45"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
            {/* 4th card: IMAGE for Digital Marketing */}
            <div className="w-full h-full flex">
              <img src={digitalMarketingService.img} alt="Digital Marketing" className="w-full h-full object-cover rounded-3xl" style={{minHeight: 0, minWidth: 0, flex: 1}} />
            </div>
            {/* Bottom row */}
            {/* 1st card: IMAGE placeholder */}
            <div className="w-full h-full flex">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80" alt="Placeholder 1" className="w-full h-full object-cover rounded-3xl" style={{minHeight: 0, minWidth: 0, flex: 1}} />
            </div>
            {/* 2nd card: VIDEO EXPLAINER */}
            <div className="flex flex-col justify-between p-6">
              <h3 className="font-extrabold text-lg mb-2">{videoExplainerService.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {videoExplainerService.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium border border-gray-300">{tag}</span>
                ))}
              </div>
              <button type="button" aria-label="Learn More" className="mt-2 w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg self-end arrow-btn group">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="arrow-svg transition-transform duration-300 group-hover:-rotate-45"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
            {/* 3rd card: IMAGE placeholder */}
            <div className="w-full h-full flex">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80" alt="Placeholder 2" className="w-full h-full object-cover rounded-3xl" style={{minHeight: 0, minWidth: 0, flex: 1}} />
            </div>
            {/* 4th card: DIGITAL MARKETING */}
            <div className="flex flex-col justify-between p-6">
              <h3 className="font-extrabold text-lg mb-2">{digitalMarketingService.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {digitalMarketingService.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium border border-gray-300">{tag}</span>
                ))}
              </div>
              <button type="button" aria-label="Learn More" className="mt-2 w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg self-end arrow-btn group">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="arrow-svg transition-transform duration-300 group-hover:-rotate-45"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Talent/Workmanship Section */}
      <div className="w-full py-0 px-0 flex justify-center items-center rounded-3xl -mt-16 relative min-h-[650px] overflow-hidden">
        <div className="flex flex-row-reverse w-full max-w-7xl min-h-[600px] rounded-3xl overflow-hidden relative">
          {/* Image fills the right half */}
          <div className="flex-1 relative min-h-[600px]">
            <img src="/assets/women-working-together-new-project.jpg" alt="talent" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]" style={{objectPosition: 'center'}} />
          </div>
          {/* Text overlays the left, semi-transparent, rounded, spanning width */}
          <div className="absolute left-0 bottom-0 w-full rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-xl"
                style={{
              background: 'rgba(174, 195, 195, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.25)'
            }}>
            <div className="flex-1 min-w-[220px]">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">For Talent</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-bricolage tracking-tight leading-tight mb-2 md:mb-4">FIND OUTSTANDING<br/>WORKMANSHIP.</h2>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm md:text-base">The exceptional talent showcased through the refined work of women freelancers, carefully curated for creativity and precision, stands as a testament to their expertise, dedication, and the powerful impact of purposeful, remote-first, women-led craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="w-full py-16 px-4 md:px-8 lg:px-12 mb-2">
        <h2 className="text-3xl md:text-5xl font-extrabold font-bricolage tracking-tight leading-tight mb-4 text-center">WHY WE'RE WORTH IT</h2>
        <p className="text-lg md:text-xl text-gray-800 mb-8 font-normal text-center max-w-3xl mx-auto">Because curated talent, meaningful work, and purpose-driven partnerships shouldn't be rare — they should be the standard.</p>
        <div className="flex flex-col items-end gap-10 mt-8 max-w-2xl ml-auto">
          <div className="bg-white rounded-xl shadow p-6 w-full flex flex-row items-center gap-4">
            <img src="https://img.icons8.com/ios-filled/50/000000/collaboration.png" alt="collab" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-bold mb-1">No more endless scrolling</h3>
              <p className="text-gray-600 text-sm">Forget sifting through thousands of random profiles. We handpick only the top-performing, ready-to-work women — matched with your brief, not just your filters.</p>
            </div>
          </div>
          <div className="bg-[#aec3c3]/90 rounded-xl shadow p-6 w-full flex flex-row items-center gap-4 backdrop-blur-md border border-white/30" style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
            <img src="https://img.icons8.com/ios-filled/50/000000/conference-call.png" alt="support" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-bold mb-1">We find. You hire. Fast.</h3>
              <p className="text-gray-700 text-sm">Tell us what you need — and we'll connect you directly to the perfect freelancer. No cold pitches, no ghosting, just seamless onboarding and support.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 w-full flex flex-row items-center gap-4">
            <img src="https://img.icons8.com/ios-filled/50/000000/lock-2.png" alt="secure" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-bold mb-1">Every freelancer. Every time.</h3>
              <p className="text-gray-600 text-sm">Our freelancers are verified, professional, and project-ready. No flaky side hustlers — just serious women committed to quality and long-term relationships.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Testimonials - Redesigned */}
      <div className="w-full py-6 px-2 md:px-8 lg:px-12 flex justify-center items-center my-12 relative">
        {/* Girl image absolutely positioned, below the card */}
        <img src="/assets/girl-image.png" alt="girl" className="hidden md:block absolute -top-[39rem] -left-[8%] w-[60rem] h-auto z-0" style={{objectFit: 'contain'}} />
        {/* Card, relatively positioned and higher z-index */}
        <div className="w-full max-w-7xl h-[340px] bg-[#aec3c3]/90 rounded-[2.5rem] shadow-xl border border-white/30 backdrop-blur-md flex flex-col md:flex-row items-stretch p-6 md:p-6 gap-4 relative z-20" style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
          {/* Left: Heading and Arrows */}
          <div className="flex flex-col justify-between md:w-1/2 gap-4">
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold font-bricolage tracking-tight leading-tight mb-2 md:mb-4 uppercase relative translate-x-8 translate-y-4 md:translate-x-16 md:translate-y-8">
                WHAT OUR<br/>CUSTOMERS SAY
              </h2>
              {/* Scribble Icon */}
              <img src="/assets/scribble.svg" alt="scribble" className="absolute right-4 md:right-20 top-full mt-[-32px] w-28 h-auto md:w-40 md:h-auto" style={{zIndex:1}} />
            </div>
            <div className="flex gap-6 md:gap-4 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-3">
              <button
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center bg-transparent text-3xl transition hover:bg-black hover:text-white"
                onClick={() => setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                aria-label="Previous Review"
              >
                {/* Left Arrow */}
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              </button>
              <button
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center bg-transparent text-3xl transition hover:bg-black hover:text-white"
                onClick={() => setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
                aria-label="Next Review"
              >
                {/* Right Arrow */}
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Testimonial, Avatar, Logo */}
          <div className="flex flex-col justify-between md:w-1/2 gap-4 relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {/* Double quotes icon only, no circle background */}
                <svg width="38" height="28" viewBox="0 0 68 48" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 48c-2-4-3-8-3-12C3 22 15 8 32 8v8c-9 0-16 7-16 16 0 2 0 4 1 6h13v10H6zm36 0c-2-4-3-8-3-12 0-14 12-28 29-28v8c-9 0-16 7-16 16 0 2 0 4 1 6h13v10H42z"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-900">{reviews[currentReview].text}</p>
            </div>
            <div className="flex items-center gap-6 mt-6">
              {/* Avatar and Name */}
              <img src={reviews[currentReview].avatar} alt="customer" className="w-14 h-14 rounded-full object-cover border-2 border-black" />
              <div>
                <span className="block font-extrabold text-lg md:text-xl text-black">{reviews[currentReview].name}</span>
                <div className="text-sm text-gray-700">{reviews[currentReview].title}</div>
              </div>
              {/* Company Logo */}
              <div className="ml-auto flex items-center gap-2">
                {reviews[currentReview].companyLogo}
                <span className="font-extrabold text-lg md:text-xl tracking-wide text-white">{reviews[currentReview].company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experienced Freelancers */}
      <div className="w-full py-16 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Stars and Avatars Grid */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          {/* Glassmorphism 5-star badge */}
          <div className="mb-6 w-48 rounded-full bg-[#aec3c3]/90 border border-white/30 shadow-lg flex items-center justify-center py-2 px-6 backdrop-blur-md" style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#fff" stroke="#aec3c3" strokeWidth="1.5"><polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" /></svg>
              ))}
            </div>
          </div>
          {/* Avatars Grid */}
          <div className="grid grid-cols-6 grid-rows-3 gap-4">
            {[
              "https://randomuser.me/api/portraits/men/10.jpg",
              "https://randomuser.me/api/portraits/women/11.jpg",
              "https://randomuser.me/api/portraits/men/12.jpg",
              "https://randomuser.me/api/portraits/women/13.jpg",
              "https://randomuser.me/api/portraits/men/14.jpg",
              "https://randomuser.me/api/portraits/women/15.jpg",
              "https://randomuser.me/api/portraits/men/16.jpg",
              "https://randomuser.me/api/portraits/women/17.jpg",
              "https://randomuser.me/api/portraits/men/18.jpg",
              "https://randomuser.me/api/portraits/women/19.jpg",
              "https://randomuser.me/api/portraits/men/20.jpg",
              "https://randomuser.me/api/portraits/women/21.jpg",
              "https://randomuser.me/api/portraits/men/22.jpg",
              "https://randomuser.me/api/portraits/women/23.jpg",
              "https://randomuser.me/api/portraits/men/24.jpg",
              "https://randomuser.me/api/portraits/women/25.jpg",
              "https://randomuser.me/api/portraits/men/26.jpg",
              "https://randomuser.me/api/portraits/women/27.jpg"
            ].map((src, i) => (
              <img key={i} src={src} alt="avatar" className="w-16 h-16 rounded-full border-2 border-white object-cover shadow" />
            ))}
          </div>
        </div>
        {/* Right: Heading, Subheading, Button */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold font-bricolage mb-6 leading-tight uppercase">EXPERIENCED<br/>FREELANCERS</h2>
          <p className="text-gray-700 mb-8 max-w-xl text-lg md:text-xl">Experienced women freelancers bring polished expertise and purpose-driven precision, delivering standout work that consistently exceeds client expectations and goals.</p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg">Start Finding</button>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-black text-white pt-12 px-4 md:px-8 lg:px-12 mt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8 mb-8">
          {/* Left: Logo, tagline, social icons */}
          <div className="flex-1 min-w-[220px] flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              {/* Text logo only */}
              <span className="font-extrabold text-2xl tracking-widest uppercase">HerPlace</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">A freelance service website connecting businesses with exceptional women freelancers, making hiring smarter, faster, and more meaningful.</p>
            <div className="flex gap-4 mb-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
                <img src="/assets/facebook.svg" alt="Facebook" width={32} height={32} />
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <img src="/assets/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </a>
              {/* Email (in place of Twitter) */}
              <a href="mailto:prakharr.creatific@gmail.com" aria-label="Email" className="hover:opacity-80 transition flex items-center justify-center w-12 h-12">
                <img src="/assets/email.svg" alt="Email" className="w-8 h-8 object-contain mx-auto my-auto" />
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                <img src="/assets/instagram.svg" alt="Instagram" width={32} height={32} />
              </a>
            </div>
          </div>
          {/* Right: Four columns of links */}
          <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>How It Works</li>
                <li>Trust & Safety</li>
                <li>Help Centre</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Customer Stories</li>
                <li>Cost Calculator</li>
                <li>Startup Cities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Freelance</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Services</li>
                <li>Services By Country</li>
                <li>Skills</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>
        {/* Bottom row: copyright left, links right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8">
          <div className="text-gray-400 text-sm">© 2025 HerPlace. All rights reserved.</div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
            <a href="#" className="hover:text-white transition">Company</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
