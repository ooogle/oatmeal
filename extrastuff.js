function checkacheivs(){
    if(achevs.includes('1click') == false && oat_count == 1){
        achieve('1click','Click: you clicked the oat!');
    }
    if(achevs.includes('2click') == false && oat_count == 2){
        achieve('2click','Double-Click: you clicked the oat twice!');
    }
    if(achevs.includes('10click') == false && oat_count == 10){
        achieve('10click','Deca-Clicker: you clicked the oat ten times!');
    }
    if(achevs.includes('69_') == false && oat_count >= 69){
        achieve('69_','69 oats. nice.');
    }
    if(achevs.includes('first-spoon') == false && spoons >= 1){
        achieve('first-spoon','You have a spoon!');
    }
    if(achevs.includes('50-oats') == false && oat_count >= 50){
        achieve('50-oats','50 oats! wow!');
    }
    if(achevs.includes('100-oats') == false && oat_count >= 100){
        achieve('100-oats','100 oats! wow! That\'s a lot!');
    }
    if(achevs.includes('bow1') == false && bowls >= 1){
        achieve('bow1','Your first oat bowl');
    }
    if(achevs.includes('pot1') == false && pots >= 1){
        achieve('pot1','Your first oat pot');
    }
    if(achevs.includes('cow1') == false && cows >= 1){
        achieve('cow1','Your first oat cow');
    }
    if(achevs.includes('cow10') == false && cows >= 10){
        achieve('cow10','Farmer: you have lots of cows');
    }
    if(achevs.includes('cow20') == false && cows >= 20){
        achieve('cow20','Local legend: you are known for your numerous cows');
    }
    if(achevs.includes('cow30') == false && cows >= 30){
        achieve('cow30','Mad cow disease: you are obsessed with your cows');
    }
    if(achevs.includes('cow40') == false && cows >= 40){
        achieve('cow40','PETA has its eye on you. One wrong move and your cows could be confiscated');
    }
    if(achevs.includes('cow50') == false && cows >= 50){
        achieve('cow50','Great cow Guru: keep an eye on your feilds...');
    }
    if(achevs.includes('200-oats') == false && oat_count >= 200){
        achieve('200-oats','Two Hundred oats! wow!');
    }
    if(achevs.includes('500-oats') == false && oat_count >= 500){
        achieve('500-oats','Five Hundred oats! wow!');
    }
    if(achevs.includes('1000-oats') == false && oat_count >= 1000){
        achieve('1000-oats','Bob\'s red mill: you have one thousand oats');
    }
    if(achevs.includes('10-ops') == false && ops >= 10){
        achieve('10-ops','Ten OPS! That\'s a lotta OATS!');
    }
    if(achevs.includes('100-ops') == false && ops >= 100){
        achieve('100-ops','You are making one hundred oats every second. That\'s amazing.');
    }
    if(achevs.includes('1000-ops') == false && ops >= 1000){
        achieve('1000-ops','Thousand red mills: you have 1,000 OPS');
    }
    if(achevs.includes('1000-ops') == false && ops >= 10000){
        achieve('1000-ops','INSANE OPS: you have 1,0000 OPS');
    }
    if(achevs.includes('10000-ops') == false && ops >= 100000){
        achieve('10000-ops','Oat hero: you have 100,000 OPS');
    }
    if(achevs.includes('cinnamon1') == false && cinnamons >= 1){
        achieve('cinnamon1','The lottery is a risky business');
    }
    if(achevs.includes('spoon_guru') == false && spoons >= 50){
        achieve('spoon_guru','Spoon Guru: you have fifty spoons');
    }
    if(achevs.includes('spoon_lord') == false && spoons >= 100){
        achieve('spoon_lord','Spoon lord: you have one hundred spoons');
    }
    if(achevs.includes('150_oats') == false && oat_count >= 150){
        achieve('150_oats','You have 150 oats! That\'s a lot!');
    }
    if(achevs.includes('420_oats') == false && oat_count >= 420){
        achieve('420_oats','420 oats: blaze it!');
    }
    if(achevs.includes('bil_oats') == false && oat_count >= 1000000000){
        achieve('bil_oats','One billion oats oats... wow. just wow.');
    }
    if(achevs.includes('million_oats') == false && oat_count >= 1000000){
        achieve('million_oats','A whole million oats');
    }
    if(achevs.includes('25_oats') == false && oat_count >= 25){
        achieve('25_oats','A whole twenty five oats');
    }
    if(achevs.includes('30_oats') == false && oat_count >= 30){
        achieve('30_oats','Quaker: you have 30 oats');
    }
    if(achevs.includes('45_oats') == false && oat_count >= 45){
        achieve('45_oats','Brother, may I have some oats?');
    }
    if(achevs.includes('lottery_master') == false && cinnamons >= 20){
        achieve('lottery_master','Lottery master: You\'re a real big gambler');
    }
    if(achevs.includes('300_oats') == false && oat_count >= 300){
        achieve('300_oats','A whole 300 oats');
    }
    if((cow_addition == 2 || cow_addition == -2) && achevs.includes("cow_rebellion") == false && new Date().getMinutes() - minjection >= 5 && cows >= 30){
        cow_rebellion();
    }
    if(achevs.includes('600_oats') == false && oat_count >= 600){
        achieve('600_oats','Man, six hundred');
    }
    if(achevs.includes('600_oats') == false && oat_count >= 600){
        achieve('600_oats','Man, six hundred');
    }
    if(achevs.includes('2-mil_oats') == false && oat_count >= 2000000){
        achieve('2-mil_oats','A whole 2 million oats');
    }
    if(achevs.includes('4-mil_oats') == false && oat_count >= 4000000){
        achieve('4-mil_oats','Oat country: you have enough oats to start a small nation');
    }
    if(achevs.includes('100-mil_oats') == false && oat_count >= 100000000){
        achieve('100-mil_oats','Boomer: you have been playing this game so long society simply responds to all you say with "ok boomer"');
    }
    if(achevs.includes('10-mil_oats') == false && oat_count >= 10000000){
        achieve('10-mil_oats','Ten million oats... You sure could buy a lotta oat cows with that!');
    }
    if(achevs.includes('3-mil_oats') == false && oat_count >= 3000000){
        achieve('3-mil_oats','Oat fetish: you are <a href="https://answers.yahoo.com/question/index?qid=20110813210020AAzGwIe" target="_blank" style="pointer-events:all !important; z-index:30; color:	#00df12 !important;" title="click me!">sexually attracted to oats</a>');
    }
    if(achevs.includes('pressed_g') == false && fall_sprite=="https://raw.githubusercontent.com/ooogle/oatmeal/master/fly.png"){
        achieve('pressed_g','You absolutely terrible person! I<i>told</i> you not to press G!');
    }
    if(achevs.includes('granary1') == false && granarys >= 1){
        achieve('granary1','You have a granary!');
    }
    if(achevs.includes("debt1") == false && oat_count < 0){
        achieve('debt1','Debt: your oat balance is in the negatives');
    }
    if(cow_addition > 1 && achevs.includes("peta-kill") == false){
        achieve("peta-kill","Peta wants you dead for animal abuse. Preferably burned at a stake, but any form of cruel execution will do.")
    }
    if(achevs.includes('temple1') == false && temples >= 1){
        achieve('temple1','You have founded a new religion');
    }
    if(achevs.includes('priest') == false && temples >= 5){
        achieve('priest','Priest: you are a powerful leader');
    }
    if(achevs.includes('poly1') == false && god_count >= 2){
        achieve('poly1','Two Gods are better than one.');
    }
    if(achevs.includes('poly5') == false && god_count >= 5){
        achieve('poly5','Suck-up: you please five gods');
    }
    if(achevs.includes('poly10') == false && god_count >= 10){
        achieve('poly10','Your many gods love you almost as much as you love them.');
    }
    if(achevs.includes('poly50') == false && god_count >= 50){
        achieve('poly50','The fifty gods way up in the sky just gave you fifty oats each');
        oat_count+=50*50;
    }
    if(achevs.includes('poly100') == false && god_count >= 100){
        achieve('poly100','Oat Messiah: Your religion has inspred the popular prog rock band "No" to create their latest album, "Neymarism"   ');
    }
    // Epic deals:
    if(achevs.includes("cow-deal1") == false && deal == false && oat_count >= 1000){
        epic_deal('Oat Cow','cows','https://oatmeal.gq/sprites/big/oat_cow.png','cow-deal1');
    }
    if(achevs.includes("granary-deal1") == false && deal == false && oat_count >= 10000){
        epic_deal('Granary','granarys','https://oatmeal.gq/sprites/big/granery.png','granary-deal1');
    }
    if(achevs.includes("temple-deal1") == false && deal == false && oat_count >= 6000){
        epic_deal('Temple','temples','https://oatmeal.gq/sprites/big/temple.png','temple-deal1');
    }
    if(achevs.includes("god-deal1") == false && deal == false && temples >= 1 && oat_count >= 1000 && god_count >=3){
        epic_deal('God','god_count','https://oatmeal.gq/sprites/big/polytheism.png','god-deal1');
    }
    if(achevs.includes("god-deal2") == false && deal == false && temples >= 1 && oat_count >= 10000 && god_count >= 3){
        epic_deal('God','god_count','https://oatmeal.gq/sprites/big/polytheism.png','god-deal2');
    }
    if(achevs.includes("temple-deal2") == false && deal == false && oat_count >= 1000100){
        epic_deal('EPIC Temple','temples','https://oatmeal.gq/sprites/big/temple.png','temple-deal2');
    }
    if(achevs.includes("cinnamon-deal1") == false && deal == false && oat_count >= 5000){
        epic_deal('Cinnamon','cinnamons','https://oatmeal.gq/sprites/big/cinnamon.png','cinnamon-deal1');
    }
    if(achevs.includes("bowl-deal1") == false && deal == false && oat_count >= 3000){
        epic_deal('Bowl','addition','https://oatmeal.gq/sprites/big/oat_bowl.png','bowl-deal1');
    }
    if(achevs.includes("spoon-deal1") == false && deal == false && oat_count >= 8000){
        epic_deal('Spoon','spoons','https://oatmeal.gq/sprites/big/spoon.png','spoon-deal1');
    }
    if(achevs.includes("temple-deal3") == false && deal == false && oat_count >= 8000){
        epic_deal('Temple, ready to worship all your gods, ','temples','https://oatmeal.gq/sprites/big/temple.png','temple-deal3');
    }
    if(achevs.includes("god-deal3") == false && deal == false && oat_count >= 2000000 && god_count >= 3){
        epic_deal('GOD','god_count','https://oatmeal.gq/sprites/big/polytheism.png','god-deal3');
    }
    if(achevs.includes("granary-deal2") == false && deal == false && oat_count >= 2000000){
        epic_deal('Granary','granarys','https://oatmeal.gq/sprites/big/granery.png','granary-deal2');
    }
    if(achevs.includes("pot-deal1") == false && deal == false && oat_count >= 3000000){
        epic_deal('Oat Pot','addition','https://oatmeal.gq/sprites/big/oat_pot.png','pot-deal1');
        addition += 5;
    }
    if(achevs.includes("pot-deal2") == false && deal == false && oat_count >= 10000000){
        epic_deal('Pot','addition','https://oatmeal.gq/sprites/big/oat_pot.png','pot-deal2');
        addition += 5;
    }
    if(achevs.includes("barrel-deal1") == false && deal == false && oat_count >= 1500000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal1');
        addition += 100;
    }
    if(achevs.includes("barrel-deal2") == false && deal == false && oat_count >= 2000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal2');
        addition += 100;
    }
    if(achevs.includes("god-deal4") == false && deal == false && temples >= 1 && oat_count >= 2500000 && god_count >=3){
        epic_deal('God','god_count','https://oatmeal.gq/sprites/big/polytheism.png','god-deal4');
    }
    if(achevs.includes("barrel-deal3") == false && deal == false && oat_count >= 3000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal3');
        addition += 111;
    }
    if(achevs.includes("granary-deal3") == false && deal == false && oat_count >= 3500000){
        epic_deal('Granary','granarys','https://oatmeal.gq/sprites/big/granery.png','granary-deal3');
    }
    if(achevs.includes("temple-deal4") == false && deal == false && oat_count >= 4500000){
        epic_deal('sacred place of holy worship ','temples','https://oatmeal.gq/sprites/big/temple.png','temple-deal4');
        addition+=500;
    }
    if(achevs.includes("barrel-deal4") == false && deal == false && oat_count >= 4000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal4');
        addition += 150;
    }
    if(achevs.includes("barrel-deal5") == false && deal == false && oat_count >= 5000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal5');
        addition += 200;
    }
    if(achevs.includes("cow-deal2") == false && deal == false && oat_count >= 5500000){
        epic_deal('Oat Cow but there\'s ten of them','cows','https://oatmeal.gq/sprites/big/oat_cow.png','cow-deal2');
        cows+=9;
    }
    if(achevs.includes("barrel-deal6") == false && deal == false && oat_count >= 8000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal6');
        addition += 1000;
    }
    if(achevs.includes("spoon-deal2") == false && deal == false && oat_count >= 9000000){
        epic_deal('Spoon cuz why not','spoons','https://oatmeal.gq/sprites/big/spoon.png','spoon-deal2');
    }
    if(achevs.includes("barrel-deal7") == false && deal == false && oat_count >= 10000000){
        epic_deal('Oat Barrel','addition','https://oatmeal.gq/sprites/barrel.png','barrel-deal7');
        addition += 3000;
    }
    if(achevs.includes("temple-deal5") == false && deal == false && oat_count >= 10000000){
        epic_deal('holy land full of temples ','temples','https://oatmeal.gq/sprites/big/temple.png','temple-deal5');
        addition+=400;
        temples+=10;
    }
}
function spoon() {
    setTimeout(function () {
        if(ops <= 300){
      for (var i = 0; i < spoons; i++) {
        oat_clicked_by_boost(Number(spoon_addition)); 
      }
    }
    else{
        for (var i = 0; i <= spoons; i+=3) {
            oat_clicked_by_boost(Number(spoon_addition)*3); 
          }
    }
      spoon();
    }, 10000);
  }
  
  function cow() {
    setTimeout(function() {
        var thinggg = 0;
        if(ops <= 50){
      for (var i = 0; i <= cows; i++) {
        oat_clicked_by_boost(cow_addition); 
          }
        }
        else if(ops <= 50000){
            for(var i = 0; i <= cows; i+=3){
                oat_clicked_by_boost(cow_addition*3);
            }
        }
        else{
            for(var i = 0; i <= cows; i+=10){
                oat_clicked_by_boost(cow_addition*10);
            }
        }
      cow();
    }, 2000);
  }
  function granary() {
    setTimeout(function() {
        if(ops <= 50){
      for (var i = 0; i < granarys; i++) {
        oat_clicked_by_boost(5); 
          }
        }
        else if(ops <= 30000){
            for(var i = 0; i < granarys; i+=3){
                oat_clicked_by_boost(15);
            }
        }
        else if(ops <= 90000){
            for(var i = 0; i <= granarys; i+=10){
                oat_clicked_by_boost(50)
            }
        }
        else{
            for(var i = 0; i <= granarys; i+=100){
                oat_clicked_by_boost(500)
            }
        }
      granary();
    }, 2000);
  }
  function temple() {
    setTimeout(function() {
        if(ops <= 50){
      for (var i = 0; i < temples; i++) {
        oat_clicked_by_boost(god_count*15); 
          }
        }
        else if(ops <= 1000){
            for(var i = 0; i < temples; i+=3){
                oat_clicked_by_boost(god_count*15*3);
            }
        }
        else if(ops <= 10000){
            for(var i = 0; i < temples; i+=10){
                oat_clicked_by_boost(god_count*15*10);
            }
        }
        else if(ops <= 50000){
            for(var i = 0; i < temples; i+=100){
                oat_clicked_by_boost(god_count*15*100);
            }
        }
        else if(ops <= 150000){
            for(var i = 0; i < temples; i+=500){
                oat_clicked_by_boost(god_count*15*500);
            }
        }
        else{
            for(var i = 0; i < temples; i+=1000){
                oat_clicked_by_boost(god_count*15*1000);
            }
        }
      temple();
    }, 2000);
  }
  function cinnamon() {
    setTimeout(function () {
    for(var i=0; i < cinnamons; i++){
      if (randomate(0, 5000) == 10) {
        oat_count += oat_count;
        console.log('wow! double oats!');
        achieve("lottery", "you won the lottery!", "BIG WIN!");
        updatecount();

      }
    }
      cinnamon();
    }, 60000);
  }
  function oatnog(){
      setTimeout(function(){
    if(new Date().getMonth() == 11){
        for(var i=0; i < oatnogs; i++){
          if(randomate(0, 10) == 5){
              console.log("oatnog rules");
              achieve("oatNog", "Oatnog just got you "+oat_count*0.2+" oats!", "EPIC GIFT!");
              oat_count = oat_count*1.2;
          }
        }
    }
          oatnog();
      }, 60000);
  }