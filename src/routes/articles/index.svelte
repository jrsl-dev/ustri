<script context="module">
  export async function load({ fetch }) {
    const messageArchive = await fetch("/api/articles/messages/archive.json");
    const reflectionArchive = await fetch(
      "/api/articles/reflections/archive.json"
    );

    const [currentMessage, ...messages] = await messageArchive.json();
    const [currentReflection, ...reflections] = await reflectionArchive.json();

    return {
      props: {
        currentMessage,
        currentReflection,
        messages,
        reflections,
      },
    };
  }
</script>

<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";
  import reflectingPool from "$lib/assets/reflecting-pool.jpeg";
  import headInstructor from "$lib/assets/head-instructor.png";

  // @ts-nocheck
  export let messages;
  export let reflections;
  export let currentMessage;
  export let currentReflection;
</script>

<h2 class="main-heading">Articles</h2>

<div class="archives">
  <div>
    <Highlight>
      <div class="article">
        <div
          class="article-highlight"
          style="--background: url({headInstructor})"
        >
          <h3>Message from the Head Instructor</h3>
          <div class="article-highlight__copy">
            <p>
              Messages, thoughts, musings, considerations on Tamiya Ryu Iaijutsu
              and Budo from the Gennankai's Head Instructor to USTRI deshi and
              others journeying on the path of Budo.
            </p>
            <a href="/articles/message-from-the-head-instructor">
              Current article: {currentMessage.title}</a
            >
          </div>
        </div>
        <h4>Message Archive</h4>
        <ArticleList articles={messages} />
      </div>
    </Highlight>
  </div>

  <div>
    <Highlight>
      <!-- TODO chunk these up into components a bit to abstract all the class, styles -->
      <div class="article">
        <div
          class="article-highlight"
          style="--background: url({reflectingPool})"
        >
          <h3>Reflecting Pool</h3>
          <div class="article-highlight__copy">
            <p>
              Reflections and introspective articles from USTRI instructors and
              students on various topics as they related to Tamiya Ryu Iaijutsu
              practice.
            </p>
            <a href="/articles/reflecting-pool">
              Current article: {currentReflection.title}</a
            >
          </div>
        </div>
        <h4>Reflecting Pool Archive</h4>
        <ArticleList articles={reflections} />
      </div>
    </Highlight>
  </div>

  <!-- TODO add student views archive -->
  <!-- TODO maybe also add announcements? -->
</div>

<style>
  .archives {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem clamp(1rem, 5%, 2.5rem);
  }

  /* TODO consider some better names for these classes */
  .article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .article-highlight {
    flex-basis: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)),
      var(--background);
    background-blend-mode: saturation;
    background-size: cover;
    aspect-ratio: 3/2;
    margin: -0.8rem -1rem 1rem;
    color: white;
    padding: 1rem;
    position: relative;
  }

  .article-highlight > h3 {
    font-size: 1.75em;
    text-shadow: 3px 3px 3px black;
    margin: 0;
  }

  .article > h4 {
    margin: 0;
  }

  .article-highlight__copy {
    margin: 0 -1rem -1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .article-highlight__copy > p {
    margin: 0;
  }

  .article-highlight a::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: " ";
  }
</style>
