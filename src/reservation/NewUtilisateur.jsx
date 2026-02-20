import { useState } from "react";

const NewUtilisateur = ({ setUtilisateur }) => {
  const [NewUtilisateur_form, setNewUtilisateur_form] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!NewUtilisateur_form.name || !NewUtilisateur_form.email) return;

    setUtilisateur((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: NewUtilisateur_form.name,
        email: NewUtilisateur_form.email,
      },
    ]);
    setNewUtilisateur_form({ name: "", email: "" });
  };
  return (
    <div>
      <div>Nouvel utilisateur</div>
      <form onSubmit={handleSubmit}>
        Nom:{" "}
        <input
          id="name"
          value={NewUtilisateur_form.name}
          onChange={(e) =>
            setNewUtilisateur_form({
              ...NewUtilisateur_form,
              name: e.target.value,
            })
          }
        />
        Email:{" "}
        <input
          type="email"
          id="email"
          size="30"
          value={NewUtilisateur_form.email}
          required
          onChange={(e) =>
            setNewUtilisateur_form({
              ...NewUtilisateur_form,
              email: e.target.value,
            })
          }
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default NewUtilisateur;
