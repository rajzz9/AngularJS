import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTdComponent } from './form-td/form-td.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';
import { UnlessDirective } from './observable/unless.directive';
import { BasicHighlightDirective } from './observable/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './observable/better-highlight/better-highlight.directive';
import { BasicsComponent } from './basics/basics.component';
import { ComponentsAndDataBindingsComponent } from './components-and-data-bindings/components-and-data-bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { RoutingsComponent } from './routings/routings.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpsComponent } from './https/https.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './https/auth.interceptor.service';
import { LoggingInterceptorService } from './https/logging.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FormTdComponent,
    HeaderComponent,
    DropdownDirective,
    ReactiveFormComponent,
    ObservableComponent,
    UnlessDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BasicsComponent,
    ComponentsAndDataBindingsComponent,
    DirectivesComponent,
    ServicesComponent,
    RoutingsComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // If add Reactive Forms Module then not required to add Forms Module
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
