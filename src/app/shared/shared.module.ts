import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { PriceComponent } from './components/price/price.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageComponent, PriceComponent, ItemComponent],
    exports: [ImageComponent, PriceComponent, ItemComponent]
})
export class SharedModule {}
