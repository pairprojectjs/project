$(document).ready(function() {
    $("#title").fadeOut(500);
    $("#title").fadeIn(500);


 function CreateCat(name){
	var cat={}
	cat.name=name
	cat.hunger=Math.floor(Math.random()*10)
    cat.lonliness=Math.floor(Math.random()*10)
	cat.happiness=Math.floor(Math.random()*10)
	cat.tiredness=Math.floor(Math.random()*10)
	 cat.feed=function(){
		if(this.hunger<=2){
			this.hunger=0
			$(".geton").append(this.name+" is full")
		}
		else if(this.hunger===10){
			this.hunger=10
			
		}
	else {
		this.happiness++
			this.hunger-=3
	}

	}

	 cat.sleep= function(){
		if(this.hunger<=0){
			this.hunger=0
		}
		else if(this.lonliness>9){
			$(".geton").append(this.name+" want's to play with you")
			this.lonliness=10
		}

		else{
		this.hunger++
		this.happiness++
		this.lonliness++
		this.tiredness--
		}
	}
	 cat.petting=function(){
		if(this.tiredness>6){	
			$(".geton").append(this.name+" want's to sleep")
			
		}
		else if(this.lonliness<2){	
			this.lonliness=0
			
		}
		
		else{

		this.happiness++
		this.lonliness--
		this.tiredness++
		this.hunger++
	}
	}
	return cat 
}
var x=CreateCat("Mimi")
// change the value of the bars
function changethestatus(x){
$("#hapiness")[0].innerHTML= x.happiness*10+"%"
$("#hungre")[0].innerHTML=x.hunger*10+"%"
$("#lonliness")[0].innerHTML=x.lonliness*10+"%"
$("#tirednes")[0].innerHTML=x.tiredness*10+"%"
// change the wight in css
$("#hapiness").css("width",x.happiness*10+"%")
$("#hungre").css("width",x.hunger*10+"%")
$("#lonliness").css("width",x.lonliness*10+"%")
$("#tirednes").css("width",x.tiredness*10+"%")
}
changethestatus(x)
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
var img10="img/ungre.gif"
function whatImgesWillDisPlayFirst(){
	if(x.hunger<3 && x.tiredness<3  ){
		document.getElementById('catt').src=img3	
	}
	else if(x.happiness>7 && x.tiredness>7	){
		document.getElementById('catt').src=img9
	}
	else if(x.happiness<4 && x.tiredness<5 && x.hunger<5){
		document.getElementById('catt').src=img10
	}
	else if(x.lonliness>7 && x.happiness<4){
		document.getElementById('catt').src=img7
	}
	else if(x.happiness>7 && x.tiredness<3){
		document.getElementById('catt').src=img4
	}
	else if(x.hunger>7){
		
		document.getElementById('catt').src=img6
	}
	
	else if(x.tiredness<3){
		document.getElementById('catt').src=img2
	}
	else if(x.tiredness>7){
		document.getElementById('catt').src=img8	
		}
	


}
whatImgesWillDisPlayFirst()

console.log(x)
$("#feed").click(function(){
	x.feed()
	changethestatus(x)
	// whatImgesWillDisPlayFirst(x)
	document.getElementById("catt").src=img1	
})
$("#sleep").click(function(){
	x.sleep()
	changethestatus(x)
	document.getElementById("catt").src="img/sleeping.gif"
	// whatImgesWillDisPlayFirst(x)	
})
$("#peet").click(function(){
	x.petting()
	changethestatus(x)
	document.getElementById("catt").src=img5
	// whatImgesWillDisPlayFirst(x)	
})

whatImgesWillDisPlayFirst()

})