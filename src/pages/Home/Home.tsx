import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { t } from '../../i18n/translations';
import HeroSection from '../../components/HeroSection/HeroSection';
import TransferCalculatorWidget from '../../components/TransferCalculatorWidget/TransferCalculatorWidget';
import TransferRoutesWidget from '../../components/TransferRoutesWidget/TransferRoutesWidget';
import FleetShowcaseWidget from '../../components/FleetShowcaseWidget/FleetShowcaseWidget';
import TripGrid from '../../components/TripGrid/TripGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import AboutStats from '../../components/AboutStats/AboutStats';
import Testimonials from '../../components/Testimonials/Testimonials';
import Gallery from '../../components/Gallery/Gallery';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { featuredTrips } from '../../data/trips';
import './Home.css';

const Home: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="home-page home-page--transfer">
      {/* Transfer Hero */}
      <HeroSection />

      {/* 1. Interactive Transfer Fare Estimator */}
      <TransferCalculatorWidget />

      {/* 2. Popular Transfer Direct Routes */}
      <TransferRoutesWidget />

      {/* 3. Vehicle Fleet & Transfer Guarantees */}
      <FleetShowcaseWidget />

      {/* Featured Trips & Tours */}
      <section className="section featured-section">
        <div className="container">
          <div className="featured-header">
            <SectionTitle
              tag={t(lang, 'featured.sectionTag')}
              title={t(lang, 'featured.title')}
              subtitle={t(lang, 'featured.subtitle')}
            />
            <Link to="/trips" className="btn btn-glass featured-view-all">
              {t(lang, 'featured.viewAll')}
              <Arrow size={16} />
            </Link>
          </div>

          <div className="glass-section-container">
            <TripGrid trips={featuredTrips} />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <AboutStats />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Home;
