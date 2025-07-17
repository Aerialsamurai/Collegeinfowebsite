import React from "react";
import "./PastRecruiters.css";

const recruiters = [
  { name: "Google", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  { name: "Microsoft", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
  { name: "Amazon", logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg" },
  { name: "Facebook", logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
  { name: "Apple", logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg" },
  { name: "Goldman Sachs", logo: "https://www.vectorlogo.zone/logos/goldmansachs/goldmansachs-icon.svg" },
  { name: "McKinsey", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNN12aWh7ruc5rs0kAhGfaUkOyW0tuypaPLg&s" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Flipkart", logo: "https://brandlogos.net/wp-content/uploads/2025/02/flipkart_icon-logo_brandlogos.net_uh1az.png" },
  { name: "Adobe", logo: "https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg" },
  { name: "Samsung", logo: "https://www.vectorlogo.zone/logos/samsung/samsung-icon.svg" },
  { name: "Intel", logo: "https://www.vectorlogo.zone/logos/intel/intel-icon.svg" },
  { name: "Oracle", logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
  { name: "Deloitte", logo: "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Emblem.png" },
  { name: "Accenture", logo: "https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg" },
  { name: "Tata", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/800px-Infosys_logo.svg.png" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" },
  { name: "HCL", logo: "https://w7.pngwing.com/pngs/355/249/png-transparent-hcl-technologies-hcl-enterprise-information-technology-hcl-poland-sp-z-o-o-service-business-blue-text-trademark.png" },
  { name: "ZS Associates", logo: "https://e7.pngegg.com/pngimages/335/453/png-clipart-zs-associates-management-consulting-company-business-business-angle-company.png" },
  { name: "Texas Instruments", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/TexasInstruments-Logo.svg" },
  { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg" },
  { name: "Qualcomm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/1200px-Qualcomm-Logo.svg.png" },
  { name: "JP Morgan", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiHklsWhw7wHC9wC1_xNviL_BKUzTsABTuA&s" },
  { name: "Bain & Company", logo: "https://www.healthevolution.com/wp-content/uploads/2022/11/Bain-logo-1.png" },
  { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Paytm_Logo.png" },
  { name: "IBM", logo: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },
  { name: "Cisco", logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
  { name: "EY", logo: "https://www.vectorlogo.zone/logos/ey/ey-icon.svg" },
  { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  { name: "American Express", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXPN5n9zXmWG6mjYxilOMCu9lK8A74gqv3g&s" },
  { name: "HSBC", logo: "https://www.vectorlogo.zone/logos/hsbc/hsbc-icon.svg" },
  { name: "Jio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/500px-Reliance_Jio_Logo.svg.png" },
  { name: "Swiggy", logo: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" },
  { name: "BYJU'S", logo: "https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png" },
  { name: "D.E. Shaw", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/D._E._Shaw_%26_Co._logo.png" },
];

const PastRecruiters = () => {
  return (
    <section className="past-recruiters-section" id="past-recruiters">
      <h2 className="past-recruiters-title">Top Recruiters at IIT Delhi</h2>
      <div className="recruiters-grid">
        {recruiters.map((rec) => (
          <div className="recruiter-logo-card" key={rec.name} title={rec.name}>
            <img src={rec.logo} alt={rec.name + ' logo'} className="recruiter-logo" loading="lazy" style={{background:'#fff',padding:'6px',borderRadius:'8px',maxHeight:'48px',objectFit:'contain'}} />
            <span className="recruiter-name">{rec.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastRecruiters; 