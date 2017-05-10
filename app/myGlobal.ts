import { Headers, RequestOptions } from '@angular/http';

export class URI {
    static pathList = {
        login: '/rest/sd/member/login',
        signUp: '/rest/sd/member/register'
    };
    // static ip = 'http://115.159.75.162:8998';
    // static ip = 'http://192.168.1.83:8080';
    static ip = 'http://127.0.0.1:8080/api';

    public static get(event) {
        return this.ip + this.pathList[event];
    }
}

export class HttpHeader {
    public static jsonContentType() {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        let headers = new Headers({ "Content-Type": "application/json; charset=utf-8" });
        let options = new RequestOptions({ 'headers': headers });
        return options;
    }
}
