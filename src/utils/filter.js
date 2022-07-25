import { getUserValue } from "./utils";

export function usersFilter(users, valueName, content, property = "_id") {
    return users.filter(
        (user) => getUserValue(user, valueName).value[property] === content
    );
}

export const getFilteredUsers = (allUsers, valueName, value) => {
    if (!value) {
        return allUsers;
    }

    if (!Object.keys(value).length) {
        return allUsers;
    }

    return usersFilter(allUsers, valueName, value);
};
