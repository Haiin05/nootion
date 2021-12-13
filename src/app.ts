import {ImageComponent} from "./components/item/image.js";
import {NoteComponent} from "./components/item/note.js";
import {TodoComponent} from "./components/item/todo.js";
import {VideoComponent} from "./components/item/video.js";
import {PageComponent} from "./components/page/page.js";

class App {
	private readonly page: PageComponent
	constructor (appRoot: HTMLElement) {
		this.page = new PageComponent()
		this.page.attachTo(appRoot)

		const image = new ImageComponent('Image 1', 'https://picsum.photos/200/300')
		image.attachTo(appRoot, 'beforeend')

		const note = new NoteComponent('Note 1', 'This is Note')
		note.attachTo(appRoot, 'beforeend')

		const todo = new TodoComponent('Todo 1', 'Eat dinner')
		todo.attachTo(appRoot, 'beforeend')

		const video = new VideoComponent('Video 1', 'https://www.youtube.com/watch?v=m17WVyGy3dc')
		video.attachTo(appRoot, 'beforeend')
	}
}

new App(document.querySelector('.document')! as HTMLElement)