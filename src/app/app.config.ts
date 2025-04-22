import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // لو بتستخدم routerLink
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // لو بتستخدم routes
import { FormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule),
    provideRouter(routes), // تقدر تحذفها لو مش عامل routing
  ]
};
