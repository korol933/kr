import { render, RenderPosition } from './framework/render.js';
import MovieModel from './model/ovie-model.js';
import Presenter from './presenter/presenter.js';
import { tasks } from './mock/task.js';

const bodyContainer = document.querySelector('main .container');
const MovieModel = new MovieModel(tasks);

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), bodyContainer);

const presenter = new Presenter(MovieModel, bodyContainer);
Presenter.init();