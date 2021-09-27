const mainTimer = document.querySelector('#timer-1')

function UpdateTimer({days, hours, mins, secs}) {
    mainTimer.textContent = `${days}:${hours}:${mins}:${secs}`
}

class CountdownTimer{
    constructor({onTick}) {
        this.intervalID = null
        this.onTick = onTick
    }

    start() {
        const startTime = Date.now()

        this.intervalID = setInterval(() => {
            const currentTime = Date.now()
            // console.log(currentTime)
            const targetDate = currentTime - startTime
            const t = getTimeNow(targetDate)          
            this.onTick(t)
        }, 1000)
    }
}

const timer = new CountdownTimer({
  onTick: UpdateTimer
});
    



function pad(value) {
    return String(value).padStart(2, '0') // принимает число и ставит 0 спереди, но если число двойное, то ноль не ставит 
}



function getTimeNow(time) {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
    return {days, hours, mins, secs}
}