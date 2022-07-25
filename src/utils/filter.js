import { getUserValue } from "./utils";

export function usersFilter(users, valueName, value) {
    return users.filter(
        (user) => getUserValue(user, valueName).value === value
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
