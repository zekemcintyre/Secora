/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/PrivacyPolicy';
import Services from './components/Services';
import Team from './components/Team';
import TrustSection from './components/TrustSection';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const isPrivacy = path === '/privacy-policy';

  React.useEffect(() => {
    document.title = isPrivacy
      ? 'Privacy Policy | Sercora Social Care Consultancy'
      : 'Sercora Social Care Consultancy';
  }, [isPrivacy]);

  return (
    <div className="min-h-screen font-sans selection:bg-sercora-gold/30 selection:text-sercora-navy">
      <Navbar />
      <main>
        {isPrivacy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <Hero />
            <Services />
            <Team />
            <TrustSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
