import { writable } from 'svelte/store';

let initial = false;
if (typeof localStorage !== 'undefined') {
    initial = localStorage.getItem('darkMode') === 'true';
}
export const darkMode = writable(initial);

if (typeof localStorage !== 'undefined') {
    darkMode.subscribe((value) => {
        localStorage.setItem('darkMode', value);
    });
}
