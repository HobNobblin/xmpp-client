import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-workspace-menu',
    templateUrl: './workspace-menu.component.html',
    styleUrls: ['./workspace-menu.component.scss']
})

export class WorkspaceMenuComponent implements OnInit {

    workspaces = [
        {
            'id': '1',
            'name': 'Neopost Software Development',
            'initial': 'NS',
            'newMessages': true,
            'noticeCount': 2,
        },
        {
            'id': '2',
            'name': 'newhavenio',
            'initial': 'N',
            'newMessages': true,
            'noticeCount': 0,
        },
        {
            'id': '3',
            'name': 'Neopost',
            'initial': 'NE',
            'newMessages': false,
            'noticeCount': 0,
        },
        {
            'id': '4',
            'name': 'Thimble Island Brewing Company',
            'initial': 'TI',
            'newMessages': false,
            'noticeCount': 0,
        },
    ];

    selectedSpace: String = '1';

    constructor() { 
    }

    ngOnInit() {
    }

    workspaceSelected(workspaceID) {
        this.selectedSpace = workspaceID;
    }

}
