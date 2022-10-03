<script context="module" lang="ts">
	// Layout
	import Posts from '$lib/layout/posts/Posts.svelte';

	// Props/Header
	import Header from '$lib/layout/posts/props/header/header.svelte';

	// Props/Contents/Center
	import Title from '$lib/layout/posts/props/contents/center/title.svelte';
	import Href from '$lib/layout/posts/props/contents/center/href.svelte';
	import Information from '$lib/layout/posts/props/contents/center/information.svelte';
	import Color from '$lib/layout/posts/props/contents/center/color.svelte';

	// Slots/Contents/Center
	import Annotation from '$lib/layout/posts/slots/contents/center/annotation.svelte';
	import Subtitle from '$lib/layout/posts/slots/contents/center/subtitle.svelte';
	import Content from '$lib/layout/posts/slots/contents/center/content.svelte';
	import Image from '$lib/layout/posts/slots/contents/center/image_v1.svelte';

	// Slots/Contents/Right
	import Date from '$lib/layout/posts/slots/contents/right/date.svelte';
	import Status from '$lib/layout/posts/slots/contents/right/status.svelte';
	import Tag from '$lib/layout/posts/slots/contents/right/tag.svelte';

	// Public/Props/Contents/Center
	import Footer from '$lib/layout/public/props/contents/center/footer.svelte';

	// Module
	import { index } from '$lib/contents/index';
	import { information } from '$lib/contents/items/information';

	// Import types
	import type { post } from '$lib/interface/posts';
</script>

<script lang="ts">
	// Get data from page.server.ts
	export let data: post;

	// Main
	const { lastUpdate, status, codeHighlight } = data;
	const { title, tag, image } = index._2022._07._14;
	const { color, name, content } = information;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<Posts>
	<div slot="header">
		<Header {title} />
	</div>
	<div slot="center">
		<Title {title} />

		<!-- Chapter 1 -->
		<Image>
			<img src={image.src} alt={image.alt} style="max-width: 100%;" slot="image" />
			<div slot="caption">
				@Photo by RF._.studio from
				<Href href="https://www.pexels.com/photo/woman-jogging-3623180/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Love to try new things</Subtitle>
		<Content>
			Every day new things like technologies and theories emerge all over the world that I don't
			know very well. News about them sometimes reaches me and makes me interested. If there's
			anything that overlaps what I can do and what I need, I want to try it.
		</Content>
		<Content>
			I don't want to say that posting on a blog is a new technology or theory. I want to share what
			I learned from trying new technologies such as languages, cloud resources and open sources for
			development and production environments with my blog. Posting on this blog will be a major
			task in my study time.
		</Content>
		<Content>
			By the way another important task about this blog would edit will be editing the layout such
			as design of posts, headers, fonts and etc. People who come to this blog want to read the
			posts faster and easier. For their needs, I will continue to try new things by studying ways
			to improve readability.
		</Content>

		<!-- Chapter 2 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184529645-76de8ece-1e37-4c96-af40-335b68595cd4.png"
				alt="Brown and White Frames Hang in Wall"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by heather bozman from
				<Href
					href="https://www.pexels.com/photo/photo-of-brown-and-white-photo-frames-hang-in-wall-1058770/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Track my trails</Subtitle>
		<Content>
			Since ancient times, people have wanted to record their life stories. Over time, the media in
			which records are stored has benn changing for several reasons. Records and history have been
			written on the rock wall next to the lake and deep mountain caves from old days.
		</Content>
		<Content>
			They had existed since the Neolithic Age and is at least 2,000 BC. Because of the hard and
			stable nature of the stone, petroglyphs could be found. However, the biggest disadvantage of
			stones was the limitation and hardness of movement. People should have been difficulty storing
			and writing their records.
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184534030-30106eee-b23b-4dde-a288-f1a5797e21ea.jpg"
				alt="Woman in White Long Sleeved Shirt Holding a Pen Writing on a Paper"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by energepic.com from
				<Href
					href="https://www.pexels.com/photo/woman-in-white-long-sleeved-shirt-holding-a-pen-writing-on-a-paper-110473/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			After development of paper, a lot of information have been written to it more easily. People
			could write on papers with some inks regardless of their location. And papers are so flexible
			that they can be changed into various shapes.
		</Content>
		<Content>
			From
			<Href
				href="https://www.prestigeprint.biz/Paper-sizes-and-weights#:~:text=Paper%20weights%20and%20usage&text=Weights%20are%20easy%20to%20calculate,the%20number%20of%20sheets%20used."
				name="Prestige Creative"
			/>, a standard A4 sheet made from <Color color="blue" content="80gsm" number="1" /> paper weighs
			5g. Also Paper is very accessible because it is made from softwood or hardwood trees. With these
			major properties of paper, people still love to write on papers.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					The weight of 90–100 GSM(Grams per Sqaure Meter) is weight of the copy paper that you will
					find in your office or home printer. The stuff you might pick up in packs of 500 sheets at
					the Staples office supplies.
				</span>
			</Annotation>
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184537060-516becdb-a731-439d-8731-e74654faa041.png"
				alt="Grey 5 Braided Metal"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Pixabay from
				<Href href="https://www.pexels.com/photo/grey-5-braided-metal-65907/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			Nevertheless according to
			<Href
				href="https://edu.rsc.org/feature/paper-conservation/2020204.article"
				name="Paper conversion"
			/>
			article, oxidation, usually initiated by light, discolours the paper. Both cellulose (and its derivatives)
			and lignin within the paper can be oxidised. As a result, from a perspective on recording and saving,
			papers are not good material.
		</Content>
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/184921062-4a43c407-546d-4451-9daf-2db9f6caf5a4.png"
				alt="White Ceramic Mug Between Apple Magic Keyboard and Two Flat Screen Computer Monitors"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Picography from
				<Href
					href="https://www.pexels.com/photo/white-ceramic-mug-between-apple-magic-keyboard-and-two-flat-screen-computer-monitors-4458/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Content>
			In the digital age, everything can be done on the Internet. Reading news, shopping, even
			posting on the blog can be done if you can use internet. Surprisingly the internet is ready to
			use everywhere including airplane in the sky and places where don't build network
			infrastructure yet.
		</Content>
		<Content>
			Medium, Blogger, Wordpress and any other blogging platform is ready to serve new bloggers. By
			using those platform, it can be easy for users to create contents and posts. The platforms are
			good for someone to desire to focus on posts only.
		</Content>
		<Content>
			I have used a local blog platform like blogger and a wordpress installed on a
			<Color color="blue" content="Amazon EC2" number="1" />
			provided from AWS. Default writing tools and many plugins managed from wordpress or other solution
			providers were very helpful to write a post. However customizing some features was difficult or
			prohibited. For those reason, my blog will be started on a github with svelte.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Amazon EC2 provides secure, resizable compute in the cloud, offering the broadest choice
					of processor, storage, networking, OS, and purchase model.
				</span>
			</Annotation>
		</Content>

		<!-- Chapter 3 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/185158158-0ffb4db1-8cb7-4c65-97d4-54e831389f95.png"
				alt="Young woman using laptop and taking notes"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Artem Podrez from
				<Href
					href="https://www.pexels.com/photo/young-woman-using-laptop-and-taking-notes-4492126/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Keep my study habits and attitudes</Subtitle>
		<Content>
			According to a
			<Href
				href="http://www.open-science-repository.com/study-habits-and-attitudes-the-road-to-academic-success.html"
				name="research paper"
			/>, study habit is the pattern of behavior adopted by students in the pursuit of their studies
			that serves as the vehicle of learning.
			<Color color="blue" content="Study attitudes" number="1" /> , on the other hand, refers to a student’s
			positive attitude toward the specific act of studying and the student’s acceptance and approval
			of the broader goals of college education.
			<Annotation>
				<span slot="number">1</span>
				<span slot="annotation">
					Crede, M., Kuncel, N. (2008) Study Habits Meta-Analysis, Perspectives on Psychological
					Science In Press vol. 3 No. 6 p. 425-453.
				</span>
			</Annotation>
		</Content>
		<Content>
			I have some questions to ask myself. How many hours do I want to spend to study daily? If I go
			home late, would I like to study? Am I interested in studying? These questions would be
			answered differently depending on my condition. To be honest, I would like to listen musics
			and take a rest sometimes. However an intention of the answers would be same always. If
			possible, I want to spend most of spare time for study.
		</Content>
		<Content>
			There are too many entertainment contents including playing sports like football and
			basketball, watching streaming services like Netflix, Disney. The contents which could be
			access easily weaken me. Therefore to Keep my study habits and attitudes, I have to live in
			harmony between the entertains and study.
		</Content>
		<!-- Chapter 4 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/185171560-b996eb56-c3a3-408c-9de9-5b4afb654077.png"
				alt="Workers handling detail by pneumatic tool in workshop"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Andrea Piacquadio from
				<Href
					href="https://www.pexels.com/photo/workers-handling-detail-by-pneumatic-tool-in-workshop-3846262/"
					name="Pexels"
				/>
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Share my experiences</Subtitle>
		<Content>
			Starting something new is usually difficult. I can get information about new things from
			reading document on official website or learning from expert on youtube or their own blogs.
			Although document and videos provided me systematic information, I felt that the provided
			information is less enough for me. If I had background knowledges about new, the challenge
			would be simple.
		</Content>
		<Content>
			To success tasks what I want, I need to check not only core contents but also side contents.
			During research sides, much useful data come to me. I want to share not well known data to
			public. Sometimes I can get the data in a short time. However with unluck, it takes long time
			to achieve them. For people like me who want to start something new, I would like to write
			good guides including all of contents.
		</Content>
		<!-- Chapter 5 -->
		<Image>
			<img
				src="https://user-images.githubusercontent.com/52372569/185172161-c2e3854f-8209-4af6-b461-8df1b98dc6b6.png"
				alt="Assorted-color Umbrellas"
				style="max-width: 100%;"
				slot="image"
			/>
			<div slot="caption">
				@Photo by Engin Akyurt from
				<Href href="https://www.pexels.com/photo/assorted-color-umbrellas-1486861/" name="Pexels" />
			</div>
		</Image>
		<Information color={color.yellow} name={name.yellow} content={content.image.yellow} />
		<Subtitle>Create my style</Subtitle>
		<Content>
			A blog has many customizable elements like posts, frontend styles and etc. I spent many hours
			to find a blog styles that I want on the blog platforms. What I find was the closest than
			other elements. However it was not enought to meet my aesthetic standards.
		</Content>
		<Content>
			From now, I will create posts and design elements with my own style. The main concept of
			design is simple. Unnecessary elements cannot be added to blog. Readers should focus on blog
			posts without being disturbed by other content. Colors should be soft, gentle and not too
			noticeable. Give me feedback if you have any advice.
		</Content>
		<Footer />
	</div>
	<div slot="right">
		<Date {lastUpdate} />
		<Status {status} />
		<Tag {tag} />
	</div>
</Posts>
