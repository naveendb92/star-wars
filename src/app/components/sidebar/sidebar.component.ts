import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor() {}
  favCount: any;

  ngOnInit() {
    var list = JSON.parse(localStorage.getItem("favObj"));
    if (list !== null) {
      var keys = Object.keys(list);
      var length = keys.length;
      this.favCount = length;
    } else {
      this.favCount = 0;
    }
  }
}
