var watchListLoadWatcher = setInterval (checkForWatchlistLoad, 1000);
var totalTries = 0;

function checkForWatchlistLoad() {
    x = $("*[data-symbol-short]");
    totalTries += 1;
    if(totalTries > 15){
        clearInterval (watchListLoadWatcher);
        console.log("No Watchlist found in the past "+totalTries+" seconds.");
    }
    if (x.length!=0) {
        clearInterval (watchListLoadWatcher);
        for(i=0;i<x.length;i++){
            sym = $(x[i]).children().eq(1).children().children().eq(1).text();
            screener_link = "https://www.screener.in/company/"+sym+"/";
            marketsmith_link = "https://marketsmithindia.com/mstool/eval/"+sym+"/evaluation.jsp#/";
            $(x[i]).children().eq(2).after('&nbsp; <a href="'+screener_link+'", style="margin-left=4px;" target="_blank">S</a>');
            $(x[i]).children().eq(2).after('&nbsp; <a href="'+marketsmith_link+'", style="margin-left=4px;" target="_blank">M</a>');
        }
    }
}