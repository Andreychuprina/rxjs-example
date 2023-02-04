const inputEl = document.getElementById('search');

function listenInput() {
    const minLength = 2;
    const isValueChanged = createIsValueChangedFunc();
    let timeOut = undefined;

    inputEl.addEventListener('input', (event) => {
        if(timeOut) clearTimeout(timeOut);

        timeOut = setTimeout(() => {
            const targetValue = event.target.value;
            const isChanged = isValueChanged(targetValue);

            if (!targetValue || targetValue.length < minLength || !isChanged) return;

            search(targetValue);
        }, 600);
    });
}

function createIsValueChangedFunc() {
    let prevValue = undefined;
    return (value) => {
        const isChangedValue = value !== prevValue;

        if(isChangedValue) prevValue = value;

        return isChangedValue;
    };
}

function search(value) {
    console.log(value);
    //post request;
}

listenInput();