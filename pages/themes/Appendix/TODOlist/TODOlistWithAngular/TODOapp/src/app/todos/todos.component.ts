import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todos',
	templateUrl: "./todos.component.html",
	styleUrls: ["todos.component.css"]
})
export class TodosComponent  {
	title = 'TodosComponent';
	items: any;
	constructor() {
		this.items =  [
			{content: 'Item1', checked: false },
			{content: 'Item2', checked: true },
			{content: 'Item3', checked: false },
		];

	}
}
