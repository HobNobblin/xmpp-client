import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ChatService {

    private subject = new Subject<any>();

    constructor() { 
    }

    setChannelId(channelId: string) {
        this.subject.next({ channelId: channelId });
    }

    getChannelId(): Observable<any> {
        return this.subject.asObservable();
    }

}
