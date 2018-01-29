import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutesComponent} from './routes/routes.component';
import {SetupComponent} from './setup/setup.component';

const routes: Routes = [
    {
        path: 'routes',
        component: RoutesComponent
    },
    {
        path: '',
        component: SetupComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
