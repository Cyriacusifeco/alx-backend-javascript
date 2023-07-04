function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedGroceries = new Map();
  groceries.forEach((quantity, item) => {
    if (quantity === 1) {
      updatedGroceries.set(item, 100);
    } else {
      updatedGroceries.set(item, quantity);
    }
  });

  return updatedGroceries;
}

export default updateUniqueItems;
