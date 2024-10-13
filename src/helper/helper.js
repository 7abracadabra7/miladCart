const shortenText = (text) => {
  const shortText = text.split(" ").slice(0, 3).join(" ");
  return shortText;
};

const searchValue = (products, search) => {
  if (!search) return products;
  const result = products.filter((p) => p.title.toLowerCase().includes(search));
  return result;
};

const categoryFilter = (products, category) => {
  if (!category) return products;
  const result = products.filter((p) => p.category == category);
  return result;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category == "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search == "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

export { shortenText, searchValue, categoryFilter, createQueryObject };
