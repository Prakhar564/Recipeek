import React from 'react'

import PropTypes from 'prop-types'

import '../index'

const Steps = (props) => {
  return (
    <div className={`steps-steps ${props.rootClassName} `}>
      <h1 className="steps-text">
        <span className="">Discover Our Process</span>
      </h1>
      <div className="steps-container">
        <div className="steps-step">
          <div className="steps-container01">
            <div className="steps-line"></div>
            <div className="steps-container02">
              <svg viewBox="0 0 1024 1024" className="steps-icon">
                <path
                  d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="steps-line1"></div>
          </div>
          <div className="steps-container03">
            <h1 className="steps-text02">{props.heading}</h1>
            <span className="steps-text03">{props.text}</span>
          </div>
        </div>
        <div className="steps-step1">
          <div className="steps-container04">
            <div className="steps-line2"></div>
            <div className="steps-container05">
              <svg viewBox="0 0 1024 1024" className="steps-icon02">
                <path
                  d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"
                  className=""
                ></path>
              </svg>
              <div className="steps-container06">
                <svg viewBox="0 0 1152 1024" className="steps-icon04">
                  <path
                    d="M1088 128h-1024c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h1024c35.2 0 64-28.8 64-64v-640c0-35.2-28.8-64-64-64zM640 256h128v128h-128v-128zM832 448v128h-128v-128h128zM448 256h128v128h-128v-128zM640 448v128h-128v-128h128zM256 256h128v128h-128v-128zM448 448v128h-128v-128h128zM128 256h64v128h-64v-128zM128 448h128v128h-128v-128zM192 768h-64v-128h64v128zM768 768h-512v-128h512v128zM1024 768h-192v-128h192v128zM1024 576h-128v-128h128v128zM1024 384h-192v-128h192v128z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="steps-line3"></div>
          </div>
          <div className="steps-container07">
            <h1 className="steps-text04">{props.heading1}</h1>
            <span className="steps-text05">{props.text1}</span>
          </div>
        </div>
        <div className="steps-step2">
          <div className="steps-container08">
            <div className="steps-line4"></div>
            <div className="steps-container09">
              <svg viewBox="0 0 1024 1024" className="steps-icon06">
                <path
                  d="M931.029 530.347c-3.541-5.077-87.979-125.611-204.501-208-60.416-42.795-136.619-66.347-214.528-66.347-77.867 0-154.069 23.552-214.613 66.347-116.523 82.389-200.875 202.923-204.416 208-10.155 14.635-10.155 34.048 0 48.683 3.541 5.077 87.893 125.611 204.416 208 60.544 42.752 136.747 66.304 214.613 66.304 77.909 0 154.112-23.552 214.528-66.347 116.523-82.389 200.96-202.923 204.501-208 10.197-14.592 10.197-34.048 0-48.64zM512 704c-82.517 0-149.333-66.987-149.333-149.333 0-82.517 66.816-149.333 149.333-149.333 82.347 0 149.333 66.816 149.333 149.333 0 82.347-66.987 149.333-149.333 149.333z"
                  className=""
                ></path>
                <path
                  d="M597.333 554.667c0 47.019-38.315 85.333-85.333 85.333-47.147 0-85.333-38.315-85.333-85.333 0-47.147 38.187-85.333 85.333-85.333 47.019 0 85.333 38.187 85.333 85.333z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="steps-line5"></div>
          </div>
          <div className="steps-container10">
            <h1 className="steps-text06">{props.heading2}</h1>
            <span className="steps-text07">
              <span className="steps-text08">
                Once you&apos;ve entered your ingredients and any optional
                filters, click the &quot;Search&quot; button.
              </span>
              <span className="">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className=""></br>
            </span>
          </div>
        </div>
        <div className="steps-step3">
          <div className="steps-container11">
            <div className="steps-line6"></div>
            <div className="steps-container12">
              <svg viewBox="0 0 1024 1024" className="steps-icon09">
                <path
                  d="M634 492l-62 62 294 294-60 60-294-294-294 294-60-60 416-416q-24-48-7-112t67-114q62-62 138-71t122 37 37 123-71 139q-50 50-114 66t-112-8zM346 570l-180-180q-50-50-50-120t50-120l300 298z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="steps-line7"></div>
          </div>
          <div className="steps-container13">
            <h1 className="steps-text11">
              <span className="">
                Time To
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className=""></br>
              <span className="">Cook</span>
            </h1>
            <span className="steps-text15">{props.text2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  heading: 'Access the Recipe Search',
  text: 'From the Recipeek homepage or dashboard, navigate to the "Search Recipes" section. Here you\'ll find a search bar and filters to explore the full recipe database.',
  heading1: 'Enter Your Ingredients',
  text1:
    'In the main search bar, start typing in the ingredients you have on hand or would like to use',
  heading2: 'View Search Results',
  text2:
    "Once you've found an appealing recipe from the search results, click through to view the full details. Here, Recipeek will provide a comprehensive, easy-to-follow recipe walkthrough to guide you in making that dish successfully",
  rootClassName: '',
}

Steps.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Steps
