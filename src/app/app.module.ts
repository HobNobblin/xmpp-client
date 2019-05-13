import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkspaceMenuComponent } from './workspace-menu/workspace-menu.component';
import { PresenceComponent } from './presence/presence.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceMenuComponent,
    PresenceComponent,
    ChatMenuComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
