import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	clicked: boolean = false;

	enableDisable() {
		this.clicked = !this.clicked;
	}
}
