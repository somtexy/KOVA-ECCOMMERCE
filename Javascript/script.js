document.getElementById('infoForm').addEventListener('submit', function(e) {

              e.preventDefault();

        

              document.getElementById('nameDisplay').textContent = document.getElementById('nameInput').value;

              document.getElementById('ageDisplay').textContent = document.getElementById('ageInput').value;

              document.getElementById('emailDisplay').textContent = document.getElementById('emailInput').value;

              document.getElementById('Display').textContent = document.getElementById('amountInput').value;

              document.getElementById('interest').textContent = document.getElementById('interestInput').value + '%';

              document.getElementById('earnedDisplay').textContent = document.getElementById('amountEarnedInput').value;

            });

              
            function validate(){  
                event.preventDefault();  
                let formAmount = document.getElementById('amoumt')  
                let amount = parseFloat(formAmount.value)  
                document.getElementById('Display').innerHTML = amount.tofixed(2)  
                  
                //function to calculate interest  
                  
                const interest = ()=>{  
                    let intree = (amount * 5 * 2.5)/100  
                    document.getElementById('interest').innerHTML = intree.toFixed(2)  
                      
                    let earned = amount + intree  
                    document.getElementById('earnedDisplay').innerHTML = earned.toFixed(2)  
                      
                }  
            }  
              
