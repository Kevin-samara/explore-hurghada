import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './SectionTitle.css';

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-title section-title--${align} fade-in ${isVisible ? 'visible' : ''} ${className}`}
    >
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <div className="divider" style={align === 'center' ? { margin: '16px auto' } : {}} />
    </div>
  );
};

export default SectionTitle;
