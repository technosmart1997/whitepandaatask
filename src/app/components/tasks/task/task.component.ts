import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() task;
  showDiv: boolean = false;
  showImg: boolean = true;
  constructor() {}

  onmouseEnter() {
    this.showDiv = true;
    this.showImg = false;
  }

  onmouseLeave() {
    this.showDiv = false;
    this.showImg = true;
  }
  ngOnInit() {}
}
