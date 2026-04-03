export interface Country {
  name: string;
  nameLocal: string;
  lat: number;
  lng: number;
  emoji: string;
  tradition: string;
  funFact: string;
  image: string;
  photo: string;
}

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`;

export const countries: Country[] = [
  {
    name: "Brazil",
    nameLocal: "Brasil",
    lat: -14.235,
    lng: -51.9253,
    emoji: "🇧🇷",
    tradition:
      "Os brasileiros celebram com ovos de chocolate gigantes — os maiores do mundo! Famílias se reúnem para almoços especiais com bacalhau e colomba pascal.",
    funFact:
      "O Brasil é o maior consumidor de ovos de Páscoa do mundo. Alguns ovos chegam a pesar mais de 50 kg!",
    image: "🍫",
    photo: pexels(4226893),
  },
  {
    name: "Sweden",
    nameLocal: "Sverige",
    lat: 63.1282,
    lng: 18.6435,
    emoji: "🇸🇪",
    tradition:
      "Crianças se vestem de bruxas de Páscoa (Påskkärringar), vão de porta em porta trocando desenhos por doces — como um Halloween de primavera.",
    funFact:
      "Os suecos decoram galhos de bétula com penas coloridas chamados 'Påskris' para afastar maus espíritos.",
    image: "🧙‍♀️",
    photo: pexels(3980605),
  },
  {
    name: "Greece",
    nameLocal: "Ελλάδα",
    lat: 39.0742,
    lng: 21.8243,
    emoji: "🇬🇷",
    tradition:
      "No Sábado Santo à meia-noite, os gregos participam de uma missa com velas e depois jogam panelas e vasos pela janela para celebrar a Ressurreição!",
    funFact:
      "Os ovos são tingidos de vermelho para simbolizar o sangue de Cristo, e as pessoas competem quebrando ovos uns contra os outros (Tsougrisma).",
    image: "🏺",
    photo: pexels(6663935),
  },
  {
    name: "Finland",
    nameLocal: "Suomi",
    lat: 61.9241,
    lng: 25.7482,
    emoji: "🇫🇮",
    tradition:
      "Assim como na Suécia, crianças se fantasiam de bruxas no Domingo de Ramos e saem pedindo doces com galhos de salgueiro decorados.",
    funFact:
      "Os finlandeses fazem fogueiras na noite de Sábado Santo para espantar bruxas e maus espíritos.",
    image: "🔥",
    photo: pexels(249614),
  },
  {
    name: "United States",
    nameLocal: "United States",
    lat: 37.0902,
    lng: -95.7129,
    emoji: "🇺🇸",
    tradition:
      "A famosa Easter Egg Hunt (caça aos ovos) acontece até na Casa Branca! O 'Easter Egg Roll' é tradição desde 1878, onde crianças rolam ovos no gramado.",
    funFact:
      "Os americanos consomem mais de 16 bilhões de jelly beans na Páscoa — suficiente para dar a volta ao mundo 3 vezes!",
    image: "🥚",
    photo: pexels(105778),
  },
  {
    name: "France",
    nameLocal: "France",
    lat: 46.6034,
    lng: 1.8883,
    emoji: "🇫🇷",
    tradition:
      "Os sinos das igrejas ficam em silêncio da Sexta-Feira Santa até o Domingo de Páscoa. Dizem às crianças que os sinos 'voaram para Roma' e voltam trazendo chocolates!",
    funFact:
      "Em Haux, fazem uma omelete gigante na praça principal usando mais de 15.000 ovos para alimentar 1.000 pessoas.",
    image: "🔔",
    photo: pexels(5793860),
  },
  {
    name: "Poland",
    nameLocal: "Polska",
    lat: 51.9194,
    lng: 19.1451,
    emoji: "🇵🇱",
    tradition:
      "Na segunda-feira após a Páscoa, acontece o 'Śmigus-Dyngus' — as pessoas jogam água umas nas outras pelas ruas! Ninguém está a salvo.",
    funFact:
      "A tradição de jogar água vem de um ritual pagão de purificação e boas-vindas à primavera.",
    image: "💧",
    photo: pexels(906023),
  },
  {
    name: "Australia",
    nameLocal: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    emoji: "🇦🇺",
    tradition:
      "Em vez do coelho de Páscoa, os australianos celebram com o Easter Bilby — um marsupial nativo ameaçado de extinção. Chocolates em forma de bilby são vendidos para arrecadar fundos de conservação.",
    funFact:
      "Coelhos são considerados pragas na Austrália, por isso foram 'substituídos' pelo adorável bilby!",
    image: "🐾",
    photo: pexels(3567166),
  },
  {
    name: "Ethiopia",
    nameLocal: "ኢትዮጵያ",
    lat: 9.145,
    lng: 40.4897,
    emoji: "🇪🇹",
    tradition:
      "A Páscoa etíope (Fasika) é celebrada após 55 dias de jejum vegano rigoroso. No domingo, festejam com um grande banquete de carne e injera.",
    funFact:
      "A Fasika segue o calendário etíope, então a data é diferente da Páscoa ocidental — geralmente uma ou duas semanas depois.",
    image: "🥘",
    photo: pexels(28664278),
  },
  {
    name: "Philippines",
    nameLocal: "Pilipinas",
    lat: 12.8797,
    lng: 121.774,
    emoji: "🇵🇭",
    tradition:
      "Na Sexta-Feira Santa, alguns devotos encenam a crucificação de forma literal, incluindo flagelação e crucificações reais com pregos — uma prática extrema e controversa.",
    funFact:
      "Apesar de a Igreja Católica desaprovar, milhares de turistas vão assistir às encenações em San Fernando, Pampanga.",
    image: "✝️",
    photo: pexels(13598504),
  },
  {
    name: "Germany",
    nameLocal: "Deutschland",
    lat: 51.1657,
    lng: 10.4515,
    emoji: "🇩🇪",
    tradition:
      "Os alemães decoram árvores e galhos com ovos coloridos (Ostereierbaum), criando verdadeiras 'árvores de Páscoa' nos jardins.",
    funFact:
      "A árvore de Páscoa mais famosa ficava em Saalfeld, decorada com mais de 10.000 ovos por um único casal ao longo de 50 anos!",
    image: "🌳",
    photo: pexels(8105076),
  },
  {
    name: "Mexico",
    nameLocal: "México",
    lat: 23.6345,
    lng: -102.5528,
    emoji: "🇲🇽",
    tradition:
      "A Semana Santa mexicana inclui procissões dramáticas, queima de efígies de Judas (Quema de Judas) e representações teatrais da Paixão de Cristo nas ruas.",
    funFact:
      "Os Cascarones — ovos ocos recheados de confete — são quebrados na cabeça das pessoas para dar boa sorte!",
    image: "🎭",
    photo: pexels(31715517),
  },
  {
    name: "India",
    nameLocal: "भारत",
    lat: 20.5937,
    lng: 78.9629,
    emoji: "🇮🇳",
    tradition:
      "Os cristãos de Goa e Kerala celebram com missas, procissões e um prato especial de caril de coelho. As igrejas são decoradas com flores tropicais.",
    funFact:
      "Em algumas comunidades, ovos de Páscoa são pintados com cores vibrantes do Holi, misturando tradições hindu e cristã.",
    image: "🌺",
    photo: pexels(29988888),
  },
  {
    name: "Japan",
    nameLocal: "日本",
    lat: 36.2048,
    lng: 138.2529,
    emoji: "🇯🇵",
    tradition:
      "Apesar de não ser um país cristão, o Japão abraçou a estética da Páscoa! Lojas vendem chocolates temáticos e a Disney Tokyo faz um evento especial de Páscoa com paradas e decoração.",
    funFact:
      "A Páscoa no Japão é mais comercial que religiosa — é tratada como o Valentine's Day, focada em presentes e estética kawaii.",
    image: "🐰",
    photo: pexels(356269),
  },
];
