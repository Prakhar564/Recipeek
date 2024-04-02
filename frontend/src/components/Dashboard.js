import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet'
import { ThemeContext } from '../App'; 
import TestimonialCard2 from './Testimonial-card2-testimonial-card'
import TestimonialCard from './Testimonial-card-testimonial-card'
import TestimonialCard1 from './Testimonial-card1-testimonial-card'
import '../index.css'

const Dashboard = (props) => {

  const { theme } = useContext(ThemeContext); 
  const themeClassName = theme === 'dark' ? 'dark-theme' : 'light-theme';


  return (
    <div className={`dashboard-container ${themeClassName}`}>
      <Helmet>
        <title>Dashboard - Charming Imaginary Sparrow</title>
        <meta
          property="og:title"
          content="Dashboard - Charming Imaginary Sparrow"
        />
      </Helmet>
      <div className="dashboard-sidebar">
        <h1 className="dashboard-text">Recipeek</h1>
        <nav className="dashboard-nav">
          <Link to="/dashboard" className="dashboard-navlink">
            Overview
          </Link>
          <Link to="/recipe-book" className="dashboard-navlink1">
            Recipe Book
          </Link>
          <Link to="/smart-cooking" className="dashboard-navlink2">
            Smart Cooking
          </Link>
          <span className="dashboard-text01">Team</span>
          <Link to="/" className="dashboard-navlink3">
            Home
          </Link>
        </nav>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" className="dashboard-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="dashboard-icon02"
          >
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg
            viewBox="0 0 602.2582857142856 1024"
            className="dashboard-icon04"
          >
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </div>
      <div className="dashboard-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHJlY2lwZXxlbnwwfHx8fDE3MTE0ODYxNDV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="dashboard-image"
        />
        <div className="dashboard-container01">
          <h1 className="dashboard-text02">Let’s keep things organised</h1>
          <h2 className="dashboard-text03">
            Magnificent things are very simple.
          </h2>
          <div className="dashboard-btn-group">
            <button className="dashboard-button button">Get Started</button>
            <button className="dashboard-button1 button">Learn More</button>
          </div>
          {
          /* <span className="dashboard-text04">
            <span>
              <span>
                
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
               
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span>
               
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span> */}
        </div>
      </div>
      <div className="dashboard-steps">
        <h1 className="dashboard-text18">
          <span>Discover Our Process</span>
        </h1>
        <div className="dashboard-container02">
          <div className="dashboard-step">
            <div className="dashboard-container03">
              <div className="dashboard-line"></div>
              <div className="dashboard-container04">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon06">
                  <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
                </svg>
              </div>
              <div className="dashboard-line1"></div>
            </div>
            <div className="dashboard-container05">
              <h1 className="dashboard-text20">Access the Recipe Search</h1>
              <span className="dashboard-text21">
                From the Recipeek homepage or dashboard, navigate to the
                &quot;Search Recipes&quot; section. Here you&apos;ll find a
                search bar and filters to explore the full recipe database.
              </span>
            </div>
          </div>
          <div className="dashboard-step1">
            <div className="dashboard-container06">
              <div className="dashboard-line2"></div>
              <div className="dashboard-container07">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
                <div className="dashboard-container08">
                  <svg viewBox="0 0 1152 1024" className="dashboard-icon10">
                    <path d="M1088 128h-1024c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h1024c35.2 0 64-28.8 64-64v-640c0-35.2-28.8-64-64-64zM640 256h128v128h-128v-128zM832 448v128h-128v-128h128zM448 256h128v128h-128v-128zM640 448v128h-128v-128h128zM256 256h128v128h-128v-128zM448 448v128h-128v-128h128zM128 256h64v128h-64v-128zM128 448h128v128h-128v-128zM192 768h-64v-128h64v128zM768 768h-512v-128h512v128zM1024 768h-192v-128h192v128zM1024 576h-128v-128h128v128zM1024 384h-192v-128h192v128z"></path>
                  </svg>
                </div>
              </div>
              <div className="dashboard-line3"></div>
            </div>
            <div className="dashboard-container09">
              <h1 className="dashboard-text22">Enter Your Ingredients</h1>
              <span className="dashboard-text23">
                In the main search bar, start typing in the ingredients you have
                on hand or would like to use
              </span>
            </div>
          </div>
          <div className="dashboard-step2">
            <div className="dashboard-container10">
              <div className="dashboard-line4"></div>
              <div className="dashboard-container11">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon12">
                  <path d="M931.029 530.347c-3.541-5.077-87.979-125.611-204.501-208-60.416-42.795-136.619-66.347-214.528-66.347-77.867 0-154.069 23.552-214.613 66.347-116.523 82.389-200.875 202.923-204.416 208-10.155 14.635-10.155 34.048 0 48.683 3.541 5.077 87.893 125.611 204.416 208 60.544 42.752 136.747 66.304 214.613 66.304 77.909 0 154.112-23.552 214.528-66.347 116.523-82.389 200.96-202.923 204.501-208 10.197-14.592 10.197-34.048 0-48.64zM512 704c-82.517 0-149.333-66.987-149.333-149.333 0-82.517 66.816-149.333 149.333-149.333 82.347 0 149.333 66.816 149.333 149.333 0 82.347-66.987 149.333-149.333 149.333z"></path>
                  <path d="M597.333 554.667c0 47.019-38.315 85.333-85.333 85.333-47.147 0-85.333-38.315-85.333-85.333 0-47.147 38.187-85.333 85.333-85.333 47.019 0 85.333 38.187 85.333 85.333z"></path>
                </svg>
              </div>
              <div className="dashboard-line5"></div>
            </div>
            <div className="dashboard-container12">
              <h1 className="dashboard-text24">View Search Results</h1>
              <span className="dashboard-text25">
                <span className="dashboard-text26">
                  Once you&apos;ve entered your ingredients and any optional
                  filters, click the &quot;Search&quot; button.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="dashboard-step3">
            <div className="dashboard-container13">
              <div className="dashboard-line6"></div>
              <div className="dashboard-container14">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon15">
                  <path d="M634 492l-62 62 294 294-60 60-294-294-294 294-60-60 416-416q-24-48-7-112t67-114q62-62 138-71t122 37 37 123-71 139q-50 50-114 66t-112-8zM346 570l-180-180q-50-50-50-120t50-120l300 298z"></path>
                </svg>
              </div>
              <div className="dashboard-line7"></div>
            </div>
            <div className="dashboard-container15">
              <h1 className="dashboard-text29">
                <span>
                  Time To
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Cook</span>
              </h1>
              <span className="dashboard-text33">
                Once you&apos;ve found an appealing recipe from the search
                results, click through to view the full details. Here, Recipeek
                will provide a comprehensive, easy-to-follow recipe walkthrough
                to guide you in making that dish successfully
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h1 className="dashboard-text34">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="dashboard-text37">Happy clients</span>
        </div>
        <div className="dashboard-stat1">
          <h1 className="dashboard-text38">
            <span>369</span>
          </h1>
          <span className="dashboard-text40">Dishes cooked</span>
        </div>
        <div className="dashboard-stat2">
          <h1 className="dashboard-text41">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="dashboard-text44">Hours</span>
        </div>
        <div className="dashboard-stat3">
          <h1 className="dashboard-text45">
            <span>24/7</span>
          </h1>
          <span className="dashboard-text47">Support</span>
        </div>
      </div>
      <div className="dashboard-testimonial">
        <h1 className="dashboard-text48">
          <span>Our clients speak</span>
        </h1>
        <span className="dashboard-text50">
          Testimonials From Happy Meal Preppers Raving About Recipeek&apos;s
          Recipe Discovery And Planning Solution
        </span>
        <div className="dashboard-container16">
          <TestimonialCard2></TestimonialCard2>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard1></TestimonialCard1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
