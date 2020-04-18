import { ConverseTesting, bot } from "newbot";
import mainSkill from "./main";

describe("Main Skill Test", () => {
  let userConverse, converse;

  beforeEach(() => {
    converse = new ConverseTesting(mainSkill);
    userConverse = converse.createUser();
  });

  it("Start Conversation", () => {
    userConverse.conversation(bot`Hello World`);
  });
});
