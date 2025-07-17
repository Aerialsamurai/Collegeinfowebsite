import'./mainlayout.css'
import Popularcolleges from'../Popularcolleges/popularcolleges'
import Otherexams from '../Otherexams/otherexams'
import Newsclg from'../nwclg/nwclg'
import Exploreclg from'../Exploreclg/exploreclg'
import Nearby from'../nearbyclg/nearbyclg'

const Mainlayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-layout">
        <div className="main-content">{children}</div>
        <aside className="sidebar">
          <Popularcolleges />
          <Otherexams />
          <Newsclg/>
          <Exploreclg/>
          <Nearby/>
        </aside>
      </div>
    </div>
  );
};

export default Mainlayout;
