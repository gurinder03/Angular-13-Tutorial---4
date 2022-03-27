import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechEngineer1';
  getName()
  {
    return "I have 10 years of Experience";
  }
}
