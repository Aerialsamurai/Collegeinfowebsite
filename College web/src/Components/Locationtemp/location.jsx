import './location.css';
import { FaPlaneDeparture, FaTrain, FaWifi, FaUtensils, FaUserGraduate, FaMale, FaFemale, FaFutbol, FaHospital, FaBook, FaDollarSign } from 'react-icons/fa';

const airports = [
  { name: 'Indira Gandhi International Airport', distance: '10 km' }
];
const stations = [
  { name: 'Hauz Khas Metro Station', distance: '2 km' },
  { name: 'New Delhi Railway Station', distance: '13 km' },
  { name: 'Hazrat Nizamuddin Railway Station', distance: '10 km' }
];
const facilities = [
  { icon: <FaDollarSign />, label: 'Bank/ATM' },
  { icon: <FaBook />, label: 'Library' },
  { icon: <FaWifi />, label: 'Wi-Fi' },
  { icon: <FaUtensils />, label: 'Cafeteria' },
  { icon: <FaUserGraduate />, label: 'Hostel' },
  { icon: <FaMale />, label: 'Boys Hostel' },
  { icon: <FaFemale />, label: 'Girls Hostel' },
  { icon: <FaFutbol />, label: 'Sports' },
  { icon: <FaHospital />, label: 'Medical' }
];

const Location = () => {
  return (
    <div className="location-wrapper" id="location">
      <h1 className="location-heading">Location & Campus Facilities</h1>
      <div className="location-container location-section">
        <div className="map-section" style={{ minHeight: '260px', maxWidth: '350px', marginRight: '32px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8002643864334!2d77.19019297495355!3d28.545722688018476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20Of%20Technology%20Delhi%20(IIT%20Delhi)!5e0!3m2!1sen!2sin!4v1750874734245!5m2!1sen!2sin"
            style={{ border: 0, width: '100%', height: '100%', minHeight: '260px', borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IIT Delhi Map"
          ></iframe>
        </div>
        <div className="info-section">
          <div className="info-box animated-info">
            <h2>Email</h2>
            <p>info@iitd.ac.in</p>
          </div>
          <div className="info-box animated-info">
            <h2>Contact No.</h2>
            <p>+91 11 2659 7135</p>
          </div>
          <div className="info-box animated-info">
            <h2>Address</h2>
            <p>IIT Delhi, Hauz Khas, New Delhi, Delhi 110016</p>
          </div>
          <div className="info-box animated-info">
            <h2>Official Website</h2>
            <p><a href="https://home.iitd.ac.in" target="_blank" rel="noopener noreferrer" className="info-link">https://home.iitd.ac.in</a></p>
          </div>
        </div>
      </div>
      <div className="location-extras">
        <div className="transport-section">
          <h3>Nearest Airport and Railway Stations</h3>
          <div className="transport-list">
            <div className="transport-item"><FaPlaneDeparture className="transport-icon" /> {airports[0].name} <span className="distance">{airports[0].distance}</span></div>
            {stations.map((s, i) => (
              <div className="transport-item" key={i}><FaTrain className="transport-icon" /> {s.name} <span className="distance">{s.distance}</span></div>
            ))}
          </div>
        </div>
        <div className="facilities-section">
          <h3>Campus Facilities</h3>
          <div className="facilities-list">
            {facilities.map((f, i) => (
              <div className="facility-icon" key={i} title={f.label}>{f.icon}<span className="facility-label">{f.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
