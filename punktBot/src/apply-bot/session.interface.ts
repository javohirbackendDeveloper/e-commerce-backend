import { Context, session } from "telegraf";

interface MySession {
  step?: string;
  data?: any;
}

export interface MyContext extends Context {
  session: MySession;
}
