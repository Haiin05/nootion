import {Component} from "./components/component.js";
import {ImageComponent} from "./components/item/image.js";
import {NoteComponent} from "./components/item/note.js";
import {TodoComponent} from "./components/item/todo.js";
import {VideoComponent} from "./components/item/video.js";
import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";

class App {
	private readonly page: Component & Composable
	constructor (appRoot: HTMLElement) {
		this.page = new PageComponent(PageItemComponent)
		this.page.attachTo(appRoot)

		const image = new ImageComponent('Image 1', 'https://picsum.photos/200/300')
		this.page.addChild(image)

		const note = new NoteComponent('Note 1', 'This is Note')
		this.page.addChild(note)

		const todo = new TodoComponent('Todo 1', 'Eat dinner')
		this.page.addChild(todo)

		const video = new VideoComponent('Video 1', 'https://www.youtube.com/watch?v=m17WVyGy3dc')
		this.page.addChild(video)
	}
}

new App(document.querySelector('.document')! as HTMLElement)