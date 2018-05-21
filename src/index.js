import './index.scss';
import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
document.getElementById("hello-world").textContent = "Hello world!";

console.log('FOO BAR #2');