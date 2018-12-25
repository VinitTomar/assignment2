(function(){
    let output = [];
    for(let i=1; i<=100; i++) {
        if(i%4 == 0 && i%7 == 0) {
            output.push('marcopolo');
        }else if(i%4 == 0) {
            output.push('marco');
        }else if(i%7 == 0) {
            output.push('polo');
        }else {
            output.push(i+'');
        }
    }

    console.log(output.join(','));
})();