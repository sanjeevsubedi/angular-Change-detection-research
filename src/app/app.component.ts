import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  src = { a: "initial" };

  ngOnInit() {
    setTimeout(() => {
      this.src.a = "next";
    });
  }

  // clickMe() {
  //   this.src.a = "next";
  // }
}
