import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-planet-kpi",
  templateUrl: "./planet-kpi.component.html",
  styleUrls: ["./planet-kpi.component.scss"]
})
export class PlanetKpiComponent implements OnInit {
  @Output() MessageEvent = new EventEmitter<any>();
  @Input() data: any;
  @Input() cursor: any;
  tileFavSelection: any;

  constructor() {}

  onClickPlanetTile(event, res) {
    var id = event.target.id;
    if (id === "fav") {
      this.tileFavSelection = "fav";
    } else {
      this.tileFavSelection = "tile";
    }
    var obj = {
      key: this.tileFavSelection,
      data: res
    };
    this.MessageEvent.emit(obj);
  }

  ngOnInit() {}
}
