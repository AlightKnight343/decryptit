AOS.init();
gsap.registerPlugin(TextPlugin);


gsap.to('.header', {duration: 8, text:{
    value : 'DecryptIt',
    } , ease: "power2", delay : 2});

    let tl = gsap.timeline({
        defaults :{ease: 'power1.out'},
    });
    
    
    // tl.fromTo('nav',{opacity:0}, {opacity:1, duration : 2})
    tl.fromTo('.header',{opacity:0}, {opacity:1, duration : 3}, )