var editor={
    init(){
        this.type="eidtNode";
        this.editor=$('#editorNode');
        this.addEvent();
    },
    setPosition(x,y){
        this.editor.css({
            left:x+'px',
            top:y+'px'
        });
        return this;
    },
    show(){
        this.editor.show();
        return this;
    },
    hide(){
        this.editor.hide();
        return this;
    },
    width(w){
         this.editor.width(w+30);
         return this;
    },
    height(h){
         this.editor.height(h);
         return this;
    },
    isShow(){
         return this.editor.is(':visible');
    },
    setValue(v){
        this.editor.val(v||'').focus();
        return this;
    },
    getValue(){
        var textArr=[];
        var text=this.editor.val();
        return text;
    },
    clearValue(){
        this.editor.val('');
        return this;
    },
    addEvent(){
        var t=new zrender.Text({
            textPadding:[10,20]
        });
        this.editor
        .off('keyup')
        .on('keyup',()=>{
           var text=this.getValue();
           t.setStyle('text',text);
           var box=t.getBoundingRect();
           this.width(box.width);
           this.height(box.height+16);
        });
    
    }
};
export default editor;
