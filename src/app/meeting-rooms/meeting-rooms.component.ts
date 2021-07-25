import { MeetingRoomsService } from './meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.scss']
})
export class MeetingRoomsComponent implements OnInit {

  dummyData: any[];

  testfile: string;

  show = true;

  constructor(
    private router: Router,
    private meetingService: MeetingRoomsService
  ) { }

  ngOnInit(): void {
  }

  booking(id): void {
    this.router.navigate([`/booking/${id}`]);
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
