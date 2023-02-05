import { generateKey } from "crypto";
import React, { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../contexts/ws";
import { nanoid, customAlphabet } from "nanoid";
import { ILgaList, LgaList } from "../constants/lgas";
import { generateLgaCode } from "../constants/functions";
const LETTERS = [
  "p",
  "r",
  "o",
  "b",
  "l",
  "e",
  "m",
  "a",
  "c",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "n",
  "q",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface IGenCode {
  prefix: string;
  length: number;
  min: number;
  max: number;
}
export default function WSPage() {
  const socket = useContext(WebSocketContext);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("createMessage", (arg) => {
      console.log("Message Socket", arg);
    });

    // return () => {
    //   console.log("Unregistering");
    //   socket.off("connect");
    //   socket.off("message");
    // };
  }, []);

  const [genCodes, setgenCodes] = useState<string[]>([]);
  const [prefix, setprefix] = useState<string>("");
  const [count, setcount] = useState<number>(1);

  function generateCode() {
    let _genCodes: string[] = [];
    let stateIDs: number[] = [];
    let LgaListMaker: ILgaList[] = [];

    for (var i = 1; i < 37 + 1; i++) {
      //* get all lgas in a particular state
      const currentStateLgas = LgaList.filter(
        (lgaObj) => Number(lgaObj.stateId) == i
      );

      // * Take the first 3 letters of the lga name
      let listVal: string[] = [];
      currentStateLgas.forEach((item, index) => {
        //* check if statecode already exist in the list of statecodes
        item.name = item.name.replace("(", "");
        item.name = item.name.replace(")", "");
        item.name = item.name.replace("/", "");
        item.name = item.name.replace("-", "");
        item.name = item.name.replace(" ", "");

        if (!listVal.includes(item.name.slice(0, 3))) {
          item.stateCode = item.name.slice(0, 3);
        } else {
          // * assign to the statecode field if does not match the first 3
          item.stateCode = item.name.slice(1, 4);
        }
        //* add all abrv to a list
        listVal.push(item.stateCode);
        console.log("List Val", listVal);
      });

      console.log(currentStateLgas);
    }
  }

  return (
    <div className="section">
      WSPage
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="input_box">
          <input
            type="text"
            className="input-form"
            placeholder="prefix"
            value={prefix}
            onChange={(e) => setprefix(e.target.value.toUpperCase())}
          />
        </div>
        <div className="input_box">
          <input
            type="text"
            className="input-form"
            placeholder="count"
            value={count}
            onChange={(e) => setcount(Number(e.target.value))}
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            className="btn"
            onClick={() => generateLgaCode()}
            value="Random Int"
          />
        </div>
      </form>
      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Generated Codes</th>
            </tr>
          </thead>
          {genCodes && (
            <tbody>
              {genCodes.map((g, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{g}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
