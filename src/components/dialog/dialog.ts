import {BaseComponent, Component} from "../component.js";
import {Composable} from "../page/page.js";

type setOnCloseListener = () => void
type setOnSubmitListener = () => void

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
	closeListener?: setOnCloseListener
	submitListener?: setOnSubmitListener
	constructor () {
		super(`<section class="dialog">
					<button class="close">&times;</button>
					<div class="dialog__body"></div>
					<button class="dialog__submit">ADD</button>
				</section>`)

		const closeBtn = this.element.querySelector('.close')! as HTMLElement
		closeBtn.onclick = () => {
			this.closeListener && this.closeListener()
		}

		const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement
		submitBtn.onclick = () => {
			this.submitListener && this.submitListener()
		}
	}

	setOnCloseListener(listener: setOnCloseListener) {
		this.closeListener = listener
	}

	setOnSubmitListener(listener: setOnSubmitListener) {
		this.submitListener = listener
	}

	addChild(child: Component) {
		const body = this.element.querySelector('.dialog__body')! as HTMLElement
		child.attachTo(body)
	}
}