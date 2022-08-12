import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ChuckwarsserviceService } from '../chuckwarsservice.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit {

  PeopleColumns: string[] = ['name','height','mass','hair_color','skin_color'];

  totalCount: any;
  CurrentPage:any;
  nextpage:any;
  previouspage:any;
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator : MatPaginator;
  constructor(private service:ChuckwarsserviceService) { }

  ngOnInit(): void {
    this.initDataSource();
    this.CurrentPage = 1;
  }

  async initDataSource()
  {
    let obj:any;
    obj = await this.service.getStarwarsPeople().toPromise();
    console.log("Testing more stuff", obj)
    this.dataSource = new MatTableDataSource(obj['results']);
    this.dataSource.paginator = this.paginator;
    this.nextpage = obj['next'];
    this.previouspage = obj['previous'];
    this.totalCount = obj['count'];
  }

  async nextPage(event: PageEvent) {

    this.CurrentPage = event.pageIndex;
    this.nextpage = event.pageIndex.toString();
    let obj:any;
    obj = await this.service.getStarwarsPeoplebyPage(this.nextpage).toPromise();
    if(obj != null || obj != undefined)
    {
      this.dataSource = new MatTableDataSource(obj['results']);
    }

  }

}
