(function ($){

    Drupal.behaviors.smokeSignalsBehavior = {
        attach: function(context, settings) {

            setInterval(function(){


                var path = location.pathname.split("/");

                var data = {
                    "lastMessageCreated": Drupal.settings.smokesignals.lastMessageCreated,
                    "ssid": path[2]
                }

                $.ajax({
                    url : "/smokesignals/messages",
                    type: "POST",
                    data : data,
                    success: function(data, textStatus, jqXHR)
                    {
                        if(data.reload) {
                            location.reload();
                        }

                        //data - response from server
                        $.each(data.messages, function(index, value) {
                           Drupal.settings.smokesignals.lastMessageCreated = value.created;
                           $("#smokesignal-messages").append(value.message);
                        });
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {

                    }
                });


            }, 1000);

            $('#smokesignal-send-message-form #edit-message').keypress(function(e){

                if (e.keyCode == 13 && !e.shiftKey) {
                    e.preventDefault();
                    var frm = $('#smokesignal-send-message-form');
                    jQuery.ajax({
                        type: "POST",
                        url: "/smokesignals/sendMessage",
                        data: frm.serialize(),
                        success: function(data, textStatus, jqXHR){
                            $('#smokesignal-send-message-form #edit-message').val('');
                        }
                        //dataType: 'json'
                    });
                }
            });
        }
    }
})(jQuery);