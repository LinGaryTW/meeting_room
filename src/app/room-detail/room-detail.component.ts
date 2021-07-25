import { MeetingRoomsService } from './../meeting-rooms/meeting-room.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnChanges {
  @Input() today = new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).slice(0, 10)
  content: { Mosco: [], Tokyo: [], Dresdon: [] };
  constructor(private meetingRoomsService: MeetingRoomsService,
    private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.today);
    this.meetingRoomsService.testAPI(this.today).subscribe(data => {
      this.content = data;
    })
    console.log(this.content);
  }
  showMeeting(id) {
    this.router.navigate([`/meet/${id}`])
  }
}
