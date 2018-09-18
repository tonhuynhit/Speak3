import { NgModule } from '@angular/core';
import { SciAuthModule } from '@speak/ng-sc/auth';

@NgModule({
  imports: [
    /* Access folder Item ID*/
    SciAuthModule.withItemId('{DA4466EE-92C8-4D69-B4AB-2E0CA36ADD22}'),
  ]
})
export class AppScAuthModule { }
