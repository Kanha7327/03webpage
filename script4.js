var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.3
})
tl.from("#nav1 h4,#nav h1,#nav h3",{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
tl.from("#left h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4

})
tl.from("right img",{
    scale:2,
    opacity:0,
    duration:0.5
})
gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})