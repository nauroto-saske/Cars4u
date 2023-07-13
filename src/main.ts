import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app/app.module';
import { AdminComponent } from 'src/app/admin/admin.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  export const appRoutes: Routes = [
    { path: 'Admin', component: AdminComponent}
  ];
