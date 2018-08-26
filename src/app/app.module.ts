import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { ImageComponent } from './shared/components/image/image.component';

@NgModule({
    declarations: [AppComponent, ImageComponent],
    imports: [BrowserModule, AppRoutingModule, HeaderModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
