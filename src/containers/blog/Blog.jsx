import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const blogData = [
  {
    imgUrl: blog01,
    date: new Date(),
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog02,
    date: new Date(),
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog03,
    date: new Date(),
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog04,
    date: new Date(),
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog05,
    date: new Date(),
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        {blogData.map((item, index) => {
          const { imgUrl, date, text } = blogData;
          return (
            <Article
              imgUrl={imgUrl}
              date={date}
              text={text}
              key={date + index}
            />
          );
        })}
      </div>
    </div>
  </div>
);

export default Blog;
