import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notice} from '../models/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  apiUrl = 'http://localhost:7000';

  constructor(private httpClient: HttpClient) {}

  post(body) {
    return this.httpClient.post(`${this.apiUrl}/notice/`, body);
  }

  get(): Observable<Notice[]> {
    return this.httpClient.get<Notice[]>(`${this.apiUrl}/notice/`);
  }
}
