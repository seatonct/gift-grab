export const getListItems = async (list) => {
  return fetch(`http://localhost:8088/items?listId=${list.id}`).then((res) =>
    res.json()
  );
};

export const saveNewItem = async (item) => {
  return fetch(`http://localhost:8088/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
};

export const getItemById = (itemId) => {
  return fetch(`http://localhost:8088/items/${itemId}`).then((res) =>
    res.json()
  );
};

export const editItem = async (item) => {
  return fetch(`http://localhost:8088/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export const deleteItem = (item) => {
  return fetch(`http://localhost:8088/items/${item.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
