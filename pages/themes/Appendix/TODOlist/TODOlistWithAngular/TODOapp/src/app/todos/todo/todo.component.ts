import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo',
	template: `<li
			[id]="id" <!-- input -->
			[checked]="checked" <!-- input -->
			(onClick)="itemSelected($event)" <!-- output -->
		>{{item.content}}<i class="fa fa-trash-o"></i></li>`,
	styles: []
})
export class TodoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
