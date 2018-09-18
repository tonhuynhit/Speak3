import { NgModule } from '@angular/core';
import { NgScModule } from '@speak/ng-sc';
import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';

@NgModule({
  imports: [
    NgScModule.forRoot({
      /* 
        The ItemId refers to '/sitecore/client/Applications/[Your-App-Name]/UserAccess' AccessFolder item
        EX: path: /sitecore/
      */
      authItemId: 'C4DFE5BB-C7FF-4619-9E96-A9E36FE737F0',
      contextToken: CONTEXT,
      dictionaryToken: DICTIONARY,
      /*
        The ItemId refers to '/sitecore/client/Applications/[Your-App-Name]/Translations' Speak3DictionaryFolder item
        Ex:
      */
      translateItemId: '1CCCAE46-60A5-435C-A19D-8B7CDB06DF75'
    })
  ],
  exports: [NgScModule]
})
export class AppScModule { }
