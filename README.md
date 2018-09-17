# teston-frontend-assignment

## Local setup

```bash
# install dependencies
yarn
# serve with hot reload at localhost:8080
npm run dev
```

## The task

> _Create a video player with the possibility to add local annotations_

The video player in Teston is a crucial part of the customer experience. It is used to watch, annotate, and analyze incoming recordings from our database of testers. The player is in continuous development, and as a part of the front-end team you'll need to know how to work with it.

To help you get started with the task, we initialized a `Vue.js` webpack boilerplate through [this tool](https://github.com/vuejs-templates/webpack), and modified it slightly with some common tools. We've added these for the sake of time, but you're of course free to remove them.

#### Subtasks

- Create a video controller for the video available in `Dashboard.vue`. It should be possible to `play`, `pause`, use `fullscreen` and `skip`. We've added some boilerplate to get you started.
- The video should have a timeline showing current time.
- When clicking on the timeline the user should be prompted to add an annotation.
  - An annotation should be related to a timestamp, and can include anything else you see fit.
  - These annotations can be listed out under the video, displayed on top of it, or be displayed in any other manner of your choosing.
- The `skip` function should fast forward to the next available annotation (if any).

#### Requirements

- Make new components where you feel it's appropriate.
- Use Sass (SCSS) to style your components. Whether you choose inline styles or separate files, that's up to you. We recommend that you use [BEM](http://getbem.com/introduction/) when organizing styles. We've set up something in `assets/sass` to get you started, but feel free to remove it if necessary.
- Video playback logic should _not_ be provided by the built-in `controllers`-attribute on the `<video>` element.
- Saving is not required (if you refresh it's fine if data is gone).

## Practical

We know it's possible to spend a lot of time on this assignment. However, we don't expect you to use more than one working day on it.

#### Evaluation
When evaluating your work, we will look at a combination of design and logic. It is up to you which of these you want to emphasize. We're not expecting a production-ready result, and logic / design missing is fine, as long as the code reflects your competence and width within front-end development.

If you feel like adding extra features beyond what we've specified here, we'll be glad to check out whatever you come up with!

#### Delivery
To begin with you should clone this repository, and start making local changes. When delivering, depending on who you've spoken to, push your code to a private repository and add `franzwilhelm` or `semonje` as a collaborator. Then send an email to [franz@teston.no](mailto:franz@teston.no) or [simon@teston.no](mailto:simon@teston.no). We'll schedule a meeting where you will be able to present design decisions, practical challenges, and missing/changed parts of the assignment.

#### Relevant resources & docs

- [The Vue.js guide](https://vuejs.org/v2/guide/) and its [styleguide](https://vuejs.org/v2/style-guide/)
- [`<video>`: The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [`HTMLMediaElement` documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
- The sample video was found [here](https://sample-videos.com/)
- [BEM styling convention](http://getbem.com/introduction/)
- When working with timestamps we recommend using [moment.js](https://momentjs.com/docs/). Using js `Date` is also fine.

#### Questions

If you have any questions during the assignment, please send a mail to [franz@teston.no](mailto:franz@teston.no). He will then update the repository with missing parts, or provide you with the information necessary to continue coding (which is why you're here in the first place).
