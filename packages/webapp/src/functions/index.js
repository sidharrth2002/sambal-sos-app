export const getIcon = (type) => {
  switch (type) {
    case "GENERAL":
      return "🛖 ";
    case "FOOD":
      return "🍞 ";
    case "BABY ITEMS":
      return "👶 ";
    case "FLOOD SHELTER":
      return "🏠 ";
    default:
      return "🛖 ";
  }
};
