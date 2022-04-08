const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    })
    // Skill
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.65,
    fill: {
        gradient: ['#ff9240']
    }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.470
});
$(".react .bar").circleProgress({
    value: 0.10
});

// education

const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active')
    }
});

// scroll