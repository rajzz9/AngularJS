import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTdComponent } from './form-td/form-td.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';
import { BasicsComponent } from './basics/basics.component';
import { ComponentsAndDataBindingsComponent } from './components-and-data-bindings/components-and-data-bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { RoutingsComponent } from './routings/routings.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpsComponent } from './https/https.component';

const routes: Routes = [
  { path: 'basics', component: BasicsComponent },
  { path: 'componentsAndDataBinding', component: ComponentsAndDataBindingsComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'routing', component: RoutingsComponent},
  { path: 'observable', component: ObservableComponent },
  { path: 'formTd', component: FormTdComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'http', component: HttpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
