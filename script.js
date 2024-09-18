let btn = document.getElementById("btn")
let btnRenk = document.getElementById("btnRenk")
let butondaki = document.getElementById("butondaki")
btnRenk.disabled  =true;
trol=0
renkver = 0
kaçKere=0   
let i=0

function secimYap(){
    let zorluk = Number(document.getElementById("zorluk").value);

    if (zorluk !=NaN){
        btnRenk.disabled = false;
        btn.textContent ="Tahmin Et!"
        butondaki.textContent=kaçKere
    }
    return Math.round(random*zorluk) 
   
}

let random = Math.random();




function kontrolEt(){

    console.log(secimYap())
    
    let sonuc = document.getElementById("sonucText")
    let btn = document.getElementById("btn")
    let renk = document.getElementById("renk")
    let trolOnleme = document.getElementById("sayi").value
    let btnRenk = document.getElementById("btnRenk")
    
    
   
  
    while (i<5){    
        let sayi = Number(document.getElementById("sayi").value);
        
        if(trolOnleme == "" ){
            sonuc.style.color="red"
            renk.style.color="red"
            btnRenk.style.backgroundColor="red"
            sonuc.innerText=`Bir değer giriniz`
            trol++
            butondaki.textContent=trol
            
            break;
        }
        
        
        if(sayi>secimYap()){
            sonuc.style.color="red"
            renk.style.color="red"
            btnRenk.style.backgroundColor="red"
            sonuc.innerText=`Biraz daha küçük bir değer gir ${4-kaçKere} hakkınız kaldı`
            kaçKere++
            butondaki.textContent=kaçKere
            i++
            break;
            
        }else if(sayi<secimYap()){
            sonuc.style.color="red"
            renk.style.color="red"
            btnRenk.style.backgroundColor="red"
            sonuc.innerText=`Biraz daha büyük bir değer gir ${4-kaçKere} hakkınız kaldı`
            kaçKere++
            butondaki.textContent=kaçKere
            i++
            break;
        }
        else if(sayi==secimYap()){
            renkver++
            sonuc.style.color="green"
            renk.style.color="green"
            btnRenk.style.backgroundColor="green"
            kaçKere++
            butondaki.textContent=kaçKere
            sonuc.innerText=`Doğru bildin ${kaçKere} kere denedin`
            btnRenk.disabled = true;
            btn.textContent = "Kazandınız"
            i=5
            break;
        }
        btnRenk

    }
    if(trol==3){
        sonuc.style.color="red"
        renk.style.color="green"
        btnRenk.style.backgroundColor="red"
        sonuc.innerText="Oyunu gerçekten oynamak istiyor musun ?"
        btnRenk.disabled =true;
        
        
    }
    
    if(kaçKere==5 && renkver == 0){
        btnRenk.disabled = true;
        btnRenk.textContent="Kaybettiniz"
        sonuc.style.color="red"
        sonuc.innerText=`Oyun bitti tüm haklarınızı kullandınız`
    }
}








