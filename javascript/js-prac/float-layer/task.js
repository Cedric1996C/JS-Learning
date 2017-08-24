function $(id){
	return document.getElementById(id);
}

const pop = $('pop');
const layer = $('floatLayer');
const mask = $('mask');
const model = $('model');
const closeBtn = document.getElementsByClassName('close')

function addEvent(element,event,listener){
	if(element.addEventListener){
		element.addEventListener(event,listener,false);
	} else if(element.attachEvent){
		element.attachEvent('on'+event,listener);
	} else {
		element['on'+event] = listener;
	}
}

function removeEvent(element,event,listener){
	if(elemet.removeEventListener){
		elemet.removeEventListener(event,listener);
	} else if(element.detachEvent){
		element.detach('on'+event,listener);
	}
}

function popLayer(){
	layer.style.display = 'block';
}

function closeLayer(){
	layer.style.display = 'none';
}

var dragLayer = function(dom){
 	var isDrag = false;
	var disX = 0;
	var disY = 0;

	function down(e){
		if(e.target.className == 'model-title'||'model-header'){
            if( !isDrag ){
            	isDrag = true;
				disX = e.clientX - dom.offsetLeft;
				disY = e.clientY - dom.offsetTop;
				console.log(dom.offsetLeft, dom.offsetTop);
			}
		}
	}

	function move(e){
		if( isDrag ){
			console.log(e.clientX, e.clientY);
			dom.style.left = (e.clientX-disX)+'px';
			dom.style.top = (e.clientY-disY)+'px';
		}
	}

	function up(e){
		disX = 0;
		disY = 0;
		isDrag = false;
	}

	return {
		enable:function(){
			addEvent(dom,'mouseup',up);
			addEvent(dom,'mousedown',down);
			addEvent(dom,'mousemove',move);
		},
		disable:function(){
			removeEvent(dom,'mouseup',up);
			removeEvent(dom,'mousedown',down);
			removeEvent(dom,'mousemove',move);
		}
	}

}

function init(){
	addEvent(pop,'click',popLayer);
	for(index in closeBtn){
		 addEvent(closeBtn[index],'click',closeLayer);
	}
	dragLayer(model).enable();
}

init();