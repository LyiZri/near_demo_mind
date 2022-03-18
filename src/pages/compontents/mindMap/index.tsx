import React,{useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.less'
function MindeMap() {
    const editor = useRef();
    return (
        <div>
            <div className="toolbar">
                <span className="glyphicon glyphicon-share-alt undo" title='撤销' data-command="undo"></span>
                <span className="glyphicon glyphicon-share-alt redo" title='恢复' data-command="redo"></span>
                <i>|</i>
                <span className="glyphicon glyphicon-object-align-vertical addNode" data-command="addNode" title='新增同级节点'></span>
                <span className="glyphicon glyphicon-object-align-horizontal addChild" data-command="addChild" title='新增子节点'></span>
                <i>|</i>
                <span className="glyphicon glyphicon-trash delete" data-command="delete" title='删除'></span>
                <i>|</i>
                <span className="glyphicon glyphicon-object-align-right induce" data-command="induce" title='归纳'></span>
                <span className="glyphicon glyphicon-unchecked wireFrame" data-command="wireFrame" title='线框'></span>
                <i>|</i>
                <select id="fontSize" className="fontSize" data-command="fontSize" title="字号">
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                </select>
                <select id="fontFamily" className="fontFamily" data-command="fontFamily" title="字体" style={{width:"80px"}}>
                    <option value="Microsoft YaHei">微软雅黑</option>
                    <option value="宋体">宋体</option>
                    <option value="楷体">楷体</option>
                    <option value="黑体">黑体</option>
                    <option value="楷体">楷体</option>
                    <option value="隶书">隶书</option>
                    <option value="Andale Mono">Andale Mono</option>
                    <option value="Arial">Arial</option>
                    <option value="arialBlack">arialBlack</option>
                    <option value="Comic Sans Ms">Comic Sans Ms</option>
                    <option value="Sans-Serif">Sans-Serif</option>
                </select>
                <span className="glyphicon glyphicon-bold bold" data-command="bold" title='加粗'></span>
                <span className="glyphicon glyphicon-italic italic" data-command="italic" title='倾斜'></span>
                <span className="glyphicon glyphicon-font fontColor" data-command="textFill" title='字体颜色'></span>
                <i>|</i>
                <span className="priority" title="删除" data-command="removePriority" data-value="delete">X</span>
                <span className="priority" title="优先级1" data-command="priority" data-value="1">1</span>
                <span className="priority" title="优先级2" data-command="priority" data-value="2">2</span>
                <span className="priority" title="优先级3" data-command="priority" data-value="3">3</span>
                <span className="priority" title="优先级4" data-command="priority" data-value="4">4</span>
                <span className="priority" title="优先级5" data-command="priority" data-value="5">5</span>
                <i>|</i>
                <span className="glyphicon glyphicon-zoom-in enable zoomIn" data-command="zoomIn" title='放大'></span>
                <span className="glyphicon glyphicon-zoom-out enable zoomOut" data-command="zoomOut" title='缩小'></span>
            </div>
        </div>
    )
}

export default MindeMap