export const imgError = {
    inserted: function (el, { value }) {
        // 聚集元素
        el.onerror = function () {
            el.src = value
        }

    }
}