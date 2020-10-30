import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppListComponent } from "./app-list/app-list.component";
import { AppItemComponent } from "./app-item/app-item.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AppListComponent,
    AppItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
