import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { SharedModule } from '@shared/shared.module';
import { CompareBarModule } from '@core/compare-bar/compare-bar.module';

const routes: Routes = [
    {
        component: ListComponent,
        path: ''
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CompareBarModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ListComponent]
})
export class ListModule {}
