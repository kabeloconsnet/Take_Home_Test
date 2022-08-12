import { Component, OnInit } from '@angular/core';
import { ChuckwarsserviceService } from '../chuckwarsservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})

export class SearchresultsComponent implements OnInit {

  SearchColumns: string[] = ['source','value'];
  dataSource: MatTableDataSource<any>;
  searchterm:string;
  chuckcategories$!:Observable<any[]>;
  totalCount: any;
  CurrentPage:any;
  obj:any;
  pageEvent: PageEvent;



  constructor(private chuckwarsService:ChuckwarsserviceService) { }

  ngOnInit(): void {

  }


  async submitInput()
  {

    this.obj = await this.chuckwarsService.getSearchResults(this.searchterm).toPromise();
    let obj2 = this.obj['cleanSearchResultsObjectList'];

    this.searchterm='';
  }


}
