import React from "react";
import styled from "styled-components";
import MarkdownIt from "markdown-it";
import styles from "./note.module.scss";

type HelpProperties = {
  content: string;
};

export default function NoteView(props: HelpProperties) {
  const md = new MarkdownIt();
  const cc = md.render(props.content);
  return (
    <div className={styles.markdown_section}>
      <div dangerouslySetInnerHTML={{ __html: cc }}></div>
    </div>
  );
}
