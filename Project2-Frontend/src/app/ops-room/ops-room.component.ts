import { Component, OnInit } from '@angular/core';
import { OpsRoomService } from '../shared/services/ops-room.service';
import { OpsRoom } from '../shared/models/opsroom';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ops-room',
  templateUrl: './ops-room.component.html',
  styleUrls: ['./ops-room.component.css']
})
export class OpsRoomComponent implements OnInit {
  opsRooms: OpsRoom[] | null = null;

  constructor(
    private databaseOpsRoom: OpsRoomService,
    private readonly snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAvailableRooms();
  }

  public getAvailableRooms(): any {
    return this.databaseOpsRoom.getAvailableRooms()
    .subscribe(rooms => this.opsRooms = rooms,
      error => this.handleHTTPError(error));
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
