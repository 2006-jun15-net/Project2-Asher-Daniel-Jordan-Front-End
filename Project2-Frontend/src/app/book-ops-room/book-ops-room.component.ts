import { Component, OnInit } from '@angular/core';
import { OpsRoomService } from '../shared/services/ops-room.service';
import { OpsRoom } from '../shared/models/opsroom';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-ops-room',
  templateUrl: './book-ops-room.component.html',
  styleUrls: ['./book-ops-room.component.css']
})
export class BookOpsRoomComponent implements OnInit {
  opsRoom: OpsRoom = new OpsRoom();

  constructor(
    private databaseOpsRoom: OpsRoomService,
    private route: ActivatedRoute,
    private readonly snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.opsRoom.opsRoomId = Number(params.get('opsRoomId'));
      });
  }

  goBack(): void {
    this.location.back();
  }

  confirm(): void {
    this.databaseOpsRoom.updateRoom({opsRoomId: this.opsRoom.opsRoomId, available: false} as OpsRoom)
    .subscribe( data => console.log('PUT was successful', data),
    error => this.handleHTTPError(error)
    );
  }

  private handleHTTPError(error: HttpErrorResponse): void {
    console.log(error.status);
    let message: string;
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else {
      message = error.status.toString();
    }
    this.snackBar.open(message, 'Dismiss');
  }
}
