import { Component, Element, Host, h, Prop } from '@stencil/core';

interface RssItem {
	title: HTMLTitleElement;
	link: HTMLLinkElement;
	description: Element;
	pubDate: Element;
}

@Component({
	tag: 'rss-reader',
	styleUrl: 'rss-reader.css',
	shadow: true,
})
export class RssReader {
	@Element() el;

	@Prop() url: string = 'https://blog.jmtalarn.com/feed.xml';
	@Prop() name: string = 'Web dev notes';
	@Prop() count: number = 5;
	@Prop() articleWidth: string;
	@Prop() display: 'list' | 'grid' = 'list';
	@Prop() articleStyle: string;
	@Prop() articleExcerptHeight: string;
	@Prop() readMore: string = 'Read more...';

	feed: Array<RssItem> = [];

	async componentWillLoad() {
		const ret = await fetch(this.url);

		const text = await ret.text();

		this.feed = Array.from(
			new window.DOMParser().parseFromString(text, 'text/xml').scrollingElement.children[0].children,
		)
			.filter((item) => item.tagName === 'item')
			.slice(0, this.count)
			.map((item) => {
				return {
					title: item.querySelector('title'),
					link: item.querySelector('link'),
					description: item.querySelector('description'),
					pubDate: item.querySelector('pubDate'),
				};
			});
	}
	/*
 <div>
		  {this.feed.map(item => (
			<h4>{item.title}</h4>
		  ))}
		</div>
		*/
	render() {
		const rssListClassName = `rss-channel ${this.display === 'grid' ? 'grid' : 'list'}`;

		return (
			<Host>
				<div class="rss-reader">
					<h3>{this.name}</h3>
					<small>These are the last {this.count} articles published there.</small>
					<div class={rssListClassName}>
						{this.feed.map((item) => (
							<div class="rss-article">
								<h4>{item.title.textContent}</h4>
								<small>{item.pubDate.textContent}</small>
								<p>{item.description.textContent}</p>
								<a class="read-more" href={item.link.textContent} target="_blank">
									{this.readMore}
								</a>
							</div>
						))}
					</div>
					<slot></slot>
				</div>
			</Host>
		);
	}
	componentDidRender() {
		const rssReader = this.el.shadowRoot.querySelector('.rss-reader');
		if (this.articleStyle) {
			const rssArticles = Array.from(rssReader.querySelectorAll('.rss-article'));

			rssArticles.forEach((article: HTMLElement) => {
				article.style.cssText = this.articleStyle;
			});
		}
		if (this.articleExcerptHeight) {
			rssReader.style.setProperty('--article-excerpt-height', this.articleExcerptHeight);
		}
		if (this.articleWidth) {
			rssReader.style.setProperty('--article-width', this.articleWidth);
		}
	}
}
