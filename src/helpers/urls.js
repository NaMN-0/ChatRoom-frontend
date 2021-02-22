const root = "http://localhost:8000/api"

export const apiUrls = {
    
    backendAPI: () => `http://localhost:8000`,


    getMsgs: () => `${root}/chat/getMsgs`,
    sendMsg: () => `${root}/chat/sendMsg`,
    editDP: () => `${root}/files/uploadDP`,
    editProfile: () => `${root}/user/editProfile`,
    addPeople: () => `${root}/user/addPeople`,
    searchUser: () => `${root}/user/search`,
    getUser: () => `${root}/user/detail`,
    register: () => `${root}/auth/register`,
    login: () => `${root}/auth/login`
};