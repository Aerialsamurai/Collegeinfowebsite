import "./nwclg.css";

const newsItems = [
  {
    title: "JAC Delhi 2025 Counselling: New Round 5 Introduced, Revised Schedule Released",
    isBold: true,
  },
  {
    title: "Manipal B.Tech Admissions 2025: Round 3 Result & Cutoff Announced",
  },
  {
    title: "JAC Delhi Counselling 2025: Round 3 Result, Cutoff & Reporting Dates",
  },
  {
    title: "Jamia Millia Islamia B.Tech 2025: 1st Selection List Announced",
  },
  {
    title: "Engineering Entrance Exams/ Admissions 2025: Applications Open",
  },
  {
    title: "IIIT Bangalore Admissions 2025: Round 3 Result, Cutoff & Fees",
  },
];

const Newsclg = () => {
  return (
    <div className="news-wrapper">
      <h2 className="news-title">LATEST NEWS</h2>
      <ul className="news-list">
        {newsItems.map((item, index) => (
          <li key={index} className="news-item">
            <span className={item.isBold ? "bold-text" : ""}>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newsclg;