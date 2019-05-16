import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../_services/chat.service'; 

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})

export class ChatWindowComponent implements OnInit {

    subscription: Subscription;
    channelId: String = "";

    constructor(
        private chatService: ChatService
    ) { 
        // subscribe to home component messages
        this.subscription = this.chatService.getChannelId().subscribe( channelId => {
            if( channelId ) {
                this.changeChannel(channelId.channelId);
            }
        });
    }

    ngOnInit() {
    }

    changeChannel(channelId) {
        this.channelId = channelId;
    }

}
