import { createRef } from "react";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const routes = [
  {
    key: 'home',
    label: 'Home',
    path: '',
    el: <Home />,
    nodeRef: createRef(),
  },
  {
    key: 'about',
    label: 'About',
    path: 'about',
    el: <About />,
    nodeRef: createRef(),
  },
  {
    key: 'books',
    label: 'Books',
    path: 'books',
    el: <Books />,
    nodeRef: createRef(),
  },
  {
    key: 'contact',
    label: 'Contact',
    path: 'contact',
    el: <Contact />,
    nodeRef: createRef(),
  },
];

export default routes;
