import { Context } from "telegraf";
interface MySession {
    step?: string;
    data?: any;
}
export interface MyContext extends Context {
    session: MySession;
}
export {};
