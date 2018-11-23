import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'car-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
    @Output() change: EventEmitter<boolean> = new EventEmitter();

    @Input() label: string;
    @Input() disabled: boolean;

    checked = false;

    constructor() {}

    ngOnInit() {}

    onClick($event: MouseEvent): void {
        this.checked = !this.checked;
        this.change.emit(this.checked);
    }
}
