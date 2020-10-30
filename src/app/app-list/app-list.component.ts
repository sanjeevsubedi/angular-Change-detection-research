import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-app-list",
  templateUrl: "./app-list.component.html",
  styleUrls: ["./app-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppListComponent implements OnInit {
  @Input() src;

  constructor(private cd: ChangeDetectorRef) {}

  clickMe() {
    this.src.a = "next";
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.src.a = "next";
    //   this.cd.detectChanges();
    // }, 4000);
  }

  // ngOnchanges() {
  //   console.log("item list component");
  // }
}
