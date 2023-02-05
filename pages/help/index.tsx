import React, { useState, useEffect } from "react";
import HelpView from "../../client/views/help/help.view";

type HelpProperties = {
  content: string;
};
export default function HelpPage(props: HelpProperties) {
  return <HelpView />;
}
