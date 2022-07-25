export function getUserTableData(user) {
    const maxRate = 5;

    return {
        _id: user._id,
        values: [
            {
                name: "name",
                value: user.name
            },
            {
                name: "qualities",
                value: user.qualities
            },
            {
                name: "profession",
                value: user.profession
            },
            {
                name: "completedMeetings",
                value: user.completedMeetings
            },
            {
                name: "rate",
                value: `${user.rate} / ${maxRate}`
            },
            {
                name: "bookmark",
                value: false
            }
        ]
    };
}

// возвращает по ссылке
export function getUserValue(userTableData, valueName) {
    return userTableData.values.find(({ name }) => name === valueName);
}

export function renderPhrase(count) {
    const stringNumber = String(count);

    let number = count;
    if (stringNumber.length > 2) {
        number = Number(stringNumber.split("").slice(-2).join(""));
    }

    const remainder = number % 10;

    if (remainder > 1 && remainder < 5 && (number < 11 || number > 20)) {
        return `${count} человека тусанут с тобой`;
    }

    return `${count} человек тусанет с тобой`;
}
