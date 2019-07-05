import { Component, OnInit } from "@angular/core";
import { CountService } from "../../services/count.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private countService: CountService) {}
  favCount: any;
  count: number;

  ngOnInit() {
    this.countService.cast.subscribe(res => {
      if (res === 0) {
        var list = JSON.parse(localStorage.getItem("favObj"));
        if (list === undefined || list === null) {
          this.count = 0;
        } else {
          this.count = Object.keys(list).length;
        }
      } else {
        this.count = res;
      }
    });
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
