import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarResolverService } from '@resolvers/car-resolver.service';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [CarResolverService]
})
export class AppRoutingModule {}
