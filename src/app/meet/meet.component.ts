import { MeetingRoomsService } from './../meeting-rooms/meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {
  meet: object;
  users: Array<object>;
  id: string
  constructor(private route: ActivatedRoute,
    private meetingRoomsService: MeetingRoomsService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.meetingRoomsService.getMeet(this.id).subscribe(data => {
      this.meet = data['meet'];
      this.users = data['users'];

      console.log(this.meet);
      console.log(this.users);
    })
  }
  deleteUser(id, index) {
    let res = ''
    this.meetingRoomsService.deleteUser(id).subscribe(data => {
      res = data['res']
      console.log(res);
      this.users.splice(index, 1)
    })
    return res
  }
}
