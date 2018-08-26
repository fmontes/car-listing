import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { PriceComponent } from './components/price/price.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageComponent, PriceComponent],
    exports: [ImageComponent, PriceComponent]
})
export class SharedModule {}
