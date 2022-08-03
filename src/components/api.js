import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
const books = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=bhbXTIcFJj6WMgycOEABhV4TLXU9oUzA";
class Api {
    constructor() {
        this.instancedogs = axios.create({
            baseURL: books,
            timeout: 3000,
            headers: {
                
                "Content-Type": "application/json",
            },
        });
    }

    Books = () => this.instancedogs.get("").then((res) => res.data);

    /*  setHeaderToken(token) {
        this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem("jwtToken", token || "");
      }
    
      unsetHeaderToken() {
        delete this.instance.defaults.headers.common.Authorization;
        localStorage.removeItem("jwtToken");
      }
    */
    /*  login = (data) =>
        this.instance
          .post("/login", data)
          .then((res) => res.data)
          .then((data) => this.setHeaderToken(data.accessToken));
    
      register = (data) =>
        this.instance.post("/register", data).then((res) => res.data);
    
      profile = () => this.instance.get("/user").then((res) => res.data);
    
      putProfile = (data) =>
        this.instance.put("/user", data).then((res) => res.data);
    
      getPostIt = (userId) =>
        this.instance
          .get("/post-it/all?assignedUsers=" + userId)
          .then((res) => res.data)
          .then((data) => data.postIts);
    
      getUsers = (usersId) =>
        this.instance.get("/users?ids=" + usersId).then((res) => res.data);
    
      updatePostItList = (data, id) =>
        this.instance
          .put("/post-it/template/list/" + id, data)
          .then((res) => res.data);
    
      createTribe = (data) =>
        this.instance.post("/tribe/", data).then((res) => res.data);
    
      getTribe = () => this.instance.get("/tribe/myTribes").then((res) => res.data);
    
      patchTribeUser = (id, data) =>
        this.instance
          .patch("/tribe/" + id + "/users", data)
          .then((res) => res.data);
    
      deleteTribe = (id) =>
        this.instance.delete("/tribe/" + id).then((res) => res.data);
    
      deletePostIt = (id) =>
        this.instance.delete("/post-it/" + id).then((res) => res.data);
    
      getRobotConfig = (data) =>
        this.instance
          .post("/robot/getRobotConfigById", data)
          .then((res) => res.data);
    
      postRobotConfig = (data) =>
        this.instance.post("/robot/addRobotConfig", data).then((res) => res.data);
    
      postTemplateList = (id, data) =>
        this.instance
          .post("/post-it/template/list/" + id, data)
          .then((res) => res.data);
    
      postTemplateEvent = (id, data) =>
        this.instance
          .post("/post-it/template/event/" + id, data)
          .then((res) => res.data);
    
      postTemplateMedia = (id, data) =>
        this.instance
          .post("/post-it/template/media/" + id, data)
          .then((res) => res.data);
    
      postGetMesssageTribe = (data) =>
        this.instance.post("/chat/getMsgTribe", data).then((res) => res.data);
    
      postGetMesssageUser = (data) =>
        this.instance.post("/chat/getMsgWithUser", data).then((res) => res.data);
    
      postSendMessageTribe = (data) =>
        this.instance.post("/chat/sendMsgToTribe", data).then((res) => res.data);
    
      postSendMessageUser = (data) =>
        this.instance.post("/chat/sendMsgToUser", data).then((res) => res.data);
        */
}

export default new Api();
