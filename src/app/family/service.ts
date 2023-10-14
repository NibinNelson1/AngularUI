import { Injectable } from '@angular/core';    
import { HttpClient} from '@angular/common/http';    
import { family } from './family.model';    

@Injectable({  
    providedIn: 'root'  
})  
export class MyserviceService {  
    url = 'https://localhost:7243/api/family/'  
    constructor(private httpclient: HttpClient) {}  
    enroll(user: family) {  
        return this.httpclient.post<any>(this.url, user)  
    }  
}  