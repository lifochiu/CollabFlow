// import { getGlobalUserName } from "@/app/(auth)/login/action";

const getHashCode = (str: string): number => {
  let hash = 0;

  // 如果字串為空，直接返回 0
  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    // 這裡的計算邏輯是：hash = hash * 31 + char
    // (hash << 5) - hash 等於 hash * 31，但位移運算效能更高
    hash = (hash << 5) - hash + char;

    // 強制轉換為 32 位元整數（防止數字溢位導致不一致）
    hash |= 0;
  }
  return hash;
};

const getAvatarStyle = (userName: string) => {
  const hash = getHashCode(userName);

  // 1. 取得色相 (Hue): 0 ~ 360 度
  const h = Math.abs(hash) % 360;

  // 2. 固定飽和度 (Saturation) 與 亮度 (Lightness) 以確保視覺美觀
  // 建議：飽和度 50-70%，亮度 40-60% 看起來最像 Google 質感
  const s = 60;
  const l = 50;

  return {
    backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
  };
};

// 使用範例
// const userStyle = getAvatarStyle(await getGlobalUserName());

export { getAvatarStyle };
