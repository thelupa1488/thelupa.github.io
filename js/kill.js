/*$(function() {
    var title = document.title,
        animSeq = ["_", "/", "$", "-", "_"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() 
    {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) 
        {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 4) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 400);*/
    
    $(function() {
        var title = document.title,
            animSeq = 
            ["< >", "< / >", "< - >", "< _ >", "< $ >", "< T >",
            "< T/ >", "< T- >", "< T_ >", "< T$ >", "< TH >", "< TH/ >", "< TH- >",
            "< TH_ >", "< TH$ >", "< THE >", "< THE/ >", "< THE- >", "< THE_ >", "< THE$ >",
            "< THEL >", "< THEL/ >", "< THEL- >", "< THEL_ >", "< THEL$ >", "< THELU >", "< THELU/ >",
            "< THELU- >", "< THELU_ >", "< THELU$ >", "< THELUP >", "< THELUP/ >", "< THELUP- >", "< THELUP_ >",
            "< THELUP$ >", "< THELUPA >", "< THELUPA >", "< THELUPA >", "< THELUP$ >", "< THELUP_ >", "< THELUP- >",
            "< THELUP/ >", "< THELUP >", "< THELU$ >", "< THELU_ >", "< THELU- >", "< THELU/ >", "< THELU >",
            "< THEL$ >", "< THEL_ >", "< THEL- >", "< THEL/ >", "< THEL >", "< THE$ >", "< THE_ >",
            "< THE- >", "< THE/ >", "< THE >", "< TH$ >", "< TH_ >", "< TH- >", "< TH/ >",
            "< TH >", "< T$ >", "< T_ >", "< T- >", "< T/ >", "< T >", "< $ >",
            "< _ >", "< - >", "< / >", "< ☺ >"],
            animIndex = 0,
            titleIndex = 0;
    
        function doInverseSpinZeroPitch() {
            var loadTitle = title.substring(0, titleIndex);
            if (titleIndex > title.length) {
                animIndex = 0;
                titleIndex = 0
            }
            if (animIndex > 72) {
                titleIndex++;
                animIndex = 0
            }
            document.title = animSeq[animIndex];
            animIndex++
        }
          window.setInterval(doInverseSpinZeroPitch, 500);
    /*-------------------------------------------------------------------------------------------------------------------------------------------------- */
    var tKillNames = ["THELUPA", "Vanal1488", "Лава Яша", "THELUPA1488", "Упа Зал 1488", "Ben Swolo 1337", "Fitness_Trainer", "Sanraiz", "[FBI] Megafon"];
    var ctKillNames = ["♡ℳ𝓪𝓰𝓲𝓬③⓪⓪⓪♡", "𝓟𝓚𝓼𝓱𝓷𝓲𝓴", "ℋ𝓪𝓻𝓫𝓸𝓻", "AFK.Death404 💗", "ℳ𝓪𝓼𝓪𝔂𝓾𝓴𝓲𝓙𝓔", "♡𝓥𝓪𝓲𝔃𝒆𝓱𝓪𝓲𝓵♡", "Моро", "𝓐𝓻𝓽𝒆𝓶 𝓤𝓭𝓸𝓿𝓲𝓬𝓱", "1ks<3", "☣₦Ĭ₲Ħテ♏₳尺∑☣", "Doppelgänger"];
    var weapons = ["ssg", "deserteagle", "ak47"];
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', 'images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png');
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(1500).fadeOut(1500, function() {
            $(this).remove()
        }))

    }
    window.setInterval(handleKillFeed, 350)
	document.onkeydown = function(e) { 
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
	} 
	return false; 
	}; 
	function click() { 
	if (event.button==2||event.button==3) { 
	oncontextmenu='return false'; 
	} 
	} 
	document.onmousedown=click 
	document.oncontextmenu = new Function("return false;") 
	function disableWheelScroll(){
	if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
	document.body.onmousewheel = blockWheel;
	}
	function blockWheel(event){
	if (!event) event = window.event;
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if(event.preventDefault) event.preventDefault();
	else event.returnValue = false;
	}
	disableWheelScroll();
});
