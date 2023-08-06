//Ajax Call
var html="";

//取得 Ajax 連接物件
function getHTTPObject() {  
  var xhr;
  if (window.XMLHttpRequest) {     
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {     
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  }  
  return xhr;
}

function acHtm1(dataUrl) {  
  var request = getHTTPObject();
  request.onreadystatechange = function() {    
    if ( request.readyState === 4 && request.status === 200 ) {      
		html=request.responseText;      
    } 
  } 
  request.open("GET", dataUrl, true);
  request.send(null);
}

function acHtm2(dataUrl, callback ) {  
  var request = getHTTPObject();
  request.onreadystatechange = function() {    
    if ( request.readyState === 4 && request.status === 200 ) {          
      if(typeof callback === "function"){		
        callback(request.responseText);
      } 
    } 
  } 
  request.open("GET", dataUrl, true);
  request.send(null);
}

function acHtm3(dataUrl, domEle) {  
  var request = getHTTPObject();
  request.onreadystatechange = function() {    
    if ( request.readyState === 4 && request.status === 200 ) {          
      if(domEle !== null){		
        domEle.innerHTML = request.responseText;
      } 
    } 
  } 
  request.open("GET", dataUrl, true);
  request.send(null);
}

function acHtm4(dataUrl, page , domEle) {  
  var request = getHTTPObject();
  request.onreadystatechange = function() {    
    if ( request.readyState === 4 && request.status === 200 ) {          
      if(domEle !== null){	
        var pp =  request.responseText;
		domEle.innerHTML = pp.replace(/cover/g, page);
      } 
    } 
  } 
  request.open("GET", dataUrl, true);
  request.send(null);
}

var domEle ;
function setCont(url){  
    domEle = document.getElementById("cont");  
	acHtm3(url, domEle)
}

function getCont(){
	domEle = document.getElementById("cont"); 
    return domEle.innerHTML;
}

function chJpg(s){	
    domEle = document.getElementById("cont");  
	acHtm4("cover.htm",s,domEle)
}

(function(){
	  
})();