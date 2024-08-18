import { Injectable } from '@angular/core';
import { WebAPIService } from './web-api.service';

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  private baseUrl = 'http://localhost:8080';
  private httpLinks = {
    getAllCompartiments: this.baseUrl + '/compartiments',
  };

  constructor(private webApiService: WebAPIService) {}

  getAllCompartiments() {
    return this.webApiService.get(this.httpLinks.getAllCompartiments);
  }
}
