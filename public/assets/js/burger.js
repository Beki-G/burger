$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log("Submit form fired!")
        const newBurger={
            burger_name: $("#bu").val().trim(),
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created new burger")
                location.reload()
            }
        )
    })
})