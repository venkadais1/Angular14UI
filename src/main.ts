import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import{ en}from'./environments/environment';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
