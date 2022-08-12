import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChuckwarsserviceService } from '../chuckwarsservice.service';

export interface DialogData {
  jokecategory: string;
  name: string;
}

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {

  chuckcategories$!:Observable<any[]>;
  chuckjokebycategory$!:Observable<any[]>;
  dataSourceCategories!: MatTableDataSource<any>;

  displayedColumns: string[] = ['position'];

  jokecategory: string;
  name: string;

  constructor(private service:ChuckwarsserviceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories()
  {
    this.chuckcategories$ = this.service.getChuckCategories();
  }

  async selectRow(item:any) {

    let obj:any ;
    obj = await this.service.getChuckJokeByCategories(item).toPromise();

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {name: obj['value'],jokecategory: item},
    });


  }

}

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
