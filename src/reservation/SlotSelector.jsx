import React from "react";

const SlotSelector = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="creneau_select">Choisissez le creneau&nbsp;:</label>

      <select
        name="creneau_select"
        id="creneau-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">--Veuillez choisir une option--</option>
        <option value="matin">Matin</option>
        <option value="aprem">Apres-Midi</option>
      </select>
    </div>
  );
};

export default SlotSelector;
