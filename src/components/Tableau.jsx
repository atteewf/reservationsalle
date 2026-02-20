import { useState } from "react";
import AffichageReservation from "./AffichageReservation";
import ResultatHeader from "./ResultatHeader";

const Tableau = ({ salles, reservation }) => {
  const today = new Date();
  const [mois, setMois] = useState(today.getMonth() + 1);
  const [annee, setAnnee] = useState(today.getFullYear());

  const tab_mois = [
    { id: 1, mois: "Janvier", jours: 31 },
    { id: 2, mois: "Février", jours: 28 },
    { id: 3, mois: "Mars", jours: 31 },
    { id: 4, mois: "Avril", jours: 30 },
    { id: 5, mois: "Mai", jours: 31 },
    { id: 6, mois: "Juin", jours: 30 },
    { id: 7, mois: "Juillet", jours: 31 },
    { id: 8, mois: "Aout", jours: 31 },
    { id: 9, mois: "Septembre", jours: 30 },
    { id: 10, mois: "Octobre", jours: 31 },
    { id: 11, mois: "Novembre", jours: 30 },
    { id: 12, mois: "Décembre", jours: 31 },
  ];

  return (
    <div>
      <h2>Tableau récapitulatif</h2>

      <div className="select-legend">
        <label htmlFor="select_mois">Mois :</label>
        <select
          id="select_mois"
          value={mois}
          onChange={(e) => setMois(Number(e.target.value))}
        >
          {tab_mois.map((m) => (
            <option key={m.id} value={m.id}>
              {m.mois}
            </option>
          ))}
        </select>

        <label htmlFor="select_annee">Année :</label>
        <select
          id="select_annee"
          value={annee}
          onChange={(e) => setAnnee(Number(e.target.value))}
        >
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
          <option value={2027}>2027</option>
          <option value={2028}>2028</option>
        </select>

        <div
          className="legend"
          style={{ marginLeft: "0px", display: "inline-flex", gap: "10px" }}
        >
          <div>
            <span
              className="mat"
              style={{ padding: "2px 6px", borderRadius: "3px" }}
            >
              M
            </span>{" "}
            Libre
          </div>
          <div>
            <span
              className="mat-reserve"
              style={{ padding: "2px 6px", borderRadius: "3px" }}
            >
              M
            </span>{" "}
            Réservé
          </div>
          <div>
            <span
              className="apr"
              style={{ padding: "2px 6px", borderRadius: "3px" }}
            >
              A
            </span>{" "}
            Libre
          </div>
          <div>
            <span
              className="apr-reserve"
              style={{ padding: "2px 6px", borderRadius: "3px" }}
            >
              A
            </span>{" "}
            Réservé
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th scope="col">Salles / Jours</th>
              <ResultatHeader tab_mois={tab_mois} mois={mois} />
            </tr>
          </thead>
          <tbody>
            {salles.map((s) => (
              <tr key={s.id}>
                <th scope="row">{s.name}</th>
                {Array.from(
                  {
                    length: tab_mois.find((m) => m.id === parseInt(mois)).jours,
                  },
                  (_, i) => (
                    <td key={`${s.id}-${annee}-${mois}-${i + 1}`}>
                      <AffichageReservation
                        salleId={s.id}
                        jour={i + 1}
                        mois={mois}
                        annee={annee}
                        reservation={reservation}
                      />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableau;
