import './index.less';
import PropTypes, { any } from 'prop-types'
import MindeMap from './compontents/mindMap';
import { useState, useEffect } from 'react'
import Jsmind from 'jsmind'
import Big from 'big.js'
import { NamedModulesPlugin } from '@umijs/deps/compiled/webpack';
const SUGGESTED_DONATION = '0';
const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();
import obj from './nearConfig'
const { contract, currentUser, nearConfig, init, signIn, walletConnection, getID } = obj
export default function IndexPage() {
  const [messages, setMessages] = useState([])
  // const [jm,setJm] = useState(new Jsmind({}))
  let jm = new Jsmind()
  useEffect(() => {
    init()
    try {
      getID()
      contract.getMessages().then(setMessages)
    } catch (error) {
      console.log(error);

      signIn()
    }
    var mind = {
      "meta": {
        "name": "js课程",
        "author": "乐之者管理员",
        "version": "0.2"
      },
      "format": "node_tree",  /* 数据格式声明 */
      "data": {
        "id": "js", "topic": "javascript", "children": [
          {
            "id": "easy", "topic": "第一天", "direction": "left", "expanded": false, "children": [
              { "id": "var", "topic": "变量" },
              { "id": "exp", "topic": "表达式" },
              { "id": "easy3", "topic": "语句" }
            ]
          },
          {
            "id": "open", "topic": "第二天", "direction": "right", "expanded": true, "children": [
              { "id": "open1", "topic": "函数" },
              { "id": "open2", "topic": "内置对象" }
            ]
          },
          {
            "id": "powerful", "topic": "第三天", "direction": "right", "children": [
              { "id": "powerful1", "topic": "正则" },
              { "id": "powerful2", "topic": "自定义对象" }
            ]
          },
          {
            "id": "other", "topic": "第四天", "background-color": "#0000ff", "direction": "left", "children": [
              { "id": "other1", "topic": "浏览器对象模型", "foreground-color": "#ff0000" },
              { "id": "other2", "topic": "DOM", "background-color": "#0000ff" }
            ]
          }
        ]
      }
    }
    var options = {
      container: 'jsmind_container',
      theme: 'orange',
      editable: true
    }
    // setJm(new Jsmind(options))
    jm = new Jsmind(options)
    jm.show(mind)
  }, [])
  const addNode = ()=>{
    console.log(jm.get_selected_node());
    let nodemsg = jm.get_selected_node()
    jm.add_node(nodemsg,'123','新节点',{})
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    // const { filedset, message, donation } = e.target.elements
    // filedset.disabled = true
    console.log(contract);
    const message = { value: '1' }
    const donation = { value: '2' }
    console.log(message);
    console.log(donation);

    contract.addMessage(
      { text: message.value },
      BOATLOAD_OF_GAS,
      Big(donation.value || '0').times(10 ** 24).toFixed()
    ).then((res: any) => {
      console.log(res);

      contract.getMessages.then((messages: any) => {
        setMessages(messages)
        message.value = ''
        donation.value = SUGGESTED_DONATION
        // filedset.disabled = false
        // message.focus()
      })
    })
  }
  const sighOut = () => {
    walletConnection.signOut()
    window.location.replace(window.location.origin + window.location.pathname)
  }
  return (
    <div>
      <button onClick={() => {
        signIn()
      }}>登入</button>
      <button onClick={sighOut}>登出</button>
      <button onClick={addNode}>添加子节点</button>
      <button onClick={() => {
        console.log(walletConnection.getAccountId())
      }}>获取ID</button>
      {/* <MindeMap></MindeMap> */}
      <div id='jsmind_container' style={{ margin: 'auto', width: '1500px', height: '500px', background: '#f4f4f4' }}></div>
      {/* <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <p>Sign the guest book, {currentUser.accountId}!</p>
          <p className="highlight">
            <label htmlFor="message">Message:</label>
            <input autoComplete="off" autoFocus id="message" required />
          </p>
          <p>
            <label htmlFor="donation">Donation (optional):</label>
            <input
              autoComplete="off"
              defaultValue={"0"}
              id="donation"
              max={Big(currentUser.balance).div(10 ** 24)}
              min="0"
              step="0.01"
              type="number"
            />
            <span title="NEAR Tokens">Ⓝ</span>
          </p>
          <button type="submit">Sign</button>
        </fieldset>

      </form> */}
      {/* <button onClick={onSubmit}>提交表单信息</button>
      <h2>Messages</h2> */}
      {/* {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong>:<br/>
          {message.text}
        </p>
      )} */}
    </div>
  );
}
IndexPage.prototype = {
  contract: PropTypes.shape({
    addMessage: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  walletConnection: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
}
