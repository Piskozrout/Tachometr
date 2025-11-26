class Tachometr {
    constructor(kolecko, ahodnota, text0, text1, text2, text3, text4, vol, max, min, low, high, vykricnik) 
    {
        this.kolecko = kolecko;
        this.ahodnota = ahodnota;
        this.text0 = text0;
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.text4 = text4;
        this.vol = vol;
        this.max = max;
        this.min = min;
        this.low = low;
        this.high = high;
        this.vykricnik = vykricnik;
    }
    
    DrawCircle() {
        const circle = document.getElementById(this.kolecko);
        const strokeLength = circle.getTotalLength();
        circle.style.setProperty("--strokeLength", strokeLength);
        const UNITS = 200;
        const strokeIncrement = strokeLength / UNITS;
        circle.style.setProperty("--strokeIncrement", strokeIncrement);
        const neededValue = document.getElementById(this.vol).value;
        circle.style.setProperty("--strokeCalc", (strokeLength - strokeIncrement * neededValue) - strokeLength / 2);

        //aktualni hodnota
        const ahodnota = document.getElementById(this.ahodnota);
        const maxValue = document.getElementById(this.max).value;
        const minValue = document.getElementById(this.min).value;
        const low = document.getElementById(this.low).value;
        const high = document.getElementById(this.high).value;
        const vykricnik = document.getElementById(this.vykricnik);
        ahodnota.innerHTML = Math.round(maxValue * neededValue - minValue * neededValue + 100 * minValue) / 100;
        if(parseFloat(ahodnota.innerHTML) >= high)
        {
            ahodnota.style.fill = "red";
            vykricnik.style.opacity = 1;
        }else if(parseFloat(ahodnota.innerHTML) >= low)
        {
            ahodnota.style.fill = "orange";
            vykricnik.style.opacity = 0;
        }else
        {
            ahodnota.style.fill = "green";
            vykricnik.style.opacity = 0;
        }
    }

    CallNumbers() {
        //číslíčka
        const max = document.getElementById(this.max);
        max.addEventListener("change", (event) => {
            this.TypeNumbers();
        });
        const min = document.getElementById(this.min);
        min.addEventListener("change", (event) => {
            this.TypeNumbers();
        });
        const low = document.getElementById(this.low);
        low.addEventListener("change", (event) => {
            this.TypeNumbers();
        });
        const high = document.getElementById(this.high);
        high.addEventListener("change", (event) => {
            this.TypeNumbers();
        });
    }

    TypeNumbers()
    {
        const maxValue = document.getElementById(this.max).value;
        const minValue = document.getElementById(this.min).value;
        const text0 = document.getElementById(this.text0);
        const text1 = document.getElementById(this.text1);
        const text2 = document.getElementById(this.text2);
        const text3 = document.getElementById(this.text3);
        const text4 = document.getElementById(this.text4);
        if(document.getElementById(this.max).value != "" && document.getElementById(this.min).value != "")
        {
            text0.innerHTML = Math.round(minValue * 100) / 100;
            text1.innerHTML = Math.round(80 * minValue + 20 * maxValue) / 100;
            text2.innerHTML = Math.round(60 * minValue + 40 * maxValue) / 100;
            text3.innerHTML = Math.round(40 * minValue + 60 * maxValue) / 100;
            text4.innerHTML = Math.round(20 * minValue + 80 * maxValue) / 100;
        }else
        {
            text0.innerHTML = Math.round(0);
            text1.innerHTML = Math.round(maxValue * 20) / 100;
            text2.innerHTML = Math.round(maxValue * 40) / 100;
            text3.innerHTML = Math.round(maxValue * 60) / 100;
            text4.innerHTML = Math.round(maxValue * 80) / 100;
        }
    };
}

function vse() {
    const tachometr1 = new Tachometr("kolecko1", "ahodnota1", "text1_0", "text1_1", "text1_2", "text1_3", "text1_4", "vol1", "max1", "min1", "low1", "high1", "vykricnik1");
    tachometr1.DrawCircle();
    tachometr1.CallNumbers();
    const tachometr2 = new Tachometr("kolecko2", "ahodnota2", "text2_0", "text2_1", "text2_2", "text2_3", "text2_4", "vol2", "max2", "min2", "low2", "high2", "vykricnik2");
    tachometr2.DrawCircle();
    tachometr2.CallNumbers();
    const tachometr3 = new Tachometr("kolecko3", "ahodnota3", "text3_0", "text3_1", "text3_2", "text3_3", "text3_4", "vol3", "max3", "min3", "low3", "high3", "vykricnik3");
    tachometr3.DrawCircle();
    tachometr3.CallNumbers();
    const tachometr4 = new Tachometr("kolecko4", "ahodnota4", "text4_0", "text4_1", "text4_2", "text4_3", "text4_4", "vol4", "max4", "min4", "low4", "high4", "vykricnik4");
    tachometr4.DrawCircle();
    tachometr4.CallNumbers();
}

const clock = setInterval(vse, 100);





