$(function(){
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("devour");

        const newlyDevoured = {
            devoured: newDevour
        };

        // console.log("What is this ", $(this))
        // console.log("ID in change-devour: ", id);
        // console.log("newDevour in change-devour: ", newlyDevoured)
        //set put request
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: newlyDevoured
        }).then(()=>{
            console.log("changed devoured to ", newDevour);

            location.reload();
        });

    });

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