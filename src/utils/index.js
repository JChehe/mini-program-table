/**
 * 根据字符串长度和字体大小计算文本长度，中文为 fontSize，其余为 fontSize / 2
 * https://segmentfault.com/a/1190000016405843
 * @param {String} text - 文本
 * @param {Number} fontSize - 字体大小
 * @returns {Number} 长度
 */
function getTextWidth (text, fontSize) {
    text = String(text)
    text = text.split('')
    let width = 0
    text.forEach(function (item) {
        if (/[a-zA-Z]/.test(item)) {
            width += 7
        } else if (/[0-9]/.test(item)) {
            width += 5.5
        } else if (/\./.test(item)) {
            width += 2.7
        } else if (/-/.test(item)) {
            width += 3.25
        } else if (/[\u4e00-\u9fa5]/.test(item)) {  // 中文匹配
            width += 10
        } else if (/\(|\)/.test(item)) {
            width += 3.73
        } else if (/\s/.test(item)) {
            width += 2.5
        } else if (/%/.test(item)) {
            width += 8
        } else {
            width += 10
        }
    })
    return width * fontSize / 10
}

export default {
    getTextWidth
}
