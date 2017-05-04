

$(document).ready(function(){

    var nav = function(){
        var template_nav = $('#template-navigation').html();
         var template_comp_nav = Handlebars.compile(template_nav);

        $.ajax("data/data.json").done(function(data){

            //$("#templateMassContainer").html(template_mass_Compiler(data));
             $("#templateNavContainer").html(template_comp_nav(data));
        });
    }();

    var massage = function(){
        var template_message = $("#template-msg").html();
        var template_mass_Compiler = Handlebars.compile(template_message);

        $.ajax("data/data.json").done(function(data){
            $("#templateMassContainer").html(template_mass_Compiler(data));
        });
    }();

    var progress = function(){
        var template_progress = $("#template-progress").html();
        var template_progress_Compiler = Handlebars.compile(template_progress);

        $.ajax("data/data.json").done(function(data){
            $("#templateInProgressContainer").html(template_progress_Compiler(data));
        });
    }();

    var review = function(){
        var template_progress = $("#template-review").html();
        var template_progress_Compiler = Handlebars.compile(template_progress);

        $.ajax("data/data.json").done(function(data){
            $("#templateReviewContainer").html(template_progress_Compiler(data));
        });
    }();
    //----------------------------------------------------------------------------

    var buttons = function(id){

        var waitingButton = $('#'+id+' input:button');
        var waitingField = $('#'+id+' input:text');
        var waitingSubmit = $('#'+id+' input:submit');
        waitingField.hide();
        waitingSubmit.hide();
        waitingButton.on(
            {
                click: function () {
                    waitingField.show();
                    waitingSubmit.show();
                    waitingButton.hide();

                    waitingSubmit.click( function () {
                        var text = waitingField.val();
                        var str = '<li><div class="massage">' + text + '</div><div class="img"><img src="images/avatar1.png"> </div></li>';
                        $('#'+id+' ul').last().append(str);
                    });
                }
            }
        );
    };

    buttons('waiting');
    buttons('progress');
    buttons('review');






});