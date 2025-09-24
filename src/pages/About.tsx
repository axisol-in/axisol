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
} from "lucide-react";

import Title from "../components/ui/Title";

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
        <div className="min-h-screen bg-black text-white font-inter">
            <main>
                {/* Hero Section */}
                <section id="hero" className="min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1599625343415-227a85aa1a57?q=80&w=2832&auto=format&fit=crop')" }}>
                    <div className="max-w-[1100px] w-full mx-auto px-6 flex justify-center">
                        <div className="max-w-2xl animate-on-scroll" ref={addRef}>
                            <Title content="About AXISOL" />
                            <p className="text-center text-lg text-gray-300 mb-4">
                                Axisol was incorporated with the objective of providing best in class Rooftop EPC solutions India, following the best global practices and forging alliances with leading global players in the domain.
                            </p>
                            <p className="text-center text-lg text-gray-300 mb-8">
                                Leveraging our experience and cross-functional synergies we have since grown as a multi-faceted company with presence across verticals within the solar energy domain, offering end-to-end solutions and services.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="/brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 font-medium rounded bg-yellow-400 text-black hover:bg-yellow-300 transition border-2 border-transparent"
                                >
                                    View our society brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section id="values" className="bg-[#111] py-28">
                    <div className="max-w-[1100px] mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 animate-on-scroll" ref={addRef}>
                            Our <span className="text-yellow-400">Unique</span> Value Propositions
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-16 animate-on-scroll" ref={addRef}>
                            Discover the pillars that set Axisol apart in solar EPC solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "100ms" }}>
                                <PencilRuler size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">In-House Design & Engineering</h3>
                                <p className="text-gray-400 text-sm">Expert team for custom, high-performance solar solutions.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "200ms" }}>
                                <BadgeCheck size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Transparent Product Selection</h3>
                                <p className="text-gray-400 text-sm">Clear, unbiased options for Tier 1 products—no hidden agendas.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "300ms" }}>
                                <Lightbulb size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Innovative Mounting Solutions</h3>
                                <p className="text-gray-400 text-sm">Creative designs to maximize space and power generation.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "400ms" }}>
                                <ShoppingCart size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Direct Procurement</h3>
                                <p className="text-gray-400 text-sm">Efficient sourcing for best pricing and quality assurance.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "500ms" }}>
                                <Globe size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Web Portal & Mobile Application</h3>
                                <p className="text-gray-400 text-sm">Track project progress and access resources anytime, anywhere.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "600ms" }}>
                                <ShieldCheck size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">5 Years EPC Support</h3>
                                <p className="text-gray-400 text-sm">Comprehensive warranty and maintenance for peace of mind.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "700ms" }}>
                                <MessageCircle size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Central Complaint Handling System</h3>
                                <p className="text-gray-400 text-sm">Streamlined support for quick resolution of any issues.</p>
                            </div>
                            <div className="animate-on-scroll p-6 rounded-xl bg-[#181818]" ref={addRef} style={{ transitionDelay: "800ms" }}>
                                <Gauge size={40} className="mx-auto mb-4 text-yellow-400" />
                                <h3 className="font-semibold mb-2 text-lg">Net/Gross Metering Assistance</h3>
                                <p className="text-gray-400 text-sm">Expert help for seamless integration with local utilities.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section id="team" className="bg-black py-28">
                    <div className="max-w-[1100px] mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 animate-on-scroll" ref={addRef}>
                            The <span className="text-yellow-400">Architects</span> of Your span
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                            <div className="animate-on-scroll flex flex-col items-center text-center p-8 bg-[#181818] rounded-xl" ref={addRef} style={{ transitionDelay: "100ms" }}>
                                <img src="/dhaval.png" alt="Dhaval Mehta" className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/20" />
                                <h3 className="text-xl font-semibold">Dhaval Mehta</h3>
                                <div className="text-yellow-400 font-medium mb-2">CEO</div>
                                <p className="text-gray-400 text-sm">Leading AXISOL's strategic vision with extensive experience in the renewable energy sector.</p>
                            </div>
                            <div className="animate-on-scroll flex flex-col items-center text-center p-8 bg-[#181818] rounded-xl" ref={addRef} style={{ transitionDelay: "200ms" }}>
                                <img src="/sunny.png" alt="Sunny Dani" className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/20" />
                                <h3 className="text-xl font-semibold">Sunny Dani</h3>
                                <div className="text-yellow-400 font-medium mb-2">CMO</div>
                                <p className="text-gray-400 text-sm">Driving market expansion and ensuring every client receives world-class service and support.</p>
                            </div>
                            <div className="animate-on-scroll flex flex-col items-center text-center p-8 bg-[#181818] rounded-xl" ref={addRef} style={{ transitionDelay: "300ms" }}>
                                <img src="/bhavin.png" alt="Bhavin Mehta" className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/20" />
                                <h3 className="text-xl font-semibold">Bhavin Mehta</h3>
                                <div className="text-yellow-400 font-medium mb-2">CTO</div>
                                <p className="text-gray-400 text-sm">Bringing technical expertise and operational excellence to ensure every project exceeds expectations.</p>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section className="py-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        <img src="/Society-Brochure-17.png" className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 17" />
                        <img src="/Society-Brochure-02.png" className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 02" />
                        <img src="/Society-Brochure-03.png" className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 03" />
                    </div>
                </section>
            </main>
        </div>
    );
};



export default About;
