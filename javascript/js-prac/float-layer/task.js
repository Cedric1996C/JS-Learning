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

var dragLayer = function(getDrag){
 	var dragObject = null;
	var disX = 0;
	var disY = 0;

	function down(e){
		dragObject = getDrag(e);
		if(dragObject != null){
			disX = e.clientX - dragObject.offsetLeft;
			disY = e.clientY - dragObject.offsetTop;
		}
	}

	function move(e){
		if( dragObject ){
			dragObject.style.left = (e.clientX-disX)+'px';
			dragObject.style.top = (e.clientY-disY)+'px';
		}
	}

	function up(e){
		disX = 0;
		disY = 0;
		dragObject = null;
	}

	return {
		enable:function(){
			addEvent(document,'mouseup',up);
			addEvent(document,'mousedown',down);
			addEvent(document,'mousemove',move);
		},
		disable:function(){
			removeEvent(document,'mouseup',up);
			removeEvent(document,'mousedown',down);
			removeEvent(document,'mousemove',move);
		}
	}

}

function getDrag(e){
	var target = e.target;
	while(target && target.className.indexOf("dialog")==-1){
		target = target.offsetParent;
	}
	if(target!=null){
        return target.offsetParent;
    }else{
        return null;
    }
}

function init(){
	addEvent(pop,'click',popLayer);
	for(index in closeBtn){
		 addEvent(closeBtn[index],'click',closeLayer);
	}
	dragLayer(getDrag).enable();
}

init();