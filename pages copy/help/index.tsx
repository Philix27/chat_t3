import HelpView from "../../lib/views/help/help.view";
import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

type HelpProperties = {
  content: string;
};
export default function HelpPage(props: HelpProperties) {
  return <HelpView />;
}
