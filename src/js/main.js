// Import our custom CSS
import '../scss/styles.scss';
import displayForm from './components/form';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import displayContent from './components/displayController';
import { todo, project } from './components/todo';

//Display Content
displayContent();
displayForm();

console.log('Test');