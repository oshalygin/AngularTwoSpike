import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "hello-world",
    template: `
    <div>
        <h2>Foobaru World</h2>
    </div>
    `
})

export class ApplicationComponent { }

bootstrap(ApplicationComponent)