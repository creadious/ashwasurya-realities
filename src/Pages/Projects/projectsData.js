import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.webp";
import project5 from "../../assets/project5.webp";

import complete1 from "../../assets/complete1.webp";
import complete2 from "../../assets/complete2.webp";
import complete3 from "../../assets/complete3.webp";
import complete4 from "../../assets/upcoming1.png";
import complete5 from "../../assets/project/Lavish/mob web.webp";
import complete6 from "../../assets/project/Signature/signature-mobile.webp";

// Unified Project Data with `status` property
export const projectsData = [
  {
    id: 10,
    title: "LAVISH",
    image: complete5,
    link: "/projects/lavish",
    status: "ongoing",
  },
  {
    id: 11,
    title: "SIGNATURE",
    image: complete6,
    link: "/projects/signature",
    status: "ongoing",
  },
  {
    id: 1,
    title: "ATHARVA RITEWAY",
    image: project3,
    link: "/projects/atharva",
    status: "ongoing",
  },
  {
    id: 2,
    title: "RUTHVI",
    image: project2,
    link: "/projects/ruthvi",
    status: "completed",
  },
  {
    id: 3,
    title: "LOTUS",
    image: project4,
    link: "/projects/lotus",
    status: "completed",
  },
  { id: 4, title: "DESTINY FARM", image: project1, status: "ongoing" },

  {
    id: 5,
    title: "KEERTHI",
    image: complete4,
    link: "/projects/keerthi",
    status: "completed",
  },
  { id: 6, title: "JYESTA", image: project5, status: "completed" },
  { id: 7, title: "BERYLE PHASE-1", image: complete1, status: "completed" },
  { id: 8, title: "GREEN VALLEY", image: complete2, status: "completed" },
  {
    id: 9,
    title: "SAI SADGURU PROJECT",
    image: complete3,
    status: "completed",
  },
];
