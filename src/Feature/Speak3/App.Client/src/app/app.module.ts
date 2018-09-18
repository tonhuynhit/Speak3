import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Sitecore modules */
import { SciContextModule, sciContextFactory, SciContextService } from '@speak/ng-sc/context';
import { ScAccountInformationModule } from '@speak/ng-bcl/account-information';
import { ScActionBarModule } from '@speak/ng-bcl/action-bar';
import { ScApplicationHeaderModule } from '@speak/ng-bcl/application-header';
import { ScButtonModule } from '@speak/ng-bcl/button';
import { ScGlobalHeaderModule } from '@speak/ng-bcl/global-header';
import { ScGlobalLogoModule } from '@speak/ng-bcl/global-logo';
import { ScIconModule } from '@speak/ng-bcl/icon';
import { ScPageModule } from '@speak/ng-bcl/page';
import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';
import { SciAntiCSRFModule } from '@speak/ng-sc/anti-csrf';
import { SciBclDictionaryModule } from '@speak/ng-sc/bcl-dictionary';

/* Application modules */
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { ItemService } from './task-page/item.service';
import { ContextPageComponent } from './context-page/context-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppScModule } from './app-sc.module';
import { AppScAuthModule } from './app-sc-auth.module';
import { NgScModule } from '@speak/ng-sc';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TaskPageComponent,
    ContextPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,    
    /* Sitecore modules */
    SciContextModule,
    ScAccountInformationModule,
    ScActionBarModule,
    ScApplicationHeaderModule,
    ScButtonModule,
    ScGlobalHeaderModule,
    ScGlobalLogoModule,
    ScIconModule,
    ScPageModule,
    SciAntiCSRFModule,
    SciBclDictionaryModule,
    AppScModule,
    AppScAuthModule,
  ],
  providers: [
    ItemService,
    /* Register Sitecore Context Service */
    { provide: CONTEXT, useFactory: sciContextFactory, deps: [SciContextService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
