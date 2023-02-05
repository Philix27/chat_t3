import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

interface NavBarProperties {
  title: string;
  subtitle?: string;
  rightText?: string;
  subRightText?: string;
  midContent?: React.ReactNode;
}
export default function NavBar(props: NavBarProperties) {
  const router = useRouter();
  const _path = router.pathname.toString();
  const [user, setUser] = useState(null);
  const show = "show";
  const [showNav, setShowNav] = useState(false);
  // console.log("Path -", _path);
  return (
    <>
      <div className={styles.navbar}>
        <label className={styles.brand}>
          <Link href="/home" className={styles.brand}>
            Situation Room
          </Link>
        </label>

        <ul className={showNav ? styles.show : ""}>
          <li
            className={_path == "/home" ? styles.active : ""}
            onClick={() => setShowNav(!showNav)}
          >
            <Link href="/home" className={styles.link}>
              Home
            </Link>
          </li>

          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/analytics" ? styles.active : ""}
          >
            <Link href="/analytics" className={styles.link}>
              Analytics
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/help` ? styles.active : ""}
          >
            <Link href={"/help"} className={styles.link}>
              Help
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/login` ? styles.active : ""}
          >
            <Link href={"/login"} className={styles.link}>
              Login
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/register` ? styles.active : ""}
          >
            <Link href={"/register"} className={styles.link}>
              Register
            </Link>
          </li>
        </ul>

        <label className={styles.icon}>
          {showNav ? (
            <FaTimes onClick={() => setShowNav(!showNav)} />
          ) : (
            <FaBars onClick={() => setShowNav(!showNav)} />
          )}
        </label>
      </div>
    </>
  );
}

// return (
//   <>
//     <div className={styles.navbar}>
//       <h3 className={styles.title}>{props.title}</h3>

//       <div className={styles.links}>
//         <ul>
//           {props.title && (
//             <li>
//               <Link legacyBehavior href="/#">
//                 {props.rightText}
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   </>
// );
// }
