
$(".txtbut").on("keyup", function(e){
    let task = $("<div class='task'></div>").text($(".txtbut").val());
    
    if (e.key === 'Enter' && $(".txtbut").val() != "")
    {
        let del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
            
           
        });

        let check = $("<i class='fas fa-check'></i>").click(function(){
            let p =$(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
                $(this).css({ 'background-color': '#b2d8b2'});     
            }); 
            
            $(this).remove();
        })

        task.append(del,check);

        $(".notcomp").append(task);
        $(".notcomp .task").css({ 'background-color': '#F0E68C'});
        
        $(".txtbut").val("");
    }
});