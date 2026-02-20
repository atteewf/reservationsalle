import SupSalle from "./SupSalle";
import SupUtilisateur from "./SupUtilisateur";

const AdminPanel = ({
  salles,
  reservation,
  utilisateur,
  setSalles,
  setReservation,
  setUtilisateur,
}) => {
  return (
    <div>
      <SupUtilisateur
        salles={salles}
        reservation={reservation}
        utilisateur={utilisateur}
        setReservation={setReservation}
        setUtilisateur={setUtilisateur}
      />

      <SupSalle
        salles={salles}
        reservation={reservation}
        utilisateur={utilisateur}
        setSalles={setSalles}
        setReservation={setReservation}
        setUtilisateur={setUtilisateur}
      />
    </div>
  );
};
export default AdminPanel;
