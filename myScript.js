var total_price = 0;
var check_one_appetizer = 0;
var last_total_price = 0;
var check_one_wine = 0;
var w_a = 0, w_b = 0, w_c = 0;

document.getElementById("total_order_price").innerHTML = "Total $ " + total_price;

function renew_total_price(){
    document.getElementById("total_order_price").innerHTML = "Total $" + total_price;
}

document.getElementById("add_appetizer_a").addEventListener("click", appetizer_a);

function appetizer_a(){
    document.getElementById("appetizer").innerHTML = "優格鮮蝦菜蔬 $120";
    if( check_one_appetizer == 0 ){
        last_total_price = total_price;
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price();
}

document.getElementById("add_appetizer_b").addEventListener("click", appetizer_b);

function appetizer_b(){
    document.getElementById("appetizer").innerHTML = "時令海鮮塔 $120";
    if( check_one_appetizer == 0 ){
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price()
}

document.getElementById("add_appetizer_c").addEventListener("click", appetizer_c);

function appetizer_c(){
    document.getElementById("appetizer").innerHTML = "洋芋田園沙拉 $120";
    if( check_one_appetizer == 0 ){
        total_price = total_price + 120;
        check_one_appetizer = 1;
    }
    renew_total_price()
}

document.getElementById("add_wine_a").addEventListener("click", wine_a);

function wine_a(){
    document.getElementById("wine").innerHTML = "亞斯帝氣泡酒 $570";
    if( check_one_wine == 0 ){
        total_price = total_price + 570;
        check_one_wine = 1;
        w_a = 1;
    }
    else{
        if( w_b == 1 ){
            total_price = total_price - 690 + 570;
            w_b = 0;
        }
        else if( w_c == 1 ){
            total_price = total_price - 720 + 570;
            w_c = 0;
        }
    }
    w_a = 1;
    renew_total_price()
}

document.getElementById("add_wine_b").addEventListener("click", wine_b);

function wine_b(){
    document.getElementById("wine").innerHTML = "尼德堡琥珀紅葡萄酒 $690";
    if( check_one_wine == 0 ){
        total_price = total_price + 690;
        check_one_wine = 1;
        w_b = 1;
    }
    else{
        if( w_a == 1 ){
            total_price = total_price - 570 + 690;
            w_a = 0;
        }
        else if( w_c == 1 ){
            total_price = total_price - 720 + 690;
            w_c = 0;
        }
    }
    w_b = 1;
    renew_total_price()
}

document.getElementById("add_wine_c").addEventListener("click", wine_c);

function wine_c(){
    document.getElementById("wine").innerHTML = "蘇格蘭 梅洛紅酒 $720";
    if( check_one_wine == 0 ){
        total_price = total_price + 720;
        check_one_wine = 1;
        w_c = 1;
    }
    else{
        if( w_a == 1 ){
            total_price = total_price - 570 + 720;
            w_a = 0;
        }
        else if( w_b == 1 ){
            total_price = total_price - 690 + 720;
            w_b = 0;
        }
    }
    w_c = 1;
    renew_total_price()
}

