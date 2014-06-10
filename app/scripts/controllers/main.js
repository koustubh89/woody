'use strict';

angular.module('woodsApp')
  .controller('MainCtrl', function ($scope) {
  	
  	$scope.turn='myturn';	
    var distribute=function(){
    	var total=52;
    	
    	var numbers=_.range(1,53);
//    	console.log(numbers);
		var deck_info = [];

		var shuffledeck=_.shuffle(numbers);
    	//console.log(shuffledeck);
    
//    	console.log(_.without(numbers, player1cards));
//    	console.log(_.groupBy(numbers, function(num){ return _.first(_.shuffle(numbers),13); }));
		$scope.player1cards=[];
		$scope.player2cards=[];
		$scope.player3cards=[];
		$scope.player4cards=[];

		var temp;var i=0;var deck=0;
			for(i=0;i<=12;i++){
				temp=shuffledeck.pop();
				$scope.player1cards.push(temp);
				if(temp/13==0){
					console.log('inside 1 if');
					$scope.player1cards[i].deck='s';
					$scope.player1cards[i].faceV= (temp%13)+2;
				}
				if(temp/13==1){
					$scope.player1cards[i].deck='h';
					$scope.player1cards[i].faceV= (temp%13)+2;
				}
				if(temp/13==2){
					$scope.player1cards[i].deck='c';
					$scope.player1cards[i].faceV= (temp%13)+2;
				}
				if(temp/13==3){
					$scope.player1cards[i].deck='d';
					$scope.player1cards[i].faceV= (temp%13)+2;
				}
				console.log($scope.player1cards[i].deck,$scope.player1cards[i].faceV);
			}
			console.log("player1",$scope.player1cards);
			for(i=0;i<=12;i++){
				temp=shuffledeck.pop();
				$scope.player2cards.push(temp);
			}
			//console.log("player2",$scope.player2cards,$scope.player2cards.length);
			for(i=0;i<=12;i++){
				temp=shuffledeck.pop();
				$scope.player3cards.push(temp);
			}
			//console.log("player3",$scope.player3cards,$scope.player3cards.length);
			for(i=0;i<=12;i++){
				temp=shuffledeck.pop();
				$scope.player4cards.push(temp);
			}
			//console.log("player4",$scope.player4cards,$scope.player4cards.length);
			for(i=0;i<=12;i++){
				if($scope.player1cards[i]/13 == 0)
				$scope.player1cards[i].deck='s';
			}
    }

    distribute();

	var allowDrop= function(ev){
      //console.log("here");
        ev.preventDefault();
  	}
	
	var holder='';
	$scope.drag=function(ev){
	//console.log("picked",ev.target)
		holder= ev.target;
	    ev.dataTransfer.setData("Text",ev.target.id);
	    //console.log(ev.target.id);
	}

	function drop(ev){
	    ev.preventDefault();
	    //console.log(ev, ev.target,"---------", holder)
	    //var data=ev.dataTransfer.getData("text");
	    //console.log(data);
	    ev.target.appendChild(holder);
	    //console.log('dropped');
	}

	$scope.fucn=function(playername){
		console.log("reading the click",playername);
		if(playername == 'player1'){$scope.turn='player1';}
		if(playername == 'player2'){$scope.turn='player2';}
		if(playername == 'player3'){$scope.turn='player3';}
		if(playername == 'player4'){$scope.turn='player4';}
	}	
  });
