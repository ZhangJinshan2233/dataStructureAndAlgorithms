class MinCoinChanges {
  constructor(coins) {
    this.coins = coins;
    this.cache = {};
  }

  makeChange(amount) {
    if (!amount) {
      return []
    }
    if (this.cache[amount]) {
      return this.cache[amount];
    }
    var min = [],
      newMin, newAmount;
    for (var i = 0; i < this.coins.length; i++) { //{5}
      var coin = this.coins[i];
      newAmount = amount - coin; //{6}
      console.log('newAmount',newAmount)
      if (newAmount >= 0) {
        newMin =this.makeChange(newAmount); //{7}
        console.log('newMin',newMin)
      }
      console.log('test')
      if ( newAmount >= 0 &&(newMin.length < min.length - 1 || !min.length)&&(newMin.length || !newAmount))
        {
          min = [coin].concat(newMin); //{11}
          console.log('new Min ' + min + ' for ' + amount);
        }
      }
      return (this.cache[amount] = min); //{12}
    };
  }
  var minCoinChange=new MinCoinChanges([1,5,9,23])
   console.log(minCoinChange.makeChange(100));

