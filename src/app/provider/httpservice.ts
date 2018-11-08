/**
 * Created by SeaRan on 2017/8/4.
 */
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

// 资源
import {LISTMESSAGE} from "../provider/list-messages";

@Injectable()
export class HttpService {
    constructor(public http: HttpClient, public listmessage: LISTMESSAGE){}
    // Http GET 请求
    httpget(url:string){  
        this.http.get(url).subscribe(response =>{
            // console.log(response);
            this.listmessage.get_data = response["result"];
        }, error =>{
            console.log("请求发生错误！")
        }) 
    }

    // Http POST 请求
    private encodeHttpParams(params:any): any{
        if (!params) return null;
        return new HttpParams({fromObject: params});
    }
    
    httppost(url, params){
        // HTTP POST
        let headers = {
            headers: new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'})
        };
        this.http.post(url, this.encodeHttpParams(JSON.stringify(params)), headers).subscribe(
            response => {
                // 
                console.log(response)
                this.listmessage.get_data = response;
            }, error => {
                // 
                console.log("POST请求发生错误！")
                console.log(params)
                console.log("22222222222222")
            }
        )
    }

}

