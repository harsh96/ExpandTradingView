var watchListLoadWatcher = setInterval (checkForWatchlistLoad, 1000);
var totalTries = 0;

function checkForWatchlistLoad() {
    watchListResults = $("*[data-symbol-short]");
    screenerResults = $(".tv-screener__symbol.tv-screener__symbol--text.apply-common-tooltip");
    
    totalTries += 1;
    if(totalTries > 15){
        clearInterval (watchListLoadWatcher);
        console.log("No Watchlist found in the past "+totalTries+" seconds.");
    }
    if (watchListResults.length!=0) {
        clearInterval (watchListLoadWatcher);
        for(i=0;i<watchListResults.length;i++){
            watchList = $(watchListResults[i]);
            sym = watchList.children().eq(1).children().children().eq(1).text();
            screener_link = "https://www.screener.in/company/"+sym+"/";
            marketsmith_link = "https://marketsmithindia.com/mstool/eval/"+sym+"/evaluation.jsp#/";
            watchList.children().eq(2).after('&nbsp; <a href="'+screener_link+'", style="margin-left=4px;color:red;" target="_blank">S</a>');
            watchList.children().eq(2).after('&nbsp; <a href="'+marketsmith_link+'", style="margin-left=4px;color:green;" target="_blank">M</a>');
        }
    }

    for(i=0;i<screenerResults.length;i++){
        row = $(screenerResults[i]);
        sym = row.text();
        screener_link = "https://www.screener.in/company/" + sym + "/";
        marketsmith_link = "https://marketsmithindia.com/mstool/eval/" + sym + "/evaluation.jsp#/";
        $(row).after('&nbsp; <a href="' + screener_link + '", style="margin-left=4px;color:red;" target="_blank">S</a>');
        $(row).after('&nbsp; <a href="' + marketsmith_link + '", style="margin-left=4px;color:green;" target="_blank">M</a>');
    }

}