const root = "http://localhost:8000/api"

export const apiUrls = {
    getUsers: () => "https://jsonplaceholder.typicode.com/users",
    register: () => `${root}/user/register`,
    login: () => `${root}/user/login`
};