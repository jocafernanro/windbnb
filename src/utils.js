export const guestsFormatted = totalGuests => {
  return totalGuests && totalGuests > 0
    ? `${totalGuests} Guest${totalGuests > 1 ? "s" : ""}`
    : "Add guests";
};
export const locationFormatted = location => location && `${location}, Finland`;
