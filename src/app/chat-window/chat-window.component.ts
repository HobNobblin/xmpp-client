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
    topicType: String = "";
    topicId: String = "";

    messages = [
        {
            'sender': 'Mike Fawcett',
            'time': '9:17 AM',
            'body': 'This is a test...'
        },
        {
            'sender': 'Brian Coyle',
            'time': '9:19 AM',
            'body': 'Blah blah blah blah blah'
        },
    ];

    constructor(
        private chatService: ChatService
    ) { 
        // subscribe to home component messages
        this.subscription = this.chatService.getChatTopic().subscribe( chatTopic => {
            if( chatTopic ) {
                this.changeChannel( chatTopic.topicType, chatTopic.topicId );
            }
        });
    }

    ngOnInit() {
    }

    changeChannel(topicType, topicId) {
        this.topicType = topicType;
        this.topicId = topicId;
    }

}
