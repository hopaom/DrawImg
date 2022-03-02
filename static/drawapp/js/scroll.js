//왼쪽에서 오른쪽
const left_targets = document.querySelectorAll(".fade-left");
const options = {root: null, threshold: 0.1, rootMargin: "-0px"};
const left_observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-left-in");
        } else {
            container.classList.remove("fade-left-in");
        }
    });
}, options);
left_targets.forEach((target) => {
    left_observer.observe(target);
});

//오른쪽에서 왼쪽
const right_targets = document.querySelectorAll(".fade-right");
const right_observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-right-in");
        } else {
            container.classList.remove("fade-right-in");
        }
    });
}, options);
right_targets.forEach((target) => {
    right_observer.observe(target);
});

//아래에서 위로
const up_targets = document.querySelectorAll(".fade-up");
const up_observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-up-in");
        } else {
            container.classList.remove("fade-up-in");
        }
    });
}, options);
up_targets.forEach((target) => {
    up_observer.observe(target);
});
