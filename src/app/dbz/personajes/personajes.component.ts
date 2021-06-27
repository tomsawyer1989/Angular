import { Component, Input } from "@angular/core";

import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-personajes',
    templateUrl: 'personajes.component.html',
    styleUrls: [
        'personajes.component.css'
    ]
})
export class PersonajesComponent {
    constructor(private dbzService: DbzService) {
    }

    get personajes () {
        return this.dbzService.personajes;
    }
}