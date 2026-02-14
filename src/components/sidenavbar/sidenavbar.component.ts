import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidenavbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './sidenavbar.component.html',
    styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent {
    expanded = false;

    toggle() { this.expanded = !this.expanded; }

    get showExpanded() {
        return this.expanded;
    }
}
