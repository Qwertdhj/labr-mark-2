$('.wrapper').each(function() {
    var $slider = $(this);
    var numberOfSlides = $slider.find('.panel').length;
    var isScrolling = false;
    
    $slider.find('.panel:eq(0)').addClass('_active');
    $slider.find('.nav-dot:eq(0)').addClass('active');
    
    var $activeSlide = $slider.find('.panel._active');
    var $nextBtn = $slider.find('.next-btn');
    var $prevBtn = $slider.find('.prev-btn');
    
    $('.nav-dot').on('click', function() {
        var slideToGo = $(this).data('slide');
        if (!isScrolling) {
            goToSlide(slideToGo);
            isScrolling = true;
            setTimeout(function() {
                isScrolling = false;
            }, 2000);
        }
    });
    
    $slider.on('slide.changed', function() {
        console.log('slide changed !');
        $('.nav-dot').removeClass('active');
        var $activeDot = $('.nav-dot[data-slide="' + $('.panel._active').data('slide') + '"]');
        console.log();
        $activeDot.addClass('active');
    });
    
    $nextBtn.on('click', function(event) {
        if (!isScrolling) {
            nextSlide();
            isScrolling = true;
            setTimeout(function() {
                isScrolling = false;
            }, 2000);
        }
    });
    
    $prevBtn.on('click', function(event) {
        if (!isScrolling) {
            prevSlide();
            isScrolling = true;
            setTimeout(function() {
                isScrolling = false;
            }, 2000);
        }
    });
    
    $slider.on('wheel', function(event) { 
        if (event.originalEvent.deltaY > 0) {
            if (!isScrolling) {
                nextSlide();
                isScrolling = true;
                setTimeout(function() {
                    isScrolling = false;
                }, 2000);
            }
        } else {
            if (!isScrolling) {
                prevSlide();
                isScrolling = true;
                setTimeout(function() {
                    isScrolling = false;
                }, 2000);
            }
        }
    });


    const container = document.querySelector(".container");
const template2 = document.querySelector(".box");
const text = document.getElementById("text");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedBox = template2.cloneNode(true);
    container.appendChild(clonedBox);
}

let isBoxVisible = false;

text.addEventListener("click", function() {
    container.style.visibility = "visible";
    if (!isBoxVisible) {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.visibility = "visible";
            setTimeout(() => {
                box.style.top = "0";
            }, 100);
        });
        isBoxVisible = true;

        // При открытии меняем стиль кнопки на display: block
        closeButton.style.display = "block"; 
    } else {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.top = "-11250px";
            setTimeout(() => {
                box.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isBoxVisible = false;

        // При закрытии скрываем кнопку
        closeButton.style.display = "none";
    }
});
const closeButton = document.createElement("button");

closeButton.classList.add("close-button");
closeButton.style.display = "none";
container.appendChild(closeButton);
closeButton.addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.top = "-11250px";
        setTimeout(() => {
            box.style.visibility = "hidden";
        }, 500);
    });
    isBoxVisible = false;

    closeButton.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
// box2
const container2 = document.querySelector(".container2");
const template4 = document.querySelector(".box2");
const text2 = document.getElementById("text2");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox2 = template4.cloneNode(true);
    container2.appendChild(clonedbox2);
}

let isbox2Visible = false;

text2.addEventListener("click", function() {
    container2.style.visibility = "visible";
    if (!isbox2Visible) {
        const box2es = document.querySelectorAll(".box2");
        box2es.forEach(box2 => {
            box2.style.visibility = "visible";
            setTimeout(() => {
                box2.style.top = "0";
            }, 100);
        });
        isbox2Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton.style.display = "block"; 
    } else {
        const box2es = document.querySelectorAll(".box2");
        box2es.forEach(box2 => {
            box2.style.top = "-11250px";
            setTimeout(() => {
                box2.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox2Visible = false;

        // При закрытии скрываем кнопку
        closebutton.style.display = "none";
    }
});
const closebutton = document.createElement("button");
closebutton.classList.add("close-button");
closebutton.style.display = "none";
container2.appendChild(closebutton);
closebutton.addEventListener("click", function() {
    const box2es = document.querySelectorAll(".box2");
    box2es.forEach(box2 => {
        box2.style.top = "-11250px";
        setTimeout(() => {
            box2.style.visibility = "hidden";
        }, 500);
    });
    isbox2Visible = false;

    closebutton.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
// box3
const container3 = document.querySelector(".container3");
const template3 = document.querySelector(".box3");
const text3 = document.getElementById("text3");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox3 = template3.cloneNode(true);
    container3.appendChild(clonedbox3);
}

let isbox3Visible = false;

text3.addEventListener("click", function() {
    container3.style.visibility = "visible";
    if (!isbox3Visible) {
        const box3es = document.querySelectorAll(".box3");
        box3es.forEach(box3 => {
            box3.style.visibility = "visible";
            setTimeout(() => {
                box3.style.top = "0";
            }, 100);
        });
        isbox3Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton3.style.display = "block"; 
    } else {
        const box3es = document.querySelectorAll(".box3");
        box3es.forEach(box3 => {
            box3.style.top = "-11350px";
            setTimeout(() => {
                box3.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox3Visible = false;

        // При закрытии скрываем кнопку
        closebutton3.style.display = "none";
    }
});
const closebutton3 = document.createElement("button3");

closebutton3.classList.add("close-button3");
closebutton3.style.display = "none";
container3.appendChild(closebutton3);
closebutton3.addEventListener("click", function() {
    const box3es = document.querySelectorAll(".box3");
    box3es.forEach(box3 => {
        box3.style.top = "-11350px";
        setTimeout(() => {
            box3.style.visibility = "hidden";
        }, 500);
    });
    isbox3Visible = false;

    closebutton3.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
//box4
const container4 = document.querySelector(".container4");
const template = document.querySelector(".box4");
const text4 = document.getElementById("text4");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox4 = template.cloneNode(true);
    container4.appendChild(clonedbox4);
}

let isbox4Visible = false;

text4.addEventListener("click", function() {
    container4.style.visibility = "visible";
    if (!isbox4Visible) {
        const box4es = document.querySelectorAll(".box4");
        box4es.forEach(box4 => {
            box4.style.visibility = "visible";
            setTimeout(() => {
                box4.style.top = "0";
            }, 100);
        });
        isbox4Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton4.style.display = "block"; 
    } else {
        const box4es = document.querySelectorAll(".box4");
        box4es.forEach(box4 => {
            box4.style.top = "-11450px";
            setTimeout(() => {
                box4.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox4Visible = false;

        // При закрытии скрываем кнопку
        closebutton4.style.display = "none";
    }
});
const closebutton4 = document.createElement("button4");
closebutton4.classList.add("close-button4");
closebutton4.style.display = "none";
container4.appendChild(closebutton4);
closebutton4.addEventListener("click", function() {
    const box4es = document.querySelectorAll(".box4");
    box4es.forEach(box4 => {
        box4.style.top = "-11450px";
        setTimeout(() => {
            box4.style.visibility = "hidden";
        }, 500);
    });
    isbox4Visible = false;

    closebutton4.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
// box5
const container5 = document.querySelector(".container5");
const template5 = document.querySelector(".box5");
const text5 = document.getElementById("text5");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox5 = template5.cloneNode(true);
    container5.appendChild(clonedbox5);
}

let isbox5Visible = false;

text5.addEventListener("click", function() {
    container5.style.visibility = "visible";
    if (!isbox5Visible) {
        const box5es = document.querySelectorAll(".box5");
        box5es.forEach(box5 => {
            box5.style.visibility = "visible";
            setTimeout(() => {
                box5.style.top = "0";
            }, 100);
        });
        isbox5Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton5.style.display = "block"; 
    } else {
        const box5es = document.querySelectorAll(".box5");
        box5es.forEach(box5 => {
            box5.style.top = "-11550px";
            setTimeout(() => {
                box5.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox5Visible = false;

        // При закрытии скрываем кнопку
        closebutton5.style.display = "none";
    }
});
const closebutton5 = document.createElement("button5");

closebutton5.classList.add("close-button5");
closebutton5.style.display = "none";
container5.appendChild(closebutton5);
closebutton5.addEventListener("click", function() {
    const box5es = document.querySelectorAll(".box5");
    box5es.forEach(box5 => {
        box5.style.top = "-11550px";
        setTimeout(() => {
            box5.style.visibility = "hidden";
        }, 500);
    });
    isbox5Visible = false;

    closebutton5.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
    //box6
    const container6 = document.querySelector(".container6");
    const template6 = document.querySelector(".box6");
    const text6 = document.getElementById("text6");
    
    // Создаем кнопку "Закрыть" и задаем ей стили display: none
    
    for (let i = 0; i < 10; i++) {
        const clonedbox6 = template6.cloneNode(true);
        container6.appendChild(clonedbox6);
    }
    
    let isbox6Visible = false;
    
    text6.addEventListener("click", function() {
        container6.style.visibility = "visible";
        if (!isbox6Visible) {
            const box6es = document.querySelectorAll(".box6");
            box6es.forEach(box6 => {
                box6.style.visibility = "visible";
                setTimeout(() => {
                    box6.style.top = "0";
                }, 100);
            });
            isbox6Visible = true;
    
            // При открытии меняем стиль кнопки на display: block
            closebutton6.style.display = "block"; 
        } else {
            const box6es = document.querySelectorAll(".box6");
            box6es.forEach(box6 => {
                box6.style.top = "-11660px";
                setTimeout(() => {
                    box6.style.visibility = "hidden";
                }, 600); // Задержка должна быть равна времени анимации
            });
            isbox6Visible = false;
    
            // При закрытии скрываем кнопку
            closebutton6.style.display = "none";
        }
    });
    const closebutton6 = document.createElement("button6");
    closebutton6.text6Content = "Закрыть";
    closebutton6.classList.add("close-button6");
    closebutton6.style.display = "none";
    container6.appendChild(closebutton6);
    closebutton6.addEventListener("click", function() {
        const box6es = document.querySelectorAll(".box6");
        box6es.forEach(box6 => {
            box6.style.top = "-11660px";
            setTimeout(() => {
                box6.style.visibility = "hidden";
            }, 600);
        });
        isbox6Visible = false;
    
        closebutton6.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
    });
    // box 7
    const container7 = document.querySelector(".container7");
const template7 = document.querySelector(".box7");
const text7 = document.getElementById("text7");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox7 = template7.cloneNode(true);
    container7.appendChild(clonedbox7);
}

let isbox7Visible = false;

text7.addEventListener("click", function() {
    container7.style.visibility = "visible";
    if (!isbox7Visible) {
        const box7es = document.querySelectorAll(".box7");
        box7es.forEach(box7 => {
            box7.style.visibility = "visible";
            setTimeout(() => {
                box7.style.top = "0";
            }, 100);
        });
        isbox7Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton7.style.display = "block"; 
    } else {
        const box7es = document.querySelectorAll(".box7");
        box7es.forEach(box7 => {
            box7.style.top = "-11750px";
            setTimeout(() => {
                box7.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox7Visible = false;

        // При закрытии скрываем кнопку
        closebutton7.style.display = "none";
    }
});
const closebutton7 = document.createElement("button7");

closebutton7.classList.add("close-button7");
closebutton7.style.display = "none";
container7.appendChild(closebutton7);
closebutton7.addEventListener("click", function() {
    const box7es = document.querySelectorAll(".box7");
    box7es.forEach(box7 => {
        box7.style.top = "-11750px";
        setTimeout(() => {
            box7.style.visibility = "hidden";
        }, 500);
    });
    isbox7Visible = false;

    closebutton7.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
// box 8
const container8 = document.querySelector(".container8");
const template8 = document.querySelector(".box8");
const text8 = document.getElementById("text8");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox8 = template8.cloneNode(true);
    container8.appendChild(clonedbox8);
}

let isbox8Visible = false;

text8.addEventListener("click", function() {
    container8.style.visibility = "visible";
    if (!isbox8Visible) {
        const box8es = document.querySelectorAll(".box8");
        box8es.forEach(box8 => {
            box8.style.visibility = "visible";
            setTimeout(() => {
                box8.style.top = "0";
            }, 100);
        });
        isbox8Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton8.style.display = "block"; 
    } else {
        const box8es = document.querySelectorAll(".box8");
        box8es.forEach(box8 => {
            box8.style.top = "-11850px";
            setTimeout(() => {
                box8.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox8Visible = false;

        // При закрытии скрываем кнопку
        closebutton8.style.display = "none";
    }
});
const closebutton8 = document.createElement("button8");

closebutton8.classList.add("close-button8");
closebutton8.style.display = "none";
container8.appendChild(closebutton8);
closebutton8.addEventListener("click", function() {
    const box8es = document.querySelectorAll(".box8");
    box8es.forEach(box8 => {
        box8.style.top = "-11850px";
        setTimeout(() => {
            box8.style.visibility = "hidden";
        }, 500);
    });
    isbox8Visible = false;

    closebutton8.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
// box9
const container9 = document.querySelector(".container9");
const template9 = document.querySelector(".box9");
const text9 = document.getElementById("text9");

// Создаем кнопку "Закрыть" и задаем ей стили display: none

for (let i = 0; i < 10; i++) {
    const clonedbox9 = template9.cloneNode(true);
    container9.appendChild(clonedbox9);
}

let isbox9Visible = false;

text9.addEventListener("click", function() {
    container9.style.visibility = "visible";
    if (!isbox9Visible) {
        const box9es = document.querySelectorAll(".box9");
        box9es.forEach(box9 => {
            box9.style.visibility = "visible";
            setTimeout(() => {
                box9.style.top = "0";
            }, 100);
        });
        isbox9Visible = true;

        // При открытии меняем стиль кнопки на display: block
        closebutton9.style.display = "block"; 
    } else {
        const box9es = document.querySelectorAll(".box9");
        box9es.forEach(box9 => {
            box9.style.top = "-11950px";
            setTimeout(() => {
                box9.style.visibility = "hidden";
            }, 500); // Задержка должна быть равна времени анимации
        });
        isbox9Visible = false;

        // При закрытии скрываем кнопку
        closebutton9.style.display = "none";
    }
});
const closebutton9 = document.createElement("button9");

closebutton9.classList.add("close-button9");
closebutton9.style.display = "none";
container9.appendChild(closebutton9);
closebutton9.addEventListener("click", function() {
    const box9es = document.querySelectorAll(".box9");
    box9es.forEach(box9 => {
        box9.style.top = "-11950px";
        setTimeout(() => {
            box9.style.visibility = "hidden";
        }, 500);
    });
    isbox9Visible = false;

    closebutton9.style.display = "none"; // При нажатии на кнопку "Закрыть" скрываем ее
});
    // slide-2
    const slides = document.querySelectorAll('.slide-1, .slide-2');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  if (currentSlide === 1) {
    currentSlide = 0;
    showSlide(currentSlide);
  }
});

document.querySelector('.next').addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = 1;
    showSlide(currentSlide);
  }
});

showSlide(currentSlide);

    function nextSlide() {
        $activeSlide = $slider.find('.panel._active');
        var $nextSlide = $activeSlide.next('.panel');
        if ($nextSlide.length === 0) {
            $nextSlide = $slider.find('.panel').first();
        }
        
        $activeSlide.removeClass('_active');
        $nextSlide.addClass('_active');
        $slider.trigger('slide.changed');
    }
    
showSlide(currentSlide);

    function prevSlide() {
        $activeSlide = $slider.find('.panel._active');
        var $prevSlide = $activeSlide.prev('.panel');
        if ($prevSlide.length === 0) {
            $prevSlide = $slider.find('.panel').last();
        }
        
        $activeSlide.removeClass('_active');
        $prevSlide.addClass('_active');
        $slider.trigger('slide.changed');
    }
    
    function goToSlide(slideToGo) {
        if (slideToGo < 1) {
            slideToGo = numberOfSlides;
        } else if (slideToGo > numberOfSlides) {
            slideToGo = 1;
        }
        
        $activeSlide.removeClass('_active');
        $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
        $slider.trigger('slide.changed');
    }
    
});

