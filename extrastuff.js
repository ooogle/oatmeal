function checkacheivs(){
    var acks = [{id:"1click",text:'Click: you clicked the oat!',req: oat_count==1},{id:"2click",text:'Double-Click: you clicked the oat twice!',req: oat_count==2},{id:"10click",text:'Deca-Clicker: you clicked the oat ten times!',req: oat_count == 10},{id:"69_",text:'69 oats. nice.',req: oat_count >= 69},{id:"first-spoon",text:'You have a spoon!',req: spoons >= 1},{id: '100-oats', text: '100 oats! wow! That\'s a lot!', req: oat_count >= 100},{id: '50-oats', text: '50 oats! wow!', req: oat_count >= 50},{id: 'bow1', text: 'Your first oat bowl', req:  bowls >= 1},{id: 'pot1', text: 'Your first oat pot', req: pots >= 1},{id: 'cow1', text: 'Your first oat cow', req:  cows >= 1},{id: 'cow10', text: 'Farmer: you have lots of cows', req: cows >= 10},{id: 'cow20', text: 'Local legend: you are known for your numerous cows', req: cows >= 20},{id: 'cow30', text: 'Mad cow disease: you are obsessed with your cows', req: cows >= 30},{id: 'cow40', text: 'PETA has its eye on you. One wrong move and your cows could be confiscated', req: cows >= 40},{id: 'cow50', text: 'Great cow Guru: keep an eye on your feilds...', req: cows >= 50},{id: '200-oats', text: 'Two Hundred oats! wow!', req: oat_count >= 200},{id: '500-oats', text: 'Five Hundred oats! wow!', req: oat_count >= 500},{id: '1000-oats', text: 'Bob\'s red mill: you have one thousand oats', req: oat_count >= 1000},{id: '10-ops', text: 'Ten OPS! That\'s a lotta OATS!', req:  ops >= 10},{id: '100-ops', text: 'You are making one hundred oats every second. That\'s amazing.', req: ops >= 100},{id: '1000-ops', text: 'Thousand red mills: you have 1,000 OPS', req: ops >= 1000},{id: '10000-ops', text: 'Oat hero: you have 100,000 OPS', req: ops >= 100000},{id: 'gold50', text: 'Crazy Clicker: you click like crazy!', req: addition_multiplier >= 50},{id: 'cinnamon1', text: 'The lottery is a risky business', req: cinnamons >= 1},{id: 'spoon_guru', text: 'Spoon Guru: you have fifty spoons', req:  spoons >= 50},{id: 'spoon_lord', text: 'Spoon lord: you have one hundred spoons', req: spoons >= 100},{id: '150_oats', text: 'You have 150 oats! That\'s a lot!', req: oat_count >= 150},{id: '420_oats', text: '420 oats: blaze it!', req: oat_count >= 420},{id: 'bil_oats', text: 'One billion oats oats... wow. just wow.', req: oat_count >= 1000000000},{id: 'million_oats', text: 'A whole million oats', req: oat_count >= 1000000},{id: '25_oats', text: 'A whole twenty five oats', req: oat_count >= 25},{id: '30_oats', text: 'Quaker: you have 30 oats', req: oat_count >= 30},{id: '45_oats', text: 'Brother, may I have some oats?', req: oat_count >= 45},{id: 'lottery_master', text: 'Lottery master: You\'re a real big gambler', req: cinnamons >= 20},{id: '300_oats', text: 'A whole 300 oats', req:  oat_count >= 300},{id: '600_oats', text: 'Man, six hundred', req: oat_count >= 600},{id: '2-mil_oats', text: 'A whole 2 million oats', req: oat_count >= 2000000},{id: '4-mil_oats', text: 'Oat country: you have enough oats to start a small nation', req: oat_count >= 4000000},{id: '100-mil_oats', text: 'Boomer: you have been playing this game so long society simply responds to all you say with "ok boomer"', req: oat_count >= 100000000},{id: '10-mil_oats', text: 'Ten million oats... You sure could buy a lotta oat cows with that!', req: oat_count >= 10000000},{id:'3-mil_oats',text:'Oat fetish: you are <a href="https://answers.yahoo.com/question/index?qid=20110813210020AAzGwIe" target="_blank" style="pointer-events:all !important; z-index:30; color:	#00df12 !important;" title="click me!">sexually attracted to oats</a>',req:oat_count >= 3000000},{id: 'tril', text: 'Oat Lord: you have a trillion oats', req: oat_count >= 1000000000000},{id: '2tril', text: 'TWO TRILLION OATS OH MY GAWD THAT\'S INSANE!!!!!!!!!!!!!', req: oat_count >= 2000000000000},{id: '10tril', text: 'you have 10 trillion oats. crazy.', req: oat_count >= 10000000000000},{id: '100tril', text: 'one hundred trillion oats. that\'s 100,000,000,000,000', req: oat_count >= 100000000000000},{id: 'quad', text: 'you have a quadrillion oats', req:  oat_count >= 1000000000000000},{id: 'pressed_g', text: 'You absolutely terrible person! I<i>told</i> you not to press G!', req: fall_sprite=="https://raw.githubusercontent.com/ooogle/oatmeal/master/fly.png"},{id: 'granary1', text: 'You have a granary!', req: granarys >= 1},{id: 'debt1', text: 'Debt: your oat balance is in the negatives', req: oat_count < 0},{id: 'peta-kill', text: 'Peta wants you dead for animal abuse. Preferably burned at a stake, but any form of cruel execution will do.', req: cow_addition > 1},{id: 'temple1', text: 'You have founded a new religion', req: temples >= 1},{id: 'priest', text: 'Priest: you are a powerful leader', req: temples >= 5},{id: 'poly1', text: 'Two Gods are better than one.', req:  god_count >= 2},{id: 'poly5', text: 'Suck-up: you please five gods', req: god_count >= 5},{id: 'poly10', text: 'Your many gods love you almost as much as you love them.', req:  god_count >= 10},{id: 'poly100', text: 'Oat Messiah: Your religion has inspred the popular prog rock band "No" to create their latest album, "Neymarism"', req: god_count >= 100},{id: 'fistgold', text: 'Gold is better than wood!', req: addition_multiplier >= 2},{id: 'gold5', text: 'Dat Gold Powa: you got dat clicki\'n powa!', req: addition_multiplier >= 5},{id: 'gold15', text: 'Super cookware: your cookware is of immense power', req: addition_multiplier >= 15},{id: 'gold30', text: 'Thiccccccc pots: your pots are hella thicccccccc', req: addition_multiplier >= 30}];
    for(var i=0; i < acks.length; i++){
        if(achevs.includes(acks[i].id) == false && acks[i].req){
            achieve(acks[i].id,acks[i].text);
        }
    }
    //shpeshul things:
    if(achevs.includes('poly50') == false && god_count >= 50){
        achieve('poly50','The fifty gods way up in the sky just gave you fifty oats each');
        oat_count+=50*50;
    }
    if((cow_addition == 2 || cow_addition == -2) && achevs.includes("cow_rebellion") == false && new Date().getMinutes() - minjection >= 5 && cows >= 30){
        cow_rebellion();
    }
    /*
    to do:
    - make the deals an array like how the achevs are
    */
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
        if(randomate(0,5) == 2){
            oat_count+=oat_count*0.5;
            if(randomate(0, 5000) == 10){
                oat_count=oat_count*5;
                if(randomate(0, 800000) == 10){
                oat_count+= randomate(100000, 1000000000000);
                }
            }
        }
        achieve("", "you won the cinnamon lottery!", "BIG WIN!");
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
              achieve("", "Oatnog just got you "+Math.round(oat_count*0.2)+" oats!", "EPIC GIFT!");
              oat_count = oat_count*1.2;
          }
        }
    }
          oatnog();
      }, 60000);
  }