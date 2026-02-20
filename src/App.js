import "./App.css";
import { useState, useEffect } from "react";

import Tableau from "./components/Tableau";
import ReservationForm from "./reservation/ReservationForm";
import AdminPanel from "./Admin/AdminPanel";

function App() {
  const [salles, setSalles] = useState(() => {
    const savedsalles = localStorage.getItem("salles");
    return savedsalles
      ? JSON.parse(savedsalles)
      : [
          { id: 1, name: "salle 1" },
          { id: 2, name: "salle 2" },
        ];
  });

  const [reservation, setReservation] = useState(() => {
    const savedresa = localStorage.getItem("reservation");
    return savedresa
      ? JSON.parse(savedresa)
      : [
          {
            id: 1,
            salleId: 1,
            date: "2026-02-28",
            resamatin: true,
            resaprem: false,
          },
          {
            id: 2,
            salleId: 2,
            date: "2026-02-21",
            resamatin: true,
            resaprem: false,
          },
        ];
  });

  const [utilisateur, setUtilisateur] = useState(() => {
    const saved = localStorage.getItem("utilisateur");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "SEB", email: "SEB@gmail.com" },
          { id: 2, name: "SEBA", email: "SEB@gmail.com" },
          { id: 3, name: "SEBAS", email: "SEB@gmail.com" },
          { id: 4, name: "SEBAST", email: "SEB@gmail.com" },
        ];
  });
  useEffect(() => {
    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
  }, [utilisateur]);

  useEffect(() => {
    localStorage.setItem("salles", JSON.stringify(salles));
  }, [salles]);

  useEffect(() => {
    localStorage.setItem("reservation", JSON.stringify(reservation));
  }, [reservation]);
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: "#ddd",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        Réservation de salles
      </h1>

      <Tableau
        salles={salles}
        reservation={reservation}
        utilisateur={utilisateur}
        setSalles={setSalles}
        setReservation={setReservation}
        setUtilisateur={setUtilisateur}
      />
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Création de réservation</h2>
          <ReservationForm
            salle={salles}
            setReservation={setReservation}
            utilisateur={utilisateur}
            setUtilisateur={setUtilisateur}
            reservation={reservation}
          />
        </div>

        <div
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Admin</h2>
          <AdminPanel
            salles={salles}
            reservation={reservation}
            utilisateur={utilisateur}
            setSalles={setSalles}
            setReservation={setReservation}
            setUtilisateur={setUtilisateur}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
