<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";
  import * as ArticleHighlight from "$lib/components/ArticleHighlight";

  import reflectingPool from "$lib/assets/reflecting-pool.jpeg";
  import headInstructor from "$lib/assets/head-instructor.png";
  import students from "$lib/assets/students.jpg";
  import instructor from "$lib/assets/honbu-garden-ballon-flower.jpeg";

  export let data;
  const [currentMessage, ...messages] = data.messages;
  const [currentReflection, ...reflections] = data.reflections;
  const instructorForum = data.instructor;
  const studentViews = data.students;

  console.log(currentMessage);
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
        <ArticleHighlight.Current img={instructor}>
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
        <ArticleHighlight.Current img={students}>
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

  h3 {
    font-size: 1.75em;
    text-shadow: 3px 3px 3px black;
    margin: 0;
  }

  h4 {
    margin: 0;
  }
</style>
