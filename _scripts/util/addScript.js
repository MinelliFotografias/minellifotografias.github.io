export default function (src, callback) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = callback;
    document.body.appendChild(s);
};