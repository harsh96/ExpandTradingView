var watchListLoadWatcher = setInterval (checkForWatchlistLoad, 1000);
var screenerListLoadWatcher = setInterval (checkForScreenerLoad, 1000);
var watchListTries = 0;
var screenerListTries = 0;


function checkForScreenerLoad(){
    screenerResults = $(".tv-screener__symbol.tv-screener__symbol--text.apply-common-tooltip");
    screenerListTries += 1;
    if(screenerListTries > 15){
        clearInterval (screenerListLoadWatcher);
        console.log("No Watchlist found in the past "+screenerListTries+" seconds.");
    }
    if(screenerResults.length != 0){
        for(i=0;i<screenerResults.length;i++){
            clearInterval (screenerListLoadWatcher);
            row = $(screenerResults[i]);
            sym = row.text();
            screener_link = "https://www.screener.in/company/" + sym + "/";
            marketsmith_link = "https://marketsmithindia.com/mstool/eval/" + sym + "/evaluation.jsp#/";
            $(row).after('&nbsp; <a href="' + screener_link + '", style="margin-left=4px;color:red;" target="_blank">S</a>');
            $(row).after('&nbsp; <a href="' + marketsmith_link + '", style="margin-left=4px;color:green;" target="_blank">M</a>');
        }
    }
}

function checkForWatchlistLoad() {
    watchListResults = $("*[data-symbol-short]");
    
    watchListTries += 1;
    if(watchListTries > 15){
        clearInterval (watchListLoadWatcher);
        console.log("No Watchlist found in the past "+watchListTries+" seconds.");
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
}