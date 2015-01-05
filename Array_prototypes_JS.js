Array.prototype.array_shuffler = function(allow_undefines){
	if(allow_undefines===null||allow_undefines === undefined){
		allow_undefines=true;
	}
	var array = this;
	var arrlen = array.length;
	var result = [];
	for(var i = 0; i < array.length;i++){
		var indexed = Math.round(Math.random() * arrlen);
		arrlen-=1;
		var temp = array[arrlen];
		array[arrlen] = array[indexed];
		array[indexed] = temp;
		
		if (arrlen < 1){
			break;
		}
	}if(allow_undefines===false){
	for (var j = 0; j < array.length;j++){
	if (array[j] === undefined||array[j]===null){
			array[j]=Math.floor(Math.random()*arrlen);
		}
	}
	
}
	return array;
};
var arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
//console.log(arr.array_shuffler());
var array_maker = function(num_of_elements,throttle){
	var result = [];
	if (throttle === undefined || throttle === null){
		throttle = num_of_elements;
	}
	for (var i = 0; i < num_of_elements; i++){
		var new_rand = Math.floor(Math.random()*(throttle - 0))+0;
		result.push(new_rand);
	}	
	for (var j = 0; j < num_of_elements;j++){
		if(result[j] === undefined||result[j]===null){
			result[j] = Math.floor( Math.random() * (throttle - 0 ) ) + 0;
		}
	}
	return result;
};
Array.prototype.fast_bubble_sort = function(){
	var i=0,j=0,place_h,inc=0;
	var array = this;
	while(i < array.length){

		if (array[i] > array[i+1]){
					place_h = array[i];
					array[i]=array[i+1];
					array[i+1]=place_h;
					inc++;
				}
		while (j<array.length){
				if (array[j+1] <= array[j]) {
					place_h = array[j+1];
					array[j+1] = array[j];
					array[j] = place_h;
					inc++;

				}
				j++;
			}
				
				//console.log(array);
				i++;
			}
			//console.log(array);
			var s=0;
			if (inc > array.length){ //Stops the function if the array is sorted
				while (s<array.length){
					if(array[s]>array[s+1]){
						break;
					}
					else if (array[s]<=array[s+1]) {
						continue;
					}
					else {
						return array;
					}
					s++;
				}
				
			}
			var c =0;var recheck = 0; 
		while (recheck < array.length){//checks the array again
			if (array[recheck] > array[recheck+1]){
					place_h = array[i];
					array[i]=array[i+1];
					array[i+1]=place_h;
				}

		while (c<array.length){
				if (array[c+1] <= array[c]) {
					place_h = array[c+1];
					array[c+1] = array[c];
					array[c] = place_h;
					}
					c++;
		}
		recheck++;
		}

return array;
};/*
Array.prototype.bubble_sort = function(){
	var i,j,place_h,inc=0;
	var array = this;
	for (i = 0;i < array.length;i++){

		if (array[i] > array[i+1]){
					place_h = array[i];
					array[i]=array[i+1];
					array[i+1]=place_h;
					inc++;
				}
		for (j=0;j<array.length;j++){
				if (array[j+1] <= array[j]) {
					place_h = array[j+1];
					array[j+1] = array[j];
					array[j] = place_h;
					inc++;
				}
				//console.log(array);
			}
			//console.log(array);
			if (inc > array.length){ //Stops the function if the array is sorted
				for (var s=0;s<array.length;s++){
					if(array[s]>array[s+1]){
						break;
					}
					else if (array[s]<=array[s+1]) {
						continue;
					}
					else {
						return array;
					}
				}
			}
		}
		for (var recheck = 0; recheck < array.length;recheck++){//checks the array again
			if (array[recheck] > array[recheck+1]){
					place_h = array[i];
					array[i]=array[i+1];
					array[i+1]=place_h;
				}

		for (var c =0;c<array.length;c++){
				if (array[c+1] <= array[c]) {
					place_h = array[c+1];
					array[c+1] = array[c];
					array[c] = place_h;
					}
		}
		}

return array;
};
//console.log([9,9,9,1,1,1,3,3,3,8,8,8,7,7,7].bubble_sort());

Array.prototype.insertionSort = function(){
	var array = this;
   for (var i=0; i < array.length; i++) {
      var index = array[i]; 
      var j;
      for(j = i; j > 0 && array[j-1] > index;j--){
           array[j] = array[j-1];
      }
      array[j] = index;
} 
return array;
};*/
Array.prototype.fast_insertion_sort = function(){
	var array = this;var i=0;
  	while (i < array.length) {
    var index = array[i]; 
    var j = i;
    while(j > 0 && array[j-1] > index){
    	array[j] = array[j-1];
    	j--;
    }
    	array[j] = index;
    	i++;
} 
return array;
};
/*
var arr_to_sort = array_maker(100).array_shuffler(false);
//console.log(arr_to_sort);
var barr_to_sort = arr_to_sort.array_shuffler(false);
//console.log(barr_to_sort)
var sorted2 = barr_to_sort.bubble_sort();
var sorted1 = arr_to_sort.insertionSort();


var s;
for (s=0;s<arr_to_sort.length;s++){
	if(sorted1[s]===sorted2[s]){
	console.log("["+sorted1[s]+"] "+"["+sorted2[s]+"]");
	} else if(sorted1[s]!==sorted2[s]){
		console.log("["+sorted1[s]+"] !="+" ["+sorted2[s]+"]");
	}
}
*/
/*
var elem_count = function(array){
var len = array.length;var result = {};var result2=[];var i;var a;var k;
	for (i=0;i<len;i++){
		var count=0;
		k=array[i];
	if(!(k in Object.keys(result))){
		result2.push(k);
		for (a=0;a<len;a++){
			if(array[a]===k){
				count++;
				result[k]=count;
		}
	}		
}

}
for (var d in result){
console.log(d + " " + result[d]);
}
};*/
//works better(does not make mistakes) on sorted integer arrays... interesting.
//But it works even better on strings
//But I dont know why.

var arrayint = array_maker(1000);
arrayint.array_shuffler(false);
//console.time("Hi");//var start = +performance.now();
//console.log(arrayint.bubble_sort());
//console.timeEnd("Hi");
//arrayint.array_shuffler(false);
console.time("fast");
console.log(arrayint.fast_bubble_sort());
console.timeEnd("fast");
//arrayint.array_shuffler(false);
//console.time("Hello");
//console.log(arrayint.insertionSort());
//console.timeEnd("Hello");
arrayint.array_shuffler(false);
console.time("fast_insert");
console.log(arrayint.fast_insertion_sort());
console.timeEnd("fast_insert");
