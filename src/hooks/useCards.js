import { useMemo } from "react";

export const useCards = (cards, { userId }) => {
  function filterByOwner() {
    if (userId === undefined) return cards;

    return cards.filter((item) => item.ownerid === userId);
  }

  return useMemo(() => filterByOwner(), [cards, userId]);
};
