
var serverURL = "http://restclass.azurewebsites.net";

// Object constructor for itmes
function Item(code, title, price, desc, cat, rating, image ){
    this.code= code;
    this.title = title;
    this.price = price;
    this.description = desc;
    this.category = cat;
    this.rating = rating;
    this.image = image;
    this.user = "Oliver";

}

function clearForm(){
    $("#txtCode").val("");
    $("#txtTitle").val("");
    $("#txtPrice").val("");
    $("#txtDescription").val("");
    $("#txtCategory").val("");
    $("#txtRating").val("");
    $("#txtImage").val("");
}

function saveItem(){
    // get values
var code = $("#txtCode").val();
var title = $("#txtTitle").val();
var price = $("#txtPrice").val();
var description = $("#txtDescription").val();
var category = $("#txtCategory").val();
var rating = $("#txtRating").val();
var image = $("#txtImage").val();


    //create an object
    var test = new Item(code, title, price, description, category, rating, image);
    console.log(test);


    //send the object to a server

    $.ajax({
        url: serverURL + "/API/points",
        type: "POST", 
        contentType: "application/json",
        data: JSON.stringify(test),
        success : function(details){
            // alert the user 
            console.log("Data Saved", details);
            clearForm();
            $("#alert").removeClass("hide");

            // set timer to do some actions
            setTimeout(
                function(){
                    $("#alert").addClass("hide");
                },
                10000 // 10,000 = 10secs
            );

        },
        error: function(details){
            console.log("Error", details);
        }
    });

    // alert 
    // data savde on the server correctly 

}






function init(){
    console.log("Directorate page");

    $("#btnSave").click(saveItem);

    
}


window.onload = init;


