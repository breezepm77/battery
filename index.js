navigator.getBattery().then(battery => {
    var percetage = document.querySelector(".percetage");
    var percent = document.querySelector(".percent");
    var isCharging = document.querySelector(".isCharging");

    function updateAllBatteryInfo() {
        updateLevelInfo()
        updateChargeInfo()
    }

    updateAllBatteryInfo()

    function updateLevelInfo(){
        percetage.style.width = battery.level * 100 + '%';
        percent.innerHTML = Math.floor(battery.level * 100) + '%';
    }

    function updateChargeInfo(){
        isCharging.innerHTML = battery.charging ? "Your device charging" : ""
    }

    battery.addEventListener('levelchange', () => {
        updateLevelInfo()
    })

    battery.addEventListener('chargingchange', () => {
        updateChargeInfo()
    })

})