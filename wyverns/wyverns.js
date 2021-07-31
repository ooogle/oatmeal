function do_ops(){
    setInterval(function(){
        oat_count += ops / 100;
        updatecount();
    }, 10);
    cinnamon();
    if(new Date().getMonth == 11){
        oatnog();
    }
}
function cinnamon() {
    setInterval(function () {
        if (cinnamons < 100) {
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
                    updatecount();
                }
            }
        }
        else if (cinnamons <= 5000) {
            if (randomate(0, 5000) <= cinnamons) {
                oat_count += oat_count;
                updatecount();
            }
        }
        else {
            if (randomate(0, 5000 + cinnamons) <= cinnamons) {
                oat_count += oat_count;
                updatecount();
            }
        }
    }, 60000);
}
function oatnog() {
    setInterval(function () {
        if (new Date().getMonth() == 11) {
            for (var i = 0; i < oatnogs; i++) {
                if (randomate(0, 10) == 5) {
                    console.log("oatnog rules");
                    oat_count = oat_count * 1.2;
                }
            }
        }
    }, 60000);
}
function randomate(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
