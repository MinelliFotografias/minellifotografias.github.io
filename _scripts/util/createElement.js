export default function (el, attrs) {
    var newElem = document.createElement(el);
    if (attrs) {
        function extend(obj, data) {
            for (name in data) {
                const val = data[name];
                obj[name] = val;
            }
        }
        extend(newElem, attrs);
    }
    return newElem;
};