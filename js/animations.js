// анимация увеличения числа
const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(() => {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  const element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

// добавление нового поля input в форме
document
  .querySelector("#budget")
  .addEventListener("change", function handleSelectChange(event) {
    if (event.target.value === "other") {
      const formContainer = document.createElement("div");
      formContainer.classList.add("form_group");
      formContainer.classList.add("form_other-input");
      const input = document.createElement("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
      formContainer.appendChild(input);

      document
        .querySelector(".form form")
        .insertBefore(formContainer, document.querySelector(".form_submit"));
    }
    const otherInput = document.querySelector(".form_other-input");
    if (event.target.value !== "other" && Boolean(otherInput)) {
      document.querySelector(".form form").removeChild(otherInput);
    }
  });

//анимация header и запуск анимации увеличение числа
window.addEventListener("scroll", updateScroll);

let animationInited = false;

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header_scrolled");
  } else {
    document.querySelector("header").classList.remove("header_scrolled");
  }

  // Получение позиции элемента с цифрами
  let countElementPosition = document.querySelector(
    ".features__clients-count"
  ).offsetTop;
  // получение значения для позиции скролла
  let windowBottomPosition = window.scrollY + window.innerHeight;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
