const shortenText = (text) => {
  const shortText = text.split(" ").slice(0, 3).join(" ");
  return shortText;
};

export {shortenText}
