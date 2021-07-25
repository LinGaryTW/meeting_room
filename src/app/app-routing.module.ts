import { MeetComponent } from './meet/meet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


const routes: Routes = [
  {
    path: 'booking/:id',
    component: BookingComponent
  },
  {
    path: 'room-detail',
    component: RoomDetailComponent
  },
  {
    path: 'meeting-rooms',
    component: MeetingRoomsComponent
  },
  {
    path: 'meet/:id',
    component: MeetComponent
  },
  {
    path: '',
    component: MeetingRoomsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
