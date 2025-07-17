import "./exploreclg.css";
import vit from '../../assets/vit.png';
import rvce from '../../assets/rvce.png';
import msrit from '../../assets/msrit.png';
import lpu from '../../assets/lpu.png';
import annau from '../../assets/annau.png';

const expclgs = [
  { name: "Vellore Institute of Technology", location: "Vellore, TamilNadu", img: vit },
  { name: "RV Collge of Engineering", location: "Bangaore, Karnataka", img: rvce },
  { name: "M S Ramaiah Institute of Technology", location: "Bangalore, Karnataka", img: msrit },
  { name: "Lovely Professional University", location: "Jalandhar, Punjab", img: lpu },
  { name: "Anna University", location: "Chennai, TamilNadu", img: annau },
];

const Exploreclg = () => {
  return (
    <div className="exp-clg-wrapper">
      <h2 className="exp-clg-title">EXPLORE COLLEGES</h2>
      <ul className="expclg-list">
        {expclgs.map((expclg, index) => (
          <li className="expclg-item" key={index}>
            <img src={expclg.img} alt={expclg.name} className="expclg-logo" />
            <div className="expinforwrap"> {/* Wrap name + location in a block */}
                <span className="expclg-name">{expclg.name}</span>
            <span className="expclg-location">{expclg.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exploreclg;