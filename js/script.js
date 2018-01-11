$(document).ready(function () {
  /* Variable Declaration */
  var contentArray=["<div><b>Customer Satisfaction scores can be manipulated</b>. Because they are surveys, customer satisfaction scores are very sensitive to item wording and administration. When car manufacturers began trying to measure dealer satisfaction, they were bedeviled by dealer personnel trying to influence how customers filled out the surveys.<br><br>At one dealership, salespeople offered customers free oil changes if they would send in a survey that had been already filled out by the salesperson.</div>","<div><b>The curse of rising expectations</b>. As your company performs well relative to expectations, customers may adjust their expectations higher. This makes it that much harder for companies to exceed expectations.","<b>Not all customers can be satisfied by a firm.</b> Some customers have needs your business model cannot serve, or are &#8220;complainers.&#8221;</div>","<b>Satisfaction can vary dramatically within your customer base.</b> It's very common for different segments of customers to have differing opinions about your company.","<b>Customers evaluate you relative to a set of expectations that may involve external comparisons.</b> Comparisons to competing products and experiences mean satisfaction with your product is, to some extent, dependent on things you don't control. The most common external benchmarks are:<ul class='list-item'><li>Competing products (&#8220;Why isn't your product as good as X?&#8221;)</li><li>Non-competing products (&#8220;If Amazon can get my order to me in three days, why can't you?&#8221;)</li><li>Other customers (&#8220;Why don't I get the same deal you gave Joe?&#8221;)</li></ul><div class='para-content'>The latter two comparisons have become more common as the Internet has made it easier to compare across product categories and customers.","<b>Satisfaction indices often measure the satisfaction of your current customers only.</b> Your current customers like you. That's why they are your current customers. Relying only on a sample of current customers is likely to exaggerate how satisfied the market is with you generally.</div>"];

  var contentArray1=["Make sure your survey is administered centrally or by a third-party held to rigorous standards.","Use market research to understand how much customers are willing to pay for performance improvements.","First, one of your criteria for choosing target customers should be that they are ones you can serve. If you accidentally have acquired a customer you cannot satisfy, you can:<br><ul><li>Change the customer's behavior.</li><li>Change the economics of serving that customer.</li><li>Get rid of the customer.</li></ul>","In surveying your customers, be sure to collect segmentation data that will let you understand important segment differences. This is an opportunity in the sense that what you learn about segments can:<ul><li>Give you early warning of customers who may be preparing to defect. </li><li>Suggest customer segments that particularly like your offerings, and so should be targeted more intensely.</li></ul>","You can't control this, but you can use research to try to understand it. Qualitative research can help you understand the kinds of comparisons customers make regarding your product, and to whom. This is another opportunity to understand your strengths and weaknesses.","Make a point of periodically doing research on potential customers (either competitors' or ones new to the product category) and former customers to understand how non-customers view offerings in your industries. Former customers can be a particularly rich source of information on flaws in your business model assuming these are customers you want!"];
  var currentItem;
  var count = 0;
  var next = 0;
/*Starting Content*/
    currentItem = $('.start-content').attr('data-pos');
  	$("#leftText"+currentItem).hide().css({right:'600px'});
  	$("#leftText"+currentItem).show().stop().animate({right:'1px'}).html(contentArray[currentItem]);
  	$(".next-button").addClass("hide");
   function showContent() {
      count++;
      $('.right-content').html(contentArray1[count - 1]).attr("tabindex","0").focus();
      $(".next-button").removeClass("hide");
  	  $(".button-func").addClass("hide");
      if(count==6){
          $(".next-button").fadeTo(500, 0.2).attr("tabindex", "-1").addClass("pointer-events-none");
        } else {
          $(".next-button").fadeTo(500, 1).removeClass("pointer-events-none").attr("tabindex","0");
        }
       }

  function showNextContent() {
      next++;
      $("#top-left").focus();
      $('.right-content').attr("tabindex","-1");
    $(".next-button").fadeTo(500, 0.2).addClass("pointer-events-none").attr("tabindex","-1");
    $(".start-content").hide().css({right:'600px'});
    $('.start-content').show().stop().animate({right:'1px'}).html(contentArray[next]);
	  var timer= setTimeout(function(){
		$(".button-func").removeClass("hide");
		clearTimeout(timer);
	}, 800);
    $('.right-content').html("");
    $("#leftText"+currentItem).attr("tabindex", "0");
    if(next==5) {
    $(".start-content").hide().css({right:'600px'});
    $('.start-content').show().stop().animate({right:'1px'}).html(contentArray[next]);
    $(".button-func").removeClass("hide");
   	$(".restart-button").show();
    $("#leftText"+currentItem).attr("tabindex", "0");
    }
}
function showIntro() {
  currentItem = $('.start-content').attr('data-pos');
	$("#text"+currentItem).hide().css({right:'600px'});
	$("#text"+currentItem).show().stop().animate({right:'1px'}).html(contentArray[currentItem]);
	$(".next-button").addClass("hide");
}
/* Click Function */
  $(".button-func").click(function() {
    showContent();
  });
   $(".next-button").click(function(){
    showNextContent();
   });
  $(".restart-button").click(function(){
    location.reload();
  });
  $(".restart-button").keydown(function(e){
    if(e.which==13)
    {
    location.reload();
    }
  });

  /* Keyborad Events*/
  $('.next-button').keydown(function (e) {
  	if (e.which == 13) {
      $('#top-left').attr("tabindex", "0").focus();
      $('#top-right').attr("tabindex", "0");
      showNextContent();
    }
  });
  $('.next-button').focusin(function (e) {
      $(this).addClass("next-button-hover");
      $(".next-button").fadeTo(500, 1).removeClass("pointer-events-none").attr("tabindex","0");
    if(count == 4) {
        $(".restart-button").attr("tabindex", "0");
        $('.button-func').attr("tabindex", "0");
      }
  });
  $('.next-button').focusout(function (e) {
  $(this).removeClass("next-button-hover");
});
$('.button-func').keydown(function (e) {
  	if (e.which == 13) {
      showContent();
      $("#rightText"+currentItem).attr("tabindex", "0").focus();
  }
  });

  $('.restart-button').focusin(function (e) {
      $(this).addClass("restart-button-hover");
  });
  $('.restart-button').focusout(function (e) {
      $(this).removeClass("restart-button-hover");
  });

$("#rightText"+currentItem).focusin(function (e) {
  if (e.which == 9) {
    $('#top-left').attr("tabindex", "0");
    $('#top-right').attr("tabindex", "0");
    if(count==4){
    $(".next-button").attr("tabindex", "-1");
    $(".restart-button").attr("tabindex", "0").focus();
    }
}
});
   });
