import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { ApiService } from "./services/api-service.service";

import { FooterComponent } from "./shared/footer/footer.component";

const config = {
  apiKey: "AIzaSyAmaMdvrrbUQG-C9Z3kqRJO6gjO82fQAXU",
  authDomain: "fir-learning-9441c.firebaseapp.com",
  databaseURL: "https://fir-learning-9441c.firebaseio.com",
  projectId: "fir-learning-9441c",
  storageBucket: "fir-learning-9441c.appspot.com",
  messagingSenderId: "352768627376",
  appId: "1:352768627376:web:70b59f59ca107efa182175",
  measurementId: "G-4HTXCPQ1KP"
};

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
