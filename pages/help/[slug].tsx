import HelpView from "../../lib/views/help/help.view";
import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NoteView from "../../lib/views/help/note/note.view";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPropsContext } from "next";

type HelpProperties = {
  content: string;
};
export default function HelpPage(props: HelpProperties) {
  return <NoteView content={props.content} />;
}

export async function getStaticPaths(help: string) {
  const files = fs.readdirSync(path.join("_md"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// export const getStaticProps = async ({params}:
//   GetStaticPropsContext<{ slug: string }>) => {

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const markdownWithMeta = fs.readFileSync(
    path.join("_md", params?.slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const slug = params?.slug;
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
