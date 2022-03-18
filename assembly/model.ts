import {context,u128,PersistentVector} from 'near-sdk-as'


// 导出这个PostMessage  让他可以在这个文件之外使用
@nearBindgen
export class PostMessage{
    premium: boolean;
    sender:string;
    constructor(public text:string){
        this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
        this.sender = context.sender
    }
}

export const messages = new PersistentVector<PostMessage>("m")