import { Routes } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { SignalsComponent } from '../components/signals/signals.component';
import { ServicesComponent } from '../components/services/services.component';
import { ObservablesComponent } from './../components/observables/observables.component';
import { PagenotfoundComponent } from '../commonComponent/pagenotfound/pagenotfound.component';
import { LayoutComponent } from '../commonComponent/layout/layout.component';
import { RoutingComponent } from '../components/routing/routing.component';
import { ProfileComponent } from './../commonComponent/profile/profile.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'form', pathMatch: 'full' },
            { path: 'form', component: FormComponent },
            { path: 'signal', component: SignalsComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'observable', component: ObservablesComponent },
            { path: 'routing', component: RoutingComponent },
            { path: 'info', component: ProfileComponent },
            { path: 'info/:id', component: ProfileComponent }
        ]
    },

    { path: '**', component: PagenotfoundComponent }

];

