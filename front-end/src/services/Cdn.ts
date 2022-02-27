export const CDN_URL =
  import.meta.env.VITE_CDN_URL || "http://localhost:3001/static";

export const CDN_URL_VIDEO = `${CDN_URL}/videos`;
export const CDN_URL_MINIATURES = `${CDN_URL}/miniatures`;
export const CDN_URL_AVATAR = `${CDN_URL}/avatar`;

export const assetVideo = (fileName: string | undefined) =>
  `${CDN_URL_VIDEO}/${fileName}`;

export const assetMiniature = (fileName: string | undefined) =>
  `${CDN_URL_MINIATURES}/${fileName}`;

export const assetAvatar = (fileName: string | undefined) =>
  `${CDN_URL_AVATAR}/${fileName}`;
