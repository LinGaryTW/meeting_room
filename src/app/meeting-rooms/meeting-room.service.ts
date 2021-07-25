import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MeetingRoomsService {
  users: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  testAPI(meetingDate): Observable<any> {
    let api = `http://localhost:3000/meets?date=${meetingDate}`
    return this.httpClient.get(api);
  }
  createMeeting(params): Observable<any> {
    let api = `http://localhost:3000/create_meeting`
    return this.httpClient.post(api, params)
  }
  getMeet(id) {
    let api = `http://localhost:3000/meet/${id}`
    return this.httpClient.get(api)
  }
  deleteUser(id) {
    let params = { 'id': id }
    let api = `http://localhost:3000/delete`
    return this.httpClient.post(api, params)
  }
}
