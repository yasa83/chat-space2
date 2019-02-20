$(function(){
  function buildHTML(message){
    var message_image = message.image ? message.image : ""
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user--name">
                       ${message.name}
                    </div>
                    <div class="upper-message__date">
                       ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <img class="lower-message__image" src="${message_image}">
                  </div>
                </div>`
    return html;
  }
  var Interval = setInterval(function(){
    if (location.href.match(/\/groups\/\d+\/messages/)){
      lastMessageId = $(".message:last").data("message-id") || 0
      $.ajax({
       type: "GET",
       url: location.href,
       data: { lastMessageId: lastMessageId },
       dataType: "json"
     })
     .done(function(json){
       if (json.length != 0){
          json.messages.forEach(function(autoMessage){
           var html = buildHTML(autoMessage);
           $('.messages').append(html);
           $('.message').animate({scrollTop: $('.message').get(0).scrollHeight}, 'slow');
         })
       }
     })
    }
  }, 5000);
});
