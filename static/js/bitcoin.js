queue()
    .defer(d3.json, "data/bitcoinjson.json")
    .await(makeGraphs);
function makeGraphs(error, stockData) {
    var theGraphdata = stockData;
    var ndx = crossfilter(theGraphdata);
    show_close_data(ndx); // Barchart
    show_data(ndx);
    
   yearly_performance(ndx);
    dc.renderAll();
};
function show_close_data(ndx) {
  var allStockClose  = ndx.dimension(dc.pluck('Close'));

  var total_Close = allStockClose.group().reduceSum(function(d) {return d.Close / 100;});
 
  var width = document.getElementById("quarter").offsetWidth;

  

  dc.barChart("#quarter")
        .width(800,width)
        .height(300)
        .margins({
            top: 10,
            right: 50,
            bottom: 50,
            left: 70
        })
        .dimension(allStockClose)
        .elasticX(true)
        
        .barPadding(0.25)
        .group(total_Close)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Date")
        .yAxisLabel("Close")
        .yAxis().ticks(20)
        
        ;
        
        ///everytime they click on each bar they are getting the average of all the close.figures put together
        ///i need the dates to be put on the bar
};
function show_data(ndx) {
var closeDimension = ndx.dimension(function(data) { 
    return data.Close; 
 });
 var closeGroup = closeDimension.group().reduceCount();

 var width1 = document.getElementById("quarter").offsetWidth;

 
        dc.pieChart("#quarter1")
            .width(360,width1)
            .height(360)
            .dimension(closeDimension)
            .group(closeGroup)
            .legend(dc.legend("Date"));
            

};


function yearly_performance(ndx){


  var theOpenDimension = ndx.dimension(function(data) { 
      return data.Close;
   });
   var total_Close = theOpenDimension.group().reduceSum(function(d) {return d.Close / 100;});;


   var width1 = document.getElementById("yearly").offsetWidth;

   
   
  dc.lineChart("#yearly")
   .width(width1)
   .height(300)
   .x(d3.scale.ordinal())
		.xUnits(dc.units.ordinal)
   .brushOn(false)
   
   .yAxisLabel("Close")
   .xAxisLabel("Date Starting from 2015")
   .dimension(theOpenDimension)
   .group(total_Close);
   

};








  function myFunction0() {
    document.getElementById("Tableinsights").innerHTML = "(Source-CNN) The September stock slump came back with a vengeance in 2014. The S&P 500 finished the month down over 1.5%, its worst performance since January. The Nasdaq -- the main gauge of tech and biotech stocks -- lost 1.9%. Even the Dow, the index that tracks America's large and well established companies, ended slightly in the red, down 0.3%.It's a valid question to ask. There was so much excitement in September, what with Alibaba (BABA) becoming the largest initial public offering in history, and the S&P 500 and Dow actually setting records. Then things turned sour.";
  };

  function myFunction1() {
    document.getElementById("Tableinsights2").innerHTML = "(Source-CNN)-Investors probably wished they had hibernated this January. It was the worst month for stocks since this month last year.The Dow shed 3.7%, the S&P 500 has lost 3.1%, and the Nasdaq is over 2.1% lower.Talk about a bad start to the year. A quick glance at the chart below shows what a whiplash ride 2015 has been so far with 7 days where the market swung up or down more than 200 points.Related: Bears warn: A crisis could be near.There's an adage on Wall Street that the early days of the year are a good predictor of the full-year. Historically speaking, there's only about a 50-50 probability that the stock market will end the year on a positive note if January saw market declines, according to the Stock Trader's Almanac.    ";
  };

  function myFunction2() {
    document.getElementById("Tableinsights3").innerHTML = "(Source-CNN)-Stock markets around the world are in high-five mode.Investors are doing a happy dance after an uplifting report showed U.S. jobs grew in April and the United Kingdom's election results gave Prime Minister David Cameron and his conservative party a clear victory.The Dow surged 267 points (nearly 1.5%) in afternoon trading Friday. That's one of the best trading days of the year. The S&P 500 and Nasdaq indexes are also ended more than 1% higher.In fact, all 30 stocks that make up the Dow index finished up Friday, and only about 40 of the 500 American companies in the S&P 500 index ended in the red..Related: Good news: U.S. economy adds 223,000 jobs.The euphoria stems from signs that the U.S. economy is rebounding this spring much like last year. The economy continued to add a very healthy number of jobs -- 223,000 -- in April. Anything over 200,000 is considered robust. ";
  };
  function myFunction3() {
    document.getElementById("Tableinsights4").innerHTML = "(Source-CNN)After an unprecedented 1,000-point decline at the open on Monday, the Dow closed with a loss of nearly 600 points.It was an extremely turbulent day for U.S. stocks driven by deep fears about China's economic slowdown. Stocks staged a comeback that nearly brought the Dow back into positive territory but that ultimately failed.The 588-point decline was the worst for the Dow since August 2011.Global fears about China's economic slowdown are shaking stock markets around the world for a second week in a row. The wave of selling knocked the S&P 500 into correction mode for the first time since 2011 and the Dow to its lowest close in a year and a half.    ";
  };
  function myFunction4() {
    document.getElementById("Tableinsights5").innerHTML = "(Source-CNN)Fear took over the American stock market in January -- and the results weren't pretty at all.Even though the Dow surged 397 points on Friday, it still lost 5.5% of its value in January. That is the deepest monthly decline since the freakout of last August.The Nasdaq fared even worse, sinking nearly 8%, its worst month since May 2010 when the infamous flash crash spooked investors.January got off on a terrible note, with panic about the slowdown in China and crashing oil prices sending the Dow to its worst 10-day start to a year on record going back to 1897.    ";
  };
  function myFunction5() {
    document.getElementById("Tableinsights6").innerHTML = "(Source-CNN)The stock market should have carried a warning in 2016: Steep drops and sudden acceleration may cause whiplash.From crashing oil prices that fueled Wall Street's worst-ever start to a year, to unpredictable political events like Brexit and the election of Donald Trump, the year in stocks wasn't for the faint of heart.Those who held on were rewarded handsomely: The resilient Dow closed 2016 more than 4,300 points above its January low of 15,451. A post-election surge, built around Trump's stimulus promises, has carried the Dow almost to 20,000 for the first time.In the end, all three major indexes notched healthy gains in 2016. The Dow was up 13.4%; the S&P gained 9.5%; and the Nasdaq was up 7.5%. That's not bad considering both the Dow and S&P 500 suffered slight losses in 2015.    ";
  };
  function myFunction6() {
    document.getElementById("Tableinsights7").innerHTML = "(Source-CNN)The U.S. stock market traded sharply lower this morning, and was unable to reverse direction at all in the afternoon. At the close of the session, all of the major averages finished deep in negative territory, and at their lows for the day. The Dow Jones Industrial Average was down 394 points; the S&P 500 Index was off 53 points; and the NASDAQ was down 134 points. Today’s selling was widespread, as decliners outnumbered advancers by an overwhelming margin on the NYSE. Further, all of the major equity sectors lost considerable ground, with pronounced weakness in the energy and basic materials issues. The utility shares, which are largely held for income, also traded lower today    ";
  };
  function myFunction7() {
    document.getElementById("Tableinsights8").innerHTML = "(Source-CNN)Dow 20,000 is finally here.After weeks of close calls, the Dow made history on Wednesday by blowing past that key level for the first time ever. The Dow climbed 156 points to 20,069 and was joined in record territory by the S&P 500 and Nasdaq.The historic milestone leaves the Dow up more than 1,700 points since President Donald Trump's victory in November. The achievement is evidence of how optimistic investors have become about the prospects for the U.S. economy.The stock market has given him this extraordinary vote of approval. Happy days are here again, said Ed Yardeni, president of Yardeni Research.Wall Street is clearly betting that Trumps plans to slash taxes, ramp up infrastructure spending and cut regulation will make the American economy grow faster. If that happens, without any disruptions to global trade, it could propel corporate profits, the lifeblood of stock prices.    ";
  };
  function myFunction8() {
    document.getElementById("Tableinsights9").innerHTML = "(Source-CNN)Is Wall Street finally getting ready to throw in the towel on President Trump? Perhaps.Stocks fell sharply Wednesday following reports of a memo from former FBI Director James Comey that says Trump asked him to stop the investigation of former national security adviser Michael Flynn.The Dow ended 373 points lower Wednesday -- about a 1.8% decline. It's the biggest drop since September.A key measure of market volatility also spiked. The common I word in the market lexicon -- inflation -- is now being replaced by whispers of impeachment.With a growing chorus of Democrats accusing Trump of obstructing justice and even calling for his impeachment, the Trump administration could come to an early season finale, wrote Lukman Otunuga, a research analyst with currency broker FXTM.Gold prices have popped over the past week too. The yellow metal often does well when investors are nervous. It's a classic flight to safety bet. The US dollar has also sunk recently against the euro and other currencies. And virtual currency Bitcoin has soared.";
  };
  function myFunction9() {
    document.getElementById("Tableinsights10").innerHTML = "Summer is unofficially over now that investors have returned from the long Labor Day weekend. But is the year-long market rally about to end as well?Stocks fell on Tuesday, with the Dow dropping nearly 234 points, or more than 1%.A more than 5% drop in defense giant United Technologies (UTX) was the main culprit, as investors expressed concerns about UTX's $23 billion deal to buy Rockwell Collins (COL).But Wall Street giants Goldman Sachs (GS) and JPMorgan Chase (JPM) dropped a few percentage points as well. Big banks would be hit hard by any slowdown in the global economy.And CNNMoney's Fear & Greed Index, which measures seven indicators of market sentiment, slid back into fear levels.That's an ominous sign as the month of September kicks off. September is historically the worst month of the year for the stock market. And this particular September could wind up being a particularly tough one for investors.";
  };
  function myFunction10() {
    document.getElementById("Tableinsights11").innerHTML = "(Source-CNN)Turbulence is making a comeback on Wall Street.The Dow opened with a 261-point leap on Wednesday, then gave up all those gains and more, then bounced back into the green to finish up 73.Earlier this week, the Dow lost 540 points over two days, its worst back-to-back percentage drop since September 2016.Both the Dow and the S&P 500 finished higher for the 10th month in a row, the longest streak since 1959. But the gyrations this week are notable because Wall Street's months-long powerhouse rally has been so calm.Now investors are wondering whether the quiet is over. The VIX (VIX), which measures volatility in the market, has spiked 30% this week to a five-month high. And the S&P 500 broke a record streak without consecutive drops of 0.5%    ";
  };
  function myFunction11() {
    document.getElementById("Tableinsights12").innerHTML = "(Source-CNN)2018 was a record-setting year for stocks, but it's one investors would rather forget.The Dow fell 5.6%. The S&P 500 was down 6.2% and the Nasdaq fell 4%. It was the worst year for stocks since 2008 and only the second year the Dow and S&P 500 fell in the past decade. (The S&P 500 and Dow were down slightly in 2015, but the Nasdaq was higher that year.)A WILD TIME FOR STOCKS.Stocks just about everywhere fell.Why Washington is making Wall Street nervous.A head-spinning, jaw-dropping 10 days on the market.December was a particularly dreadful month: The S&P 500 was down 9% and the Dow was down 8.7% — the worst December since 1931. In one seven-day stretch, the Dow fell by 350 points or more six times. This year's Christmas Eve was the worst ever for the index.The S&P 500 was up or down more than 1% nine times in December alone, compared to eight times in all of 2017. It moved that much 64 times during the year.2018 wasn't all bad. The S&P 500 set an all-time record on September 20, and the Dow closed at its record on October 3. The Dow also closed more than 1,000 points higher on December 26 — the first time it ever accomplished that feat.But 2018 will be remembered for its extreme volatility.    ";
  };
  function myFunction12() {
    document.getElementById("Tableinsights13").innerHTML = "(Source-CNN)September of all — the financial meltdown in 2008.But if you sat out the market this month, you missed a decent rally.With trading for September set to end on Friday, the Dow is up nearly 600 points, a jump of more than 2%. The S&P 500 has notched a small increase as well. Both indexes are near all-time highs.The Nasdaq is down in September. So is the Russell 2000 (RUT), a collection of smaller US stocks. But many blue chip stocks have enjoyed solid pops.Chipmaker AMD (AMD) — by far the best performing stock in the S&P 500 this year, with a gain of more than 200% — has surged more than 25% this month alone.Dow components Boeing (BA) and Caterpillar (CAT), two stocks that do really well when the broader economy is humming, are up 6% and 10% respectively — despite worries about a trade war with China. And Exxon Mobil (XOM) has surged 7% as oil prices have rebounded.Several consumer stocks have also sported solid September gains, yet another sign that Americans are feeling confident enough to spend more.";
  };
  function myFunction13() {
    document.getElementById("Tableinsights14").innerHTML = "(Source-CNN)The last time stocks did this well in January, Tom Brady was a tween and Los Angeles Rams coach Sean McVay was a toddler.The S&P 500 and the Dow are each up more than 7% this month. Those mark the biggest gains since January 1987 and January 1989, respectively.The S&P 500 had its best monthly overall gain since October 2015, according to Jodie Gunzberg, head of US Equities at S&P Dow Jones Indices.It's an amazing turnaround for the market considering that December was the worst month for stocks in nearly 90 years.Investors were afraid that the Fed was hellbent on raising interest rates several times in 2019 even though there was little evidence of inflation becoming a problem anytime soon.Stocks have surged in recent weeks because of relatively strong corporate earnings, continued optimism about the US economy and a big shift in the Federal Reserve's interest rate plans for the rest of this year.    ";
  };
  function myFunction14() {
    document.getElementById("Tableinsights15").innerHTML = "(Source-CNN)U.S. stocks and commodities tumbled after China retaliated with higher tariffs on a range of American goods. Treasuries jumped with the Japanese yen on demand for haven assets.The S&P 500 dropped the most in four months, the Dow Jones Industrial Average slumped more than 600 points and the Nasdaq Composite saw the biggest decline of the year after China targeted some of the nation’s biggest exporters. Both Boeing and Caterpillar Inc. fell fell nearly 5%, while Apple Inc. lost 5.8%. The new penalties also took aim at American farmers, driving down soybean and cotton prices. The dollar rallied and the 10-year Treasury yield fell to the lowest level since late March.Shares briefly came off lows during Monday’s session after President Donald Trump indicated he’ll speak with China’s Xi Jinping at the end of June during the G-20 summit and said he hasn’t yet decided about fresh tariffs on the remaining $300 billion in Chinese imports.Trade rattled financial markets again, with stocks sinking for the fifth time in six sessions since China’s defiance of Trump’s warning not to retaliate for his imposition of higher tariffs Friday escalated the skirmish, driving demand for havens from gold to the yen while punishing risk assets. Several banks have warned that the eruption increases the likelihood of a slowdown in global growth that would dent corporate profits.    ";
  };
  function myFunction15() {
    document.getElementById("Tableinsights16").innerHTML = "(Source-CNN)Stocks on Monday reversed last week’s losses amid signs of another salvo in the U.S.-China trade war. Bloomberg reported that the Trump administration was considering limiting U.S. investment into China by delisting Chinese companies from U.S. stock exchanges and curbing Americans’ exposure to Chinese assets in government pensions funds.However, the U.S. Treasury Department has since partially refuted the report, writing in a statement that the “administration is not contemplating blocking Chinese companies from listing shares on U.S. stock exchanges at this time.” The response, however, did not address other means of limiting U.S. portfolio flows to China.Shares of Chinese firms listed on U.S. stock exchanges including Alibaba (BABA) and Baidu (BIDU) held onto gains from early trading as concerns over their delisting were put to rest.High-level talks between the U.S. and China are set to take place in Washington, D.C., in mid-October. Data on the Chinese economy has remained choppy in the weeks since the last mid-level talks between the two sides in September, with these reports reflecting the impact of the trade war with the U.S. on the world’s second largest economy.A new print overnight showed an unexpected increase in activity for China’s key manufacturing sector, with domestic consumption helping to offset weakness in foreign demand.";
  };
  function myFunction16() {
    document.getElementById("Tableinsights17").innerHTML = "(Source-CNN)Worried investors dumped stocks again Tuesday as American officials warned that it was only a matter of time before the coronavirus outbreak spreads to the United States.A day after its worst one-day slide in two years, the S&P 500 closed down 3 percent on Tuesday, a decline that put the index deeper in the red for 2020.At this point the market is resigning itself to the fact that the impact of the coronavirus is going to be well beyond China and the first quarter of 2020, said Yousef Abbasi, global market strategist at INTL FCStone, a financial services and brokerage firm.Since the outbreak first emerged in January, the primary concern among economists and investors has been how a temporary paralysis of the Chinese economy — the world’s second largest — would affect global supply chains. For weeks, American investors paid little mind: As recently as last Wednesday, the S&P 500 was at a record high.";
  };
  function myFunction17() {
    document.getElementById("Tableinsights17").innerHTML = "(2020-01-01)(Source-CNN)Worried investors dumped stocks again Tuesday as American officials warned that it was only a matter of time before the coronavirus outbreak spreads to the United States.A day after its worst one-day slide in two years, the S&P 500 closed down 3 percent on Tuesday, a decline that put the index deeper in the red for 2020.At this point the market is resigning itself to the fact that the impact of the coronavirus is going to be well beyond China and the first quarter of 2020, said Yousef Abbasi, global market strategist at INTL FCStone, a financial services and brokerage firm.Since the outbreak first emerged in January, the primary concern among economists and investors has been how a temporary paralysis of the Chinese economy — the world’s second largest — would affect global supply chains. For weeks, American investors paid little mind: As recently as last Wednesday, the S&P 500 was at a record high.";
  };
  


