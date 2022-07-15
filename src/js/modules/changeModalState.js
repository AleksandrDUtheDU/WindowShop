import checkNumInputs from "./checkNumInputs";



const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        widthWidht = document.querySelectorAll('#width'),
        widthHeight = document.querySelectorAll('#height'),
        widthType = document.querySelectorAll('#view_type'),
        widthProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionsToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if (elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', widthWidht, 'width');
    bindActionsToElems('input', widthHeight, 'height');
    bindActionsToElems('change', widthType, 'type');
    bindActionsToElems('change', widthProfile, 'profile');


};

export default changeModalState;