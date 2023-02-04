import { debounceTime, filter, fromEvent, distinctUntilChanged, map } from 'rxjs';

const inputEl = document.getElementById('search');

function listenInput() {
    const minLength = 2;

    fromEvent(inputEl, 'input').pipe(
        map(event => event.target.value),
        filter((targetValue) => !!targetValue && targetValue.length >= minLength),
        debounceTime(600),
        distinctUntilChanged()
    ).subscribe((value) => search(value));
}

function search(value) {
    console.log(value);
    //post request;
}

listenInput();
