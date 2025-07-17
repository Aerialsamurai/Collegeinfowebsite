import "./nearbyclg.css";
import dtu from '../../assets/dtu.png';
import msit from '../../assets/msit.png';
import nsut from '../../assets/nsut.png';
import iiitd from '../../assets/iiitd.png';
import iitro from '../../assets/iitro.png';
import nitkuru from'../../assets/nitkuru.png';
import iiita from'../../assets/iiita.png';

const nearclgs = [
  { name: "DTU Delhi", location: "New Delhi, Delhi", img: dtu },
  { name: "MSIT Delhi", location: "New Delhi, Delhi", img: msit },
  { name: "NSUT Delhi West Campus", location: "New Delhi, Delhi", img: nsut },
  { name: "IIIT Delhi", location: "New Delhi, Delhi", img: iiitd },
  { name: "IIT Ropar", location: "Ropar, Punjab", img: iitro },
  { name: "NIT Kurukshestra", location: "Kurukshestra, Haryana", img: nitkuru },
  { name: "IIIT Allahabad", location: "Prayagraj(Allahabad), Uttar Pradesh", img: iiita },
];

const Nearbyclg = () => {
  return (
    <div className="near-clg-wrapper">
      <h2 className="near-clg-title">COLLEGES NEARBY</h2>
      <ul className="nearclg-list">
        {nearclgs.map((nearclg, index) => (
          <li className="nearclg-item" key={index}>
            <img src={nearclg.img} alt={nearclg.name} className="nearclg-logo" />
            <div className="nearinforwrap"> {/* Wrap name + location in a block */}
                <span className="nearclg-name">{nearclg.name}</span>
            <span className="nearclg-location">{nearclg.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nearbyclg;
