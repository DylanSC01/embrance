import { delay } from "@/lib/utils"


export const subscribeAction = async (email:string) => {
    await delay(1000);
    console.log("subscribeAction called with email:", email);
    //throw new Error("This is a test error");

    return
}