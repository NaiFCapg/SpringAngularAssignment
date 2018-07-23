import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  getUsersInfo(){
    return this.http.get('/server/api/UsersInfo');
  }
  
  getUserInfo(id: number){
    return this.http.get('/server/api/UsersInfo/' + id);
  }

  createUserInfo(userInfo){
    let body = JSON.stringify(userInfo);
    return this.http.post('/server/api/UsersInfo/register', body, httpOptions)
  }

  getProvinces(){
    return this.http.get('/server/api/Provinces');
  }

  createProvince(province){
    let body = JSON.stringify(province);
    return this.http.post('/server/api/Provinces/setProvince', body, httpOptions)
  }
}
