import React from 'react';
import './overview.css';

const facts = [
  { label: 'Founded', value: '1961' },
  { label: 'NIRF Rank (2023)', value: '#3 (Engineering)' },
  { label: 'Campus Size', value: '325 acres' },
  { label: 'Students', value: '11,000+' },
  { label: 'Faculty', value: '600+' },
  { label: 'Notable Alumni', value: 'Sundar Pichai, Raghuram Rajan, Rajat Gupta, Kiran Bedi' }
];

const Overview = () => {
  return (
    <div className="ov-head" id="overview">
      <h2 className="overview-heading">Overview</h2>
      <div className="overview-container">
        <p className="overview-paragraph">
          Indian Institute of Technology Delhi (IIT Delhi) is one of India's premier engineering and research institutions, located in the heart of New Delhi. Renowned for its academic excellence, cutting-edge research, and vibrant campus life, IIT Delhi consistently ranks among the top engineering colleges in India and the world.
        </p>
        <div className="overview-facts-grid">
          {facts.map((fact, i) => (
            <div className="overview-fact-card" key={i}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
        <p className="overview-paragraph">
          The campus offers world-class facilities, a diverse student body, and a legacy of producing leaders in technology, business, academia, and public service. IIT Delhi's alumni network spans the globe, making a significant impact in various fields.
        </p>
      </div>
    </div>
  );
};

export default Overview;