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