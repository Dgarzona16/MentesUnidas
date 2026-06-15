export const AppName = "Mentes Unidas"

export const initialMaker = (name) => {
    if (!name?.trim()) return "AN";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }

    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  };

export const getTimeAgo = (timestamp) => {
  if (!timestamp) return "Ahora";

  const diff = Math.floor(
    (Date.now() - timestamp.toDate().getTime()) / 1000
  );

  if (diff < 60) return "Ahora";
  if (diff < 3600) return `Hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} h`;
  if (diff < 2592000) return `Hace ${Math.floor(diff / 86400)} d`;
  if (diff < 31536000) return `Hace ${Math.floor(diff / 2592000)} mes`;
  return `Hace ${Math.floor(diff / 31536000)} año`;
};