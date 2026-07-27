<script>
  import Highlight from "$lib/components/Highlight.svelte";
  import gennankaimon from "$lib/assets/gennankai-mon.svg";
  import anniversary from "$lib/assets/30th-anniversary.jpg";
</script>

<section>
  <Highlight>
    <h2>30th Anniversary Enbukai</h2>
    <img
      src={gennankaimon}
      class="marunikikyo-copy-float"
      width="128"
      height="128"
      alt="maru ni kikyo kamon. stylized balloon flower surround by a circle"
    />
    <p>
      To celebrate the 30 year anniversary of the founding of American Tamiya
      Ryu Iaijutsu, an Enbukai (Demonstration Event) will be held on September
      20, 2026, at the East Lansing Hannah Community Center East Gym from 1-3pm.
      This event is free and open to the general public and will feature Enbu
      (formal demonstrations) by 15th Generation Soke Tsumaki Kazuo Genwa, the
      Senior Teaching Staff, the Head Instructor and the members of the
      Gennankai. We will be inviting the current Consul General of Japan, the
      Mayors of Lansing and East Lansing and the Visiting Official from
      Michigan’s Sister State of Shiga Prefecture to attend and say a few words
      to commemorate the occasion just as they did 30 years ago.
    </p>
    <br />
    <h3>Event Details</h3>
    <div class="event-details">
      <h4>Date:</h4>
      <p>Saturday, September 20, 2026</p>
      <h4>Time:</h4>
      <p>1:00pm - 3:00pm</p>
      <h4>Location:</h4>
      <p>
        <a
          href="https://maps.app.goo.gl/iefeCoySeKnQTE4e6"
          target="_blank"
          rel="noopener noreferrer">East Lansing Hannah Community Center</a
        >
      </p>
      <h4>Address:</h4>
      <p>819 Abbot Rd, East Lansing, MI 48823</p>
      <h4>Cost:</h4>
      <p>Free and Open to the Public</p>
    </div>
    <p>
      Please bring your friends and family to celebrate this special occasion
      with us!
    </p>
    <figure>
      <img
        src={anniversary}
        class="anniversary"
        alt="30th anniversary banner by Michael Kirsten (Yondan)"
      />
      <figcaption>
        30th anniversary banner by Michael Kirsten (Yondan)
      </figcaption>
    </figure>
  </Highlight>
</section>

<style>
  .anniversary {
    width: 100%;
  }

  .marunikikyo-copy-float {
    float: left;
    width: 8em;
    shape-outside: circle(46%) margin-box;
    margin-right: 2em;
  }

  figure {
    margin: 0;
    margin-bottom: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  figcaption {
    font-weight: bold;
    font-style: italic;
    text-align: center;
  }

  img {
    width: 100%;
  }

  .event-details {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem 1ch;
  }

  h4 {
    margin: 0;
    justify-self: end;
  }

  h4 + p {
    margin: 0;
    line-height: unset;
    text-wrap: balance;
  }
</style>
