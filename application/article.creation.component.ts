import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "article-creation",
    template: `
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input #title type="input" class="form-control" id="title" placeholder="Title">
            </div>
            <div class="form-group">
                <label for="link">Link</label>
                <input #link type="input" class="form-control" id="link" placeholder="Link">
            </div>

            <button (click)="addNewArticle(title, link)" type="submit" class="btn btn-default">Submit</button>
    </form>

    `
})

export class ArticleCreation{
   /**
    *
    */
   constructor() {

    }

   public addNewArticle(title: string, link: string): void {
       console.log('Created a new article with a name of "%s" and a link of "%s"', title, link);
   }
}

bootstrap(ArticleCreation);