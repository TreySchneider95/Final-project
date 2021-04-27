var totalNum = [];

$(".button").click(function(){
    if (!$(this).hasClass("operator")){
        $("#display").val('');
        $("#display").val(($("#display").val()) + ($(this).val()));
    } else { 
        if ($("#display").val() != '') {
            if ($(this).hasClass("operator")){
                totalNum.push((($("#display").val())))
                totalNum.push( ($(this).val()));
                $("#display").val('');
                console.log("one" + totalNum)
                if(totalNum.length > 2) {
                    var total = totalNum.slice(0, -1).join(" ");
                    console.log("total" + total)
                    $("#display").val(eval(total));
                }
            } else {
                $("#display").val(($("#display").val()) + ($(this).val()));
                totalNum.push( ($(this).val()));	
                console.log("three" + totalNum)
            }
        }
    }
})

$("#clearButton").click(function(){
    $("#display").val('');
    totalNum = [];
})

$("#equalsButton").click(function(){
    totalNum.push((($("#display").val())))
    var total = totalNum.join(" ");
    $("#display").val(eval(total));
    totalNum = [];
    console.log("totalNum" + totalNum)
})


$(".buttton").click(function(){
    if (!$(this).hasClass("number")){
        var a = a + b
        var b = this.val()
        console.log(a)
    }
})