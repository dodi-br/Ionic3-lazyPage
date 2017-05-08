export class URI {
    static pathList = {
        login: '/rest/sd/memberAuth/login',
        signUp: '/rest/sd/memberAuth/register'
    };
    static ip = 'http://115.159.75.162:8998';
    public static get(event) {
        return this.ip + this.pathList[event];
    }
}