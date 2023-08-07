

window.addEventListener('load', () => {


    handleSlider = () => {
        //slide show
        const slideshow = document.querySelector('.slideshow');
        const slideMain = document.querySelector('.slideshow__main');
        const slideItems = document.querySelectorAll('.slideshow__item');
        const slideDots = document.querySelectorAll('.slide__dot-item');
        const slidePre = document.querySelector('.slideshow__btn--pre');
        const slideNext = document.querySelector('.slideshow__btn--next');
        const slideItemWidth = slideItems[0].offsetWidth;
        const slideLength = slideItems.length;
        let translateX = 0;
        let slideIndex = 0;

        slideNext.addEventListener('click', () => {
            handleChangeSlide(1);
        })

        slidePre.addEventListener('click', () => {
            handleChangeSlide(-1);
        })

        setInterval(() => {
            handleChangeSlide(1);
        }, 5000)

        handleChangeSlide = (direction) => {
            if (direction === 1) {
                slideIndex++;
                console.log(slideIndex);
                if (slideIndex >= slideLength) {
                    translateX = slideItemWidth;
                    slideIndex = 0;
                }
    
                translateX = translateX - slideItemWidth;
                slideMain.style.transform = `translateX(${translateX}px)`;
    
    
            }
            else if (direction === -1) {
                slideIndex--;
                console.log(slideIndex);
                if (slideIndex <= 0) {
                    translateX = -(slideItemWidth) * slideLength;
                    slideIndex = slideLength;
                }
                translateX = translateX + slideItemWidth;
                slideMain.style.transform = `translateX(${translateX}px)`;
            }
        }
    }

    // ----------------------------------------------------------------
    // Show search input pc
    showSearchInput = () => {
        const iconSearch = document.getElementById("iconSearch");
        if (iconSearch) {
            iconSearch.addEventListener("click", function () {
                const liElement = iconSearch.closest("li");
                if (liElement) {
                    liElement.classList.toggle("active");
                }
                const inputElement = liElement.querySelector("input");
                if (inputElement) {
                    inputElement.focus();
                }
            });
        }
    }

    // Test
    const inputEmail = document.getElementById("newsletter__email-input");
    const labelEmail = document.querySelector("label[for='newsletter__email-input']");
    const formContact = document.querySelector(".contact-form");

    if (formContact) {
        inputEmail.addEventListener("focus", () => {
            inputEmail.classList.add("focus");
        })

        inputEmail.addEventListener("blur", () => {
            inputEmail.classList.remove("focus");
        })

        inputEmail.addEventListener("input", (e) => {
            labelEmail.style.display = "none";
            if (e.target.value === "") {
                labelEmail.style.display = "block";
            }
        })
    }


    // Show menu mobile
    const btnShowMenu = document.querySelector("#btnShowMenu");
    const btnShowCart = document.querySelector("#btnShowCart");
    const modalMenu = document.querySelector(".modal-menu");
    const modalCart = document.querySelector(".modal-cart");
    const modalOverlay = document.querySelector(".js-modal-overlay");

    handleShowMenu = () => {
        if (btnShowMenu) {
            btnShowMenu.addEventListener('click', () => {
                if (modalMenu) {
                    modalMenu.classList.toggle("active");
                    modalOverlay.classList.toggle("active");
                }
            });
        }
    }

    handleShowCart = () => {
        //Show cart
        if (btnShowCart) {
            btnShowCart.addEventListener('click', () => {
                if (modalCart) {
                    modalCart.classList.toggle("active");
                    modalOverlay.classList.toggle("active");
                }
            });
        }
    }

    handleHiddenCartAndMenu = () => {
        const listModalHidden = document.querySelectorAll(".js-modal-hidden");
        closeModal = () => {
            if (modalMenu && modalOverlay && modalCart) {
                modalMenu.classList.remove("active");
                modalCart.classList.remove("active");
                modalOverlay.classList.remove("active");
            }
        }

        if (listModalHidden) {
            Array.from(listModalHidden).forEach((element) => {
                element.addEventListener('click', () => {
                    closeModal();
                });
            });
        }
    }

    // Show submenu
    handleShowSubmenu = () => {
        const btnShowSubmenus = document.querySelectorAll(".nav-mobile__item.has-submenu");

        if (btnShowSubmenus) {
            Array.from(btnShowSubmenus).forEach((element) => {
                element.querySelector(".btn__submenu").addEventListener('click', (e) => {
                    e.preventDefault();
                    const submenu = element.querySelector('.sub-menu')
                    element.querySelector(".has-submenu__wrap").classList.toggle("active");
                    if (submenu) {
                        submenu.classList.toggle('active');
                    }
                });
            });
        }

        const btnShowSubSubmenus = document.querySelectorAll(".has-sub-submenu");

        if (btnShowSubSubmenus) {
            Array.from(btnShowSubSubmenus).forEach((element) => {
                element.querySelector(".btn__submenu").addEventListener('click', (e) => {
                    e.preventDefault();

                    const submenu = element.querySelector('.sub-menu')
                    element.querySelector(".has-submenu__wrap").classList.toggle("active");
                    if (submenu) {
                        submenu.classList.toggle('active');
                    }
                });
            });
        }
    }

    start = () => {
        showSearchInput();
        handleShowMenu();
        handleShowCart();
        handleHiddenCartAndMenu();
        handleShowSubmenu();
        handleSlider();
    }

    start();
});