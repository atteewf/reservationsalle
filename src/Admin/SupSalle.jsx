import { useState } from "react";

const SupSalle = ({ salles, setSalles, setReservation }) => {
  const [retSalle, setretirSalle] = useState("");
  const [modifSalle, setModifSalle] = useState({ id: "", name: "" });

  const handleSubmitRetirerSalles = (e) => {
    e.preventDefault();

    const newSalles = salles.filter((s) => s.id !== parseInt(retSalle));
    setSalles(newSalles);

    setReservation((prev) =>
      prev.filter((r) => r.salleId !== parseInt(retSalle)),
    );
    setretirSalle("");
  };

  const handleSubmitAjouterSalles = (e) => {
    e.preventDefault();
    if (!modifSalle.name) return;
    const newId = salles.length ? Math.max(...salles.map((s) => s.id)) + 1 : 1;
    setSalles((prev) => [...prev, { id: newId, name: modifSalle.name }]);

    setModifSalle({ id: "", name: "" });
    return;
  };
  const handleSubmitModifierSalles = (e) => {
    e.preventDefault();
    if (!modifSalle.id || !modifSalle.name) return;

    setSalles((prev) =>
      prev.map((s) =>
        s.id === parseInt(modifSalle.id) ? { ...s, name: modifSalle.name } : s,
      ),
    );
    setModifSalle({ id: "", name: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmitRetirerSalles}>
        <label htmlFor="retir_salle">Choisissez une salle a RETIRER:</label>
        <select
          name="retir_salle"
          id="retir_salle"
          value={retSalle}
          onChange={(e) => setretirSalle(e.target.value)}
        >
          {salles.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <button type="submit">SUPPRIMER</button>
      </form>

      <form onSubmit={handleSubmitAjouterSalles}>
        <label htmlFor="modif_salle_select">
          Sélectionner salle à modifier:
        </label>
        <select
          id="modif_salle_select"
          value={modifSalle.id}
          onChange={(e) => {
            const salleChoisie = salles.find(
              (s) => s.id === parseInt(e.target.value),
            );
            setModifSalle({
              id: e.target.value,
              name: salleChoisie?.name || "",
            });
          }}
        >
          <option value="">--Nouvelle salle ou choisir existante--</option>
          {salles.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <label htmlFor="modif_salle_name">Nom de la salle:</label>
        <input
          id="modif_salle_name"
          value={modifSalle.name}
          onChange={(e) =>
            setModifSalle({ ...modifSalle, name: e.target.value })
          }
        />
        <button type="button" onClick={handleSubmitAjouterSalles}>
          AJOUTER
        </button>

        <button type="button" onClick={handleSubmitModifierSalles}>
          MODIFIER
        </button>
      </form>
    </div>
  );
};

export default SupSalle;
