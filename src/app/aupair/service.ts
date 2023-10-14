import { Injectable } from '@angular/core';    
import { HttpClient} from '@angular/common/http';    
import { aupair } from './aupair.model';    

@Injectable({  
    providedIn: 'root'  
})  
export class AupairService {  
    url = 'https://localhost:7243/api/aupair/'  
    constructor(private httpclient: HttpClient) {}  
    saveAupair(data: any) {  
        return this.httpclient.post<any>(this.url, data)  
    }  
}  