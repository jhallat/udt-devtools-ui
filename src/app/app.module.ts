import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderSearchComponent } from './folder-search/folder-search.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { PageDesignComponent } from './ui-design/page-design/page-design.component';
import { ToolbarComponent } from './ui-design/toolbar/toolbar.component';
import { PropertyPanelComponent } from './ui-design/property-panel/property-panel.component';
import { ConfiguratoinComponent } from './configuratoin/configuratoin.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderSearchComponent,
    UiDesignComponent,
    PageDesignComponent,
    ToolbarComponent,
    PropertyPanelComponent,
    ConfiguratoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFolder);
  }
}
