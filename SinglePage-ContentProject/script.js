const SwitchBtn = document.querySelectorAll('.btn');
const article = document.querySelectorAll('.content');
const fullContent = document.querySelector(".article");

fullContent.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        SwitchBtn.forEach(function (button) {
            button.classList.remove("active");
            e.target.classList.add("active");
        })
        article.forEach(function(articles){
            articles.classList.remove("active")
        })
        const element = document.getElementById(id);
        element.classList.add("active")
    }
});
