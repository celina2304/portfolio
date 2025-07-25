export interface ScrollState {
    scrollY: number; // for tracking current scrollPosition 
    scrollPosition: number; // destination for final scroll position
    scrollDirection: "up" | "down";
  }