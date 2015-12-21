System.register([], function(exports_1) {
    var ArticleComponent;
    return {
        setters:[],
        execute: function() {
            ArticleComponent = (function () {
                /**
                 *
                 */
                function ArticleComponent() {
                    this.link = "http://www.angular.io";
                    this.title = "Angular 2";
                    this.voteCount = 0;
                    this.shortLink = this.link.replace("http://www.", "");
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.voteCount++;
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.voteCount--;
                    return false;
                };
                return ArticleComponent;
            })();
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
// bootstrap(ArticleComponent) 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC5hcnRpY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcGxpY2F0aW9uL2NyZWF0ZWQuYXJ0aWNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXJ0aWNsZUNvbXBvbmVudCIsIkFydGljbGVDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcnRpY2xlQ29tcG9uZW50LnZvdGVVcCIsIkFydGljbGVDb21wb25lbnQudm90ZURvd24iXSwibWFwcGluZ3MiOiI7Ozs7O1lBMkJBO2dCQU1JQTs7bUJBRUdBO2dCQUNIQTtvQkFDSUMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsdUJBQXVCQSxDQUFDQTtvQkFDcENBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFFMURBLENBQUNBO2dCQUNNRCxpQ0FBTUEsR0FBYkE7b0JBQ0lFLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFDTUYsbUNBQVFBLEdBQWZBO29CQUNJRyxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtvQkFDakJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7Z0JBRUxILHVCQUFDQTtZQUFEQSxDQUFDQSxBQXpCRCxJQXlCQztZQXpCRCwrQ0F5QkMsQ0FBQTs7OztBQUVELDhCQUE4QiJ9