export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const animateBlock = document.querySelector(".animate");
  const errorText = "Ошибка...";
  const successText = "Спасибо, данные отправлены";

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.classList.contains("success")) {
        success = true;
      } else {
        success = false;
      }
    });
    return success;
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    const loadAnimate = animateBlock.cloneNode(true);

    loadAnimate.classList.add("animate_visible");
    form.append(loadAnimate);
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          loadAnimate.remove();
          statusBlock.textContent = successText;
          formElements.forEach((item) => {
            item.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Неверные данные");
    }
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
