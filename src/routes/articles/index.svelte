<script context="module">
  export async function load({ fetch }) {
    const messageArchive = await fetch("/api/articles/messages/archive.json");
    const reflectionArchive = await fetch(
      "/api/articles/reflections/archive.json"
    );
    const instructorForumArchive = await fetch(
      "/api/articles/instructor-forum/archive.json"
    );
    const studentViewsArchive = await fetch(
      "/api/articles/student-views/archive.json"
    );

    const [currentMessage, ...messages] = await messageArchive.json();
    const [currentReflection, ...reflections] = await reflectionArchive.json();
    const instructorForum = await instructorForumArchive.json();
    const studentViews = await studentViewsArchive.json();

    return {
      props: {
        currentMessage,
        currentReflection,
        messages,
        reflections,
        instructorForum,
        studentViews,
      },
    };
  }
</script>

<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";
  import * as ArticleHighlight from "$lib/components/ArticleHighlight";

  import reflectingPool from "$lib/assets/reflecting-pool.jpeg";
  import headInstructor from "$lib/assets/head-instructor.png";

  // @ts-nocheck
  export let messages;
  export let reflections;
  export let instructorForum;
  export let currentMessage;
  export let currentReflection;
  export let studentViews;
</script>

<h2 class="main-heading">Articles</h2>

<div class="archives">
  <div>
    <Highlight>
      <ArticleHighlight.Card>
        <ArticleHighlight.Current img={headInstructor}>
          <h3>Message from the Head Instructor</h3>
          <ArticleHighlight.Copy current={currentMessage}>
            Messages, thoughts, musings, considerations on Tamiya Ryu Iaijutsu
            and Budo from the Gennankai's Head Instructor to USTRI deshi and
            others journeying on the path of Budo.
          </ArticleHighlight.Copy>
        </ArticleHighlight.Current>
        <h4>Message Archive</h4>
        <ArticleList articles={messages} />
      </ArticleHighlight.Card>
    </Highlight>
  </div>

  <div>
    <Highlight>
      <ArticleHighlight.Card>
        <ArticleHighlight.Current img={reflectingPool}>
          <h3>Reflecting Pool</h3>
          <ArticleHighlight.Copy current={currentReflection}>
            Reflections and introspective articles from USTRI instructors and
            students on various topics as they related to Tamiya Ryu Iaijutsu
            practice.
          </ArticleHighlight.Copy>
        </ArticleHighlight.Current>
        <h4>Reflecting Pool Archive</h4>
        <ArticleList articles={reflections} />
      </ArticleHighlight.Card>
    </Highlight>
  </div>

  <div>
    <Highlight>
      <ArticleHighlight.Card>
        <ArticleHighlight.Current>
          <h3>Instructor Forum</h3>
          <ArticleHighlight.Copy>
            Insights from USRTI instructors.
          </ArticleHighlight.Copy>
        </ArticleHighlight.Current>
        <h4>Instructor Forum Archive</h4>
        <ArticleList articles={instructorForum} />
      </ArticleHighlight.Card>
    </Highlight>
  </div>

  <div>
    <Highlight>
      <ArticleHighlight.Card>
        <ArticleHighlight.Current>
          <h3>Student Views</h3>
          <ArticleHighlight.Copy>
            Articles from the deshi's prespective.
          </ArticleHighlight.Copy>
        </ArticleHighlight.Current>
        <h4>Student Views Archive</h4>
        <ArticleList articles={studentViews} />
      </ArticleHighlight.Card>
    </Highlight>
  </div>
</div>

<style>
  .archives {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem clamp(1rem, 5%, 2.5rem);
  }

  h4 {
    margin: 0;
  }

  h3 {
    font-size: 1.75em;
    text-shadow: 3px 3px 3px black;
    margin: 0;
  }
</style>
