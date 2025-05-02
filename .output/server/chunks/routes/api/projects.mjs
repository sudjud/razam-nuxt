import { d as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const projects$1 = [
  {
    name: "Chambre d'enfant",
    slug: "chambre-enfant",
    year: 2023,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.chambreEnfant.workingTime",
    client: "portfolio.projects.chambreEnfant.client",
    dislocation: "portfolio.projects.chambreEnfant.dislocation",
    desc: "portfolio.projects.chambreEnfant.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.playingRoom",
        photo: "/images/projects/chambre-enfant/playing-room.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/chambre-enfant/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.playingRoom",
        photo: "/images/projects/chambre-enfant/playing-room-2.webp"
      },
      {
        name: "portfolio.tabs.rooms.room",
        photo: "/images/projects/chambre-enfant/room.webp"
      },
      {
        name: "portfolio.tabs.rooms.room",
        photo: "/images/projects/chambre-enfant/room2.webp"
      }
    ]
  },
  {
    name: "Elemental harmony",
    slug: "elemental-harmony",
    year: 2022,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/elemental-harmony.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.chambreEnfant.workingTime",
    client: "portfolio.projects.chambreEnfant.client",
    dislocation: "portfolio.projects.elementalHarmony.dislocation",
    desc: "portfolio.projects.chambreEnfant.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/elemental-harmony/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/elemental-harmony/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/elemental-harmony/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/elemental-harmony/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/elemental-harmony/bathroom.webp"
      }
    ]
  },
  {
    name: "Modern vista",
    slug: "modern-vista",
    year: 2022,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/modern-vista.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.modernVista.workingTime",
    client: "portfolio.projects.modernVista.client",
    dislocation: "portfolio.projects.modernVista.dislocation",
    desc: "portfolio.projects.modernVista.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/modern-vista/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/modern-vista/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.childbedroom",
        photo: "/images/projects/modern-vista/childbedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.toilet",
        photo: "/images/projects/modern-vista/toilet.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/modern-vista/bathroom.webp"
      }
    ]
  },
  {
    name: "Natural essence",
    slug: "natural-essence",
    year: 2021,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/natural-essence.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.naturalEssence.workingTime",
    client: "portfolio.projects.naturalEssence.client",
    dislocation: "portfolio.projects.naturalEssence.dislocation",
    desc: "portfolio.projects.naturalEssence.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/natural-essence/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/natural-essence/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/natural-essence/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/natural-essence/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/natural-essence/bathroom.webp"
      }
    ]
  },
  {
    name: "Serene lines",
    slug: "serene-lines",
    year: 2024,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/serene-lines.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.sereneLines.workingTime",
    client: "portfolio.projects.sereneLines.client",
    dislocation: "portfolio.projects.sereneLines.dislocation",
    desc: "portfolio.projects.sereneLines.desc",
    cost: "12.500",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/serene-lines/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/serene-lines/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/serene-lines/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.childroom",
        photo: "/images/projects/serene-lines/childroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/serene-lines/bathroom.webp"
      }
    ]
  },
  {
    name: "Urban grace",
    slug: "urban-grace",
    year: 2024,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/urban-grace.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.urbanGrace.workingTime",
    client: "portfolio.projects.urbanGrace.client",
    dislocation: "portfolio.projects.urbanGrace.dislocation",
    desc: "portfolio.projects.urbanGrace.desc",
    cost: "12.500",
    images: [
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/urban-grace/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/urban-grace/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/urban-grace/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge2.webp"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge.webp"
      }
    ]
  }
];

const projects = defineEventHandler((event) => {
  const query = getQuery(event);
  if (query.slug) {
    const project = projects$1.find((project2) => project2.slug === query.slug);
    return project || { error: "Projects not found" };
  }
  return projects$1;
});

export { projects as default };
//# sourceMappingURL=projects.mjs.map
