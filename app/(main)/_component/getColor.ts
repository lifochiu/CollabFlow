//turn user name into hash code, then use hash code to generate color for user avatar
const getHashCode = (str: string): number => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
};

const getAvatarStyle = (userName: string) => {
  const hash = getHashCode(userName);

  const h = Math.abs(hash) % 360;
  const s = 60;
  const l = 50;

  return {
    backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
  };
};

export { getAvatarStyle };
