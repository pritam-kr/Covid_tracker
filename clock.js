function showTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    /*document.querySelector('.hour').textContent = h;
    document.querySelector('.mini').textContent = m;
    document.querySelector('.sec').textContent = s;*/
}

setInterval(showTime, 1000);

/*<div class="clock">
    <span class="hour"></span>:<spna class="mini"></spna>:<span class="sec"></span>
</div>*/