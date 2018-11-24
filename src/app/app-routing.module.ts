import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareCarsResolverService } from '@core/resolvers/compare-cars/compare-cars-resolver.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/list/list.module#ListModule'
    },
    {
        path: 'compare/:id',
        loadChildren: './pages/compare/compare.module#CompareModule',
        resolve: {
            cars: CompareCarsResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule],
    providers: [CompareCarsResolverService]
})
export class AppRoutingModule {}
