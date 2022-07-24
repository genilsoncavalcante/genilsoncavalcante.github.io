// MENU
const btnMobile = document.getElementById("btn-mobile");
const close = document.querySelector(".header__list");
const nav = document.getElementById("nav");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

function closeMenu() {
    nav.classList.remove("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
close.addEventListener("click", closeMenu);
close.addEventListener("touchstart", closeMenu);





// MODAL
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add("mostrar");
        modal.addEventListener("click", (e) => {
            if (e.target.id == modalID || e.target.className == "fechar") {
                modal.classList.remove("mostrar");
            }
        });
    }
}

const googleGlass = document.querySelector("#img-google-glass");
googleGlass.addEventListener("click", ()  => {
    iniciaModal("modal-google-glass");
})

const hotelParaiso = document.querySelector("#img-hotel-paraiso");
hotelParaiso.addEventListener("click", ()  => {
    iniciaModal("modal-hotel-paraiso");
})

const saudeJovem = document.querySelector("#img-saude-jovem");
saudeJovem.addEventListener("click", ()  => {
    iniciaModal("modal-saude-jovem");
})





// SLIDES
class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach(item => item.classList.remove("active"));
        this.items[index].classList.add("active");

        this.thumbItems.forEach(item => item.classList.remove("active"));
        this.thumbItems[index].classList.add("active");
        this.autoSlide();
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }
    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    addNavegation() {
        const prevBtn = this.slide.querySelector(".slide-prev");
        const nextBtn = this.slide.querySelector(".slide-next");
        prevBtn.addEventListener("click", this.prev);
        nextBtn.addEventListener("click", this.next);
    }

    addThumbItems() {
        this.items.forEach(() => {
            this.thumb.innerHTML += `<span></span>`;
        });
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.items = this.slide.querySelectorAll(".slide-items > *");
        this.thumb = this.slide.querySelector(".slide-thumb");
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavegation();
    }
}

new SlideStories("slide");





// DARK MODE
const buttonDarkMode = document.querySelector(".contato__button-dark-mode");
const body = document.querySelector("body");
const header = document.querySelector("#header");
const inicio = document.querySelector("#inicio");
const sobreMim = document.querySelector("#sobre-mim");
const trajetoria = document.querySelector("#trajetoria");
const projetos = document.querySelector("#projetos");
const skills = document.querySelector("#skills");
const certificados = document.querySelector("#certificados");
const contato = document.querySelector("#contato");
const modal01 = document.querySelector(".modal-01");
const modal02 = document.querySelector(".modal-02");
const modal03 = document.querySelector(".modal-03");
const soundClick = new Audio("../sound/mouse-click.mp3");
const soundTransition = new Audio("../sound/transition.mp3");

let clicks = 0;

buttonDarkMode.addEventListener("click", () => {
    clicks += 1;
    soundClick.play();
    console.log(clicks);

    if ((clicks / 10) == 1) {
        body.classList.add("dark-mode");
        header.classList.add("dark-mode");
        inicio.classList.add("dark-mode");
        sobreMim.classList.add("dark-mode");
        trajetoria.classList.add("dark-mode");
        projetos.classList.add("dark-mode");
        skills.classList.add("dark-mode");
        certificados.classList.add("dark-mode");
        contato.classList.add("dark-mode");
        modal01.classList.add("dark-mode");
        modal02.classList.add("dark-mode");
        modal03.classList.add("dark-mode");

        // redirect
        setTimeout(function() {
            window.location.href = "#inicio";
            soundTransition.play();
        }, 500);
        
    }

});