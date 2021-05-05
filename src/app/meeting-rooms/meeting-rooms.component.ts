import { MeetingRoomsService } from './meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.scss']
})
export class MeetingRoomsComponent implements OnInit {

  dummyData: any[];

  testfile: string;

  show = true

  constructor(
    private router: Router,
    private meetingService: MeetingRoomsService
  ) { }

  ngOnInit(): void {
    this.dummyData = this.meetingService.data();
    this.dummyData.forEach((data, i) => {
      console.log(data.id, i);
    });
    const ids = this.dummyData.map((data, i) => {
      return data.id
    })
    console.log(ids);
  }

  showUI = () => {
    this.show = !this.show;
    localStorage.setItem('info', 'Gary');
    console.log(localStorage.getItem('info'));
    this.meetingService.testAPI().subscribe(res => {
      console.log(res);
    });
  }

  booking(): void {
    this.router.navigate(['/booking']);
  }

  saveFile = (event) => {
    console.log(event);
  }

  handleDenial = () => {
    console.log('handleDenied');
  }

  handleDismiss = () => {
    console.log('habdleDismiss');
  }

  deleteFile = (filename) => {
    console.log(filename);
  }
}
