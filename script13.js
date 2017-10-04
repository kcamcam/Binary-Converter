var newval = false;
var dectobin = false;

/* Check what page your one to change the converter function */
var current = window.location.href;
if (current.includes("dectobin"))
 	dectobin = true;

/* Convert binary to decimal and decimal to binary */
function bazinga(){
	newval = true;
	var inval = document.getElementById("inputval").value;
	var radioval = $("input[name=radio]:checked").val();
	regexcheck(inval,radioval);
	var result;
	if(dectobin)
		result = (parseInt(inval).toString(radioval)).toUpperCase();
	else
		result = parseInt(inval,radioval);
	document.getElementById("result").innerHTML = result;
}

/* Regex check for proper user input, if wrong prompt and delete last invalide character */
function regexcheck(inval,radioval){
	if (/[^0-1]+/.test(inval) && radioval == "2" && !dectobin){
		swal({title: 'Oops🙊', text:'Binary only accepts 1\'s and 0\'s.', timer: 2000, confirmButtonColor: "#5CB85C"});
		document.getElementById("inputval").value = inval.substr(0,(inval.length -1));
	}else if (/[^0-7]+/.test(inval) && radioval == "8" && !dectobin){
		swal({title: 'Oops🙊', text:'Octal only accepts numbers between 0 and 7.', timer: 2000, confirmButtonColor: "#5CB85C"});
		document.getElementById("inputval").value = inval.substr(0,(inval.length -1));
	}else if (/[^0-9 ^a-fA-F]+/.test(inval) && radioval == "16" && !dectobin){
		console.log(inval)
		swal({title: 'Oops🙊', text:'Hexadecimal only accepts numbers and letters between A and F.', timer: 2000, confirmButtonColor: "#5CB85C"});
		document.getElementById("inputval").value = inval.substr(0,(inval.length -1));
	}else if (/[^0-9]+/.test(inval) && dectobin){
		swal({title: 'Oops🙊', text:'Decimal only accepts numbers between 0 and 9.', timer: 2000, confirmButtonColor: "#5CB85C"});
		document.getElementById("inputval").value = inval.substr(0,(inval.length -1));
	}
}
/* Change values based on button clicks */
function radioclick(){
	var radioval = $("input[name=radio]:checked").val();
	var result = parseInt(document.getElementById("result").innerHTML);
	
	if(!newval && !dectobin){
		document.getElementById("addon").innerHTML = radioval; 
		var newinput = (result.toString(radioval)).toUpperCase();
		document.getElementById("inputval").placeholder = newinput;
	}else if (newval && !dectobin){
		document.getElementById("addon").innerHTML = radioval; 
		var newinput = (result.toString(radioval)).toUpperCase();
		document.getElementById("inputval").value = newinput;
		bazinga();
	}if(!newval && dectobin){
		var inval = parseInt(document.getElementById("inputval").placeholder);
		var newoutput = (inval.toString(radioval)).toUpperCase();
		document.getElementById("result").innerHTML = newoutput;
	}else if (newval && dectobin)
		bazinga();
}

/* Easter Egg */
var stringVal="";
document.onkeypress = function (e) {
    e = e || window.event;
	switch(e.keyCode){
		case 105:
			stringVal+="i";
			break;
		case 99:
			stringVal+="c";
			break;
		case 117:
			stringVal+="u";
			break;
		default:
		 	stringVal="";
	}
	if(stringVal.indexOf("icu")!=-1)
		window.open("http://instantcena.ca");
};

/* Copy result to Clipboard */
function copy() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#result").text()).select();
    document.execCommand("copy");
    $temp.remove();
}
$(document).ready(function () {	
	$("#copy").click(function() {
		if(!detectmobile())
			swal({ title: "Success 🙌", text: "Copied to clipboard📎.", timer: 2000, showConfirmButton: false, type:"success"});
		else
			swal({ title: "Sorry 😞", text: "This function is not yet available on mobile📱.", timer: 2000, showConfirmButton: false, type:"error"});
	});
});
window.detectmobile = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

/* Auto Expand Input Text Area */
$(document).one('focus.autoexpand', 'textarea.autoexpand', function(){
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
}).on('input.autoexpand', 'textarea.autoexpand', function(){
    var minRows = this.getAttribute('data-min-rows') | 0, rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 21);
    console.log(minRows+", "+rows+","+this.rows)
	this.rows = minRows + rows;
});

/*---- Update Footer ----*/
function setYear(){
    var footer = document.getElementById("yearFooter");
    var date = new Date();
    date = date.getYear().toString();
    date = "20"+ date.substring(1,3);
    footer.innerHTML=date;
}

/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-98616559-1', 'auto');
ga('send', 'pageview');