This is only an example module for Drupal 7 that exhibits chat capabilities.

- Enable the module.
- Set the correct permissions.
- Place the provided block into a proper region.
- The provided block provides a link to start a chat, click it.
- The URI of the chat can be sent to another user, send to another user (the user also needs the right permissions).
- begin chatting.
- The limit of chat instances that can be created by a user is controlled in the admin page admin/config/services/smokesignals (default 10)
- A chat lifetime (in minutes) is also controlled by the same admin page admin/config/services/smokesignals (default 5 minutes)
- The user/%user/smokesignal path also provides a list of chats the user has access to.

TODO:
- Scability issues need to addressed.
- Communication between client and server can be replaced with web sockets instead of a polling mechanism.
- The message form should be refactored to use the drupal ajax framework.
  Currently, there are some bugs in the javascript event handlers that causes misfires during chatting when enabling the ajax framework.


