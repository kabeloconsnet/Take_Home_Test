import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { AppEvents } from '../Appevents';
import {Router} from '@angular/router';


@Component({
  selector: 'app-chuckwars',
  templateUrl: './chuckwars.component.html',
  styleUrls: ['./chuckwars.component.scss']
})
export class ChuckwarsComponent implements OnInit {

  @Input() event: AppEvents;
  @Output() clickevent: EventEmitter<string> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  navigate()
  {
    this.router.navigate([this.event.path]);
  }
  emitToParent()
  {
    this.clickevent.emit(this.event.name);
  }

}
