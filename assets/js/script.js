// To get panels to slide open and close //
const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=> {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');  
    });
    
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
};

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
    clicks +=1;
    if(clicks === pText.length) {
        textBox.innerHTML = `<p><span>Fun Fact: </span>Haikyū!! creator Furudate Haruichi was a middle blocker in Junior High school and High School. His favorite players are Aoyama Shigeru  and Yoneyama Yuta. He was passionate about playing volleyball but ultimately chose to follow his other passion - drawing. </p>
        <button class="btn reload-info" onclick="location.reload()"><i class="fas fa-redo"></i> Reload</button>`;
    };
};

// Karasuno Panel to load player cards // 
const karasunoBtn = document.querySelector('.click-kara');
const karaTextBox = document.getElementById('text-kara');

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
    <h5>Vice Captain/Setter/Pinch Server</h5>
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
    karaTextBox.innerHTML = karasunohtml[clicks];
    clicks +=1;
    if(clicks == karasunohtml.length + 1) {
        karaTextBox.classList.add('teamTextBox');
        karaTextBox.innerHTML = `<p>Karasuno is a high school located in Miyagi Prefecture. In the old days under the guidance of Coach Ukai Ikkei, Karasuno represented the prefecture at the Spring High nationals nine times. For five years, the team failed to make it pass any prelimary, earning them the nicknames "The Flightless Crows". </p>
        <a href="./karasuno.html" class="pageBtn" style="background-color:black; color:var(--karasuno-color);">Karasuno Quiz</a>`;
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
    <h5>Ace/Wing Spike/Outside Hitter</h5>
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
    <h5>Wing Spike/Outside Hitter</h5>
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
    <h5>Middle Block</h5>
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
    nekoTextBox.innerHTML = nekomahtml[clicks];
    clicks +=1;
    if(clicks === nekomahtml.length + 1) {
        nekoTextBox.classList.add('teamTextBox');
        nekoTextBox.innerHTML = `<p>Nekoma is a high school located in Tokyo Prefecture, and are a long time rival of Karasuno. In the old days, under the guidance of Coach Nekomata and the old Karasuno Coach Ukai Ikkei, when these two teams would meet up in official matches, it was known as Battle of the Dumpster. Nekoma is famous for their all-round defense, of which Karasuno has never been able to penetrate.</p>
        <a href="./nekoma.html" class="pageBtn" style="background-color: var(--nekoma-color); color: white;">Nekoma Quiz</a>`;
        resetNekoma();
    }
};

function resetNekoma() {
    document.querySelector('.click-neko').setAttribute("onclick", "location.reload()");
    document.querySelector('.click-neko').innerHTML = `<i class="fas fa-redo"></i> Reload`;
};

// Datekogyo Panel to load player cards //
// Aoba Josai Panel to load player cards //
// Shiratorizawa Panel to load player cards //
// Fukurodani Panel to load player cards //