$(document).ready(function() {
    $("#title").fadeOut(500);
    $("#title").fadeIn(500);

 ;
 var y=$('#catname').innerHTML
 function CreateCat(name){
	var cat={}
	cat.name=name
	cat.hunger=Math.floor(Math.random()*10)
    cat.lonliness=Math.floor(Math.random()*10)
	cat.happiness=Math.floor(Math.random()*10)
	cat.tiredness=Math.floor(Math.random()*10)
	 cat.feed=feed 
	// cat.sleep=sleep
	// cat.petting=petting
	// cat.state=state
	return cat 
}
var x=CreateCat("hamzaoui")
// change the value of the bars
$("#hapiness")[0].innerHTML= x.happiness*10+"%"
$("#hungre")[0].innerHTML=x.hunger*10+"%"
$("#lonliness")[0].innerHTML=x.lonliness*10+"%"
$("#tirednes")[0].innerHTML=x.tiredness*10+"%"
// change the wight in css
$("#hapiness").css("width",x.happiness*10+"%")
$("#hungre").css("width",x.hunger*10+"%")
$("#lonliness").css("width",x.lonliness*10+"%")
$("#tirednes").css("width",x.tiredness*10+"%")
// change the img
var img1="img/feedit.gif"
var img2="img/aftersleep.gif"
var img3="img/fullsleepandfeed.gif"
var img4="img/happnesafterlon.gif"
var img5="img/pat.gif"
var img6="img/wanttoeat.gif"
var img7="img//wanttoplay.gif"
var img8="img/wanttosleep.gif"
var img9="img/happycat.gif"
function whatImgesWillDisPlayFirst(){
	if(x.hunger>7){
		document.getElementById('catt').src=img6	}
	else if(x.happiness>7){
		document.getElementById('catt').src=img9
	}
}
whatImgesWillDisPlayFirst()
var feed=function(){
	if (this.hunger>7){
         $('#catt').append('src="img/wanttoeat.gif" />')}
else {
	this.happiness++
	this.hunger+=3
     $('#catt').append('<img  src="img/fullsleepandfeed.gif" />')
} 

}    
})