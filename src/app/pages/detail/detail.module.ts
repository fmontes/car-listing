import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        component: DetailComponent,
        path: ''
    }
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    declarations: [DetailComponent],
})
export class DetailModule {}
