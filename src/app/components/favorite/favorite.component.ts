import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit {
  constructor() {}
  favoritesList: any;

  loadFavoritesData() {
    var list = JSON.parse(localStorage.getItem("favObj"));
    if (list !== null) {
      this.favoritesList = list;
      var keys = Object.keys(this.favoritesList);
      var length = keys.length;
      this.favoritesList = [];
      for (var i = 0, j = length; i < j; i++) {
        this.favoritesList.push(list[keys[i]]);
      }
    }
  }

  ngOnInit() {
    this.loadFavoritesData();
  }
}
