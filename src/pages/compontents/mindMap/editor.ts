// import { any } from "prop-types";
// import React from "react";
// import $ from 'jquery'
// var editor={
//     type:'',
//     editor:,
//     init(){
//         this.type="eidtNode";
//         this.editor=$('#editorNode');
//         this.addEvent();
//     },
//     setPosition(x:number,y:number){
//         this.editor.css({
//             left:x+'px',
//             top:y+'px'
//         });
//         return this;
//     },
//     show(){
//         this.editor.show();
//         return this;
//     },
//     hide(){
//         this.editor.hide();
//         return this;
//     },
//     width(w:number){
//          this.editor.width(w+30);
//          return this;
//     },
//     height(h:number){
//          this.editor.height(h);
//          return this;
//     },
//     isShow(){
//          return this.editor.is(':visible');
//     },
//     setValue(v:any){
//         this.editor.val(v||'').focus();
//         return this;
//     },
//     getValue(){
//         var textArr=[];
//         var text=this.editor.val();
//         return text;
//     },
//     clearValue(){
//         this.editor.val('');
//         return this;
//     },
//     addEvent(){
//         var t=new zrender.Text({
//             textPadding:[10,20]
//         });
//         this.editor
//         .off('keyup')
//         .on('keyup',()=>{
//            var text=this.getValue();
//            t.setStyle('text',text);
//            var box=t.getBoundingRect();
//            this.width(box.width);
//            this.height(box.height+16);
//         });
    
//     }
// };
// export default editor;
