export interface GalleryCase {
  id: string;
  photos: string[];
}

export const galleryCases: GalleryCase[] = [
  { id: "case1", photos: Array.from({ length: 10 }, (_, i) => `/gallery/case1/${i + 1}.jpg`) },
  { id: "case2", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case2/${i + 1}.jpg`) },
  { id: "case3", photos: Array.from({ length: 7 }, (_, i) => `/gallery/case3/${i + 1}.jpg`) },
  { id: "case4", photos: Array.from({ length: 6 }, (_, i) => `/gallery/case4/${i + 1}.jpg`) },
  { id: "case5", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case5/${i + 1}.jpg`) },
  { id: "case6", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case6/${i + 1}.jpg`) },
  { id: "case7", photos: Array.from({ length: 6 }, (_, i) => `/gallery/case7/${i + 1}.jpg`) },
  { id: "case8", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case8/${i + 1}.jpg`) },
  { id: "case9", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case9/${i + 1}.jpg`) },
  { id: "case10", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case10/${i + 1}.jpg`) },
  { id: "case11", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case11/${i + 1}.jpg`) },
  { id: "case12", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case12/${i + 1}.jpg`) },
  { id: "case13", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case13/${i + 1}.jpg`) },
  { id: "case14", photos: Array.from({ length: 4 }, (_, i) => `/gallery/case14/${i + 1}.jpg`) },
];
