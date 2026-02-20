const AffichageReservation = ({ salleId, jour, mois, annee, reservation }) => {
  const jour_formate = String(jour).padStart(2, "0");
  const mois_formate = String(mois).padStart(2, "0");

  const dateStr = `${annee}-${mois_formate}-${jour_formate}`;
  const res = reservation.find(
    (r) => r.salleId === salleId && r.date === dateStr,
  );
  if (!res) {
    return (
      <div>
        <span className="mat">M</span> / <span className="apr">A</span>
      </div>
    );
  }
  return (
    <div>
      <span className={res.resamatin ? "mat" : "mat-reserve"}>M</span> /{" "}
      <span className={res.resaprem ? "apr" : "apr-reserve"}>A</span>
    </div>
  );
};

export default AffichageReservation;
