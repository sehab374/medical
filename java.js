// var product =
// {
//     onSale: false,
//     name :'Dell',
//     category: ' computer',
//     welcome:function(){
//         window.alert(" hello " + this.name)
//     },

//     components:{Ram:'8G' , hardDisk:4000}

    
// }
// product.welcome();

// var friends = ['ali' , 'ahmed' , 'amr' , 'Hossam'];
// friends.splice(2,3);
// for(var i = 0 ; i < friends.length; i++)
// {
//     console.log(friends[i]);
// }
/*
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDes = document.getElementById('productDes');
var btn = document.getElementById('add');
var currenIndex = 0;

btn.addEventListener('click' , function(){
 

    if(btn.innerHTML == 'Add Product')
    {
        addProduct();
        displayProduct();
        clearProduct();
    }
    else
    {
     
        saveProduct();
        displayProduct();
        btn.innerHTML = 'Add Product'
    }

})


function saveProduct()
{

    var product=
    {
        productName: productName.value,
        productPrice : productPrice.value,
        productCategory : productCategory.value,
        productDes : productDes.value,
    }

    productList[currenIndex] = product;
    localStorage.setItem("productRevesion" , JSON.stringify( productList ) );
  
clearProduct()


}

var productList;

if(localStorage.getItem("productRevesion") == null)
{
    productList = []
}
else
{
   productList= JSON.parse( localStorage.getItem("productRevesion"));
    displayProduct();
}



function addProduct()
{

        
    var product=
    {
        productName: productName.value,
        productPrice : productPrice.value,
        productCategory : productCategory.value,
        productDes : productDes.value,
    }
  

    productList.push(product);

    


    
localStorage.setItem("productRevesion" , JSON.stringify( productList ) );

}




function displayProduct()
{

    var cartoona="";
    for(var i = 0 ; i < productList.length; i++)
    {
        cartoona+=`<tr>
        <td>`+productList[i].productName+`</td>
        <td>`+productList[i].productPrice+`</td>
        <td>`+productList[i].productCategory+`</td>
        <td>`+productList[i].productDes+`</td>
        <td><button onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateProduct(`+i+`)"  class="btn btn-warning">Update</button></td>

        </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;

}

function clearProduct()
{
    productName.value = "";
    productPrice.value = "";
    productCategory.value= "";
    productDes.value= "";


}

function deleteProduct(index)
{

    
        productList.splice(index,1);
        localStorage.setItem("productRevesion" , JSON.stringify( productList ) );
        displayProduct();

}

function updateProduct(index)
{
    currenIndex = index;
    
    productName.value = productList[index].productName;
    productPrice.value = productList[index].productPrice;
    productCategory.value = productList[index].productCategory;
    productDes.value = productList[index].productDes;

    btn.innerHTML = 'update';

}

function searchProduct(term)
{
    var cartoona="";
    var cartoona2 = "";
    var newText ="";
    for(var i = 0 ; i <productList.length ; i++)
    {
        if(productList[i].productName.includes(term) == true)
        {
        cartoona+= `<tr><td>`+productList[i].productName+`</td>
        <td>`+productList[i].productPrice+`</td>
        <td>`+productList[i].productCategory+`</td>
        <td>`+productList[i].productDes+`</td>
        <td><button onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateProduct(`+i+`)"  class="btn btn-warning">Update</button></td>
        </tr>`


            newText = productList[i].productName.replace(term , `<span style="color:red">`+term+`</span>`)
        cartoona2 += `<p>`+newText+`</p>`

        }

    }
    document.getElementById('tableBody').innerHTML = cartoona;
    document.getElementById('searchDiv').innerHTML =cartoona2;

}
*/

// var images = document.getElementsByClassName('img');
// var imgArray = [];
// var lightBoxContainer = document.getElementById('lightBoxContainer');
// var lightBoxItem = document.getElementById('lightBoxItem');
// var prev = document.getElementById('prev');
// var next = document.getElementById('next');
// var close = document.getElementById('close');
// var inputTest = document.getElementById('inputs')
// var currentSlideIndex = 0;
// for(var i =0; i < images.length ; i++)
// {
//     imgArray.push(images[i])
//     imgArray[i].addEventListener('click' , function(eventInfo){

//         currentSlideIndex =imgArray.indexOf(eventInfo.target)
//         lightBoxContainer.style.display = 'flex';
//        var imgSrc = eventInfo.target.getAttribute('src');
//        lightBoxItem.style.backgroundImage = 'url('+imgSrc+')' ;
        
//     })
// }




// function nextSlide()
// {
//     currentSlideIndex ++;
//     if(currentSlideIndex == imgArray.length)
//     {
//         currentSlideIndex = 0;
//     }
//     lightBoxItem.style.backgroundImage = 'url('+imgArray[currentSlideIndex].getAttribute('src')+')' ;
   

 
// }

// function prevSlide()
// {
//     currentSlideIndex --;
//     if(currentSlideIndex < 0)
//     {
//         currentSlideIndex = imgArray.length -1;
//     }
//     lightBoxItem.style.backgroundImage = 'url('+imgArray[currentSlideIndex].getAttribute('src')+')' ;

// }

// function closeSlide()
// {
//     lightBoxContainer.style.display = 'none';

// }
// next.addEventListener("click" ,nextSlide);
// prev.addEventListener("click" , prevSlide);
// close.addEventListener("click" , closeSlide);


// document.body.addEventListener('keypress' , function(e){

//     if(e.keyCode == 39)
// {
//     nextSlide();
// }
// else if(e.keyCode == 37)
// {
//     prevSlide();
// }
// else if(e.keyCode == 27)
// {
//     closeSlide();
// }



// })
 

// function sum(x,y)
// {
//     return x+y;
//     var flag = 200;
// }

// let x  = sum(10 , 50);
// console.log(x);

// let sum1 = x => x*10;
// console.log(sum1(50))



// let nums = [10 , 20 , 20]
// function sum (x,y , z)
// {
//   return x+ y +z ;
// }
// var result = sum(...nums);
// console.log(result);

// var person = 
// {
//     name : 'Ahmed Mostafa',
//     age : 21,
//     salary: 7000,
//     welcome:function()
//     {
//         console.log(`Hello Eng ${this.name}`)
//     },

//     getSalary:function()
//     {

//          tax = () =>
//         {
//             return (this.salary*10)/100;
//         }
        
//         return this.salary - tax();

        
//     },

// }

// console.log(  person.getSalary()  )

// let person = new Map()

// person.set("name" , "Ahmed Mostafa");
// person.set("age" , 25);
// person.set("Salary" , 7000);
// for(let [x , y] of person)
// {
//     console.log([y])
// }



// let Doctor = function(name , age , salary , gender , friends)
// {
//     this.dName = name;
//     this.dAge=age;
//     this.dSalary  = salary;
//     this.dGender = gender;
//     this.friends = friends;
   
// }

// Doctor.prototype.welcome = function()
// {
//     console.log(`Hello Doctor ${this.dName}`)
// }

// class Doctor
// {
//     constructor(name , age , salary , gender , friends)
//     {
//         this.dName = name;
//         this.dAge=age;
//         this.dSalary  = salary;
//         this.dGender = gender;
//         this.friends = friends;
   
//     }
//     welcome()
//     {
//         console.log(`hello DR / ${this.dName}`)
//     }
// }

// let d1 = new Doctor( "mai " , 25 , 9000 , 'female' , ['mai' , 'salma']);
// let d2 = new Doctor( "sara " , 25 , 9000 , 'female' , ['mai' , 'salma']);
// let d3= new Doctor( "ali " , 25 , 9000 , 'female' , ['mai' , 'salma']);
// let d4 = new Doctor( "amr " , 25 , 9000 , 'female' , ['mai' , 'salma']);
// let d5 = new Doctor( "mhosam ai " , 25 , 9000 , 'female' , ['mai' , 'salma']);
// console.log(d5)
// d5.welcome();

// class person
// {
//     constructor(name , salary , gender)
//     {
//         this.pName = name;
//         this.pSalary = salary;
//         this.pGender = gender;
//     }
//     welcome()
//     {
//         console.log(`Hello ${this.pName}`)
//     }
// }

// let p1 = new person("ALi" , 5000 , 'male')
// let p2 = new person("Mai" , 5000 , 'male')
// let p3 = new person("Omar" , 5000 , 'male')

// class developer extends person
// {
//     constructor(name , salary , gender, id , dept)
//     {
//         super(name , salary , gender );
//         this.dID = id;
//         this.dDept = dept;
//     }
// }

// let d1 = new developer("Eng/ Hossam" , 9000 , 'male', 15 , "IS")
// let d2 = new developer("Eng/ Taha" , 9000 , 15 , 'male',"IS")
// let d3 = new developer("Eng/ Lobna" , 9000 , 15 , 'male',"IS")
// d1.welcome()
// console.log(d1)
// console.log(d2)
// console.log(p1)

var lightBoxContainerId = document.getElementById('lightBoxContainerId');
var lightBoxItemId = document.getElementById('lightBoxItemId');
var lightBoxContainerId2 = document.getElementById('lightBoxContainerId2');
var lightBoxItemId2 = document.getElementById('lightBoxItemId2');
var lightBoxContainerId3 = document.getElementById('lightBoxContainerId3');
var lightBoxItemId3 = document.getElementById('lightBoxItemId3');
var lightBoxContainerId4 = document.getElementById('lightBoxContainerId4');
var lightBoxItemId4 = document.getElementById('lightBoxItemId4');
var q4 = document.getElementById('q4');
var q3 = document.getElementById('q3');
var q2 = document.getElementById('q2');
var q1 = document.getElementById('q1');
var close = document.getElementById('close');

q1.addEventListener('click' , function(){
    lightBoxContainerId.style.display = 'flex';
})

q2.addEventListener('click' , function(){
    lightBoxContainerId2.style.display  = 'flex';
})

q3.addEventListener('click' , function(){
    lightBoxContainerId3.style.display  = 'flex';
})

q4.addEventListener('click' , function(){
    lightBoxContainerId4.style.display  = 'flex';
})

function closepage()
{
    lightBoxContainerId.style.display = "none";
    lightBoxContainerId2.style.display = "none";
    lightBoxContainerId3.style.display = "none";
}
close.addEventListener('click' ,function(){
    closepage()
} )
