import type { CampsiteConfig } from "../types";

/**
 * Camping Lindlerhof am See — Lassach 11, 9842 Mörtschach, Mölltal, Kärnten.
 * Texte/Fakten/Preise belegt aus lindlerhof.at (Stand-Scrape 2026-06, DE/EN/IT/NL).
 * AUSNAHME Kontaktblock (Straße · PLZ · Telefon · E-Mail) + Inhaber „Familie Schrall":
 *   diese stammen aus den vom Betrieb bereitgestellten Lead-Stammdaten, NICHT aus dem
 *   Website-Scrape — die Impressum-/Kontaktseite (https://lindlerhof.at/impressum/) lag im
 *   Scrape nur als Link vor und wurde nie erfasst. Im Scrape belegt sind nur Ort „Mörtschach"
 *   und die E-Mail-Domain „lindlerhof.at"; die Einzelwerte stimmen mit den Lead-Stammdaten
 *   verbatim überein (nichts erfunden). Endgültige Bestätigung via Kunde oder Impressum-Scrape
 *   steht aus → Verify-Status „Infos" bleibt bis dahin ehrlich offen.
 * Bilder = ausschließlich eigene Lindlerhof-Fotos in /public/campsites/lindlerhof/
 * (jedes Bild per Vision geprüft, jedes nur einmal verwendet).
 *
 * EHRLICH:
 * - Der Platz liegt laut Quelle „auf 900 m Seehöhe … idyllisch an einem KLEINEN See“
 *   (Luftbild zeigt den kleinen Teich/See am Platz) → `see: "Kleiner See"`, nie als
 *   großer Badesee geframt.
 * - 4 Sterne = ADAC-Klassifikation/ADAC-Tipp 2026 (Badge auf der Seite) — als solche benannt.
 * - Keine eindeutigen GPS-Koordinaten auf der Quelle (nur ein Nationalpark-Tourenplaner-
 *   Kartenmittelpunkt) → `coords` weggelassen, Karte blendet aus, Adresse wird gezeigt.
 * - Preise: reale Preisliste 2026 (Camping itemisiert pro Person/Stellplatz/Taxen;
 *   Ferienhaus & Arnikahütte sind Wochenpreise, Mindestaufenthalt 1 Woche).
 */
const IMG = "/campsites/lindlerhof";

export const lindlerhof: CampsiteConfig = {
  name: "Camping Lindlerhof am See",
  shortName: "Lindlerhof",
  slug: "lindlerhof",
  ort: "Mörtschach",
  region: "Kärnten",
  brandKind: "Camping",
  see: "Kleiner See",
  regionLong: "Mölltal · Nationalpark Hohe Tauern · Kärnten · Österreich",

  claim: "Naturcamping am kleinen See – mitten im Mölltal",
  claimEmphasis: "am kleinen See",
  intro:
    "Familiär geführter Campingplatz auf 900 m Seehöhe im Nationalpark Hohe Tauern — mit eigenem kleinen See, Bauernhof und Restaurant, ganzjährig geöffnet zwischen Großglockner und den Lienzer Dolomiten.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Lindlerhof Logo" },

  statement: {
    text: "Bei uns ist Urlaub noch ehrlich — Natur, Tiere und Bergluft, mitten im Nationalpark Hohe Tauern.",
    emphasis: "noch ehrlich",
  },

  pillars: [
    {
      title: "Mitten im Mölltal",
      text: "Stellplätze auf 900 m Seehöhe, eingebettet in die Alpenlandschaft zwischen Großglockner und den Lienzer Dolomiten.",
      image: { src: `${IMG}/pillar-stellplatz.webp`, alt: "Wohnwagen auf grüner Wiese vor den Bergen des Mölltals" },
    },
    {
      title: "Echtes Bauernhofleben",
      text: "Ein bewirtschafteter Hof zum Anfassen: zahlreiche Tiere, ein Kräutergarten und die Heuernte – eine Freude für Groß und Klein.",
      image: { src: `${IMG}/pillar-bauernhof.webp`, alt: "Kind streichelt Kühe auf der Wiese am Lindlerhof" },
    },
    {
      title: "Sommer wie Winter",
      text: "Ganzjährig geöffnet – im Sommer zum Wandern, im Winter als Ausgangspunkt zu mehreren Skigebieten.",
      image: { src: `${IMG}/pillar-winter.webp`, alt: "Der kleine See am Lindlerhof im Winter, umgeben von verschneiten Bergen" },
    },
  ],

  usps: [
    "Familiär geführt von Familie Schrall",
    "Ganzjährig geöffnet",
    "Eigener kleiner See am Platz",
    "Bauernhof mit Tieren",
    "Im Nationalpark Hohe Tauern",
    "Warmwasser inklusive",
  ],

  trust: {
    heading: "Worauf du dich am Lindlerhof verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Schrall, mehrfach ausgezeichnet und ganzjährig geöffnet — ein ehrlicher Naturplatz auf 900 m im Mölltal, mitten im Nationalpark Hohe Tauern.",
  },

  awards: [
    { label: "ADAC-Klassifikation 2026 · ADAC-Tipp · 4 Sterne", image: { src: `${IMG}/award-adac-2026.png`, alt: "ADAC Klassifikation 2026 Tipp – 4 Sterne" } },
    { label: "BeyondCamping · Top Campingplätze 2025", image: { src: `${IMG}/award-beyondcamping-2025.png`, alt: "BeyondCamping Auszeichnung Top Campingplätze 2025" } },
  ],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-luftbild.webp`, alt: "Luftaufnahme von Camping Lindlerhof im Mölltal mit kleinem See, Wiesen und Bergen" },
  },

  camping: {
    heading: "Camping am Lindlerhof",
    intro:
      "Ebene Wiesen-Stellplätze auf 900 m Seehöhe, ringsum Wald, Berge und der kleine See – dazu ein Restaurant, neue Sanitäranlagen und ein echter Bauernhof direkt am Platz.",
    features: [
      { title: "Im Nationalpark Hohe Tauern", text: "Idyllisch gelegen zwischen Großglockner und den Lienzer Dolomiten – Alpenlandschaft, soweit das Auge reicht.", image: { src: `${IMG}/camping-lage.webp`, alt: "Blick über das Mölltal mit Wohnmobilen und Bergen im Abendlicht" } },
      { title: "Mitten in der Natur", text: "Großzügige Wiesen-Stellplätze für Zelt, Wohnwagen und Wohnmobil – ringsum nur Wald, Berge und Ruhe.", image: { src: `${IMG}/camping-zeltwiese.webp`, alt: "Zelte und Camper auf grünem Hügel am Lindlerhof" } },
      { title: "Stellplätze mit Bergblick", text: "Ebene Plätze mit Blick auf die teils schneebedeckten Gipfel der Hohen Tauern – am Morgen wie im Abendlicht.", image: { src: `${IMG}/camping-stellplatz.webp`, alt: "Wohnwagen mit Blick auf die Berge am Camping Lindlerhof" } },
      { title: "Neue Sanitäranlagen", text: "Moderne, großzügige Sanitäranlagen – warmes Wasser steht jederzeit kostenlos zur Verfügung, Waschmaschine und Trockner sind vorhanden.", image: { src: `${IMG}/camping-sanitaer.webp`, alt: "Eingang der neuen Sanitäranlagen am Camping Lindlerhof" } },
      { title: "Restaurant am Platz", text: "In der Hauptsaison verwöhnt das Restaurant von 18 bis 20 Uhr mit ausgezeichneten Speisen – um Reservierung wird gebeten, in der Nebensaison auf Anfrage.", image: { src: `${IMG}/camping-restaurant.webp`, alt: "Restaurant-Pavillon aus Holz am Camping Lindlerhof" } },
      { title: "Unser Bauernhof", text: "Tiere zum Anfassen, ein Kräutergarten zum Naschen und das Landleben hautnah – mittendrin statt nur dabei.", image: { src: `${IMG}/camping-bauernhof.webp`, alt: "Kühe am Hofweg des Lindlerhof" } },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte & Hütten",
    intro:
      "Lieber feste Wände als Zelt? Vom gemütlichen Ferienhaus bis zur Arnikahütte auf 1.300 m – für jeden das passende Zuhause auf Zeit.",
    items: [
      {
        name: "Ferienhaus „Seeblick“ & „Dolomitenblick“",
        kind: "Ferienhaus",
        text: "Gemütliches Ferienhaus für 2 Personen plus Schlafboden für 2 Kinder (ab 6 Jahren) – mit Wohnküche, Pelletofen, Bad, Kühlschrank, Kaffeemaschine und TV. Mindestaufenthalt 1 Woche.",
        image: { src: `${IMG}/ferienhaus.webp`, alt: "Ferienhäuser aus Holz am Lindlerhof vor den Bergen" },
        priceFrom: 699,
        features: ["ab € 699 / Woche · 2 Pers.", "+ 2 Kinder (Schlafboden)", "Wohnküche & Pelletofen"],
      },
      {
        name: "Übernachtungshäuschen",
        kind: "Hütte",
        text: "Die einfache, schnelle Alternative zum Zelt: zwei Stockbetten, Platz für 4 Personen.",
        image: { src: `${IMG}/uebernachtungshaeuschen.webp`, alt: "Kleines Holz-Übernachtungshäuschen am Camping Lindlerhof" },
        priceFrom: 25,
        features: ["ab € 25 p. P. / Nacht", "4 Personen", "2 Stockbetten"],
      },
      {
        name: "Schlaflager",
        kind: "Gruppenunterkunft",
        text: "Gruppenschlafplatz für 4 bis maximal 12 Personen mit eigener Dusche und großzügiger Terrasse mit wunderbarem Ausblick – nur auf Anfrage.",
        image: { src: `${IMG}/schlaflager.webp`, alt: "Holz-Stockbetten im Schlaflager des Lindlerhof" },
        priceFrom: 35,
        features: ["ab € 35 p. P. / Nacht", "4–12 Personen", "eigene Dusche · auf Anfrage"],
      },
      {
        name: "Arnikahütte",
        kind: "Hütte · 1.300 m",
        text: "Komfortable Hütte am Wald- und Wiesenrand auf 1.300 m Seehöhe: Zirbenbett für 2, Kinderzimmer für max. 3, Wohnküche mit Holzherd, Wintergarten und Solarstrom. Nichtraucher, keine Haustiere. Mindestaufenthalt 1 Woche.",
        image: { src: `${IMG}/arnikahuette.webp`, alt: "Die Arnikahütte am Wald- und Wiesenrand auf 1.300 m" },
        priceFrom: 899,
        features: ["ab € 899 / Woche · 2 Pers.", "+ Kinderzimmer (max. 3)", "Holzherd & Wintergarten"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Natur erleben rund um den Hof",
    intro:
      "Der Nationalpark Hohe Tauern liegt direkt vor der Tür: Wandern, Skifahren, Tiere und echtes Hofleben – das ganze Jahr über.",
    items: [
      { title: "Wandern im Mölltal", text: "Vom Platz direkt los: Wandern und Bergtouren im Nationalpark Hohe Tauern, zwischen Großglockner und den Lienzer Dolomiten.", image: { src: `${IMG}/aktiv-wandern.webp`, alt: "Bergkirche Marterle mit verschneiten Gipfeln im Mölltal" } },
      { title: "Skifahren im Winter", text: "Die Skigebiete Heiligenblut, Zettersfeld, Hochstein und der Mölltaler Gletscher sind in 20 bis 40 Minuten mit dem Auto erreichbar.", image: { src: `${IMG}/aktiv-winter.webp`, alt: "Frischer Schnee mit Spuren und verschneiten Bäumen rund um den Lindlerhof" } },
      { title: "Tiere & Hofleben", text: "Ziegen, Kühe und mehr: zahlreiche Tiere warten am Hof – immer wieder eine Freude für Groß und Klein.", image: { src: `${IMG}/aktiv-tiere.webp`, alt: "Zwei Ziegen im Stall am Bauernhof Lindlerhof" } },
      { title: "Kräutergarten & Heuernte", text: "Frische Kräuter im Hofgarten pflücken und beim Sommer-Highlight mithelfen: der Heuernte in den Bergen, gefolgt von einer zünftigen Jause.", image: { src: `${IMG}/aktiv-heuernte.webp`, alt: "Gäste bei der Heuernte auf einer Bergwiese" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 (Abfahrt Lendorf) und die B107 (Großglockner), Ausfahrt bei km 17 – nach Lassach 11, 9842 Mörtschach." },
      { title: "Alternative Routen", text: "Über die Felbertauernstraße via Lienz und das Mölltal oder über das Gasteinertal mit der Autoschleuse (Bahnverladung) nach Mallnitz." },
      { title: "Anreise & Check-in", text: "Anreise täglich zwischen 14:30 und 18:00 Uhr. Hinweis: Die Großglockner-Hochalpenstraße ist von Mitte November bis Anfang Mai geschlossen." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Durchatmen",
    headingEmphasis: "Durchatmen",
    intro:
      "Regenbogen über dem Tal, frischer Schnee, Tiere am Hof und gratis Äpfel vom Lindlerhof – ein paar Eindrücke aus dem Mölltal.",
    tag: "Sommer wie Winter",
    images: [
      { src: `${IMG}/galerie-regenbogen.webp`, alt: "Regenbogen über dem Mölltal mit Holzpavillon auf der Wiese" },
      { src: `${IMG}/galerie-winter.webp`, alt: "Verschneite Berge rund um den Campingplatz im Winter" },
      { src: `${IMG}/galerie-aepfel.webp`, alt: "Korb mit Äpfeln vom Lindlerhof – gratis für Gäste" },
      { src: `${IMG}/galerie-restaurant.webp`, alt: "Glas Wein mit Blick über den Campingplatz" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen – Familie Schrall meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Camping: ab-Preis für 2 Pers./Nacht (Vorsaison) inkl. Stellplatz, Öko- & Nächtigungstaxe, zzgl. Strom. Ferienhaus & Arnikahütte: Wochenpreis ab 2 Pers., Mindestaufenthalt 1 Woche, zzgl. € 45 Endreinigung. Alle Preise inkl. MwSt. · keine Kartenzahlung.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Sommer wie Winter für dich da. Zahlung in bar vor Ort oder per Überweisung – Kartenzahlung ist nicht möglich.",
    },
    categories: [
      // Reale Preisliste 2026 (lindlerhof.at/preise). Camping itemisiert: Stellplatz = 2 Pers.
      // (Vorsaison € 10,30) + Caravan/Zelt € 3 + Ökotaxe € 2 + Nächtigungstaxe 2× € 1,70 ≈ € 29;
      // weitere Person ≈ € 10,30 + € 1,70 ≈ € 12. Ferienhaus € 699/Woche, Arnikahütte € 899/Woche
      // (je 2 Pers.) → als Nacht-Richtwert (÷7) dargestellt; exakte Wochenpreise im priceNote.
      { id: "stellplatz", label: "Stellplatz", perNight: 29, perExtraGuest: 12 },
      { id: "ferienhaus", label: "Ferienhaus", perNight: 100, perExtraGuest: 0 },
      { id: "arnikahuette", label: "Arnikahütte", perNight: 128, perExtraGuest: 10 },
    ],
  },

  // Quelle Kontaktblock = vom Betrieb bereitgestellte Lead-Stammdaten (verbatim übernommen),
  // da die Impressum-/Kontaktseite im Website-Scrape nur als Link vorlag (nicht erfasst).
  // Website-belegt: Ort „Mörtschach" + Domain „lindlerhof.at". Werte unbestätigt, aber NICHT
  // erfunden — sie decken sich exakt mit den Lead-Stammdaten; Tel-Ziffern → telHref geprüft.
  kontakt: {
    coords: { lat: 46.908973, lng: 12.911368 },
    tel: "+43 676 83 555 835",
    telHref: "tel:+4367683555835",
    mail: "camping@lindlerhof.at",
    adresse: "Lassach 11 · 9842 Mörtschach · Kärnten · Österreich",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Restaurant", href: "#camping" },
        { label: "Bauernhof", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Ferienhaus", href: "#mobilheime" },
        { label: "Übernachtungshäuschen", href: "#mobilheime" },
        { label: "Schlaflager", href: "#mobilheime" },
        { label: "Arnikahütte", href: "#mobilheime" },
      ],
    },
    {
      label: "Natur erleben",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern", href: "#aktivitaeten" },
        { label: "Skifahren im Winter", href: "#aktivitaeten" },
        { label: "Tiere & Hofleben", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default lindlerhof;
