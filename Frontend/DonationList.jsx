import React, { useEffect, useState } from "react";
import { fetchDonations } from "./api";

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations().then(res => setDonations(res.data));
  }, []);

  return (
    <div>
      <h2>Donations</h2>
      <ul>
        {donations.map(d => (
          <li key={d.id}>{d.name} - ₹{d.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default DonationList;
