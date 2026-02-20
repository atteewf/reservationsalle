import React from "react";

const SalleSelect = ({ salle, value, onChange }) => {
  return (
    <div>
      <label htmlFor="salle_select">Salle :</label>
      <select
        name="salle_select"
        id="salle_select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">--Veuillez choisir une salle--</option>
        {salle.map((sa) => (
          <option key={sa.id} value={sa.id}>
            {sa.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SalleSelect;
