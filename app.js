const tahminInput = document.querySelector("#tahminInput");
const bahisMiktariInput = document.querySelector("#bahisMiktariInput");
const startBtn = document.querySelector("#startBtn");
const number1 = document.querySelector(".number-1")
const number2 = document.querySelector(".number-2")
const number3 = document.querySelector(".number-3")
const numbers = document.querySelectorAll(".number")
const LotoDivParent = document.querySelector("#LotoDivParent")
const spanClass = document.querySelectorAll(".spanClass")
const sonucDiv = document.querySelector(".sonucDiv")


//?inputa sadece number değer girilmesi

tahminInput.addEventListener("input", function () {
    // Rakam ve boşlukları kabul eden bir regex
    const regex = /^[0-9\s]+$/;

    if (!regex.test(tahminInput.value)) {
        // Rakam veya boşluk değilse, son girişi sil
        tahminInput.value = tahminInput.value.slice(0, -1);
    }
});

//

bahisMiktariInput.addEventListener("input", function () {
    // Rakam ve boşlukları kabul eden bir regex
    const regex = /^[0-9]+$/;

    if (!regex.test(bahisMiktariInput.value)) {
        // Rakam veya boşluk değilse, son girişi sil
        bahisMiktariInput.value = bahisMiktariInput.value.slice(0, -1);
    }
});


//

startBtn.addEventListener("click", function () {

    startBtn.disabled = true


    let animasyonSayilari = "123456789032857239057023958235723948523598325032"
    let animasyonSayilariDizi = animasyonSayilari.split("")
    let DataBase = [];
    let tahminInputValue = tahminInput.value;
    let TahminEdilenlerDizi = tahminInputValue.split(" ")
    let dogruEslesmeler = 0;
    let eslesenOgeler = ""
    let yeniSonuc = document.createElement("p")

    //!inputlar boş ise hata ver

    if (tahminInputValue == "" || bahisMiktariInput.value == "" || TahminEdilenlerDizi.length < 2) {
        if (tahminInputValue == "" || TahminEdilenlerDizi.length < 2) {
            tahminInput.style.animation = "ErrorBorder 1s linear infinite"
            tahminInput.style.background = "gray"
        }
        if (bahisMiktariInput.value == "") {
            bahisMiktariInput.style.animation = "ErrorBorder 1s linear infinite"
            bahisMiktariInput.style.background = "gray"
        }
        startBtn.disabled = false
        return
    }

    if (tahminInputValue !== "" || TahminEdilenlerDizi.length > 2) {
        tahminInput.style.animation = ""
        tahminInput.style.background = "green"
    }
    if (bahisMiktariInput.value !== "") {
        bahisMiktariInput.style.animation = ""
        bahisMiktariInput.style.background = "green"
    }
    //start btn animasyonu

    startBtn.style.background = "greenyellow"
    startBtn.style.borderRadius = "5rem"
    startBtn.style.fontSize = "3rem"
    spanClass.forEach(element => {
        element.style.animationDuration = ".3s"

        setTimeout(() => {
            element.style.animationDuration = ""

        }, 4000);
    });

    setTimeout(() => {
        startBtn.style.border = "1px dashed greenyellow"
        startBtn.style.background = "#000"
        startBtn.style.borderRadius = ""
        startBtn.style.fontSize = ""
    }, 100);


    //
    for (let i = 0; i < 3; i++) {
        let rstRakam = Math.floor(Math.random() * 10);
        DataBase.push(rstRakam);
        const element = DataBase[i]

        for (let i = 0; i < 100; i++) {

            let rstRakamIndex = Math.floor(Math.random() * (animasyonSayilariDizi.length - 1))
            setTimeout(() => {
                number1.innerHTML = animasyonSayilariDizi[rstRakamIndex]
                number2.innerHTML = animasyonSayilariDizi[rstRakamIndex]
                number3.innerHTML = animasyonSayilariDizi[rstRakamIndex + 1]
            }, 10 * (i));

        }

        numbers[i].textContent = ""  // Önce içeriği temizle
        numbers[i].style.color = "red"

        setTimeout(() => {
            numbers[i].innerHTML = element;
            if (DataBase[i] == TahminEdilenlerDizi[i]) {
                numbers[i].style.color = "green"
            }
        }, 1000 * (i + 1)); // Her bir sayıyı 1000ms arayla güncelle




    };
    for (let i = 0; i < 3; i++) {
        const element = DataBase[i];
        const value = TahminEdilenlerDizi[i];
        if (element == value) {
            ++dogruEslesmeler
        };
    };

    if (dogruEslesmeler == 1) {
        yeniSonuc.innerHTML =
            `
        Şanslı sayılar: ${DataBase.join(" ")}<br>
        Tahmin ettikleriniz: ${tahminInputValue}<br>
        Tebrikler ${dogruEslesmeler} slotu doğru tahmin ettiniz.<br>
        Kazancınız 2'ye katlandı!: <span style="color:green;">${+(bahisMiktariInput.value) * 2}₺.</span><hr><div class="hrDiv"></div>
        
        `
        setTimeout(() => {
            sonucDiv.appendChild(yeniSonuc)
        }, 4000);
    }
    if (dogruEslesmeler == 2) {
        yeniSonuc.innerHTML =
            `
        Şanslı sayılar: ${DataBase.join(" ")}<br>
        Tahmin ettikleriniz: ${tahminInputValue}<br>
        Tebrikler ${dogruEslesmeler} slotu doğru tahmin ettiniz.<br>
        Kazancınız 4'e katlandı!: <span style="color:green;">${+(bahisMiktariInput.value) * 4}₺.</span><hr><div class="hrDiv"></div>
        
        `
        setTimeout(() => {
            sonucDiv.appendChild(yeniSonuc)
        }, 4000);
    }
    if (dogruEslesmeler == 3) {
        yeniSonuc.innerHTML =
            `
        Şanslı sayılar: ${DataBase.join(" ")}<br>
        Tahmin ettikleriniz: ${tahminInputValue}<br>
        Tebrikler ${dogruEslesmeler} slotu doğru tahmin ettiniz.<br>
        Kazancınız 10'a katlandı!: <span style="color:green;">${+(bahisMiktariInput.value) * 10}₺.</span><hr><div class="hrDiv"></div>
        
        `
        setTimeout(() => {
            sonucDiv.appendChild(yeniSonuc)
        }, 4000);
    }
    if (dogruEslesmeler == 0) {
        yeniSonuc.innerHTML =
            `
        Şanslı sayılar: ${DataBase.join(" ")}<br>
        Tahmin ettikleriniz: ${tahminInputValue}<br>
        Tüm slotları yanlış tahmin ettiniz!<br>
        Kaybınız: <span style="color:red;">${(bahisMiktariInput.value)}₺</span><hr><div id="hrDivError"></div>
        
        `
        setTimeout(() => {
            sonucDiv.appendChild(yeniSonuc)
        }, 4000);

    }
    if (sonucDiv.children.length > 5) {
        sonucDiv.removeChild(sonucDiv.childNodes[0])
    }


    setTimeout(() => {
        sonucDiv.scrollTop = sonucDiv.scrollHeight
        startBtn.style.background = ""
        startBtn.style.border = ""
        startBtn.disabled = false

    }, 4000);

})





































