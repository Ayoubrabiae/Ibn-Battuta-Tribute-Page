// Change landing background
let landing = document.querySelector(".landing");

const changeBg = () => {
  let randomNum = Math.ceil(Math.random() * 6);
  landing.style.backgroundImage = `url("../media/bg${randomNum}.jpg")`;
};

setInterval(changeBg, 10000);

// Change language
let langBtns = document.querySelectorAll(".lang span");
let quote = document.querySelector("q");
let quoteOwner = document.querySelector("strong");
let aboutText = document.querySelector(".text p");
let readMoreBtn = document.querySelector(".text a");
let lang = document.querySelector(".lang");

const translations = {
  hero_section_quote: {
    ar: "السفر – يتركك عاجزًا عن الكلام ، ثم يحولك إلى راوي قصص",
    en: "Travel - Leaves you speechless, then turns you into a storyteller",
  },
  quote_owner: {
    ar: "ابن بطوطة",
    en: "Ibn Battuta",
  },
  about_text: {
    ar: "أَبُو عَبْدِ اللّٰهِ مُحَمَّدُ بْنُ عَبْدِ ٱللّٰهِ بْنِ مُحَمَّدٍ ٱللَّوَاتِيّ ٱلطَّنْجِيّ المعروف بابْنِ بَطُّوطَةَ، ولد في (24 فبراير 1304 - 1377م بطنجة) (703 - 779هـ) هو رحالة ومؤرخ وقاض من قبيلة لواتة، لقب بـأمير الرحالين المسلمين. خرج من طنجة سنة 725 هـ فطاف بلاد المغرب العربي ومصر والحبشة والشام والحجاز وتهامة ونجد والعراق وبلاد فارس واليمن وعمان والبحرين وتركستان وما وراء النهر وبعض الهند والصين وجاوة وبلاد التتار وأواسط أفريقيا والأندلس. واتصل بكثير من الملوك والأمراء فمدحهم - وكان ينظم الشعر - واستعان بهباتهم على أسفاره، واللقب «ابن بطّوطة» هو لقب أطلقه الفَرَنجة على محمد بن عبد الله الطنجي، وتابَعَهم أكثر الناس.",
    en: "Abu Abdullah Muhammad ibn Battutah (Arabic: أَبُو عَبْد الله مُحَمَّد اِبْن عَبْد الله اللَّوَاتِيّ الطَّنْجِيّ اِبْن بَطُّوطَة, romanized: ʾAbū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Lawātiyy aṭ-Ṭanjiyy ibn Baṭṭūṭah, /ˌɪbən bætˈtuːtɑː/; 24 February 1304 – 1368/1369),[a] commonly known as Ibn Battuta, was a Berber Maghrebi[7] scholar and explorer who travelled extensively in the lands of Afro-Eurasia, largely in the Muslim world. He travelled more than any other explorer in pre-modern history, totalling around 117,000 km (73,000 mi), surpassing Zheng He with about 50,000 km (31,000 mi) and Marco Polo with 24,000 km (15,000 mi).[8][9][10] Over a period of thirty years, Ibn Battuta visited most of southern Eurasia, including Central Asia, South Asia, Southeast Asia, China, and the Iberian Peninsula. Near the end of his life, he dictated an account of his journeys, titled A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Travelling, but commonly known as The Rihla.",
  },
  read_more_btn: {
    ar: "المزيد",
    en: "more...",
  },
};

langBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id == "en") {
      lang.style.setProperty("--trans", "-100%");
      readMoreBtn.href = "https://en.wikipedia.org/wiki/Ibn_Battuta";
    } else {
      lang.style.setProperty("--trans", "0");
      readMoreBtn.href =
        "https://en.wikipedia.org/wiki/https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%A8%D8%B7%D9%88%D8%B7%D8%A9";
    }
    quote.textContent = translations.hero_section_quote[e.id];
    quoteOwner.textContent = translations.quote_owner[e.id];
    aboutText.textContent = translations.about_text[e.id];
    readMoreBtn.textContent = translations.read_more_btn[e.id];
  });
});
