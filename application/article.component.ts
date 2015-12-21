import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "jedi-article",
    host: {
        class: "row"
    },
    template: `
            <div class="panel panel-primary">
                <div class="panel-heading text-center">
                    Article
                </div>
                <div class="panel-body">
                    Stuff about the Article

                </div>
            </div>
    `
})

export class Article {

}

bootstrap(Article)