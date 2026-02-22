const questions = [
  {
    id: 1,
    question: "Prema izotopu kojeg se kemijskog elementa izražavaju relativne atomske mase svih ostalih elemenata?",
    correct: "Ugljik",
    options: ["Ugljik", "Vodik", "Kisik", "Dušik"]
  },
  {
    id: 2,
    question: "Koja je službena kombinacija boja na dresovima Newcastlea, Udinesea i PAOK-a?",
    correct: "Crna i bijela",
    options: ["Crna i bijela", "Plava i bijela", "Crvena i crna", "Zelena i bijela"]
  },
  {
    id: 3,
    question: "Koji je stručni naziv za lijekove koji pospješuju mokrenje?",
    correct: "Diuretici",
    options: ["Diuretici", "Analgetici", "Antibiotici", "Sedativi"]
  },
  {
    id: 4,
    question: "U čijoj je ratnoj opremi Patroklo bio kad ga je Hektor ubio u borbi?",
    correct: "Ahilejevoj",
    options: ["Ahilejevoj", "Hektorovoj", "Menelajevoj", "Parisovoj"]
  },
  {
    id: 5,
    question: "Kojeg je dana u tjednu Robinson Crusoe upoznao svog budućeg otočkog prijatelja?",
    correct: "Petak",
    options: ["Petak", "Ponedjeljak", "Nedjelja", "Srijeda"]
  },
  {
    id: 6,
    question: "Frazem „miješati kruške i jabuke” istog je značenja kao frazem „zbrajati babe i koga”?",
    correct: "Žabe",
    options: ["Žabe", "Jabuke", "Kruške", "Babe"]
  },
  {
    id: 7,
    question: "Koja je jedina država koja ima riječ konfederacija u službenom imenu?",
    correct: "Švicarska",
    options: ["Švicarska", "Njemačka", "Austrija", "Kanada"]
  },
  {
    id: 8,
    question: "Na kojem splitskom groblju počivaju brojni poznati građani, uključujući Pavu Tomašića?",
    correct: "Lovrinac",
    options: ["Lovrinac", "Sveti Dujam", "Mirogoj", "Vrata"]
  },
  {
    id: 9,
    question: "Koje Nietscheovo djelo dijeli ime s rečenicom kojom je Poncije Pilat predstavio Isusa?",
    correct: "Ecce Homo",
    options: ["Ecce Homo", "Tako je govorio Zaratustra", "Sumrak Idola", "Genealogija morala"]
  },
  {
    id: 10,
    question: "Koji je nadimak glumcu Dwayneu Johnsonu ostao iz borilačkog ringa?",
    correct: "The Rock",
    options: ["The Rock", "The Hulk", "Stone Cold", "The Titan"]
  },
  {
    id: 11,
    question: "Sorta kojeg je voća macintosh po kojoj je Jeff Raskin dobio nadimak Macintosh?",
    correct: "Jabuka",
    options: ["Jabuka", "Kruška", "Šljiva", "Trešnja"]
  },
  {
    id: 12,
    question: "Kojim se dvama slovima najčešće označava srednja tvrdoća olovaka?",
    correct: "HB",
    options: ["HB", "B2", "H", "F"]
  },
  {
    id: 13,
    question: "Što je u slavnoj Churchillovoj izreci bilo spušteno od Szczeczina na Baltiku do Trsta na Jadranu?",
    correct: "Željezna zavjesa",
    options: ["Željezna zavjesa", "Srebrna zavjesa", "Čelična brana", "Bakrena linija"]
  },
  {
    id: 14,
    question: "Prema kojim lovcima na krznaše u Sjevernoj Americi nazivamo američke radne hlače?",
    correct: "Traperima",
    options: ["Traperima", "Indijancima", "Pionirima", "Rudarima"]
  },
  {
    id: 15,
    question: "Koji film Martina Scorsesea prikazuje životnu priču Jordana Belforta?",
    correct: "Vuk s Wall Streeta",
    options: ["Vuk s Wall Streeta", "Casino", "Goodfellas", "Taksist"]
  },
  {
    id: 16,
    question: "Koji je dio ljudskog oka nazvan retina?",
    correct: "Mrežnica",
    options: ["Mrežnica", "Šarenica", "Rožnica", "Leća"]
  },
  {
    id: 17,
    question: "Koji se biljni polisaharid sastoji od molekula amiloze i amilopektina?",
    correct: "Škrob",
    options: ["Škrob", "Celuloza", "Glicogen", "Pektin"]
  },
  {
    id: 18,
    question: "Čije bi ime peljari na Mississippiju uzvikivali kad bi voda bila duboka dvanaest stopa?",
    correct: "Marka Twaina",
    options: ["Marka Twaina", "Jamesa Fenimorea Coopera", "Huckleberryja Finna", "Samuela Clemensa"]
  },
  {
    id: 19,
    question: "Dvostruki Andrijin križ postavlja se na prijelazu preko željezničke pruge s dva ili više čega?",
    correct: "Kolosijeka",
    options: ["Kolosijeka", "Vagona", "Signalnih svjetala", "Stupova"]
  },
  {
    id: 20,
    question: "U kojoj se Mozartovoj operi pojavljuje lik čarobnice Kraljice noći?",
    correct: "Čarobna frula",
    options: ["Čarobna frula", "Don Giovanni", "Figarova ženidba", "Cosi fan tutte"]
  },
    {
    id: 21,
    question: "Kako glasi jedan od oblika osobne zamjenice 'on' u akuzativu?",
    correct: "nj",
    options: ["g", "l", "nj", "onoga"]
  },
  {
    id: 22,
    question: "Alec Trevelyan je koji agent?",
    correct: "agent 006",
    options: ["agent 006", "agent 007", "agent 008", "agent 005"]
  },
  {
    id: 23,
    question: "\"Sneak attack by Roger\" bio je podmukli Federerov napad poluvolejem na protivnikov:",
    correct: "drop shot",
    options: ["drop shot", "drugi servis", "return", "lob"]
  },
  {
    id: 24,
    question: "Čiji se broj izgovara tri puta pri dozivanju kokoši?",
    correct: "Ludolfov broj",
    options: ["Avogadrov broj", "Eulerov broj", "Ludolfov broj", "Pi"]
  },
  {
    id: 25,
    question: "Koja su riječ nastalu u 1830-ima, među prvima upotrebljavali astronomi Mädler i Herschel?",
    correct: "fotografija",
    options: ["fotografija", "holografija", "kriptografija", "mikrografija"]
  },
  {
    id: 26,
    question: "Maškovića Han, najzapadnija osmanska svjetovna građevina u Europi, smješten je nekoliko kilometara:",
    correct: "od Karlobaga",
    options: ["od Karlobaga", "od Pakoštana", "od Tučepa", "od Zadra"]
  },
  {
    id: 27,
    question: "U kojem je primjeru prisutan pleonazam?",
    correct: "sići dolje",
    options: ["sići brzo", "sići danas", "sići dolje", "sići gore"]
  }
];

export default questions;
