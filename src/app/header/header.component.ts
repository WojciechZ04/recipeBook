import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() optionClicked = new EventEmitter<string>();
  collapsed = true;

  onSelect(option: string) {
    this.optionClicked.emit(option)
  }
}
