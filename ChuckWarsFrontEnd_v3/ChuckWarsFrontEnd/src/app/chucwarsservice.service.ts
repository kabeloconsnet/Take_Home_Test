import { Injectable } from '@angular/core';
import { AppEvents } from './Appevents';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChucwarsserviceService {

  events: AppEvents[] =[
    {
      name: 'Chuck Norris',
      decription:  'Chuck Norris Categories',
      imgsrc:  'https://cdn-icons-png.flaticon.com/512/511/511952.png?w=740&t=st=1660156112~exp=1660156712~hmac=4c1a334eacecc4937a44dd20d49e2b1306a0975f4d987663b2685e17036c2a89',
      path: 'chucknorris'
    },
    {
      name: 'Starwars',
      decription:  'Star Wars People',
      imgsrc:  'https://img.freepik.com/free-vector/modern-composition-with-two-crossed-light-swords_23-2147906158.jpg?w=740&t=st=1660157103~exp=1660157703~hmac=8c1554996062044ad0255292b1ca203e5f094deb7aaf38673e415b547d2f6efd',
      path: 'starwars'
    }
  ];

  constructor() { }

  getAppEvents(): AppEvents[] {
    return this.events;
  }



}
