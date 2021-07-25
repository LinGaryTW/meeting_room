import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { MeetComponent } from './meet/meet.component'

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomsComponent,
    RoomDetailComponent,
    BookingComponent,
    CalendarComponent,
    MeetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
