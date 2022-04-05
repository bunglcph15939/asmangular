import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000/phones';
@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(
    private http: HttpClient
  ) { }
  getsanpham() {
    return this.http.get(apiUrl);
  }
  getsanphamId(id: undefined | number) {
    return this.http.get(`${apiUrl}/${id}`);
    // ~ apiUrl + '/' + id
    // ~ 'http://localhost:3000/students/1
  }

  deleteSanpham(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createSanpham(obj: {name:string, class: string}) {
    return this.http.post(apiUrl, obj);
  }

  updateSanpham(id: number|string, obj: any) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }

}
