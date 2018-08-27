import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarResolverService } from '@core/resolvers/car/car-resolver.service';
import { CompareCarsResolverService } from '@core/resolvers/compare-cars/compare-cars-resolver.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/list/list.module#ListModule'
    },
    {
        path: ':id',
        loadChildren: './pages/detail/detail.module#DetailModule',
        resolve: {
            car: CarResolverService
        }
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [CarResolverService, CompareCarsResolverService]
})
export class AppRoutingModule {}
