import { Component, ViewEncapsulation } from '@angular/core';
// import {} from '@angular/core' ;

@Component({
	selector: 'body',
	templateUrl: "./app.component.html",
	styleUrls: ["app.component.css"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'TODO app';
}
