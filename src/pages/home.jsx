import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section id="section1">
          <h1>Find dream accommodation for your vacation</h1>
          <p>The sea, nature or in the city</p>
          <form id="search">
            <i className="fa-solid fa-location-dot"></i>
            <input
              type="search"
              name="reserch"
              id="reserch"
              placeholder=" Madrid, Spain"
            />
            <button>Search</button>
          </form>
          <div id="container-filters">
            <button id="filters">Filters</button>
            <button>
              <i className="fa-solid fa-umbrella-beach"></i>
              Sea
            </button>
            <button>
              <i className="fa-solid fa-tree"></i>
              Nature
            </button>
            <button>
              <i className="fa-solid fa-mountain-sun"></i>
              Moutains
            </button>
            <button>
              <i className="fa-solid fa-city"></i>
              Cities
            </button>
          </div>
          <div id="warning">
            <i className="fa-solid fa-circle-exclamation"></i>
            <p>More than 500 accomodations in this city</p>
          </div>
        </section>
        <div id="container-accomodations">
          <section id="accomodations">
            <h2>Accomodations in Madrid</h2>
            <div className="accomodations-container">
              <a href="#">
                <article>
                  <p>Recommanded</p>
                  <img
                    src="/img/accomodation/Retiro-Park.jpg"
                    alt="Retiro Park"
                  />
                  <h3>Retiro Park</h3>
                  <p>Stay from $40/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </article>
              </a>
              <a href="#">
                <article>
                  <p>Recommanded</p>
                  <img
                    src="/img/accomodation/Royal-Palace-of-Madrid.jpg"
                    alt="Retiro Park"
                  />
                  <h3>Royal Palace of Madrid</h3>
                  <p>Stay from $46/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </article>
              </a>
              <a href="#">
                <article>
                  <img
                    src="/img/accomodation/Puerta-del-Sol.jpg"
                    alt="Retiro Park"
                  />
                  <h3>Puerta del Sol</h3>
                  <p>Stay from $52/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </article>
              </a>
              <a href="#">
                <article>
                  <img
                    src="/img/accomodation/Plaza-Mayor.jpg"
                    alt="Retiro Park"
                  />
                  <h3>Plaza Mayor</h3>
                  <p>Stay from $55/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </article>
              </a>
              <a href="#">
                <article>
                  <p>Recommanded</p>
                  <img
                    src="/img/accomodation/Prado-Museum.jpg"
                    alt="Retiro Park"
                  />
                  <h3>Prado Museum</h3>
                  <p>Stay from $61/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </article>
              </a>
              <a href="#">
                <article>
                  <img src="/img/accomodation/Gran-Vía.jpg" alt="Retiro Park" />
                  <div>
                    <h3>Gran Vía</h3>
                    <p>Stay from $68/night</p>
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <button>Load more</button>
          </section>
          <aside id="popular-accomodations">
            <h2>Most popular accomodations</h2>
            <a href="#">
              <article>
                <p>Popular</p>
                <img
                  src="/img/accomodation/Retiro-Park.jpg"
                  alt="Retiro Park"
                />
                <div>
                  <h3>Retiro Park</h3>
                  <p>Stay from $40/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </article>
            </a>
            <a href="#">
              <article>
                <p>Popular</p>
                <img src="/img/accomodation/Gran-Vía.jpg" alt="Retiro Park" />
                <div>
                  <h3>Gran Vía</h3>
                  <p>Stay from $68/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </article>
            </a>
            <a href="#">
              <article>
                <p>Popular</p>
                <img
                  src="/img/accomodation/Puerta-del-Sol.jpg"
                  alt="Retiro Park"
                />
                <div>
                  <h3>Puerta del Sol</h3>
                  <p>Stay from $52/night</p>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </article>
            </a>
          </aside>
        </div>
        <section id="activities">
          <h2>Discover all activities around here</h2>
          <div id="container-activities">
            <a href="#">
              <article>
                <img src="/img/activities/Water.jpg" alt="activities" />
                <h3>Water activities</h3>
              </article>
            </a>
            <a href="#">
              <article>
                <img src="/img/activities/mountain.jpg" alt="activities" />
                <h3>Moutain activities</h3>
              </article>
            </a>
            <a href="#">
              <article>
                <img src="/img/activities/Nature.jpg" alt="activities" />
                <h3>Nature activities</h3>
              </article>
            </a>
            <a href="#">
              <article>
                <img src="/img/activities/City.jpg" alt="activities" />
                <h3>City activities</h3>
              </article>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
