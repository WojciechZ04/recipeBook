import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOption = 'recipes';

  onOptionClicked(option)  {
    this.loadedOption = option;
  }
  title = 'PROJECT';
}
