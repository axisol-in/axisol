import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const animatedScrollRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const allAnimatedElements = [...animatedScrollRefs.current.filter(el => el), timelineRef.current].filter(el => el);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2
    });
    allAnimatedElements.forEach(el => {
        if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const addRef = (el: HTMLElement | null) => {
    if (el && !animatedScrollRefs.current.includes(el)) {
      animatedScrollRefs.current.push(el);
    }
  };

  return (
    <>
      <style>{pageStyles}</style>
      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content animate-on-scroll" ref={addRef}>
                    <h1>About AXISOL</h1>
                    <p>Pioneering India's clean energy future with high-performance solar solutions for housing societies and businesses.</p>
                    <div className="button-group">
                       <a href="#story" className="btn btn-primary">Our Story</a>
                       <a href="#cta" className="btn btn-secondary">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Story Section */}
        <section id="story">
            <div className="container">
                <div className="story-grid">
                    <div className="animate-on-scroll" ref={addRef}>
                        <h2>Our Founding Vision</h2>
                        <p className="section-subtitle" style={{textAlign:'left', marginLeft:0}}>Forging an energy-independent India.</p>
                    </div>
                    <div className="story-content animate-on-scroll" ref={addRef}>
                        <h3>The Genesis of AXISOL</h3>
                        <p>AXISOL was founded to push every single day to achieve India's mission of 500 gigawatts (GW) of renewable energy by 2030. We are dedicated to working with clients to adopt the most cost-effective methods, ensuring the viability of your investment in clean energy. Our mission is to make this transition seamless by providing end-to-end project execution, from planning to commissioning.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Values Section */}
        <section id="values">
            <div className="container">
                <h2 className="animate-on-scroll" ref={addRef}>The Pillars of Our Service</h2>
                <p className="section-subtitle animate-on-scroll" ref={addRef}>Our core principles guide every project we undertake, guaranteeing performance, transparency, and value for your investment.</p>
                <div className="values-grid">
                    <div className="value-card animate-on-scroll" ref={addRef} style={{transitionDelay: '100ms'}}>
                        <i className="ph-light ph-chart-line-up"></i>
                        <h3>High Performance</h3>
                        <p>We guarantee a minimum plant performance ratio of 75% through expert engineering and high-quality installation.</p>
                    </div>
                    <div className="value-card animate-on-scroll" ref={addRef} style={{transitionDelay: '200ms'}}>
                        <i className="ph-light ph-handshake"></i>
                        <h3>Transparency</h3>
                        <p>We provide informed options and help you choose the best-fit Tier 1 products, rather than pushing favored brands.</p>
                    </div>
                    <div className="value-card animate-on-scroll" ref={addRef} style={{transitionDelay: '300ms'}}>
                        <i className="ph-light ph-wrench"></i>
                        <h3>Workmanship Support</h3>
                        <p>Every installation is covered by a 5-year EPC and workmanship support plan, ensuring hassle-free maintenance.</p>
                    </div>
                    <div className="value-card animate-on-scroll" ref={addRef} style={{transitionDelay: '400ms'}}>
                        <i className="ph-light ph-lightbulb"></i>
                        <h3>Innovative Solutions</h3>
                        <p>Our in-house design team provides innovative installation solutions that maximize your use of space and power generation.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline">
            <div className="container">
                <h2 className="animate-on-scroll" ref={addRef}>Our Journey & Milestones</h2>
                <p className="section-subtitle animate-on-scroll" ref={addRef}>Our experience is measured by our success and the trust our clients place in us.</p>
                <div className="timeline" ref={timelineRef}>
                    <div className="timeline-line"><div className="timeline-line-progress"></div></div>
                    <div className="timeline-item left" ref={addRef}><div className="timeline-content"><time>7+ Years</time><h3>Excellence in Execution</h3><p>With over seven years in operation, we have a proven track record of excellence and astute project planning.</p></div></div>
                    <div className="timeline-item right" ref={addRef}><div className="timeline-content"><time>100+ Customers</time><h3>Building Happy Communities</h3><p>We have served over 100 happy customers, constantly innovating to add value to their investments.</p></div></div>
                    <div className="timeline-item left" ref={addRef}><div className="timeline-content"><time>21 MW+</time><h3>Proven Track Record</h3><p>We have successfully commissioned over 21 MW of solar projects across a diverse range of verticals.</p></div></div>
                    <div className="timeline-item right" ref={addRef}><div className="timeline-content"><time>Future Goal</time><h3>Supporting India's Mission</h3><p>We continue to align with India's national goal of achieving 500 GW of renewable energy by 2030.</p></div></div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="team">
            <div className="container">
                <h2 className="animate-on-scroll" ref={addRef}>The Architects of Your Savings</h2>
                <p className="section-subtitle animate-on-scroll" ref={addRef}>Meet the multidisciplinary experts dedicated to building India's most efficient and reliable solar solutions.</p>
                <div className="team-grid">
                    <div className="team-card animate-on-scroll" ref={addRef} style={{transitionDelay: '100ms'}}>
                        <img src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/673907c1-026d-49d7-bf6f-b1e6a147b97e" alt="Dhaval Mehta" className="team-avatar"/>
                        <h3>Dhaval Mehta</h3><div className="role">CEO</div><p>Leading AXISOL's strategic vision with extensive experience in the renewable energy sector.</p>
                    </div>
                    <div className="team-card animate-on-scroll" ref={addRef} style={{transitionDelay: '200ms'}}>
                        <img src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/e1a5f4f8-11f2-45a2-97b7-6f81c9b609c1" alt="Sunny Dani" className="team-avatar"/>
                        <h3>Sunny Dani</h3><div className="role">CMO</div><p>Driving market expansion and ensuring every client receives world-class service and support.</p>
                    </div>
                    <div className="team-card animate-on-scroll" ref={addRef} style={{transitionDelay: '300ms'}}>
                        <img src="https://storage.googleapis.com/gemini-prod-us-west1-4205090333/a114f6b2-65a2-4a41-b845-8f6443c0594a" alt="Bhavin Mehta" className="team-avatar"/>
                        <h3>Bhavin Mehta</h3><div className="role">CTO</div><p>Bringing technical expertise and operational excellence to ensure every project exceeds expectations.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta">
            <div className="container">
                <div className="cta-box animate-on-scroll" ref={addRef}>
                    <h2>Join the Future of Energy</h2>
                    <p>Become part of a new era in sustainable energy. Connect with our team and discover the power and savings of solar with AXISOL.</p>
                    <a href="mailto:sales@axistechinfra.com" className="btn btn-primary">Get Your Free Consultation</a>
                </div>
            </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
            <p>&copy; 2025 AXISOL. All Rights Reserved. Empowering an energy-independent India.</p>
        </div>
      </footer>
    </>
  );
};

export default About;