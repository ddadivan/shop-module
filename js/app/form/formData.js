import { formOrder, submitBtn } from "../../utils/elements.js";
import { formValidate } from "./formValidate.js";

export function getFormData() {
    formOrder.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(formOrder);

        for (let data of formData) {

            console.log("data: ", data);
        }

        formOrder.reset();

        submitBtn.disabled = true;
    })


    // Слідкуємо за введенням данни в вформу
    formOrder.addEventListener('input', (e) => {
        e.preventDefault();

        // Отримуємо данні форми
        const formData = new FormData(formOrder);

        // Зміння що відповідає за пусті поля
        const isEmptyField = [];
        const isEmptyFieldText = [];

        // Перебираємо данні форми
        formData.forEach((value, name) => {

            // Перевіряємо кожне значення
            if (value === '')
                isEmptyField.push(name);

            // Дивимосб чи поле має валідацію
            const errorText = formValidate(name, value);

            if (errorText != '') {
                isEmptyFieldText.push(errorText);
            }

        })

        // Якщо немає пустих полей розактивовуємо кнопку
        if ((isEmptyField.length == 0 && isEmptyFieldText == '')) {
            submitBtn.disabled = false;
        } else {
            console.log("isEmptyFieldText: ", isEmptyFieldText);
            if (isEmptyFieldText.length != 0) {
                Toastify({
                    text: isEmptyFieldText.join("\n\r"),
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #b00c00, #c94d3d)",
                    }
                }).showToast();
            }
        }
    })
}
