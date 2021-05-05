import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MeetingRoomsService {

  api = 'https://tpeoc.blob.core.windows.net/blobfs/GetFTDDamData.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  testAPI(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  data = () => {
    return [
      { id: 'm1', room: 'Tokyo', url: "https://picsum.photos/600/1000/?random=30" },
      { id: 'm2', room: 'Dresden', url: "https://picsum.photos/600/1000/?random=31" },
      { id: 'm3', room: 'Mosco', url: "https://picsum.photos/600/1000/?random=32" }
    ]
  }
}
