import React from "react";
import FadeIn from 'react-fade-in';
import Menu from "./Menu";
const Introduction = () => {
  return (
    <div>
      <Menu />
      <div className="intro-header">
        <h1>From Sneakers and Jeans</h1>
        <h3>Introduction</h3>
      </div>

      <FadeIn>
        <p>Did you know that the introduction of a book is used to set the tone of the book? It’s sort of a way for the writer
          (me) to tell the reader (you) the book’s purpose (goal). When I began writing from sneakers & jeans...the
          purpose was very clear. To give teen girls...JUST LIKE YOU...the tools and information that’s helped me
          become happy, healthy, independent, and strong.</p>
      </FadeIn>

      <FadeIn delay={5000} >
        <p>I’m writing this book to tell you that everyone has amazing, great, good, OK, not so good, pretty bad, and very
          sad things happen. But having a solid sense of who you are, and loving yourself despite your faults and failures,
          will give you the strength to move forward when the not so good, the pretty bad and the very sad things happen.
          Throughout my entire life, there have been people (more than I can count, with some family included) who
          thought I was...AND STILL AM...weird and awkward. And you know what, THAT’S OK. That’s OK, because
          I’m SPLENDID. And splendid people are innovators; while ordinary people are followers. I believe in being
          true to who I am. And for me, that means doing what feels natural; standing on the side of what is right;
          and treating others the way I want to be treated. I don’t think I have ever made a decision, of any kind,
          because it was “popular” or “hot.” I KNOW ME. I AM HAPPY WITH ME. And I DON’T COMPROMISE
          MY CHARACTER FOR ANY REASON or ANYONE.</p>

        <p>I am fortunate to have a mother that worked very hard to teach me the importance of being a woman amongst
          women. Which for me is: A woman who can think for herself. A woman who can learn from her mistakes. A
          woman who can believe in herself, when no one else does. A woman who is strong in spirit, when her body is
          weak. A woman who knows, that where you are today, doesn’t mean that’s where you’ll be tomorrow.</p>

        <p>My hope is that from sneakers & jeans...will give you what you need to become a woman amongst women. So
          to start you off in the right direction, I offer to you this very powerful quote:</p>

        <p><strong><i>“Watch your thoughts; they become your words. Watch your words; they become your actions. Watch your
          actions; they become your habits. Watch your habits; they become your character. Watch your character for it will become your destiny.”<br />
          —Unknown</i></strong></p>
      </FadeIn>
    </div>
  )
}

export default Introduction;