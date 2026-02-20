const SalleItem = ({ salle, reservation, utilisateur }) => {
  const salleCorrespondante = salle.find((s) => s.id === reservation.salleId);
  const utilisateurCorrespondant = utilisateur?.find(
    (u) => u.id === reservation.utilisateurId,
  );

  return (
    <div>
      Nom de la salle :{salleCorrespondante?.name}
      Date de la reservation : {reservation.date}
      Reservation du matin :{reservation.resamatin ? "libre" : "réservé"}
      Reservation de l'apres-midi: {reservation.resaprem ? "libre" : "réservé"}
      Nom de l'utilisateur: {utilisateurCorrespondant?.name || "Non défini"}
    </div>
  );
};

export default SalleItem;
