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
    if(achevs.includes('200-oats') == false && oat_count >= 200){
        achieve('200-oats','Two Hundred oats! wow!');
    }
    if(achevs.includes('500-oats') == false && oat_count >= 500){
        achieve('500-oats','Five Hundred oats! wow!');
    }
    if(achevs.includes('1000-oats') == false && oat_count >= 1000){
        achieve('1000-oats','Bob\'s red mill: you have one thousand oats');
    }
    if(achevs.includes('cinnamon1') == false && cinnamons >= 1){
        achieve('cinnamon1','The lottery is a risky business');
    }
    if(achevs.includes('spoon_guru') == false && spoons >= 50){
        achieve('spoon_guru','Spoon Guru: you have fifty spoons');
    }
    if(achevs.includes('150_oats') == false && oat_count >= 150){
        achieve('150_oats','You have 150 oats! That\'s a lot!');
    }
    if(achevs.includes('420_oats') == false && oat_count >= 420){
        achieve('420_oats','420 oats: blaze it!');
    }
}
