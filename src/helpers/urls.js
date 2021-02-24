const root = "http://chatroom-backend-0.herokuapp.com/api"

export const apiUrls = {
    
    backendAPI: () => `http://chatroom-backend-0.herokuapp.com`,

    
    getPeopleDetails: () => `${root}/user/peopleDetail`,
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