import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { delay } from "rxjs/operators";
import { LoaderService } from "../../../services/loader.service";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  color = "primary";
  mode = "indeterminate";
  value = 50;
  isLoading: boolean;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.cast.pipe(delay(0)).subscribe(res => {
      this.isLoading = res;
    });
  }
}
