import mainSkill from "./src/bot/main";

const converse = new NewBot(mainSkill);
const botui = new BotUI("my-bot");

const chatbox = new Vue({
  el: "#input",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    send() {
      botui.message.add({
        content: this.msg,
        human: true
      });
      converse.exec(this.msg, (output, done) => {
        botui.message.add({
          content: output
        });
        done();
      });
      this.msg = "";
    }
  }
});
