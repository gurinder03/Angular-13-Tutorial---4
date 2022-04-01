import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name = '';
  getName(ChannelName :any)
  {
    console.log(ChannelName);
    this.Name = ChannelName;
  }
}
