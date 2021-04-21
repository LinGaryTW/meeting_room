import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.scss']
})
export class MeetingRoomsComponent implements OnInit {

  dummyData: any[] = [
    { id: 'm1', room: 'Tokyo', url: "https://picsum.photos/600/1000/?random=30" },
    { id: 'm2', room: 'Dresden', url: "https://picsum.photos/600/1000/?random=31" },
    { id: 'm3', room: 'Mosco', url: "https://picsum.photos/600/1000/?random=32" }
  ]

  show = true
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.dummyData);
  }

  showUI = () => {
    this.show = !this.show;
  }

  booking(): void {
    this.router.navigate(['/booking']);
  }
}
