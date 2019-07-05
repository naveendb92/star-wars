import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
import { CountService } from "../../services/count.service";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.scss"]
})
export class PlanetComponent implements OnInit {
  planetList: any;
  favPlanetList: [];
  filteredPlanetList: [];
  favObj = {};
  title = "Example Angular Material Dialog";

  constructor(
    private UtilitityService: DataService,
    private dialog: MatDialog,
    private countService: CountService
  ) {}

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredPlanetList = this.filterList(value);
  }

  loadPlanetsData() {
    this.UtilitityService.getAllPlanets().subscribe(
      data => {
        if (data["results"].length > 0) {
          this.planetList = data["results"];
          this.filteredPlanetList = this.planetList;
          this.setFavFlag();
        }
      },
      error => {
        alert("No Data to Display");
      }
    );
  }

  clearFav() {
    localStorage.clear();
    this.countService.editUser(0);
    this.loadPlanetsData();
  }

  ngOnInit() {
    /**
     * On Load call Planets API
     */
    this.loadPlanetsData();
  }

  filterList(searchString: string) {
    return this.planetList.filter(
      planet =>
        planet.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  setFavFlag() {
    var temp = JSON.parse(localStorage.getItem("favObj"));
    if (temp !== null) {
      for (var i = 0, j = this.planetList.length; i < j; i++) {
        var filterName = this.planetList[i].name;
        if (temp[filterName] !== undefined) {
          this.planetList[i] = temp[filterName];
        }
      }
    }
    this.filteredPlanetList = this.planetList;
  }

  removeFavFlag(data) {
    for (var i = 0, j = this.planetList.length; i < j; i++) {
      if (this.planetList[i].name === data.name) {
        data.favorite = false;
        this.planetList[i] = data;
      }
    }
    this.filteredPlanetList = this.planetList;
  }

  addItemToFav(data) {
    var list = JSON.parse(localStorage.getItem("favObj"));
    if (list === null) {
      /*no fav list */
      this.favObj[data.name] = data;
      localStorage.setItem("favObj", JSON.stringify(this.favObj));
      this.setFavFlag();
      this.countService.editUser(1);
    } else {
      if (list[data.name] !== undefined) {
        delete list[data.name];
        localStorage.setItem("favObj", JSON.stringify(list));
        this.removeFavFlag(data);
      } else {
        list[data.name] = data;
        localStorage.setItem("favObj", JSON.stringify(list));
        this.setFavFlag();
      }
      this.countService.editUser(list);
    }
  }

  openDialog(data) {
    this.dialog.open(DialogBodyComponent, {
      height: "85%",
      width: "75%",
      data: data
    });
  }

  showMovies(data) {
    this.openDialog(data);
  }

  receiveMessage(event) {
    if (event.key === "fav") {
      event.data.favorite = true;
      this.addItemToFav(event.data);
    } else {
      this.showMovies(event.data);
    }
  }
}
