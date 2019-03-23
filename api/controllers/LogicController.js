module.exports = {

    //Controller action for 'GET /helloworld'
    printHelloWorld : function(req,res){
        return res.send("Hello World!!!")
    },



    //Controller action for 'GET /getabsolutevalue/:number'
    getAbsoluteValue: function(req, res) {
        try {
            var num = req.param('number');
            if(Math.abs(num)){
                return res.json({ "status": 0, "absolute_value": Math.abs(num) })
            }else{
                return res.json({"status":-1 , "ErrorMessage": "Parameter needs to be a number."})
            }
        } catch (err) {
            return res.json({ "status": -1, "ErrorMessage": err });
        }
    },



    //Controller action for 'POST /calculate'
    calculateValue: function(req, res) {
        try {
            var parameters = req.body;
            console.log("parameters:" + JSON.stringify(parameters))
            var op = parameters.operator;
            var num1 = parameters.num1
            var num2 = parameters.num2
            var calculatedValue

            calcFunc = {}
            calcFunc["+"] = (a, b) => a + b;
            calcFunc["*"] = (a, b) => a * b;
            calcFunc["-"] = (a, b) => a - b;
            calcFunc["/"] = (a, b) => a / b;

            if(num2 != 0){
                calculatedValue = calcFunc[op](num1, num2)
                return res.json({ "status": 0, "calculated_value": calculatedValue })
            }else{
                return res.json({"status":-1, "ErrorMessage":"Divide by zero error"})
            }


        } catch (err) {
            return res.json({ "status": -1, "ErrorMessage": err });
        }
    }
}