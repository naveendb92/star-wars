import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-body",
  templateUrl: "./dialog-body.component.html",
  styleUrls: ["./dialog-body.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DialogBodyComponent implements OnInit {
  planetData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBodyComponent>
  ) {
    this.planetData = data;
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
