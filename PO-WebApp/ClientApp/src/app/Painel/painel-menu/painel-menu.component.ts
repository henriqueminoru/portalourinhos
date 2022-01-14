import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-menu',
  templateUrl: './painel-menu.component.html',
  styleUrls: ['./painel-menu.component.css']
})
export class PainelMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
