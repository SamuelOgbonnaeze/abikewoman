// Roughly how wide a fair photo is shown: 30vw on desktop, 85vw on phones.
// The desktop and mobile layouts (and the preload in page.tsx) share this
// value, so the browser picks the same file for each and downloads it once.
export const PHOTO_SIZES = "(min-width: 768px) 30vw, 85vw";
