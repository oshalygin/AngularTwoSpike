import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "jedis",
    template: `
    <div>
    <ul>
    <li *ngFor="#jedi of jedis">{{jedi}}</li>
    </ul>
</div>
`
})

export class Jedi {

    jedis: string[];

    constructor() {
        this.jedis = ["Luke", "Darth Vader", "Obiwan", "Yoda", "Anakin"];
    }
}

bootstrap(Jedi);