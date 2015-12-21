import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "created-article",
    host: {
        class: "row"
    },
    template: `
            <div class="panel panel-primary">
                <div class="panel-heading text-center">
                  <span> {{ title }}&nbsp;&nbsp; </span><span class="badge danger" style="width:50px"> {{ voteCount }}</span>

                </div>
                <div class="panel-body">
                        <p class="text-center"> {{ shortLink }} </p>
                    <hr>
                    <div class="row">
                        <button type="button" class="btn btn-primary col-md-offset-2 col-md-3" (click)="voteUp()"><i class="glyphicon glyphicon-chevron-up"></i> Up</button>
                        <button type="button" class="btn btn-danger col-md-offset-2 col-md-3" (click)="voteDown()"><i class="glyphicon glyphicon-chevron-down"></i> Down</button>
                    </div>
                </div>
            </div>
    `
})

export interface ArticleComponent{}
export class ArticleComponent {
    voteCount: number;
    link: string;
    shortLink: string;
    title: string;

    /**
     *
     */
    constructor() {
        this.link = "http://www.angular.io";
        this.title = "Angular 2";
        this.voteCount = 0;
        this.shortLink = this.link.replace("http://www.", "");

    }
    public voteUp(): boolean {
        this.voteCount++;
        return false;
    }
    public voteDown(): boolean {
        this.voteCount--;
        return false;
    }

}

// bootstrap(ArticleComponent)