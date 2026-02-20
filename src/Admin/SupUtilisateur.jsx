import { useState } from "react";

const SupUtilisateur = ({ utilisateur, setUtilisateur }) => {
  const [retirUtil, setretirUtil] = useState("");
  const handleSubmitRetirerUtilisateur = (e) => {
    e.preventDefault();
    setUtilisateur((prev) => prev.filter((u) => u.id !== parseInt(retirUtil)));
    setretirUtil("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={handleSubmitRetirerUtilisateur}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <label
          htmlFor="retir_utilisateur"
          style={{
            flexShrink: 0,
            minWidth: "180px",
            display: "flex",
            alignItems: "center",
            height: "40px",
          }}
        >
          Choisissez une personne à retirer:
        </label>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <select
            name="retir_utilisateur"
            id="retir_utilisateur"
            value={retirUtil}
            onChange={(e) => setretirUtil(e.target.value)}
            style={{
              flexGrow: 1,
              height: "40px",
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            {utilisateur.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            style={{
              height: "40px",
              marginLeft: "10px",
              padding: "0 15px",
              position: "relative",
              top: "-5px",
            }}
          >
            SUPPRIMER
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupUtilisateur;
