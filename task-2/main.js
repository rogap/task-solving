/**
 * Выводит массив городов через запятую, ставя в конце точку.
 * @param {Array} [cityList] - массив городов
 * @return {String}
 */
function formatCity(cityList) {
    return cityList.join(", ") + '.'
}


function roundingToFIve() {
    //
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


function checkSimpleNum(num) {
    //
}