import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/interface/Role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  getDesignation(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
  }
}
