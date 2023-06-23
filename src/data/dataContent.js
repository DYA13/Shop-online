const dataContent = [
  {
    id: 1,

    price: 550.0,

    img: 'https://drive.google.com/uc?id=1rQBHt9xQD1PRTszrsioxUQh2BYxv6sq6&export=download',

    name: 'Anello Eternity a griffe in Oro Giallo 18k e Zaffiri Blu.',

    category: 'ANELLI'
  },

  {
    id: 2,

    price: 1050.0,

    img: 'https://drive.google.com/uc?id=1uQM98ct3fgGbS39prI6ToEFGnaf0M0XI&export=download',

    name: 'Anello Tipo Solitario In Oro Giallo E Bianco 18k Con Zircone.',

    category: 'ANELLI'
  },

  {
    id: 3,

    price: 1280.0,

    img: 'https://drive.google.com/uc?id=1w7iuErAqKsVfntv83zd2jmw9Uz3KJRy9&export=download',

    name: 'Anello Veretta A 3 Pietre In Oro Bianco 18k Con Diamanti Ct. 2,00.',

    category: 'ANELLI'
  },

  {
    id: 4,

    price: 890.0,

    img: 'https://drive.google.com/uc?id=1Oxw1gd_p-p1XFKXxfU-dMdqQAOwsHgek&export=download',

    name: 'Anello Modello Eternity In Oro Giallo 18k Con Rubini.',

    category: 'ANELLI'
  },

  {
    id: 5,

    price: 950.0,

    img: 'https://drive.google.com/uc?id=1Oxw1gd_p-p1XFKXxfU-dMdqQAOwsHgek&export=download',

    name: 'Eternity A Griffe In Oro Bianco 18k E Diamanti.',

    category: 'ANELLI'
  },

  {
    id: 6,

    price: 1200.0,

    img: 'https://drive.google.com/uc?id=1BDUXOcge9sCxwGNilIIkWHKtZTn6Qwhv&export=download',

    name: 'Anello Eternity A Griffe In Oro Bianco 18k Con Diamanti Verdi.',

    category: 'ANELLI'
  },

  {
    id: 7,

    price: 1250.0,

    img: 'https://drive.google.com/uc?id=1GiIl6krWo8Hz8nPIULDKw64XpuoI0Yqt&export=download',

    name: 'Orecchini In Oro Bianco 18k Con Pavè In Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 8,

    price: 1380.9,

    img: 'https://drive.google.com/uc?id=1WAwtsG3rYNJZLmy16mmmCRqT38wkrmfQ&export=download',

    name: 'Orecchini In Oro Bianco 18k A Castoni Con Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 9,

    price: 1820.8,

    img: 'https://drive.google.com/uc?id=16kxX_gb-7yuCOVeZwvBf3DLK9bXFsIwB&export=download',

    name: 'Orecchini Punto Luce In Oro Bianco 18k Con Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 10,

    price: 2510.0,

    img: 'https://drive.google.com/uc?id=1hNq68crFcVtdp43OhAEsNSU3vLYKUFgs&export=download',

    name: 'Orecchini Tennis In Oro Bianco 18k A Tre File Con Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 11,

    price: 3598.0,

    img: 'https://drive.google.com/uc?id=1I2nDN5Mh69ExMyOvwb_3W5HeQ61fXFce&export=download',

    name: 'Orecchini Tennis In Oro Bianco 18k A Tre File Con Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 12,

    price: 2397.0,

    img: 'https://drive.google.com/uc?id=1f5I5Y_no6SO73Lxc-YjCaHmHQc1q18sQ&export=download',

    name: 'Orecchini Tennis In Oro Bianco 18k A Tre File Con Diamanti.',

    category: 'ORECCHINI'
  },

  {
    id: 13,

    price: 4307.0,

    img: 'https://drive.google.com/uc?id=1nkGVXWdshMrSlaCLnRK30awiRQRFUwK5&export=download',

    name: 'Collana In Oro Bianco 18k E Pendente Con Zaffiro Blu A Cuore E Diamanti A Contorno.',

    category: 'COLLANE'
  },

  {
    id: 14,

    price: 2187.0,

    img: 'https://drive.google.com/uc?id=1nNkuMtH5BEgjVN8OrJ-5vWf5C-ESEkrI&export=download',

    name: 'Collana Punto Luce In Oro Bianco 18k A Griffe Con Diamante. Ct. 0,05.',

    category: 'COLLANE'
  },

  {
    id: 15,

    price: 3995.0,

    img: 'https://drive.google.com/uc?id=1qFHGJdT5WbGzjGyNY6kCnqQNep40EkBP&export=download',

    name: 'Collana In Oro Bianco 18k E Pendente Con Grande Zaffiro Blu Ovale E Diamanti',

    category: 'COLLANE'
  },

  {
    id: 16,

    price: 2397.0,

    img: 'https://drive.google.com/uc?id=1dyH4gkTqWXUl8ZyyUehRtn_p1C6ZCWko&export=download',

    name: 'Collana Diamantata In Oro Giallo 18k, Cm 50.',

    category: 'COLLANE'
  },

  {
    id: 17,

    price: 3591.0,

    img: 'https://drive.google.com/uc?id=13XegzFbj3T61axWAetHllTtWS9eHAOuv&export=download',

    name: 'Collana In Oro Giallo 18k A Maglia Piatta E Lucida, Effetto Nastrino, Cm 39.',

    category: 'COLLANE'
  },

  {
    id: 18,

    price: 1497.0,

    img: 'https://drive.google.com/uc?id=1X1az8td2rZRDf2rIQ-99A-ccrxrpVRJS&export=download',

    name: 'Collana Punto Luce In Oro Bianco 18k Con Diamante Ct 0,90.',

    category: 'COLLANE'
  },

  {
    id: 19,

    price: 4338.0,

    img: 'https://drive.google.com/uc?id=1HXwSu7gUjLyqEuYcE6jxtVmm-aSUMhS_&export=download',

    name: 'Bracciale In Oro Giallo 18k Con Maglie Lavorate E Diamanti.',

    category: 'BRACCIALE'
  },

  {
    id: 20,

    price: 3747.0,

    img: 'https://drive.google.com/uc?id=1gCNwDZbUREuAP0uVcNSpb_b6z-2wAI5o&export=download',

    name: 'Bracciale In Oro Bianco E Rosso 18k Con Elementi Di Forma Rotonda Alternati Con Diamanti.',

    category: 'BRACCIALE'
  },

  {
    id: 21,

    price: 2015.0,

    img: 'https://drive.google.com/uc?id=1Ye1-J-wflvm7WJkmYcEdFO2_fpVS2unp&export=download&',

    name: 'Bracciale Fantasia In Oro Giallo Diamantato 18k, Cm 18.',

    category: 'BRACCIALE'
  },

  {
    id: 22,

    price: 3015.0,

    img: 'https://drive.google.com/uc?id=1j6DqlkkSC3cLmfqEg0A1DWeiq729kjb3&export=download',

    name: 'Bracciale Rigido In Oro Rosa 18k Con Pavè Di Diamanti.',

    category: 'BRACCIALE'
  },

  {
    id: 23,

    price: 3634.0,

    img: 'https://drive.google.com/uc?id=1vzlIr4rfZLHCfSdNF0jBLgCK4vGy16zw&export=download',

    name: 'Bracciale Da Donna Fantasia In Oro Bianco E Giallo 18k.',

    category: 'BRACCIALE'
  },

  {
    id: 24,

    price: 3563.0,

    img: 'https://drive.google.com/uc?id=1L7c5psrpHDgpkAOfAcbgiPby60k1vIq5&export=download&',

    name: 'Bracciale In Oro Giallo 18k Con Charms E Perline Colorate.',

    category: 'BRACCIALE'
  }
]

export default dataContent
