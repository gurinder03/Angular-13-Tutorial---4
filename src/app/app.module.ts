import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { CollagesListComponent } from './collages-list/collages-list.component';
import { UserAuthModule } from "./user-auth/user-auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentListComponent,
    CoursesComponent,
    TeachersListComponent,
    CollagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
