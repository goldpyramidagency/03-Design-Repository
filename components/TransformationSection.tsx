"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const carouselImages = [
  "/images/adventure-tourism-website.jpeg",
  "/images/artisan-vase-ecommerce-website.jpeg",
  "/images/audio-product-ecommerce-website.png",
  "/images/beauty-clinic-responsive-website.png",
  "/images/furniture-homeware-website.jpeg",
  "/images/interior-design-lifestyle-mockup.jpeg",
];

export default function TransformationSection() {
  const headingRef = useRef<HTMLSpanElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const words = ["Transformation", "Marketing", "Growth"];
  
  // Using a ref for the index to avoid closure issues in setInterval
  const indexRef = useRef(0);

  useEffect(() => {
    // Word Swapping Animation
    const interval = setInterval(() => {
      if (!headingRef.current) return;
      
      const nextIndex = (indexRef.current + 1) % words.length;
      
      gsap.to(headingRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (headingRef.current) {
            headingRef.current.innerText = words[nextIndex];
            gsap.fromTo(headingRef.current, 
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
          }
          indexRef.current = nextIndex;
        }
      });
    }, 2500); // Swaps every 2.5s (2s stay + 0.5s transition)

    // 3D Carousel Animation
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(".carousel-item");
      const totalItems = items.length;
      const angle = 360 / totalItems;
      const radius = 300; // Distance from center

      items.forEach((item, i) => {
        gsap.set(item, {
          rotationY: i * angle,
          transformOrigin: `50% 50% -${radius}px`,
          z: radius
        });
      });

      gsap.to(carouselRef.current, {
        rotationY: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
        transformStyle: "preserve-3d"
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section transformation-section" style={{ overflow: "hidden", background: "var(--paper)" }}>
      <div className="container grid-2-col">
        <div className="content-side">
          <span className="eyebrow">The 03 Advantage</span>
          <h2 className="section-title">
            03 Design is Here for Your <br />
            <span ref={headingRef} className="animated-word" style={{ color: "var(--blue)" }}>
              Transformation
            </span>
          </h2>
          <p className="section-copy">
            Your business deserves to look as credible online as it is in person.
          </p>
          <p className="section-copy" style={{ marginTop: "1rem" }}>
            03 Design Studio builds and manages websites, hosting, social media, SEO, AEO, and growth infrastructure for small and medium businesses that want to be found, trusted, and chosen.
          </p>
        </div>

        <div className="visual-side">
          <div className="carousel-container">
            <div ref={carouselRef} className="carousel-3d">
              {carouselImages.map((src, i) => (
                <div key={i} className="carousel-item">
                  <Image 
                    src={src} 
                    alt={`Carousel image ${i + 1}`} 
                    width={400} 
                    height={300} 
                    className="carousel-img"
                    priority={i < 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
