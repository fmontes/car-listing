import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { PriceComponent } from './components/price/price.component';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ImageComponent, PriceComponent, ItemComponent, ButtonToggleComponent],
    exports: [ImageComponent, PriceComponent, ItemComponent]
})
export class SharedModule {}
