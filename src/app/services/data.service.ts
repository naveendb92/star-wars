import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseURL: string = "https://swapi.co/api/planets";
  movieURL: string = "https://swapi.co/api/planets";

  constructor(private httpClient: HttpClient) {}

  public getAllPlanets() {
    return this.httpClient.get(`${this.baseURL}/`);
  }
  public getMovieByID(url) {
    return this.httpClient.get(`${url}`);
  }
}
