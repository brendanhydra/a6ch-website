"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delayed, .fade-in-slow');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-aromey-dark bg-dotted bg-dots">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link className="font-bold text-xl text-aromey-primary" href="/">
              a6ch
            </Link>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="font-medium capitalize transition-colors duration-300 text-aromey-primary hover:text-aromey-accent"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-aromey-dark">
          <div className="container mx-auto px-4 py-16 z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center animate-fade-in-up-delayed">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-aromey-primary/20">
                  <Image
                    src="https://yt3.googleusercontent.com/9v-PNa2MOTz7y1KqY8Zm_BkjNnYYvYn4Jhz5oc57Qta4qhc8h1vVINPI_5ls2mXbxEKZpjaYpV8=s160-c-k-c0x00ffffff-no-rj"
                    alt="a6ch Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold text-aromey-primary mb-4 animate-fade-in-up-delayed">
                a6ch
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-aromey-secondary mb-8 animate-fade-in-up-slow">
                a guy who recommends adult visual novels
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 flex-wrap gap-4 animate-fade-in-up-slow">
                {/* Itch.io */}
                <div className="relative inline-block">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent transition-all duration-300"
                    aria-label="Itch.io"
                    href="https://a6ch.itch.io/"
                  >
                    <span className="text-xs font-bold">itch</span>
                  </a>
                </div>

                {/* Steam */}
                <div className="relative inline-block">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent transition-all duration-300"
                    aria-label="Steam"
                    href="https://steamcommunity.com/id/a6ch"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.624 0 11.99-5.359 11.99-11.99C23.969 5.36 18.603.001 11.979.001zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm9.423-11.715c0-1.663-1.35-3.015-3.015-3.015-1.665 0-3.015 1.352-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.665 0 3.015-1.35 3.015-3.015zm-5.281-.002c0-1.252 1.013-2.266 2.266-2.266 1.251 0 2.264 1.014 2.264 2.266 0 1.251-1.013 2.264-2.264 2.264-1.253 0-2.266-1.013-2.266-2.264z"/>
                    </svg>
                  </a>
                </div>

                {/* Discord */}
                <div className="relative inline-block">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent transition-all duration-300"
                    aria-label="Discord"
                    href="https://discord.com/invite/KuXdcw4QPG"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                </div>

                {/* YouTube */}
                <div className="relative inline-block">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent transition-all duration-300"
                    aria-label="YouTube"
                    href="https://www.youtube.com/@ReaIKenny"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 bg-aromey-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aromey-primary mb-8 text-center fade-in">
                About Me
              </h2>
              <div className="bg-aromey-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-700 fade-in-delayed">
                <div className="text-lg leading-relaxed text-aromey-primary space-y-6">
                  <p>
                    Hi, I'm a6ch, I like to play video games, especially adult visual novels and others. If you would like to check them out click the first social button above. Also make sure to check out my other socials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
