import { AiFillHome, AiOutlineBarChart, AiOutlineGroup } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

type Props = {
  active?: string;
};
export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Situation Room</h3>
      <ul className={styles.styles}>
        <li className={styles.styles}>
          <span>
            <AiFillHome />
          </span>
          <Link href="/home">Home </Link>
        </li>

        <li>
          <span>
            <AiOutlineBarChart />
          </span>
          <Link href="/analytics">Analytics </Link>
        </li>

        {/* <li>
          <span>
            <TiGroup />
          </span>
          <Link href="/parties">Parties </Link>
        </li> */}

        <li>
          <span>
            <BiHelpCircle />
          </span>
          <Link href="/help">Help </Link>
        </li>
      </ul>
    </div>
  );
};
