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
                   <a href="{{ link }}"> Article </a>
                   <span class="badge"> 4</span>
                </div>
                <div class="panel-body">
                <div class="row">
                    <h3>{{ title }}</h3>
                    <p> {{ shortLink }} </p>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-md-offset-2 col-md-3" (click)="voteDown()"><i class="glyphicon glyphicon-chevron-up"></i> Up</button>
                    <button type="button" class="btn btn-danger col-md-offset-2 col-md-3" (click)="voteDown()"><i class="glyphicon glyphicon-chevron-down"></i> Down</button>
                </div>
                </div>
            </div>
    `
})

export class Article {
    voteCount: number;


}

bootstrap(Article)