import apiFetch from "./api-fetch";

export const createCard = (listId, card) => {
  return apiFetch(`lists/${listId}/cards`, {
    body: JSON.stringify(card),
  });
};

export const showCard = (listId, cardId) => {
  return apiFetch(`lists/${listId}/cards/${cardId}`);
};

export const updateCard = (listId, cardId, card) => {
  return apiFetch(`lists/${listId}/cards/${cardId}`, {
    method: "PATCH",
    body: JSON.stringify(card),
  });
};

export const destroyCard = (listId, cardId) => {
  return apiFetch(`lists/${listId}/cards/${cardId}`, {
    method: "DELETE",
  });
};
