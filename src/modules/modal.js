import { animate } from "./helper";

const modal = () => {
  const modal = document.querySelector(".popup");
  const openModalBtns = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");

  let clietnWidth;
  let modalOpacityCount = 0;

  const showModal = () => {
    modal.style.display = "block";
    if (clietnWidth > 768) {
      animate({
        duration: 2000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalContent.style.opacity = progress;
        },
      });
    } else {
      modalContent.style.opacity = 1;
    }
  };

  const hideModal = () => {
    modal.style.display = "none";
    modalContent.style.opacity = 0;
    modalOpacityCount = 0;
  };

  let checkScreenSize = () => {
    clietnWidth = document.documentElement.clientWidth;
    return clietnWidth;
  };

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      hideModal();
    }
  });

  window.addEventListener("resize", checkScreenSize);
  openModalBtns.forEach((element) =>
    element.addEventListener("click", showModal)
  );
};

export default modal;
