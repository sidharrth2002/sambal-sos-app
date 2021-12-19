export const getIcon = (type) => {
  switch (type) {
    case "General":
      return "🛖 ";
    case "Food":
      return "🍞 ";
    case "Baby Items":
      return "👶 ";
    case "Flood Shelter":
      return "🏠 ";
    default:
      return "🛖 ";
  }
};
