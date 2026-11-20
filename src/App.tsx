/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {CoursesSection} from './components/CoursesSection';
import {AdmissionProcessSection} from './components/AdmissionProcessSection';
import {ResultsSection} from './components/ResultsSection';
import {ContactEnquireSection} from './components/ContactEnquireSection';
import {Footer} from './components/Footer';
import {FloatingWhatsApp} from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#142B52] focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <CoursesSection />
        <AdmissionProcessSection />
        <ResultsSection />
        <ContactEnquireSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
