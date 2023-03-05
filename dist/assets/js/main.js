const naItem = document.querySelectorAll('.nav_link');
const naItems = document.querySelector('.nav_links');
$(".menu_btn").click(()=>{
    
    $(".nav_links").toggleClass("open")
    $(".menu_btn").toggleClass("bx-x")

})


naItem.forEach(item => {
    item.addEventListener('click',()=>{
        naItems.classList.remove('open')
         $(".menu_btn").removeClass("bx-x")
    })
});

$(".nav_link_btn").click(()=>{
     $(".menu_btn").removeClass("bx-x")
      naItems.classList.remove('open')
})


// home carousel 

$(".main_home.owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:30000,
     responsive:{
            0:{
                items:1
            }
        }

})
$(".testi.owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:30000,
     responsive:{
            0:{
                items:1
            }
        }

})



const sections = document.querySelectorAll('.sect')


 function scrollActive(){
     const scrollY = window.pageYOffset
  
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight 
         const sectionTop = current.offsetTop - 100;
        let sectionId = current.getAttribute('id')
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav_con a[href*='+sectionId+']').forEach(itm=>{
                itm.classList.add('active')
            })  
                

            }else{
                document.querySelectorAll('.nav_con a[href*='+sectionId+']').forEach(itm=>{
                itm.classList.remove('active')
                
            })  
           
       }
     })
 }
 window.addEventListener('scroll', scrollActive)
 window.addEventListener('scroll',  ()=>{
    if(window.pageYOffset > 130){
        $("header").addClass("opaque")
        
    }else(
        
        $("header").removeClass("opaque")
    )

     
})



