const root = "http://localhost:8000/api"

export const apiUrls = {
    
    editDP: () => `${root}/files/uploadDP`,
    editProfile: () => `${root}/user/editProfile`,
    addPeople: () => `${root}/user/addPeople`,
    searchUser: () => `${root}/user/search`,
    getUser: () => `${root}/user/detail`,
    register: () => `${root}/auth/register`,
    login: () => `${root}/auth/login`
};