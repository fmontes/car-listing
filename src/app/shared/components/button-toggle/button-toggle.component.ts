import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'car-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnChanges {
    @Output() change: EventEmitter<boolean> = new EventEmitter();

    @Input() label: string;
    @Input() selected: boolean;

    checked = false;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selected) {
            this.checked = changes.selected.currentValue;
        }
    }

    onClick($event: MouseEvent): void {
        this.checked = !this.checked;
        this.change.emit(this.checked);
    }
}
