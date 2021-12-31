let CustomerSelection
let feeqCustomer={

    "ProjectName": "FEEQ SUPPERMARKET",
    "Email": "feeqsupperstore@gmail.com",
    "BillingAddress": "419, kosofe street ojubojuoreje GRA Lagos",
    "Branch": "A",

        payment_method:{
                        "payVia": "Card",
                        "paidVia": "Cash",
                        "paid_Via": "Transfer"
                    },
        feeqFirstItem:
                        {
                          name: "Dettol soap",
                          amount: 200,
                        },
        feeqSecItem:
                        {
                          name: "Juice",
                          amount: 550,
                        },
        feeqthirdItem:  {
                          name: "Body Cream",
                          amount: 2000,
                        },
        feeqFourtItem: {
                          name: "Plantain chips",
                          amount:  2500,
                        },
        feeqFifthItem:  {
                            name: "Crispy Chicken",
                            amount: 1250,
                        },
        feeqSixthItem:  {
                            name: "Chocolate",
                            amount: 120,
                        },
        feeqSeventhItem:  {
                            name: "plantain",
                            amount:300,
                        },                    
        };
    let supermarket_cart = {}
               
            while(true){
                CustomerSelection = prompt(`Welcome to ${feeqCustomer.ProjectName} \n kindly select(1-7) the list of item purchase, and press 0 to display the invoice: \n 1. Dettol soap \n 2. Juice \n 3. Body Cream \n 4. Plantain chips \n 5. Crispy Chicken \n 6. Chocolate\n 7. Plantain \n 0. Exit`)
                    if(CustomerSelection == 0){
                        let UnitOfitems = Object.values(supermarket_cart)
                        supermarket_cart.UnitOfitems = eval(UnitOfitems.join('+'))
                        alert(JSON.stringify(supermarket_cart))
                        break
                    }
                    else{
                        if(CustomerSelection == 1 ){
                                let itemUnit = prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqFirstItem.amount
                                        sumTotal = sumTotal * total
                                        console.log(`Your order is ${total}  ${feeqCustomer.feeqFirstItem.name} and Sum ${sumTotal}`)
                                alert(`Please print the invoice below after you've made your selections. \n You added: ${feeqCustomer.feeqFirstItem.name}: ${total}and price is: ${sumTotal} \n`)
                                supermarket_cart[feeqCustomer.feeqFirstItem.name] = sumTotal
                        } 
                    else if(CustomerSelection == 2){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqSecItem.name} and Sum ${sumTotal}`)
                                    alert(`Please print the invoice below after you've made your selections. \n You added:  ${feeqCustomer.feeqSecItem.name}:  ${total} and price is: ${sumTotal} \n`)
                                    supermarket_cart[feeqCustomer.feeqSecItem.name] = sumTotal
    
                        }
                    else if(CustomerSelection == 3){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                        
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqthirdItem.name} and Sum ${sumTotal}`)
                                    alert(`Please print the invoice below after you've made your selections. \n You added: ${feeqCustomer.feeqthirdItem.name}: ${total} and price is: ${sumTotal} \n`)
                                    supermarket_cart[feeqCustomer.feeqthirdItem.name] = sumTotal    
                            }
                    else if(CustomerSelection == 4){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                    
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqFourtItem.name} and Sum ${sumTotal}`)
                                    alert(`Please print the invoice below after you've made your selections. \n You added: ${feeqCustomer.feeqFourtItem.name}: ${total} and price is: ${sumTotal} \n`)
                                    supermarket_cart[feeqCustomer.feeqFourtItem.name] = sumTotal
                            }
                    else if(CustomerSelection == 5){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqFifthItem.name} and Sum ${sumTotal}`)
                                alert(`Please print the invoice below after you've made your selections. \n You added: ${feeqCustomer.feeqFifthItem.name}: ${total} and price is: ${sumTotal} \n`)
                                supermarket_cart[feeqCustomer.feeqFifthItem.name] = sumTotal
                            
                            }
                    else if(CustomerSelection == 6){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqSixthItem.name} and Sum ${sumTotal}`)
                                alert(`Please print the invoice below after you've made your selections. \n You added:  ${feeqCustomer.feeqSixthItem.name}: ${total} and price is: ${sumTotal} \n`)
                                supermarket_cart[feeqCustomer.feeqSixthItem.name] = sumTotal 
                
                            }
    
                    else if(CustomerSelection == 7){
                                let itemUnit =prompt("Enter the numbers of item")
                                let total = itemUnit
                                let sumTotal = feeqCustomer.feeqSecItem.amount
                                    sumTotal = sumTotal * total
                                    console.log(`Your order is ${total}  ${feeqCustomer.feeqSeventhItem.name} and Sum ${sumTotal}`)
                                alert(`Please print the invoice below after you've made your selections. \n You added: ${feeqCustomer.feeqSeventhItem.name}: ${total} and price is: ${sumTotal} \n`)
                                supermarket_cart[feeqCustomer.feeqSeventhItem.name] = sumTotal
                            }

                }
        }
    
        
                

                
  