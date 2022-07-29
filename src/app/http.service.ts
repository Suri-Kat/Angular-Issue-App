import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api:string='http://localhost:4200/api';
  constructor(private http:HttpClient) { }

  public getData(search_params:any)
  {
    return this.http.get(this.api, {params: search_params}).toPromise()
  }

  public getDetail(id:string)
  {
    return this.http.get(this.api + id).toPromise();
  }
}
