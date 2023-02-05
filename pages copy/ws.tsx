import { generateKey } from "crypto";
import React, { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../contexts/ws";
import { nanoid, customAlphabet } from "nanoid";
import { generateLgaCode } from "../constants/functions";
import { ILgaList } from "../constants/lgas";
import { IStateList, StateList } from "../constants/state";

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
  const [lgaAgentList, setlgaAgentList] = useState<ILgaList[]>([]);

  useEffect(() => {
    setlgaAgentList(generateLgaCode());
  }, []);

  function getStateName(id: string): string {
    return StateList.filter((vsl, index) => vsl.id == id)[0].name;
  }
  function getRandomInt(max: number, min: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const val = Math.floor(Math.random() * (max - min) + min);
    return val;
  }

  const [genCodes, setgenCodes] = useState<string[]>([]);
  const [prefix, setprefix] = useState<string>("");
  const [count, setcount] = useState<number>(1);

  function generateCode({ prefix, length, min, max }: IGenCode) {
    let _genCodes: string[] = [];

    for (var i = 1; i < length + 1; i++) {
      const firstLetter = LETTERS[getRandomInt(26, 13)].toUpperCase();
      const secondLetter = LETTERS[getRandomInt(12, 0)].toUpperCase();
      const fig = getRandomInt(max, min);
      const finalValue = `${prefix}${fig}${firstLetter}${secondLetter}`;
      // if (_genCodes.every((v) => v == finalValue)) {
      _genCodes.push(finalValue);
      // }
    }

    console.log(_genCodes);
    setgenCodes(_genCodes);
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
            onClick={() =>
              generateCode({
                prefix: prefix,
                length: count,
                min: 1000,
                max: 8000,
              })
            }
            value="Random Int"
          />
        </div>
      </form>
      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>staetId</th>
              <th>name</th>
              <th>refcode</th>
            </tr>
          </thead>
          {lgaAgentList && (
            <tbody>
              {lgaAgentList.map((val, i) => (
                <tr key={i}>
                  <td>{val.id}</td>
                  <td>{val.stateId}</td>
                  {/* <td>{getStateName(val.stateId)}</td> */}
                  <td>{val.name}</td>
                  <td>{val.agentCode}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
