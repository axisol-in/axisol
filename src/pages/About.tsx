import React, { useEffect, useRef } from "react";
import {
  PencilRuler,
  BadgeCheck,
  Lightbulb,
  ShoppingCart,
  Globe,
  ShieldCheck,
  MessageCircle,
  Gauge,
  Smartphone,
} from "lucide-react";

const About: React.FC = () => {
  const animatedScrollRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const allAnimatedElements = [
      ...animatedScrollRefs.current.filter((el) => el),
      timelineRef.current,
    ].filter((el) => el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    allAnimatedElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !animatedScrollRefs.current.includes(el)) {
      animatedScrollRefs.current.push(el);
    }
  };

  return (
      <div className="min-h-screen bg-black text-white">
        <style>{pageStyles}</style>
        <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container flex justify-center">
            <div className="hero-content animate-on-scroll" ref={addRef}>
              <h1 className="text-center">About <span className="text-primary">AXISOL</span></h1>
              <p className="text-left">
                Axisol was incorporated with the objective of providing best in
                class Rooftop EPC solutions India, following the best global
                practices and forging alliances with leading global players in
                the domain.
              </p>
              <div className="button-group">
                {/* View Brochure Button (opens new tab) */}
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View our society brochure
                </a>
                <a href="#cta" className="btn btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
          <section id="values">
            <div className="container text-center">
              <h2 className="animate-on-scroll" ref={addRef}>
                Our Unique Value Propositions
              </h2>
              <p className="section-subtitle animate-on-scroll" ref={addRef}>
                Discover the pillars that set Axisol apart in solar EPC solutions.
              </p>
              <div className="values-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "100ms" }}>
                  <PencilRuler size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">In-House Design & Engineering</h3>
                  <p>Expert team for custom, high-performance solar solutions.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "200ms" }}>
                  <BadgeCheck size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Transparent Product Selection</h3>
                  <p>Clear, unbiased options for Tier 1 products—no hidden agendas.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "300ms" }}>
                  <Lightbulb size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Innovative Mounting Solutions</h3>
                  <p>Creative designs to maximize space and power generation.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "400ms" }}>
                  <ShoppingCart size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Direct Procurement</h3>
                  <p>Efficient sourcing for best pricing and quality assurance.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "500ms" }}>
                  <Globe size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Web Portal & Mobile Application</h3>
                  <p>Track project progress and access resources anytime, anywhere.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "600ms" }}>
                  <ShieldCheck size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">5 Years EPC Support</h3>
                  <p>Comprehensive warranty and maintenance for peace of mind.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "700ms" }}>
                  <MessageCircle size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Central Complaint Handling System</h3>
                  <p>Streamlined support for quick resolution of any issues.</p>
                </div>
                <div className="value-card animate-on-scroll p-6 rounded-xl bg-[#111]" ref={addRef} style={{ transitionDelay: "800ms" }}>
                  <Gauge size={40} className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold mb-2">Net/Gross Metering Assistance</h3>
                  <p>Expert help for seamless integration with local utilities.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Team Section */}
        <section id="team">
          <div className="container text-center">
            <h2 className="animate-on-scroll" ref={addRef}>
              The Architects of Your Savings
            </h2>
            <div className="team-grid">
              <div className="team-card animate-on-scroll flex flex-col items-center text-center" ref={addRef} style={{ transitionDelay: "100ms" }}>
                <img
                  src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/673907c1-026d-49d7-bf6f-b1e6a147b97e"
                  alt="Dhaval Mehta"
                  className="team-avatar"
                />
                <h3>Dhaval Mehta</h3>
                <div className="role">CEO</div>
                <p>
                  Leading AXISOL's strategic vision with extensive experience in
                  the renewable energy sector.
                </p>
              </div>
              <div className="team-card animate-on-scroll flex flex-col items-center text-center" ref={addRef} style={{ transitionDelay: "200ms" }}>
                <img
                  src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/e1a5f4f8-11f2-45a2-97b7-6f81c9b609c1"
                  alt="Sunny Dani"
                  className="team-avatar"
                />
                <h3>Sunny Dani</h3>
                <div className="role">CMO</div>
                <p>
                  Driving market expansion and ensuring every client receives
                  world-class service and support.
                </p>
              </div>
              <div className="team-card animate-on-scroll flex flex-col items-center text-center" ref={addRef} style={{ transitionDelay: "300ms" }}>
                <img
                  src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/a114f6b2-65a2-4a41-b845-8f6443c0594a"
                  alt="Bhavin Mehta"
                  className="team-avatar"
                />
                <h3>Bhavin Mehta</h3>
                <div className="role">CTO</div>
                <p>
                  Bringing technical expertise and operational excellence to
                  ensure every project exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const pageStyles = `
    :root {
        --bg-color: #080808;
        --card-bg-color: #111111;
        --text-primary: #f1f1f1;
        --text-secondary: #c7c7c7;
        --accent-color: #f39c12;
        --border-color: rgba(255, 255, 255, 0.15);
        --font-family: 'Inter', sans-serif;
    }
    html { scroll-behavior: smooth; }
    body {
        background-color: var(--bg-color);
        color: var(--text-primary);
        font-family: var(--font-family);
        font-weight: 400; /* Increased base font weight for better readability */
        line-height: 1.7;
        overflow-x: hidden;
    }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2; }
    section { padding: 120px 0; position: relative; }
    h1, h2, h3, h4 { font-weight: 600; letter-spacing: -0.03em; color: var(--text-primary); }
    h2 { font-size: 3rem; text-align: center; margin-bottom: 24px; }
    .section-subtitle { text-align: center; font-size: 1.1rem; max-width: 600px; margin: 0 auto 80px auto; color: var(--text-secondary); font-weight: 400; }
    
    /* --- Buttons --- */
    .btn { display: inline-block; padding: 12px 30px; font-size: 1rem; font-weight: 500; text-decoration: none; border-radius: 5px; transition: all 0.3s ease; border: 2px solid transparent; cursor: pointer; }
    .btn-primary { background-color: var(--accent-color); color: var(--bg-color); }
    .btn-primary:hover { background-color: #ffb742; }
    .btn-secondary { background-color: transparent; color: var(--text-primary); border-color: var(--border-color); }
    .btn-secondary:hover { background-color: var(--accent-color); color: var(--bg-color); border-color: var(--accent-color); }
    .button-group { display: flex; gap: 16px; justify-content: center; }

    /* --- Hero Section --- */
    .hero {
        min-height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1599625343415-227a85aa1a57?q=80&w=2832&auto=format&fit=crop');
        background-size: cover; background-position: center;
    }
    .hero-content { max-width: 800px; }
    .hero h1 { font-size: 4.5rem; margin-bottom: 16px; }
    .hero p { font-size: 1.25rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px auto; }

    /* --- Story Section --- */
    #story {
        background: linear-gradient(rgba(8, 8, 8, 0.85), rgba(8, 8, 8, 0.85)), url('https://images.unsplash.com/photo-1558495023-5e3a2283e449?q=80&w=2670&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        background-attachment: fixed; /* Parallax effect */
    }
    .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .story-grid h3 { font-size: 1.8rem; margin-bottom: 16px; color: var(--accent-color); }
    .story-grid p { color: var(--text-secondary); }

    /* --- Values Section --- */
    #values { background-color: var(--card-bg-color); }
    .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
    .value-card { text-align: center; }
    .value-card .ph-light { font-size: 3rem; color: var(--accent-color); margin-bottom: 24px; }
    .value-card h3 { font-size: 1.3rem; margin-bottom: 12px; }
    .value-card p { color: var(--text-secondary); font-size: 0.95rem; }
    
    /* --- Timeline Section --- */
    .timeline { position: relative; max-width: 800px; margin: 0 auto; }
    .timeline-line { position: absolute; width: 2px; background: var(--border-color); top: 0; bottom: 0; left: 50%; margin-left: -1px; }
    .timeline-line-progress { width: 100%; height: 0%; background: var(--accent-color); transition: height 1s ease-out; }
    .timeline.is-visible .timeline-line-progress { height: 100%; }
    .timeline-item { padding: 10px 40px; position: relative; width: 50%; opacity: 0; transition: opacity 0.6s ease; }
    .timeline-item.is-visible { opacity: 1; }
    .timeline-item::after {
        content: ''; position: absolute; width: 20px; height: 20px; right: -10px;
        background: var(--bg-color); border: 4px solid var(--accent-color); top: 25px;
        border-radius: 50%; z-index: 1; transition: transform 0.5s ease;
    }
    .timeline-item.is-visible::after { transform: scale(1.1); }
    .timeline-item.left { left: 0; text-align: right; }
    .timeline-item.right { left: 50%; }
    .timeline-item.right::after { left: -10px; }
    .timeline-content h3 { font-size: 1.5rem; }
    .timeline-content time { font-size: 0.9rem; color: var(--accent-color); margin-bottom: 8px; display: block; font-weight: 500; }
    .timeline-content p { font-size: 0.95rem; color: var(--text-secondary); }

    /* --- Team Section --- */
    #team { background-color: var(--card-bg-color); }
    .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .team-card { text-align: center; }
    .team-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 24px; border: 4px solid var(--border-color); }
    .team-card h3 { font-size: 1.4rem; }
    .team-card .role { color: var(--accent-color); font-weight: 500; margin-bottom: 12px; }
    .team-card p { font-size: 0.9rem; color: var(--text-secondary); }

    /* --- CTA & Footer --- */
    #cta {
        background: linear-gradient(rgba(8, 8, 8, 0.8), rgba(8, 8, 8, 0.8)), url('https://images.unsplash.com/photo-1508920938898-8fc594a858f9?q=80&w=2670&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    .cta-box { padding: 60px; text-align: center; background-color: rgba(17, 17, 17, 0.8); backdrop-filter: blur(10px); border-radius: 10px; }
    .cta-box p { max-width: 500px; margin: 0 auto 32px auto; color: var(--text-secondary); }
    .footer { padding: 60px 0; text-align: center; margin-top: 80px; background-color: var(--card-bg-color); }
    .footer .container { border-top: 1px solid var(--border-color); padding-top: 40px; }
    .footer p { color: var(--text-secondary); font-size: 0.9rem; }
    
    /* --- Animation --- */
    .animate-on-scroll { opacity: 0; filter: blur(5px); transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out; }
    .animate-on-scroll.is-visible { opacity: 1; filter: blur(0); transform: translateY(0); }
    
    /* --- Responsive Design --- */
    @media (max-width: 1024px) {
        .values-grid, .team-grid { grid-template-columns: repeat(2, 1fr); }
        .story-grid { grid-template-columns: 1fr; text-align: center; }
        #story, #cta { background-attachment: scroll; } /* Disable parallax on tablet for performance */
    }
    @media (max-width: 768px) {
        h2 { font-size: 2.5rem; } .hero h1 { font-size: 3rem; }
        .values-grid, .team-grid { grid-template-columns: 1fr; gap: 50px; }
        .timeline-line { left: 10px; }
        .timeline-item { width: 100%; padding-left: 50px; padding-right: 10px; }
        .timeline-item.left, .timeline-item.right { left: 0; text-align: left;}
        .timeline-item::after { left: 0; }
    }
  `;


export default About;
