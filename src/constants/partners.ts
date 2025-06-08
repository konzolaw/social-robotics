export interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    name: "UNESCO",
    logo: "/img/home/unesco-logo.png",
    website: "https://www.unesco.org/",
  },
  {
    name: "Mozilla",
    logo: "/img/home/mozilla-logo.png",
    website: "https://www.mozilla.org/",
  },
  {
    name: "German Partner",
    logo: "/img/home/german-logo.png",
  },
  {
    name: "JKUAT",
    logo: "/img/home/jkuat-logo.png",
    website: "https://www.jkuat.ac.ke/",
  },
  {
    name: "USAID",
    logo: "/img/home/usaid-logo.png",
    website: "https://www.usaid.gov/",
  },
];
