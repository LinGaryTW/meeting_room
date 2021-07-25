import { MeetingRoomsService } from './../meeting-rooms/meeting-room.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() date: any;

  constructor(private meetingRoomsService: MeetingRoomsService) { }

  meetingForm = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
    topic: new FormControl(''),
    room: new FormControl(''),
  });

  ngOnInit(): void {
  }
  onSubmit() {
    console.warn(this.meetingForm.value);
    let date = { meetingDate: this.date }
    this.meetingRoomsService.createMeeting(Object.assign(date, this.meetingForm.value)).subscribe(result => {
      console.log(result);
    })
  }
}
