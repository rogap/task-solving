/**
 * Выводит массив городов через запятую, ставя в конце точку.
 * @param {Array} [cityList] - массив городов
 * @return {String}
 */
function formatCity(cityList) {
    return cityList.join(", ") + '.'
}


/**
 * Округляет число до пятерок
 * @param {Number} [num] - округляемое число
 * @return {Number}
 */
function roundingToFIve(num) {
    num += "" // делаем строкой
    let left = num, right
    const index = num.indexOf('.')

    if (index != -1) {
        right =  Math.round( num.slice(index) )
        left = +num.slice(0, index) + +right
        left += ''
    }

    const g = left.slice(-1)
    if (g < 3) {
        return +`${left.slice(0, -1)}0`
    } else if (g < 8) {
        return +`${left.slice(0, -1)}5`
    } else {
        return +`${+left.slice(0, -1) + 1}0`
    }
}


/**
 * Выводит слово "компьютер" в падеже, соответствующем указанному количеству "num"
 * @param {Number} [num] - число к котому будет "склоняться"
 * @return {String}
 **/
function declension(num) {
    const text = "компьютер"
	if (num >= 5 && num < 20) return `${num} ${text}ов`

    let n = (num + '').slice(-1) // берем последнюю цифру

    if (n == 1) {
		return `${num} ${text}`
	} else if (n > 1 && n < 5) {
		return `${num} ${text}а`
	} else {
		return `${num} ${text}ов`
	}
}


/**
 * Проверяет является ли число простым
 * @param {Number} [num] - проверяет является ли число простым
 * @return {Boolean}
 */
function checkSimpleNum(num) {
    let iteration = num < 9 ? num : 9

    while(--iteration > 1) {
        if (num % iteration === 0) return false
    }
    return true
}