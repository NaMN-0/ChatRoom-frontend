const root = "http://localhost:8000/api"

export const apiUrls = {
    addPeople: () => `${root}/user/addPeople`,
    searchUser: () => `${root}/user/search`,
    getUser: () => `${root}/user/detail`,
    register: () => `${root}/auth/register`,
    login: () => `${root}/auth/login`
};