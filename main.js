
function calculatePrice() {
    let crispy = document.getElementById('crispy')
    let stuffed = document.getElementById('stuff')
    let glutten =document.getElementById('glutten')
    let mayonaise =document.getElementById('mayo')
    let vegan = document.getElementById('vegetable')
    let perperoni = document.getElementById('biff')
    // let radios = document.querySelectorAll('input[name="crust"]');
    let itemList = document.querySelector('#select').value;
    let price = document.querySelector('#price');
    let quantity = document.getElementById('quanity').value;
  
    let prices = [500, 800, 1200];
    let crust = {
      "crispy": 200,
      "stuffed": 350,
      "glutten": 300
  
    };
    let toppings = 200;
  
      //  Checks prices for small pizza
  
  
    if(crispy.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='small' && quantity>0){
      let small = (prices[0] + crust.crispy + toppings)*quantity
      price.innerText = small;
    }
    else if(stuffed.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='small' && quantity>0){
      let small = (prices[0] + crust.stuffed + toppings)*quantity
      price.innerText = small;
    }
    else if (glutten.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList === 'small'){
      let small = (prices[0] + crust.glutten + toppings)*quantity
      price.innerText = small;
    }
    
    // checks prices for medium sized pizza
  
   else if(crispy.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='medium' && quantity>0){
      let medium = (prices[1] + crust.crispy + toppings)*quantity;
      price.innerText = medium;
    }
   else if (stuffed.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='medium' && quantity>0){
      let medium = (prices[1] + crust.stuffed + toppings)*quantity
      price.innerText = medium;
    }
   else if (glutten.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList === 'medium'){
      let medium = (prices[1] + crust.glutten + toppings)*quantity
      price.innerText = medium;
    }
    //  checks prices for large pizza
    
   else if(crispy.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='Medium' && quantity>0){
      let large = (prices[2] + crust.crispy + toppings)*quantity;
      price.innerText = large;
    }
   else if (stuffed.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList==='Medium' && quantity>0){
      let large = (prices[2] + crust.stuffed + toppings)*quantity
      price.innerText = large;
    }
   else if (glutten.checked && (mayonaise.checked || vegan.checked || perperoni.checked) && itemList === 'Medium'){
    let large = (prices[2] + crust.glutten + toppings)*quantity
    price.innerText = large;
    }
    else {
      alert('Please make sure you fill up all field')
    }
  
  
  
  }
  
  
  
  
  
  function deliveryCharge() {
    let place = document.getElementById('delivery').value;
    let deliveryPrice = 300;
    if(place === ''){
      alert("Please enter your location");
      // break
    }
    else{
      alert(`Your Pizza will be delivered to ${place}, and delivery charge is ksh. ${deliveryPrice}`)
    }
    
    
  }
  let del = document.querySelector('.custom');
  del.addEventListener('click', (e) => {
    e.preventDefault();
    deliveryCharge()
  
  });
  
  
  let checkout = document.querySelector('.check');
  checkout.addEventListener('click', () => {
    let pricing = document.getElementById('pricing');
    pricing.style.display = "flex";
    calculatePrice()
  })