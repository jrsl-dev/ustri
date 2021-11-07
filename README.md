# United States Tamiya Ryu Iaijutsu Gennankai Website

Hi there! Welcome to the website repository.

I'm a professional web developer by day, working on non-open source. So from time to time I like to experiment with various new web technologies here. That may lead to less than ideal patterns and practices since I'm usually hacking at night after the kids go to bed but hopefully this gives a little sense of how I approach web development.

This site was converted from Gatsy to Svelte Kit. I am _really_ impressed by Svelte and Svelte Kit so far. Currently Svelte Kit is a bit overkill for the site. It's all static but I have plans to start doing more slug based articles, etc that I think Svelte Kit will work really well with.

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
