import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareBarComponent } from './compare-bar.component';
import { SharedModule } from '@shared/shared.module';
import { ThumbComponent } from './components/thumb/thumb.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [CompareBarComponent, ThumbComponent],
    exports: [CompareBarComponent]
})
export class CompareBarModule {}
