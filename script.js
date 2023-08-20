const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlemove() {
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#followCircle").style.transform = 'translate(${dets.clientX}px , ${dets.clientY}px)';
    } )
}

circlemove();