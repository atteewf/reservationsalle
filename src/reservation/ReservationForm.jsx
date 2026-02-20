import { useState } from "react";
import SalleSelect from "./SalleSelect";
import DateInput from "./DateInput";
import SlotSelector from "./SlotSelector";
import UtilisateurSelect from "./UtilisateurSelect";
import NewUtilisateur from "./NewUtilisateur";

const ReservationForm = ({
  salle,
  setReservation,
  reservation,
  setUtilisateur,
  utilisateur,
}) => {
  const [reservationForm, setreservationForm] = useState({
    salleId: "",
    date: "",
    slot: "",
    utilisateur: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationExistante = reservation.find(
      (r) =>
        r.date === reservationForm.date &&
        r.salleId === parseInt(reservationForm.salleId) &&
        ((reservationForm.slot === "matin" && r.resamatin) ||
          (reservationForm.slot === "aprem" && r.resaprem)),
    );

    if (reservationExistante) {
      alert(
        reservationForm.slot === "matin"
          ? "Déjà réservé le matin !"
          : "Déjà réservé l'après-midi !",
      );
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(reservationForm.date);
    if (selectedDate < today) {
      alert("La date doit être la date du jour ou dans le futur !");
      return;
    }

    setReservation((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        salleId: parseInt(reservationForm.salleId),
        date: reservationForm.date,
        resamatin: reservationForm.slot === "matin",
        resaprem: reservationForm.slot === "aprem",
        utilisateurId: parseInt(reservationForm.utilisateur),
      },
    ]);

    setreservationForm({ salleId: "", date: "", slot: "", utilisateur: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SalleSelect
          salle={salle}
          value={reservationForm.salleId}
          onChange={(val) =>
            setreservationForm({ ...reservationForm, salleId: val })
          }
        />
        <DateInput
          value={reservationForm.date}
          onChange={(val) =>
            setreservationForm({ ...reservationForm, date: val })
          }
        />
        <SlotSelector
          value={reservationForm.slot}
          onChange={(val) =>
            setreservationForm({ ...reservationForm, slot: val })
          }
        />
        <UtilisateurSelect
          utilisateur={utilisateur}
          value={reservationForm.utilisateur}
          onChange={(val) =>
            setreservationForm({ ...reservationForm, utilisateur: val })
          }
        />

        <div>
          {" "}
          <button type="submit">Valider</button>
        </div>
      </form>
      <NewUtilisateur setUtilisateur={setUtilisateur} />
    </div>
  );
};

export default ReservationForm;
