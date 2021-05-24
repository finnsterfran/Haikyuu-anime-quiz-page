// To get panels to slide open and close //
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Information // 

let pText = [
    "What he lacks in height, Hinata Shōyō makes up with speed and athleticism. Pairing up with the eccentric first-year genuis setter Kageyama Tobio, the two form Karasuno's weird duo, known for their super quicks at almost impossible positions. The weird duo's simple minded determination to just play the best volleyball they can inspires the Karasuno team to push forward to regain their former glory.",

    "Click on the panels to find out more about Karasuno and the other major teams they have gone up against. Clicking on the button on each team panel will take you to the team page where you can access line-up player information and try out the quiz!",
];

const textBox = document.getElementById('info');
const paraText = document.querySelector('.info-text');
const changeBtn = document.querySelector('.read');

let clicks = 0;

changeBtn.onclick = function buttonClicked() {
    paraText.innerHTML = pText[clicks];
    clicks += 1;
    if (clicks === pText.length) {
        textBox.innerHTML = `<p><span>Fun Fact: </span>Haikyū!! creator Furudate Haruichi was a middle blocker in Junior High school and High School. His favorite players are Aoyama Shigeru  and Yoneyama Yuta. He was passionate about playing volleyball but ultimately chose to follow his other passion - drawing. </p>
        <button class="btn reload-info" onclick="location.reload()"><i class="fas fa-redo"></i> Reload</button>`;
    };
};

// Karasuno Panel to load player cards // 
const karasunoBtn = document.querySelector('.click-kara');
const karaTextBox = document.getElementById('text-kara');

let karaclicks = 0;

let karasunohtml = [

    `<div class="card-container">
    <img src="./assets/images/kara-img/daichi-small.jpg">
    <h4>Sawamura Daichi</h4>
    <h5>Captain/Opposite Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 1</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/sugawara-small.jpg">
    <h4>Sugawara Kōshi</h4>
    <h5>Vice Captain/Setter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 2</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/asahi-small.jpg">
    <h4>Azumane Asahi</h4>
    <h5>Ace/Outside Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 3</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/nishinoya-small.jpg">
    <h4>Nishinoya Yū</h4>
    <h5>Libero</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 4</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/tanaka-small.jpg">
    <h4>Tanaka Ryūnosuke</h4>
    <h5>Outside Hitter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 5</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/ennoshita-small.jpg">
    <h4>Ennoshita Chikara</h4>
    <h5>Outside Hitter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 6</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/kinoshita-small.jpg">
    <h4>Kinoshita Hisashi</h4>
    <h5>Wing Spiker/Pinch Server</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 7</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/narita-small.jpg">
    <h4>Narita Kazuhito</h4>
    <h5>Middle Blocker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 8</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/kageyama-small.jpg">
    <h4>Kageyama Tobio</h4>
    <h5>Setter</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 9</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/hinata-small.jpg">
    <h4>Hinata Shōyō</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 10</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/tsukishima-small.jpg">
    <h4>Tsukishima Kei</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 11</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/kara-img/yamaguchi-small.jpg">
    <h4>Yamaguchi Tadashi</h4>
    <h5>Middle Blocker/Pinch Server</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 12</h5></div>`,

];

karasunoBtn.onclick = function buttonClicked() {
    karaTextBox.innerHTML = karasunohtml[karaclicks];
    karaclicks += 1;
    if (karaclicks === karasunohtml.length + 1) {
        karaTextBox.classList.add('teamTextBox');
        karaTextBox.innerHTML = `<p>Karasuno is a high school located in Miyagi Prefecture. In the old days under the guidance of Coach Ukai Ikkei, Karasuno represented the prefecture at the Spring High nationals nine times. For five years, the team failed to make it pass any prelimary, earning them the nicknames "The Flightless Crows". </p>
        <a href="./karasuno.html" class="pageBtn" style="background-color:black; color: #ff8303;">Karasuno Quiz</a>`;
        resetKarasuno();
    }
};

function resetKarasuno() {
    document.querySelector('.click-kara').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-kara').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};

// Nekoma Panel to load player cards //
const nekomaBtn = document.querySelector('.click-neko');
const nekoTextBox = document.getElementById('text-neko');

let nekoclicks = 0;

const nekomahtml = [
    `<div class="card-container">
    <img src="./assets/images/neko-img/kuroo-small.jpg">
    <h4>Kuroo Tetsurō</h4>
    <h5>Captain/Middle Blocker</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 1</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/kai-small.jpg">
    <h4>Kai Nobuyuki</h4>
    <h5>Vice Captain/Opposite Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 2</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/yaku-small.jpg">
    <h4>Yaku Morisuke</h4>
    <h5>Libero</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 3</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/yamamoto-small.jpg">
    <h4>Yamamoto Taketora</h4>
    <h5>Ace/Wing Spiker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 4</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/kenma-small.jpg">
    <h4>Kozume Kenma</h4>
    <h5>Setter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 5</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/fukunaga-small.jpg">
    <h4>Fukunaga Shōhei</h4>
    <h5>Wing Spiker/Outside Hitter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 6</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/inuoka-small.jpg">
    <h4>Inouka Sō</h4>
    <h5>Wing Spiker/Opposite Hitter</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 7</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/lev-small.jpg">
    <h4>Haiba Lev</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 11</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/neko-img/shibayama-small.jpg">
    <h4>Shibayama Yūki</h4>
    <h5>Libero</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 12</h5></div>`,

];

nekomaBtn.onclick = function buttonClicked() {
    nekoTextBox.innerHTML = nekomahtml[nekoclicks];
    nekoclicks += 1;
    if (nekoclicks === nekomahtml.length + 1) {
        nekoTextBox.classList.add('teamTextBox');
        nekoTextBox.innerHTML = `<p>Nekoma is a high school located in Tokyo Prefecture, and are a long time rival of Karasuno. In the old days, under the guidance of Coach Nekomata and the old Karasuno Coach Ukai Ikkei, when these two teams would meet up in official matches, it was known as Battle of the Dumpster. Nekoma is famous for their all-round defense, of which Karasuno has never been able to penetrate.</p>
        <a href="./nekoma.html" class="pageBtn" style="background-color: #EC4646; color: black;">Nekoma Quiz</a>`;
        resetNekoma();
    }
};

function resetNekoma() {
    document.querySelector('.click-neko').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-neko').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};

// Datekogyo Panel to load player cards //
const datekogyoBtn = document.querySelector('.click-date');
const dateTextBox = document.getElementById('text-date');

let dateclicks = 0; 
const datekogyohtml = [
    `<div class="card-container">
    <img src="./assets/images/date-img/aone-small.jpg">
    <h4>Aone Takanobu</h4>
    <h5>Middle Blocker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 1</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/Futakuchi.jpg">
    <h4>Futakuchi Kenji</h4>
    <h5>Captain/Ace/Outside Hitter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 2</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/obara-small.jpg">
    <h4>Obara Yutaka</h4>
    <h5>Wing Spiker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 3</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/koganegawa-small.jpg">
    <h4>Koganegawa Kanji</h4>
    <h5>Setter</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 7</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/onagawa-small.jpg">
    <h4>Onagawa Tarō</h4>
    <h5>Wing Spiker/Opposite Hitter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 8</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/fukiage-small.jpg">
    <h4>Fukiage Jingo</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 11</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/date-img/sakunami-small.jpg">
    <h4>Sakunami Kōsuke</h4>
    <h5>Libero</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 13</h5></div>`,
];

datekogyoBtn.onclick = function buttonClicked() {
    dateTextBox.innerHTML = datekogyohtml[dateclicks];
    dateclicks += 1;
    if (dateclicks === datekogyohtml.length + 1) {
        dateTextBox.classList.add('teamTextBox');
        dateTextBox.innerHTML = `<p>Datekōgyō is a highschool in the Miyagi prefecture and are known for their almost impenetrable three men bunch-shift block and exceptionally tall players. The team has the highest blocking rate in the prefecture, completely shutting out Karasuno in the previous Interhigh Preliminaries.</p>
        <a href="./datekogyo.html" class="pageBtn" style="background-color: #34656D; color: white;">Datekōgyō Quiz</a>`;
        resetDatekogyo();
    }
};

function resetDatekogyo() {
    document.querySelector('.click-date').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-date').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};

// Aoba Josai Panel to load player cards //
const aobajosaiBtn = document.querySelector('.click-aoba');
const aobaTextBox = document.getElementById('text-aoba');

let aobaclicks = 0;

const aobajosaihtml = [

    `<div class="card-container">
    <img src="./assets/images/aoba-img/oikawa-small.jpg">
    <h4>Oikawa Tōru</h4>
    <h5>Captain/Setter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 1</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/matsukawa-small.jpg">
    <h4>Matsukawa Issei</h4>
    <h5>Middle Blocker</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 2</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/hanamaki-small.jpg">
    <h4>Hanamaki Takahiro</h4>
    <h5>Wing Spiker/Outside Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 3</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/iwachan-small.jpg">
    <h4>Iwaizumi Hajime</h4>
    <h5>Vice Captain/Wing Spiker/Ace</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 4</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/yahaba-small.jpg">
    <h4>Yahaba Shigeru</h4>
    <h5>Setter/Pinch Serverr</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 6</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/watari-small.jpg">
    <h4>Watari Shinji</h4>
    <h5>Libero</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 7</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/kindaichi-small.jpg">
    <h4>Kindaichi Yūtarō</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 12</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/kunimi-small.jpg">
    <h4>Kunimi Akira</h4>
    <h5>Wing Spiker/Opposite Hitter</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 13</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/aoba-img/kyotani-small.jpg">
    <h4>Kyōtani Kentarō</h4>
    <h5>Wing Spiker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 16</h5></div>`,
];

aobajosaiBtn.onclick = function buttonClicked() {
    aobaTextBox.innerHTML = aobajosaihtml[aobaclicks];
    aobaclicks += 1;
    if (aobaclicks === aobajosaihtml.length + 1) {
        aobaTextBox.classList.add('teamTextBox');
        aobaTextBox.innerHTML = `<p>Aoba Josai, also known as Seijoh, is a highschool in Miyagi prefecture. The volleyball team is ranked top four in the prefecture, most of the team players graduated from Kitagawa Daiichi Junior High. Oikawa Tōru is the team's setter but can play several different positions as well. He is the most well-rounded player in Haikyū.</p>
        <a href="./aobajosai.html" class="pageBtn" style="background-color: #A8E6CF; color: black;">Aoba Jōsai Quiz</a>`;
        resetAobajosai();
    }
};

function resetAobajosai() {
    document.querySelector('.click-aoba').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-aoba').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};




// Shiratorizawa Panel to load player cards //
const shiratorizawaBtn = document.querySelector('.click-shira');
const shiraTextBox = document.getElementById('text-shira');

let shiraclicks = 0;

const shiratorizawahtml = [
    `<div class="card-container">
    <img src="./assets/images/shira-img/ushijima-small.jpg">
    <h4>Ushijima Wakatoshi</h4>
    <h5>Ace/Captain/Opposite Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 1</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/ohira-small.jpg">
    <h4>Ōhira Reon</h4>
    <h5>Outside Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 4</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/tendo-small.jpg">
    <h4>Tendō Satori</h4>
    <h5>Middle Blocker</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 5</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/goshiki-small.jpg">
    <h4>Goshiki Tsutomu</h4>
    <h5>Outside Hitter</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 8</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/shirabu-small.jpg">
    <h4>Shirabu Kenjirō</h4>
    <h5>Setter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 10</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/kawanishi-small.jpg">
    <h4>Kawanishi Taichi</h4>
    <h5>Middle Blocker</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 12</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/shira-img/yamagata-small.jpg">
    <h4>Yamagata Hayato</h4>
    <h5>Libero</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 14</h5></div>`,
];

shiratorizawaBtn.onclick = function buttonClicked() {
    shiraTextBox.innerHTML = shiratorizawahtml[shiraclicks];
    shiraclicks += 1;
    if (shiraclicks === shiratorizawahtml.length + 1) {
        shiraTextBox.classList.add('teamTextBox');
        shiraTextBox.innerHTML = `<p>Shiratorizawa has the most powerful volleyball team in the Miyagi prefecture and is ranked in the top 8 in all Japan. The team's strategy is to support the Ace, Ushijima Wakatoshi, who is nationally ranked #3.</p>
        <a href="./shiratorizawa.html" class="pageBtn" style="background-color: #95389E; color: white;">Shiratorizawa Quiz</a>`;
        resetShiratorizawa();
    }
};

function resetShiratorizawa() {
    document.querySelector('.click-shira').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-shira').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};

// Fukurodani Panel to load player cards //

const fukurodaniBtn = document.querySelector('.click-fuku');
const fukuTextBox = document.getElementById('text-fuku');

let fukuclicks = 0;

const fukurodanihtml = [

    `<div class="card-container">
    <img src="./assets/images/fuku-img/washio-small.jpg">
    <h4>Washio Tatsuki</h4>
    <h5>Middle Blocker</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 2</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/sarukui-small.jpg">
    <h4>Sarukui Yamato</h4>
    <h5>Outside Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 3</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/bokuto-small.jpg">
    <h4>Bokuto Kōtarō</h4>
    <h5>Ace/Captain/Outside Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 4</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/akaashi-small.jpg">
    <h4>Akaashi Keiji</h4>
    <h5>Vice Captain/Setter</h5>
    <h5>Second Year</h5>
    <h5>Jersey Number 5</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/konoha-small.jpg">
    <h4>Konoha Akinori</h4>
    <h5>Opposite Hitter</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 7</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/komi-small.jpg">
    <h4>Komi Haruki</h4>
    <h5>Libero</h5>
    <h5>Third Year</h5>
    <h5>Jersey Number 11</h5></div>`,

    `<div class="card-container">
    <img src="./assets/images/fuku-img/onaga-small.jpg">
    <h4>Onaga Wataru</h4>
    <h5>Middle Blocker</h5>
    <h5>First Year</h5>
    <h5>Jersey Number 12</h5></div>`,
];

fukurodaniBtn.onclick = function buttonClicked() {
    fukuTextBox.innerHTML = fukurodanihtml[fukuclicks];
    fukuclicks += 1;
    if (fukuclicks === fukurodanihtml.length + 1) {
        fukuTextBox.classList.add('teamTextBox');
        fukuTextBox.innerHTML = `<p>Fukurōdani is a highschool in the Tokyo prefecture and the volleyball team ranks top four in that region. The volleyball team holds practice matches and summer training camps with the other highschool volleyball teams in the Kanto region.</p>
        <a href="./fukurodani.html" class="pageBtn" style="background-color: #31326F; color: white;">Fukurōdani Quiz</a>`;
        resetFukurodani();
    }
};

function resetFukurodani() {
    document.querySelector('.click-fuku').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-fuku').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};