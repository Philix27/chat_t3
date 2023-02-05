import { ILgaList, LgaList } from "./lgas";
import { StateList } from "./state";
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

export function generateLgaCode() {
  let _genCodes: string[] = [];
  let stateIDs: number[] = [];
  let AllLgaList: ILgaList[] = [];

  for (var i = 1; i < 37 + 1; i++) {
    //* get all lgas in a particular state
    const currentStateLgas = LgaList.filter(
      (lgaObj) => Number(lgaObj.stateId) == i
    );

    // * Take the first 3 letters of the lga name
    let listVal: string[] = [];
    currentStateLgas.forEach((item, index) => {
      //* replace all special characters
      item.newName = item.name.replace("(", "");
      item.newName = item.newName.replace(")", "");
      item.newName = item.newName.replace("/", "");
      item.newName = item.newName.replace("-", "");
      item.newName = item.newName.replace("", "");
      item.newName = item.newName.replace(" ", "");
      item.newName = item.newName.replace("  ", "");
      item.newName = item.newName.replace("    ", "");

      if (!listVal.includes(item.newName.slice(0, 3))) {
        item.stateCode = item.newName.slice(0, 3);
      } else if (!listVal.includes(item.newName.slice(1, 4))) {
        // * assign to the statecode field if does not match the first 3
        item.stateCode = item.newName.slice(1, 4);
      } else if (!listVal.includes(item.newName.slice(2, 5))) {
        item.stateCode = item.newName.slice(2, 5);
      } else if (!listVal.includes(item.newName.slice(3, 6))) {
        item.stateCode = item.newName.slice(3, 6);
      } else if (!listVal.includes(item.newName.slice(4, 7))) {
        item.stateCode = item.newName.slice(4, 7);
      } else {
        item.stateCode = item.newName.slice(5, 8);
      }
      // ? Get state abrev
      const stateSel = StateList.filter((vsl, index) => vsl.id == item.stateId);
      const trimStateValues = stateSel[0].name.slice(0, 3);

      const ff = generatePrefix(`${trimStateValues}/${item.stateCode}/`);
      // ! Without Unique id
      //   const ff = `${trimStateValues}/${item.stateCode}/`;
      item.agentCode = ff;
      //* add all abrv to a list
      listVal.push(item.stateCode);
    });
    AllLgaList.push(...currentStateLgas);
    // console.log(currentStateLgas);
  }
  console.log(AllLgaList);
  return AllLgaList;
}

function getRandomInt(max: number, min: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const val = Math.floor(Math.random() * (max - min) + min);
  return val;
}

function generatePrefix(prefix: string) {
  let _genCodes: string[] = [];

  const firstLetter = LETTERS[getRandomInt(26, 13)].toUpperCase();
  const secondLetter = LETTERS[getRandomInt(12, 0)].toUpperCase();
  const fig = getRandomInt(9000, 1000);
  const finalValue = `${prefix}${fig}${firstLetter}${secondLetter}`;

  return finalValue;
}
