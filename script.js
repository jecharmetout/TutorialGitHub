function triangle(size, char){
    var str = " ";
    for(var i = 0; i < size; i++){
        str += char;
        console.log(str);
    }
    }
    
    function isUndefined(variable){
        if(variable === undefined){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    
    function isEmptyString(str){
        if(str === ''){
            console.log(true);
        } 
        else { 
            console.log(false);
        }
    }
    
    function isDefined(variable){
        if (variable === null || variable === undefined){ 
            return false;
        } else {
             return true;
        }
    }
    console.log(isDefined('Привет!'));
    console.log(isDefined(null));
    console.log(isDefined(undefined));
    
    function extendedTypeOf(variable){
        if (variable === null){
            console.log('null');
        } else {
            console.log(typeof variable);
        }
    }
    
    extendedTypeOf('строка');
    extendedTypeOf(true);
    extendedTypeOf(10);
    extendedTypeOf(undefined);
    var obj = { 
        name: 'Mryia',
        age: 21,
    }
    extendedTypeOf(obj);
    extendedTypeOf(null);
    
    
    
    function priceWithDiscount(price,accumulatedSum,hasCoupon){
        var discountProcent = 0;	
        if (!hasCoupon) {
            discountProcent = 0;
        } else { 
            discountProcent += 10;
        }
            if (!accumulatedSum){
                discountProcent;
            } else {
                if (accumulatedSum < 20) {
                    discountProcent += 2;
                } else if (accumulatedSum >= 20 && accumulatedSum <= 50) {
                    discountProcent += 5;
                } else {
                    discountProcent += 7;
                }
            }
        var result = price - (price * discountProcent / 100);
        return result;
    }
    console.log(priceWithDiscount(100));
    console.log(priceWithDiscount(100,10));
    console.log(priceWithDiscount(100,20));
    console.log(priceWithDiscount(100,52));
    console.log(priceWithDiscount(100,20,true));