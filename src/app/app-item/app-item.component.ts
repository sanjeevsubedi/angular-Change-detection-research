import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-app-item",
  templateUrl: "./app-item.component.html",
  styleUrls: ["./app-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppItemComponent implements OnInit {
  @Input() src: any;

  constructor(private cd: ChangeDetectorRef) {}

  clickMe() {
    this.src.a = "next";
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.src.a = "next";
    //   //this.cd.markForCheck();
    // }, 4000);
    // const p = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 4000);
    // });
    // p.then(r => {
    //   this.src.a = "next";
    //   this.cd.markForCheck();
    // });
  }

  // ngDoCheck() {
  //   console.log("item component");
  // }
}
