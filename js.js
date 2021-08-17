let stringMainers = document.querySelectorAll(".mainers-string-main");
let dashbord = document.querySelector(".dashbord");
let mainers = document.querySelector(".mainers");


dashbord.addEventListener('click',()=>{
   dashbord.classList.add("active-menu");
   mainers.classList.remove("active-menu");
   document.querySelector(".main__dashbord").style.display = "block";
   document.querySelector(".main__miners").style.display = "none";
})

mainers.addEventListener('click',()=>{
   mainers.classList.add("active-menu");
   dashbord.classList.remove("active-menu");
   document.querySelector(".main__dashbord").style.transition = "all .3s";
   document.querySelector(".main__dashbord").style.display = "none";
   document.querySelector(".main__miners").style.display = "block";
})
// console.log(contentMainers.classList.has("acrive-string"));
// function contentMain(){
//    contentMainers.forEach(item=>{
//        if((item.style.display) == "none"){
//          contentMainers.style.display = "block";
//          // console.log('1');
//       }else {
//          contentMainers.style.display = "none";
//          // console.log('2');
//          
//       }
//    })
//   
// }
stringMainers.forEach(item=>{
   item.addEventListener("click",(e)=>{
      let string = e.target;
      let parent =  string.parentElement;
      let parentChildren = parent.children[3];
      // let parentChildren_Children = parentChildren.chilren[2];
      if(e.target.className == "arrow"){


         parentChildren.classList.toggle("active-string")
         // if(parentChildren.style.display == "none"){
         //    parentChildren.style.display = "block";
         // }
      //   console.log((parent.children[3])); 
      }
//  console.log(string.children[2].style.display = 'block');
// console.log(string);



 
 
   // contentMain();

   
   
})
})




let burger = document.querySelector(".header-burger");
let header_burge_body = document.querySelector('.header-burge-body');
let spans_burger = document.querySelectorAll(".header-burger-pal");
let listHeader = document.querySelector(".header-main__items");

burger.addEventListener("click",()=>{
   header_burge_body.classList.toggle("d-n");
   spans_burger[1].classList.toggle("d-n");
   spans_burger[0].classList.toggle("header-burger-pal-left-active");
   spans_burger[2].classList.toggle("header-burger-pal-right-active");

   if(header_burge_body.classList.contains("d-n") == false){
      header_burge_body.append(listHeader);
   }
})