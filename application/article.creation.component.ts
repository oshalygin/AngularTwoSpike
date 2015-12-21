import {Component} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "article-creation",
    template: `
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input #newTitle class="form-control" id="title" placeholder="Title">
            </div>
            <div class="form-group">
                <label for="link">Link</label>
                <input #newLink class="form-control" id="link" placeholder="Link">
            </div>

            <button (click)="addNewArticle(newTitle, newLink)" type="submit" class="btn btn-default">Submit</button>
    </form>

    `
})

export class ArticleCreation{
   /**
    *
    */
   constructor() {

    }

   public addNewArticle(newTitle: HTMLInputElement, newlink: HTMLInputElement): void {
       console.log(`Created a new article with a name of ${newTitle.value} and a ${newlink.value} `);
   }
}

bootstrap(ArticleCreation);