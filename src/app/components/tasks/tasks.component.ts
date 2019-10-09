import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api-service.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: any[];
  constructor(private Api: ApiService) {}

  ngOnInit() {
    this.Api.getData().subscribe(res => {
      this.tasks = res;
    });
  }
}
