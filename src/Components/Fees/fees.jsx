import React from 'react';
import './fees.css';

const Fees = () => {
  return (
    <div className="fees-container">
      <h2 className="fees-title">Fee Structure</h2>

      {/* 1. Tuition Fees */}
      <section className="fees-section">
        <h3>1. Tuition Fees (Per Semester)</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Tuition Fee (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General/OBC (Income &gt; ₹5 lakh)</td>
              <td>1,00,000</td>
            </tr>
            <tr>
              <td>General/OBC (Income ₹1-5 lakh)</td>
              <td>33,333</td>
            </tr>
            <tr>
              <td>General/OBC (Income &lt; ₹1 lakh)</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>SC/ST/PwD</td>
              <td>Nil</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2. Hostel & Mess Fees */}
      <section className="fees-section">
        <h3>2. Hostel & Mess Fees (Per Semester)</h3>
        <table>
          <thead>
            <tr>
              <th>Hostel Type</th>
              <th>Charges (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Old Hostels</td>
              <td>38,580</td>
            </tr>
            <tr>
              <td>New Hostels (non-AC)</td>
              <td>41,580</td>
            </tr>
            <tr>
              <td>New Hostels (AC, summer)</td>
              <td>52,980</td>
            </tr>
          </tbody>
        </table>
      </section>
       {/* 3. One-Time & Refundable Charges */}
      <section className="fees-section">
        <h3>3. One-Time & Refundable Charges</h3>
        <table>
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Charges (₹)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One time payment</td>
              <td>8,150</td>
              <td>Paid at admission</td>
            </tr>
            <tr>
              <td>Other Semester charges</td>
              <td>6,250</td>
              <td>Library,Medical,etc.</td>
            </tr>
            <tr>
              <td>Caution/Security Deposit</td>
              <td>8,000</td>
              <td>Refundable at Graduation</td>
            </tr>
             <tr>
              <td>Hostel Security Deposit</td>
              <td>15,000</td>
              <td>Refundable, paid once</td>
            </tr>
             <tr>
              <td>BHM(Hostel Management) Fee</td>
              <td>7,000</td>
              <td>Non-refundable,paid once</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="fees-section">
      <h2>4. Typical Total Payable - First Semester</h2>
      <p><em>General/OBC, Income &gt; ₹5 lakh, Old Hostel(for everyone upto 3rd year)</em></p>
      <table>
        <thead>
          <tr>
            <th>Fee Component</th>
            <th>Amount (₹)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tuition Fee</td>
            <td>1,00,000</td>
            <td>Per semester</td>
          </tr>
          <tr>
            <td>Hostel + Mess</td>
            <td>38,580</td>
            <td>Old hostel rate</td>
          </tr>
          <tr>
            <td>One-time payment</td>
            <td>8,150</td>
            <td>Paid once at admission</td>
          </tr>
          <tr>
            <td>Other semester charges</td>
            <td>6,250</td>
            <td>Library, medical, etc.</td>
          </tr>
          <tr>
            <td>Caution/Security Deposit</td>
            <td>8,000</td>
            <td>Refundable at graduation</td>
          </tr>
          <tr>
            <td>Hostel Security Deposit</td>
            <td>15,000</td>
            <td>Refundable, paid once</td>
          </tr>
          <tr>
            <td>BHM Fee</td>
            <td>7,000</td>
            <td>Non-refundable, paid once</td>
          </tr>
          <tr className="highlight">
            <td><strong>Total (First Semester)</strong></td>
            <td><strong>1,82,980</strong></td>
            <td>Includes refundable charges</td>
          </tr>
        </tbody>
      </table>
      </section>

      <section className="fees-section">
      <h2>5. From Second Semester Onwards</h2>
      <table>
        <thead>
          <tr>
            <th>Fee Component</th>
            <th>Amount (₹)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tuition Fee</td>
            <td>1,00,000</td>
            <td></td>
          </tr>
          <tr>
            <td>Hostel + Mess</td>
            <td>38,580</td>
            <td>Same old hostel</td>
          </tr>
          <tr>
            <td>Other semester fees</td>
            <td>6,250</td>
            <td>Continues each semester</td>
          </tr>
          <tr className="highlight">
            <td><strong>Approx. Total</strong></td>
            <td><strong>1,44,830</strong></td>
            <td>One-time charges not paid again</td>
          </tr>
        </tbody>
      </table>
    </section>

      {/* 3. One-Time & Refundable Charges */}
      {/* <section className="fees-section">
        <h3>3. One-Time & Refundable Charges</h3>
        <div className="fees-cards">
          <div className="fees-card">
            <h4>One-time payment</h4>
            <p>₹8,150</p>
            <span>Paid at admission</span>
          </div>
          <div className="fees-card">
            <h4>Other semester charges</h4>
            <p>₹6,250</p>
            <span>Library, medical, etc.</span>
          </div>
          <div className="fees-card">
            <h4>Caution/Security Deposit</h4>
            <p>₹8,000</p>
            <span>Refundable at graduation</span>
          </div>
          <div className="fees-card">
            <h4>Hostel Security Deposit</h4>
            <p>₹15,000</p>
            <span>Refundable, paid once</span>
          </div>
          <div className="fees-card">
            <h4>BHM (Hostel Management) Fee</h4>
            <p>₹7,000</p>
            <span>Non-refundable, paid once</span>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Fees;
