import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import * as viewModule from "tns-core-modules/ui/core/view";
import * as color from "tns-core-modules/color";

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.backgroundColor = new color.Color("Green");
    view.animate({
        backgroundColor: new color.Color("Blue"),
        duration: 2500
    });
}

export function onReset(args: observable.EventData) {
    view.backgroundColor = new color.Color("White");
}
