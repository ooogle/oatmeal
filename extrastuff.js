function checkacheivs() {
    acks = [{ id: "1click", text: 'Click: you clicked the oat!', req: oat_count >= 1 }, { id: "2click", text: 'Double-Click: you clicked the oat twice!', req: oat_count >= 2 }, { id: "10click", text: 'Deca-Clicker: you clicked the oat ten times!', req: oat_count >= 10 }, { id: "69_", text: '69 oats. nice.', req: oat_count >= 69 }, { id: "first-spoon", text: 'You have a spoon!', req: spoons >= 1 }, { id: '100-oats', text: '100 oats! wow! That\'s a lot!', req: oat_count >= 100 }, { id: '50-oats', text: '50 oats! wow!', req: oat_count >= 50 }, { id: 'bow1', text: 'Your first oat bowl', req: bowls >= 1 }, { id: 'pot1', text: 'Your first oat pot', req: pots >= 1 }, { id: 'cow1', text: 'Your first oat cow', req: cows >= 1 }, { id: 'cow10', text: 'Farmer: you have lots of cows', req: cows >= 10 }, { id: 'cow20', text: 'Local legend: you are known for your numerous cows', req: cows >= 20 }, { id: 'cow30', text: 'Mad cow disease: you are obsessed with your cows', req: cows >= 30 }, { id: 'cow40', text: 'PETA has its eye on you. One wrong move and your cows could be confiscated', req: cows >= 40 }, { id: 'cow50', text: 'Great cow Guru: keep an eye on your feilds...', req: cows >= 50 }, { id: '200-oats', text: 'Two Hundred oats! wow!', req: oat_count >= 200 }, { id: '500-oats', text: 'Five Hundred oats! wow!', req: oat_count >= 500 }, { id: '1000-oats', text: 'Bob\'s red mill: you have one thousand oats', req: oat_count >= 1000 }, { id: '10-ops', text: 'Ten OPS! That\'s a lotta OATS!', req: ops >= 10 }, { id: '100-ops', text: 'You are making one hundred oats every second. That\'s amazing.', req: ops >= 100 }, { id: '1000-ops', text: 'Thousand red mills: you have 1,000 OPS', req: ops >= 1000 }, { id: '10000-ops', text: 'Oat hero: you have 100,000 OPS', req: ops >= 100000 }, { id: 'gold50', text: 'Crazy Clicker: you click like crazy!', req: addition_multiplier >= 50 }, { id: 'cinnamon1', text: 'The lottery is a risky business', req: cinnamons >= 1 }, { id: 'spoon_guru', text: 'Spoon Guru: you have fifty spoons', req: spoons >= 50 }, { id: 'spoon_lord', text: 'Spoon lord: you have one hundred spoons', req: spoons >= 100 }, { id: '150_oats', text: 'You have 150 oats! That\'s a lot!', req: oat_count >= 150 }, { id: '420_oats', text: '420 oats: blaze it!', req: oat_count >= 420 }, { id: 'bil_oats', text: 'One billion oats oats... wow. just wow.', req: oat_count >= 1000000000 }, { id: 'million_oats', text: 'A whole million oats', req: oat_count >= 1000000 }, { id: '25_oats', text: 'A whole twenty five oats', req: oat_count >= 25 }, { id: '30_oats', text: 'Quaker: you have 30 oats', req: oat_count >= 30 }, { id: '45_oats', text: 'Brother, may I have some oats?', req: oat_count >= 45 }, { id: 'lottery_master', text: 'Lottery master: You\'re a real big gambler', req: cinnamons >= 20 }, { id: '300_oats', text: 'A whole 300 oats', req: oat_count >= 300 }, { id: '600_oats', text: 'Man, six hundred', req: oat_count >= 600 }, { id: '2-mil_oats', text: 'A whole 2 million oats', req: oat_count >= 2000000 }, { id: '4-mil_oats', text: 'Oat country: you have enough oats to start a small nation', req: oat_count >= 4000000 },{id: 'beetle-1', text: 'You have an Oat Beetle', req: beetles > 0},{id: 'beetle-2', text: 'You have two beetles', req: beetles > 1},{id: '50-beetles', text: 'Beetle master: you have 50 beetles', req: beetles >= 50},{id: '200-beetles', text: 'The Beetles: your beetles have inspired the pop band The Beetles to write their hit song, <i>I am the Beetle, I am the oat man</i>.', req: beetles >= 200}, { id: '100-mil_oats', text: 'Boomer: you have been playing this game so long society simply responds to all you say with "ok boomer"', req: oat_count >= 100000000 }, { id: '10-mil_oats', text: 'Ten million oats... You sure could buy a lotta oat cows with that!', req: oat_count >= 10000000 }, { id: '3-mil_oats', text: 'Oat fetish: you are <a href="https://answers.yahoo.com/question/index?qid=20110813210020AAzGwIe" target="_blank" style="pointer-events:all !important; z-index:30; color:	#00df12 !important;" title="click me!">sexually attracted to oats</a>', req: oat_count >= 3000000 }, { id: 'tril', text: 'Oat Lord: you have a trillion oats', req: oat_count >= 1000000000000 }, { id: '2tril', text: 'TWO TRILLION OATS OH MY GAWD THAT\'S INSANE!!!!!!!!!!!!!', req: oat_count >= 2000000000000 }, { id: '10tril', text: 'you have 10 trillion oats. crazy.', req: oat_count >= 10000000000000 }, { id: '100tril', text: 'one hundred trillion oats. that\'s 100,000,000,000,000', req: oat_count >= 100000000000000 }, { id: 'quad', text: 'you have a quadrillion oats', req: oat_count >= 1000000000000000 }, { id: 'pressed_g', text: 'You absolutely terrible person! I <i>told</i> you not to press G!', req: fall_sprite == "https://raw.githubusercontent.com/ooogle/oatmeal/master/fly.png" }, { id: 'granary1', text: 'You have a granary!', req: granarys >= 1 }, { id: 'debt1', text: 'Debt: your oat balance is in the negatives', req: oat_count < 0 }, { id: 'peta-kill', text: 'Peta wants you dead for animal abuse. Preferably burned at a stake, but any form of cruel execution will do.', req: cow_addition > 1 }, { id: 'temple1', text: 'You have founded a new religion', req: temples >= 1 }, { id: 'priest', text: 'Priest: you are a powerful leader', req: temples >= 5 }, { id: 'poly1', text: 'Two Gods are better than one.', req: god_count >= 2 }, { id: 'poly5', text: 'Suck-up: you please five gods', req: god_count >= 5 }, { id: 'poly10', text: 'Your many gods love you almost as much as you love them.', req: god_count >= 10 }, { id: 'poly100', text: 'Oat Messiah: Your religion has inspred the popular prog rock band "No" to create their latest album, "Neymarism"', req: god_count >= 100 }, { id: 'fistgold', text: 'Gold is better than wood!', req: addition_multiplier >= 2 }, { id: 'gold5', text: 'Dat Gold Powa: you got dat clicki\'n powa!', req: addition_multiplier >= 5 }, { id: 'gold15', text: 'Super cookware: your cookware is of immense power', req: addition_multiplier >= 15 }, { id: 'gold30', text: 'Thiccccccc pots: your pots are hella thicccccccc', req: addition_multiplier >= 30 }, { req: oat_count + spoons == 869, text: "Your oat count plus your spoon count is excactly 869!", id: "869_spoon_oats" },{req: god_count >= 50, id:'poly50',text:"The fifty gods way up in the sky just gave you fifty oats each", action:function(){oat_count += 50 * 50;}},{req:addition_multiplier >= 300, text:"You have "+addition_multiplier*addition+" oats per click!", id:"300gold"},{req: 5 == 2,id:"cookie-clicker",text:"Betrayer: you have blasphemed ALL THE OATS!!!!!"}];
    for(var i=0; i < newacks.length; i++){
        acks.push(newacks[i])
    }
    acks.push({id:"inifinity",req:oat_count == Infinity, text:"Oat master: you own every oat in existence"});
    for (var i = 0; i < acks.length; i++) {
        if (!achevs.includes(acks[i].id) && acks[i].req && typeof(acks[i].req) == "boolean") {
            achieve(acks[i].id, acks[i].text);
            if (acks[i].action != null) {
                acks[i].action();
            }
        }
        else if(!achevs.includes(acks[i].id) && typeof(acks[i].req) != "boolean"){
            var chkker = new Function(acks[i].req);
            if(chkker()){
                achieve(acks[i].id, acks[i].text);
            }
        }
    }
    if ((cow_addition == 2 || cow_addition == -2) && achevs.includes("cow_rebellion") == false && new Date().getMinutes() - minjection >= 5 && cows >= 30) {
        cow_rebellion();
    }
    var images = {
        cow: "https://oatmeal.gq/sprites/big/oat_cow.png",
        granary: "https://oatmeal.gq/sprites/big/granery.png",
        temple: 'https://oatmeal.gq/sprites/big/temple.png',
        polytheism: "https://oatmeal.gq/sprites/big/polytheism.png",
        cinnamon: "https://oatmeal.gq/sprites/big/cinnamon.png",
        bowl: "https://oatmeal.gq/sprites/big/oat_bowl.png",
        spoon: "https://oatmeal.gq/sprites/big/spoon.png",
        pot: "https://oatmeal.gq/sprites/big/oat_pot.png",
        barrel: "https://oatmeal.gq/sprites/barrel.png"
    }
    var deals = [{ id: "cow-deal1", item: "cows", name: "Oat Cow", img: images.cow, req: oat_count >= 1000 }, { id: 'granary-deal1', item: 'granarys', name: 'Granary', req: oat_count >= 10000, img: images.granary }, { id: 'temple-deal1', item: 'temples', name: 'Temple', req: oat_count >= 6000 && god_count >= 3, img: images.temple }, { id: 'god-deal1', item: 'god_count', name: 'God', req: oat_count >= 1000 && god_count >= 3, img: images.polytheism }, { id: 'god-deal2', item: 'god_count', name: 'God', req: oat_count >= 10000 && god_count >= 3, img: images.polytheism }, { id: 'temple-deal2', item: 'temples', name: 'EPIC Temple', req: oat_count >= 1000100, img: images.temple }, { id: 'cinnamon-deal1', item: 'cinnamons', name: 'Cinnamon', req: oat_count >= 5000, img: images.cinnamon }, { id: 'bowl-deal1', item: 'addition', name: 'bowl', req: oat_count >= 3000, img: images.bowl }, { action: function () { addition += 400; temples += 10; }, name: "holy land full of temples ", id: "temple-deal5", item: "temples", img: images.temple, req: oat_count >= 10000000 }, { id: 'cow-deal2', item: 'cows', name: 'Oat Cow but there\'s ten of them', req: oat_count >= 5500000, img: images.cow, action: function () { cows += 9; } }, { id: 'spoon-deal1', item: 'spoons', name: 'Spoon', req: oat_count >= 8000, img: images.spoon }, { id: 'temple-deal3', item: 'temples', name: 'Temple, ready to worship all your gods, ', req: oat_count >= 8000, img: images.temple }, { id: 'god-deal3', item: 'god_count', name: 'GOD', req: oat_count >= 2000000 && god_count >= 3, img: images.polytheism }, { id: 'granary-deal2', item: 'granarys', name: 'Granary', req: oat_count >= 2000000, img: images.granary }, { id: 'granary-deal2', item: 'granarys', name: 'Granary', req: oat_count >= 30000000000, img: images.granary }, { id: 'pot-deal1', item: 'addition', name: 'Oat Pot', req: oat_count >= 3000000, img: images.pot, action: function () { addition += 5 } }, { id: 'pot-deal2', item: 'addition', name: 'Pot', req: oat_count >= 10000000, img: images.pot, action: function () { addition += 5 } }, { id: 'barrel-deal1', item: 'addition', name: 'Oat Barrel', req: oat_count >= 1500000, img: images.barrel, action: function () { addition += 100; } }, { id: 'barrel-deal2', item: 'addition', name: 'Oat Barrel', req: oat_count >= 2000000, img: images.barrel, action: function () { addition += 100; } }, { id: 'god-deal4', item: 'god_count', name: 'God', req: temples >= 1 && oat_count >= 2500000 && god_count >= 3, img: images.polytheism }, { id: 'barrel-deal3', item: 'addition', name: 'Oat Barrel', req: oat_count >= 3000000, img: images.barrel, action: function () { addition += 111; } }, { id: 'granary-deal3', item: 'granarys', name: 'Granary', req: oat_count >= 3500000, img: images.granary }, { id: 'temple-deal4', item: 'temples', name: 'sacred place of holy worship ', req: oat_count >= 4500000, img: images.temple, action: function () { addition += 500; } }, { id: 'barrel-deal4', item: 'addition', name: 'Barrel', req: oat_count >= 4000000, img: images.barrel, action: function () { addition += 150; } }, { id: 'barrel-deal5', item: 'addition', name: 'Barrel', req: oat_count >= 5000000, img: images.barrel, action: function () { addition += 200; } }, { id: 'barrel-deal6', item: 'addition', name: 'Barrel', req: oat_count >= 8000000, img: images.barrel, action: function () { addition += 1000; } }, { id: 'spoon-deal2', item: 'spoons', name: 'spoon cuz why not', req: oat_count >= 9000000, img: images.spoon }, { id: 'barrel-deal7', item: 'addition', name: 'Barrel', req: oat_count >= 10000000, img: images.barrel, action: function () { addition += 3000; } }];
    //check for deals and trigger them
    if (!deal) {
        for (var i = 0; i < deals.length; i++) {
            if (!achevs.includes(deals[i].id) && eval(deals[i].item) >= 1 && deals[i].req) {
                epic_deal(deals[i].name, deals[i].item, deals[i].img, deals[i].id);
                if (deals[i].action != null) {
                    deals[i].action();
                }
            }
        }
    }
}
var bgs = {
    cookie: {
        image: "url(https://oatmeal.gq/sprites/bags/bgs/cookiebox.png)",
        hover: "url(https://oatmeal.gq/sprites/bags/bgs/cookiebox.png)",
        border: "none",
        size: "100% 100%"
    },
    default: {
        image: "#0068df",
        hover: "#0276fc",
        border: "#00008b solid",
        size: "100% 100%"
    }
}
function spoon() {
    setInterval(function () {
        if (ops <= 300) {
            for (var i = 0; i < spoons; i++) {
                oat_clicked_by_boost(Number(spoon_addition));
            }
        }
        else {
            for (var i = 0; i < spoons; i += 3) {
                oat_clicked_by_boost(Number(spoon_addition) * 3);
            }
        }
    }, 10000);
}

function cow() {
    setInterval(function () {
        var thinggg = 0;
        if (ops <= 50) {
            for (var i = 0; i < cows; i++) {
                oat_clicked_by_boost(cow_addition);
            }
        }
        else if (ops <= 50000) {
            for (var i = 0; i < cows; i += 3) {
                oat_clicked_by_boost(cow_addition * 3);
            }
        }
        else if (ops <= 100000) {
            for (var i = 0; i < cows; i += 10) {
                oat_clicked_by_boost(cow_addition * 10);
            }
        }
        else {
            for (var i = 0; i < cows; i += 1000) {
                oat_clicked_by_boost(cow_addition * 1000);
            }
        }
    }, 2000);
}
function granary() {
    setInterval(function () {
        if (ops <= 50) {
            for (var i = 0; i < granarys; i++) {
                oat_clicked_by_boost(5);
            }
        }
        else if (ops <= 30000) {
            for (var i = 0; i < granarys; i += 3) {
                oat_clicked_by_boost(15);
            }
        }
        else if (ops <= 90000) {
            for (var i = 0; i < granarys; i += 10) {
                oat_clicked_by_boost(50)
            }
        }
        else if (ops <= 1000000) {
            for (var i = 0; i < granarys; i += 1000) {
                oat_clicked_by_boost(5000)
            }
        }
        else {
            for (var i = 0; i < granarys; i += 100000) {
                oat_clicked_by_boost(500000)
            }
        }
    }, 2000);
}
function temple() {
    setInterval(function () {
        if (ops <= 50) {
            for (var i = 0; i < temples; i++) {
                oat_clicked_by_boost(god_count * 15);
            }
        }
        else if (ops <= 1000) {
            for (var i = 0; i < temples; i += 3) {
                oat_clicked_by_boost(god_count * 15 * 3);
            }
        }
        else if (ops <= 10000) {
            for (var i = 0; i < temples; i += 10) {
                oat_clicked_by_boost(god_count * 15 * 10);
            }
        }
        else if (ops <= 50000) {
            for (var i = 0; i < temples; i += 100) {
                oat_clicked_by_boost(god_count * 15 * 100);
            }
        }
        else if (ops <= 150000) {
            for (var i = 0; i < temples; i += 500) {
                oat_clicked_by_boost(god_count * 15 * 500);
            }
        }
        else if (ops <= 500000) {
            for (var i = 0; i < temples; i += 1000) {
                oat_clicked_by_boost(god_count * 15 * 1000);
            }
        }
        else if (ops <= 1000000) {
            for (var i = 0; i < temples; i += 10000) {
                oat_clicked_by_boost(god_count * 15 * 10000);
            }
        }
        else {
            for (var i = 0; i < temples; i += 100000) {
                oat_clicked_by_boost(god_count * 15 * 100000);
            }
        };
    }, 2000);
}
function cinnamon() {
    setInterval(function () {
        for (var i = 0; i < cinnamons; i++) {
            if (randomate(0, 5000) == 10) {
                oat_count += oat_count;
                if (randomate(0, 5) == 2) {
                    oat_count += oat_count * 0.5;
                    if (randomate(0, 5000) == 10) {
                        oat_count = oat_count * 5;
                        if (randomate(0, 800000) == 10) {
                            oat_count += randomate(100000, 1000000000000000);
                        }
                    }
                }
                achieve("", "you won the cinnamon lottery!", "BIG WIN!");
                updatecount();
            }
        }
        if (randomate(0, 100) == 10 && oat_count >= 1000000 && !achevs.includes('cookie-clicker')) {
            cookieclicker();
        }
    }, 60000);
}
function oatnog() {
    setInterval(function () {
        if (new Date().getMonth() == 11) {
            for (var i = 0; i < oatnogs; i++) {
                if (randomate(0, 10) == 5) {
                    console.log("oatnog rules");
                    achieve("", "Oatnog just got you " + Math.round(oat_count * 0.2) + " oats!", "EPIC GIFT!");
                    oat_count = oat_count * 1.2;
                }
            }
        }
    }, 60000);
}
function beetle(){
    setInterval(function(){
            oat_clicked_by_boost((27*beetles)/2);
            oat_clicked_by_boost((27*beetles)/2);
    }, 1000)
}
function setbg(id) {
    root.style.setProperty('--boost-bg', bgs[id].image);
    root.style.setProperty('--boost-bg-h', bgs[id].hover);
    root.style.setProperty('--booster-border', bgs[id].border);
    root.style.setProperty('--boost-bg-s', bgs[id].size);
}