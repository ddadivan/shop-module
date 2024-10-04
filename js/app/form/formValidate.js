
const formError = {
    "name": "Поле імені повинно бути не менші 2 симовлів",
    "email": "Введено некоректний імейл"
}

export function formValidate(name, value) {

    if (value != '') {
        switch (name) {
            case "name":
                if (value.length < 2)
                    return formError.name;
                break;

            case "email":
                if (value.length < 4)
                    return formError.email;
                break;
        }
    }
    return '';
}
