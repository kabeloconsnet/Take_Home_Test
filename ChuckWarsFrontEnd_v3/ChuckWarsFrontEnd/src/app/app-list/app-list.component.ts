import { Component, OnInit } from '@angular/core';
import { AppEvents } from '../Appevents';
import { ChucwarsserviceService } from '../chucwarsservice.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  appevents: AppEvents[];
  constructor(private chucWarsservice:ChucwarsserviceService) { }

  ngOnInit(): void {
    this.appevents = this.chucWarsservice.getAppEvents();
  }

  logName(value:string)
  {
    console.log(value)
  }

}
