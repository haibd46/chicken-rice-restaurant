import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DonOrderService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDonOrder(params: any) {
    return this.http.get(`${this.apiUrl}/api/don-order`, { params });
  }

  getDonOrderById(id: string) {
    return this.http.get(`${this.apiUrl}/api/don-order/${id}`);
  }

  addDonOrder(data: any) {
    return this.http.post(`${this.apiUrl}/api/don-order`, data);
  }

  updateDonOrder(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/api/don-order/${id}`, data);
  }

  deleteDonOrder(id: string) {
    return this.http.delete(`${this.apiUrl}/api/don-order/${id}`);
  }
}
