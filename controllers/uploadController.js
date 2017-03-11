
var hello = function(req, res, next){
    console.log("We Got I.T.!");
    console.log(req.data);
};

module.exports.hello = hello;
