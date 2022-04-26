//Number One!
let i;
	for (i=1; i<=100; i++)
	{
		if ((i%5 == 0) & (i%3 ==0)){
			console.log("FizzBuzz" + " ");
        }else if ((i%3) == 0){
			console.log("Fizz" + " ");			
        }else if ((i%5) == 0){				
			console.log("Buzz" + " ");			
        }else{ 	
			console.log(i + " ");
        }			
	}

    //Number Two!
    var twoSum = function(nums, target) {
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i, j]
                }
            }
        }
    };

    console.log(twoSum([10, 4, 11, 5],9))
    console.log(twoSum([3, 2, 3],6))



    //Number Three!
    var isPalindrome = function(x) {
        return x == x.toString().split('').reverse().join('');
      };

    

    








