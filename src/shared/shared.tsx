import React from 'react';

export const ColorLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const randomDelay = React.useMemo(() => `-${Math.random() * 4}s`, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="color-link"
    >
      {children}
      <span className="spectrum-underline" style={{ animationDelay: randomDelay }} />
    </a>
  );
};

export const Subtext = ({ children }: { children: React.ReactNode }) => (
  <div className="subtext">{children}</div>
);

export const Subhead = ({ children }: { children: React.ReactNode }) => (
  <header className="subhead">{children}</header>
);

export const HeaderTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="header-title">{children}</h1>
);

export const DiagramImage = ({ src, alt }: { src: any; alt: string }) => (
  <div className="diagram-container">
    <img src={typeof src === 'string' ? src : src.src} alt={alt} className="diagram-image" />
  </div>
);

export interface TourDateProps {
  event: string;
  date: string;
  link: string;
  description: string;
  location?: string;
}

export const TourDate = ({ event, date, link, description, location }: TourDateProps) => (
  <p className="tour-date-item">
    {description}{" "}
    {description.toLowerCase().includes("at") ? "" : "at " }
    <ColorLink href={link}>{event}</ColorLink>, {date}
    {location && <span className="location-text"> ({location})</span>}
  </p>
);
