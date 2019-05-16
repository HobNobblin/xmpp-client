import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ChatService {

    private subject = new Subject<any>();

    constructor() { 
    }

    setChatTopic( topicType: string, topicId: string) {
        this.subject.next({ 
            topicType: topicType,
            topicId: topicId 
        });
    }

    getChatTopic(): Observable<any> {
        return this.subject.asObservable();
    }

}
