// awards page tabs
// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: "profile",
        triggerEl: document.querySelector("#profile-tab-example"),
        targetEl: document.querySelector("#profile-example"),
    },
    {
        id: "dashboard",
        triggerEl: document.querySelector("#dashboard-tab-example"),
        targetEl: document.querySelector("#dashboard-example"),
    },
];

// options with default values
const arrowEl = document.querySelector(".arrow_botton");
const options = {
    defaultTabId: "profile",
    activeClasses: "bg-[#0B0D4E] text-white",
    inactiveClasses: "bg-[#E7E7ED] text-[#0B0D4E]",
    onShow: () => {
        // arrowEl.classList.remove("hidden");
    },
};

tabElements.forEach((ele) => {
    ele.targetEl != null ? (tabs = new Tabs(tabElements, options)) : null;
});

//date counter
const date_of_event = document.querySelector(".days");
if (date_of_event != null) {
    // console.log(date_of_event.dataset.date);
    // console.log(date_of_event.dataset.year);
    // Set the date we're counting down to
    let countDownDate = new Date(
        `${date_of_event.dataset.date}, ${date_of_event.dataset.year} 15:37:25`
    ).getTime();
    // let countDownDate = new Date("Jan 27, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        date_of_event.innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}
// timeline nav highlighter
$(document).ready(function () {
    $("#nav").onePageNav();
});

$(".testimonial_slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    customPaging: function (slider, i) {
        i++;
        var thumb = $(slider.$slides[i]).data();
        return '<a class="dot">' + i + "</a>";
    },
});

$(".sponsor_slider").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: false,
});

$(".past_events").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
});

// bring to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $(".scrolltop:hidden").stop(true, true).fadeIn();
    } else {
        $(".scrolltop").stop(true, true).fadeOut();
    }
});
$(function () {
    $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
        return false;
    });
});
