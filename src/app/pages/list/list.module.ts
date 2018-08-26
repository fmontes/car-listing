import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    {
        component: ListComponent,
        path: ''
    }
];

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    declarations: [ListComponent]
})
export class ListModule {}
