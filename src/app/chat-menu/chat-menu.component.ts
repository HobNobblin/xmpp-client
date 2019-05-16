import { Component, OnInit } from '@angular/core';
import { ChatService } from '../_services/chat.service'; 

@Component({
    selector: 'app-chat-menu',
    templateUrl: './chat-menu.component.html',
    styleUrls: ['./chat-menu.component.scss']
})

export class ChatMenuComponent implements OnInit {

    channels = [
        {
            'name': 'development',
            'newMessages': false,
            'noticeCount': 0,
        },
        {
            'name': 'devsecops',
            'newMessages': true,
            'noticeCount': 0,
        },
        {
            'name': 'ems',
            'newMessages': false,
            'noticeCount': 0,
        },
        {
            'name': 'ess',
            'newMessages': true,
            'noticeCount': 2,
        },
        {
            'name': 'fedex-certification',
            'newMessages': false,
            'noticeCount': 0,
        }
    ];

    constructor(
        private chatService: ChatService
    ) { 
    }

    ngOnInit() {
    }

    channelSelected(channelId) {
        this.chatService.setChannelId(channelId);
    }

}
