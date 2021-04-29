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

  testfile: string

  show = true

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.dummyData);
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
