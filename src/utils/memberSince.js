const memberSince = (createdAt) => {
  const date = new Date(createdAt);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

export default memberSince;
