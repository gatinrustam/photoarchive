const data = [
  {
    id: 1,
    url: "pic-001.jpg",
    type: "photo",
    year: "1998",
    name: ["Алина Гатина"],
    city: "Ахангаран",
    description: "Коттедж в Ахангаране. Фото сделано в парилке коттеджа."
  },
  {
    id: 2,
    url: "pic-002.jpg",
    type: "photo",
    year: "2010",
    name: ["Оксана", "Замир Гатин", "Шарафитдин Гатин", "Музафар Ганиев"],
    city: "Хабаровск",
    description: "Поездка за грузовыми машинами в Хабаровск."
  },
  {
    id: 3,
    url: "pic-003.jpg",
    type: "photo",
    year: "2010",
    name: ["Замир Гатин", "Шарафитдин Гатин"],
    city: "Хабаровск",
    description: "Поездка за грузовыми машинами в Хабаровск."
  },
  {
    id: 4,
    url: "pic-004.jpg",
    type: "photo",
    year: "1997",
    name: ["Шарафитдин Гатин", "Иван Винедиктов", "Равиль Латыпов", "Сергей Савинков"],
    city: "Ахангаран",
    description: "Фото сделано в Коттедже, во дворе."
  },
  {
    id: 5,
    url: "pic-005.jpg",
    type: "photo",
    year: "2010",
    name: ["Шарафитдин Гатин", "Танзиля Гареева", "Замир Гатин"],
    city: "Хабаровск",
    description: ""
  },
  {
    id: 6,
    url: "pic-006.jpg",
    type: "photo",
    year: "2001",
    name: ["Наиль Ахмадиев", "Рустам Гатин", "Эмиль Ахмадиев", "Алина Гатина"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 7,
    url: "pic-007.jpg",
    type: "photo",
    year: "1987",
    name: ["Ленара Ахтариева"],
    city: "Ахангаран",
    description: "У Бабая дома."
  },
  {
    id: 8,
    url: "pic-008.jpg",
    type: "photo",
    year: "1993",
    name: ["Рустам Гатин"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 9,
    url: "pic-009.jpg",
    type: "photo",
    year: "1996",
    name: ["Рустам Гатин"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 10,
    url: "pic-010.jpg",
    type: "photo",
    year: "1998",
    name: ["Алина Гатина"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 11,
    url: "pic-011.jpg",
    type: "photo",
    year: "1999",
    name: ["Алина Гатина", "Нанайка"],
    city: "Андижан",
    description: "По дороге в Андижан."
  },
  {
    id: 12,
    url: "pic-012.jpg",
    type: "photo",
    year: "1999",
    name: ["Алина Гатина", "Шарафитдин Гатин"],
    city: "Ташкент",
    description: ""
  },
  {
    id: 13,
    url: "pic-013.jpg",
    type: "photo",
    year: "2001",
    name: ["Алина Гатина"],
    city: "Ахангаран",
    description: "Двор коттеджа."
  },
  {
    id: 14,
    url: "pic-014.jpg",
    type: "photo",
    year: "2007",
    name: ["Алина Гатина"],
    city: "Магнитогорск",
    description: "1 сентября."
  },
  {
    id: 15,
    url: "pic-017.jpg",
    type: "photo",
    year: "2000",
    name: ["Алина Гатина"],
    city: "Ахангаран",
    description: "В коттедже на фоне запарожца."
  },
  {
    id: 16,
    url: "pic-018.jpg",
    type: "photo",
    year: "2002",
    name: ["Алина Гатина"],
    city: "Акъяр",
    description: "Выезд на природу в Башкирии."
  },
  {
    id: 17,
    url: "pic-019.jpg",
    type: "photo",
    year: "2003",
    name: ["Алина Гатина"],
    city: "Акъяр",
    description: "У Аники в Акъяре."
  },
  {
    id: 18,
    url: "pic-020.jpg",
    type: "photo",
    year: "2000",
    name: ["Алина Гатина"],
    city: "Ташкент",
    description: "В аквапарке Ташкента."
  },
  {
    id: 19,
    url: "pic-021.jpg",
    type: "photo",
    year: "2001",
    name: ["Алина Гатина"],
    city: "Акъяр",
    description: ""
  },
  {
    id: 20,
    url: "pic-023.jpg",
    type: "photo",
    year: "2001",
    name: ["Алина Гатина"],
    city: "Акъяр",
    description: ""
  },
  {
    id: 21,
    url: "pic-026.jpg",
    type: "photo",
    year: "2001",
    name: ["Алина Гатина", "Эмиль Ахмадиев"],
    city: "Ангрен",
    description: ""
  },
  {
    id: 22,
    url: "pic-025.jpg",
    type: "photo",
    year: "1997",
    name: ["Венера Гатина", "Зульфия Ахмадиева", "Шарафитдин Гатин"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 23,
    url: "pic-027.jpg",
    type: "photo",
    year: "1997",
    name: ["Танзиля Гареева", "Ленара Ахтариева", "Абдураим", "Венера Гатина", "Фатима"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 24,
    url: "pic-028.jpg",
    type: "photo",
    year: "1997",
    name: ["Рустам Гатин", "Нанайка", "Феруза"],
    city: "Ахангаран",
    description: ""
  },
  {
    id: 25,
    url: "pic-029.jpg",
    type: "photo",
    year: "1998",
    name: ["Рустам Гатин", "Равиль Латыпов"],
    city: "Ахангаран",
    description: ""
  }
]

export default data;