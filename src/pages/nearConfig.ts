import * as nearAPI from 'near-api-js'
const CONTRACT_NAME = process.env.CONTRACT_NAME || 'nihaonihaonihao.testnet';
interface Contract {
    near: any;
    walletConnection: any;
    contract: any;
    getID: any;
    signIn: any;
    signOut: any;
    init: any;
    isLogin: any;
    getlist: Function;
    signAndSend: any;
    currentUser: any;
    nearConfig: any
}

let obj: Contract = {
    near: null,
    walletConnection: null,
    contract: null,
    getID: null,
    signIn: () => { },
    signOut: null,
    init: () => { },
    isLogin: () => { },
    getlist: Function,
    signAndSend: () => { },
    currentUser: null,
    nearConfig: null
};

obj.init = async () => {
    obj.nearConfig = {
        networkId: 'testnet',
        nodeUrl: 'https://public-rpc.blockpi.io/http/near-testnet',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org'
    }
    obj.near = await nearAPI.connect({
        ...obj.nearConfig,
        deps: {
            keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        },
    });

    obj.walletConnection = new nearAPI.WalletConnection(obj.near)
    if (obj.walletConnection.getAccountId()) {        
        obj.currentUser = {
            accountId: '',
            balance: (await obj.walletConnection.account().state()).amount,
        }
    }
    obj.contract = await new nearAPI.Contract(
        obj.walletConnection.account(),
        obj.nearConfig.contractName,
        {
            viewMethods: ['getMessages'],
            changeMethods: ['addMessage'],
            sender: obj.walletConnection.getAccountId(),
        }
    )
    console.log(123);

    obj.signIn = () => {
        console.log(123123);
        
        obj.walletConnection.requestSignIn(
            { contractId: obj.nearConfig.contractName, methodNames: [obj.contract.addMessage.name] }, //contract requesting access
            'Near Guest Book',
            null,
            null
        )
    }
    obj.signOut = ()=>{

    }
    obj.getID = obj.walletConnection.getAccountId()
};

export default obj;
