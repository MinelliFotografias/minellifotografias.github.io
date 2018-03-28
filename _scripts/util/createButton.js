import createElement from '../util/createElement';

export default function (attrs, btnAction) {
    var newButton = createElement('button', attrs);
    if (typeof btnAction === 'function') {
        newButton.addEventListener('click', function () {
            btnAction(this);
        });
    }
    return newButton;
};