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
let btname = document.querySelector("strong");
let pr = document.querySelector(".text p");
let link = document.querySelector(".text a");
let lang = document.querySelector(".lang");

langBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id == "en") {
      lang.style.setProperty("--trans", "-100%");
      quote.innerHTML =
        "Travel - Leaves you speechless, then turns you into a storyteller";
      btname.innerHTML = "Ibn Battuta";
      pr.innerHTML =
        "Abu Abdullah Muhammad ibn Battutah (Arabic: أَبُو عَبْد الله مُحَمَّد اِبْن عَبْد الله اللَّوَاتِيّ الطَّنْجِيّ اِبْن بَطُّوطَة, romanized: ʾAbū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Lawātiyy aṭ-Ṭanjiyy ibn Baṭṭūṭah, /ˌɪbən bætˈtuːtɑː/; 24 February 1304 – 1368/1369),[a] commonly known as Ibn Battuta, was a Berber Maghrebi[7] scholar and explorer who travelled extensively in the lands of Afro-Eurasia, largely in the Muslim world. He travelled more than any other explorer in pre-modern history, totalling around 117,000 km (73,000 mi), surpassing Zheng He with about 50,000 km (31,000 mi) and Marco Polo with 24,000 km (15,000 mi).[8][9][10] Over a period of thirty years, Ibn Battuta visited most of southern Eurasia, including Central Asia, South Asia, Southeast Asia, China, and the Iberian Peninsula. Near the end of his life, he dictated an account of his journeys, titled A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Travelling, but commonly known as The Rihla.";
      link.innerHTML = "more...";
      document.body.style.alignContent = "left";
      link.href = "https://en.wikipedia.org/wiki/Ibn_Battuta";
    } else {
      window.location.reload();
    }
  });
});
