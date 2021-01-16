import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Courses.module.scss';

class Courses extends Component {
  render() {
    return (
      <div className={`appPaddingWrapper`}>
        <div className={`${style.pageContent} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.courses.title"
              defaultMessage="Akashic Training"
            />
          </span>
          <p className={style.noMargin}>
            Have you always wanted to learn to understand yourself and others from the perspective of the Akasha?
          </p>
          <p className={style.noMargin}>
            Here is your path and opportunity!
          </p>
          <p>
            Akashic School of Wisdom Training
          </p>
          <h2>
            Course 1: The Start
          </h2>
          <ol>
            <li>
              Vibrational keys in the form of sacred prayers to easily access your Akashic Record.
            </li>
            <li>
              Important guidelines which hold you in the light of protective love.
            </li>
            <li>
              The art of formulating questions to receive life-enhancing answers.
            </li>
            <li>
              How to release negative karma which binds you to negative life patterns.
            </li>
            <li>
              How to access your inner wisdom for clarity to navigate your life with more precision.
            </li>
            <li>
              Practice time accessing your records to ensure continuing success in receiving information.
            </li>
            <li>
              Healing tools and prayers to assist you in further healing.
            </li>
            <li>
              How to ground deeply and why it is important for Akashic Records work.
            </li>
            <li>
              An energetic tool to cycle Cosmic and Earth energy through your body.
            </li>
            <li>
              How to call back energy you have misplaced.
            </li>
          </ol>
          <h2>
            Course 2: The Deepening
          </h2>
          <ol>
            <li>
              How to distinguish between information, knowledge, and wisdom.
            </li>
            <li>
              How to work with past life information.
            </li>
            <li>
              How ancestral and genetic lineage impact your current life.
            </li>
            <li>
              How your soul lineage holds important keys for your soul’s journey.
            </li>
            <li>
              How to reclaim past life wisdom.
            </li>
          </ol>
          <h2>
            Course 3: The Expansion
          </h2>
          <ol>
            <li>
              Learn how to work with the records of people other than yourself.
            </li>
            <li>
              Deepen your Akashic reading skills and capacities.
            </li>
          </ol>
          <br/>
          <h4>
            BONUSES
          </h4>
          <p className={style.noMargin}>
            Register for any course and get:
          </p>
          <ul className={style.noMargin}>
            <li>
              A 35% discount on a personal reading based on the normal USD $272 session fee. (No value without purchase)
            </li>
          </ul>
          <p className={style.noMargin}>
            Register for Course 1 and get:
          </p>
          <ul className={style.noMargin}>
            <li>
              A complimentary group mindfulness session with Aniela Sklepowicz, date TBA.
            </li>
          </ul>
          <p className={style.noMargin}>
            Register for Course 2 and get:
          </p>
          <ul className={style.noMargin}>
            <li>
              A complimentary copy of a mini E-book, when it is completed, to help you deepen your Akashic reading results.
            </li>
          </ul>
          <br/>
          <p>
            TELESEMINAR.
            Christopher will support your learning with Zoom so you have the flexibility to call in or be online from anywhere in the World.
            The courses are to be run in Eastern Standard Time (New York Time).
            All the classes will be recorded and shared with participants, so if for any reason you miss a date, you will be able to walk through everything just like you were actually there.
          </p>
          <br/>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>2021 Dates</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Course 1: The Start</td>
                <td>TBA</td>
                <td>CAD $400 for early register. CAD $500 regularly.</td>
              </tr>
              <tr>
                <td>Course 2: The Deepening</td>
                <td>TBA</td>
                <td>CAD $520 for early register. CAD $650 regularly.</td>
              </tr>
              <tr>
                <td>Course 3: The Expansion</td>
                <td>TBA - currently planned for April 11, 18, 25, May 2, 16 and would consider earlier with enough students to run the course.</td>
                <td>CAD $850 for early register. CDN $1000 regularly.</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <h1>
            Register for a Course
          </h1>
          <p>
            To register, or for a two pay option, please contact Christopher at christopherakashic@gmail.com
          </p>
          <p>
            Web payments comming soon.
          </p>
        </div>
      </div>
    );
  }
}

export default Courses;
