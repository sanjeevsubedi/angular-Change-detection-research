import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ src?.a }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input() src: any;
}
