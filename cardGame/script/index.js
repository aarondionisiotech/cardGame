const you = document.querySelector('#you span')
const cpu = document.querySelector('#cpu span')
const btn = document.getElementById('gioca')
const messaggio = document.getElementById('messaggio')


btn.onclick = () => {
    
    let p1 = Math.floor(Math.random() * 10 ) + 1
    let p2 = Math.floor(Math.random() * 10 ) + 1
    
    cpu.textContent = p1
    you.textContent = p2

    if(p1> p2){
        messaggio.textContent = 'HAI PERSO! :('
    }
    else if(p1 < p2){
        messaggio.textContent = 'HAI VINTO! :)'
    }
    else{
        messaggio.textContent = 'PAREGGIO :/'
    }

}