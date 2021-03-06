import {BaseComponent} from "../component.js"

export class VideoComponent extends BaseComponent<HTMLElement> {
	constructor (title: string, url: string) {
		super(`<section class="video">
					<h3 class="video__title"></h3>
					<div class="video__player">
						<iframe class="video__iframe"></iframe>
					</div>
				</section>`)

		const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement
		titleElement.textContent = title

		const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement
		iframe.src = this.convertToEmbeddedURL(url)
	}

	convertToEmbeddedURL(url: string): string {
		const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/
		const match = url.match(regExp)
		console.log(match)
		const videoId = match ? match[1] || match[2] : undefined
		// match 되는 것이 있다면 첫 번째 매치된것 (match[1])을 받아오고, 첫 번째 매치된것이 없으면 두 번째 매치된것을 쓴다. (match[2]) 
		// 그리고 전체적으로 매치가 없다면 undefined 을 사용한다.
		//if (videoId) {
		//	return `https://www.youtube.com/embed/${videoId}`
		//}
		//return url
		return videoId ? `https://www.youtube.com/embed/${videoId}` : url
	}
}