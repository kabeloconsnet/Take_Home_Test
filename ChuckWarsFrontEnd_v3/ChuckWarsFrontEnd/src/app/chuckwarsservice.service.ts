import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpResponse,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WriteKeyExpr } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ChuckwarsserviceService {


  readonly chuckwardsAPIURL = "http://localhost:44360/";
  constructor(private http:HttpClient) { }

  getChuckCategories():Observable<any[]>
  {
    console.log(this.chuckwardsAPIURL + 'chuck');
    return this.http.get<any>(this.chuckwardsAPIURL + 'chuck');
  }

  getChuckJokeByCategories(category:string):Observable<any[]>
  {
    const url = this.chuckwardsAPIURL + 'chuck/jokebycategory?category=' + category;
    return this.http.get<any>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map(response => {
      return response;
    }))
  }

  getStarwarsPeople():Observable<any[]>
  {

    const url = this.chuckwardsAPIURL + 'swapi';
    return this.http.get<any>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map(response => {
      return response;
    }))
  }

  getStarwarsPeoplebyPage(pageNum:string):Observable<any[]>
  {

    const url = this.chuckwardsAPIURL + 'swapi/byPage?pageNo=' + pageNum;
    return this.http.get<any>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map(response => {
      return response;
    }))
  }

  getSearchResults(searchterm:string):Observable<any[]>
  {
    let customerObs:any;
    const url = this.chuckwardsAPIURL + 'search?query=' + searchterm;

 console.log("get a divorce:",url);

    return this.http.get<any>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map(response => {
      return response;
    }))

    }
}
