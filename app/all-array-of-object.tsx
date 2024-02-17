"use client";
import { BiHomeCircle, BiLayout } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
export const listOfName = [
  {
    id: 1,
    name: "Dashboards",
    icon: <BiHomeCircle />,
    childItem: [
      {
        id: 1,
        name: "Analytics",
        icon: <GoDotFill />,
      },
      {
        id: 2,
        name: "CRM",
        icon: <GoDotFill />,
      },
      {
        id: 3,
        name: "eCommerce",
        icon: <GoDotFill />,
      },
      {
        id: 4,
        name: "Lofistics",
        icon: <GoDotFill />,
      },
      {
        id: 5,
        name: "Academy",
        icon: <GoDotFill />,
      },
    ],
  },
  {
    id: 2,
    name: "Layouts",
    icon: <BiLayout />,
    childItem: [
      {
        id: 1,
        name: "Collapsed menu",
        icon: <GoDotFill />,
      },
      {
        id: 2,
        name: "Content navbar",
        icon: <GoDotFill />,
      },
      {
        id: 3,
        name: "Content nav + Sidebar",
        icon: <GoDotFill />,
      },
      {
        id: 4,
        name: "Horizontal",
        icon: <GoDotFill />,
      },
      {
        id: 5,
        name: "Without menu",
        icon: <GoDotFill />,
      },
      {
        id: 6,
        name: "Without navbar",
        icon: <GoDotFill />,
      },
      {
        id: 7,
        name: "Fluid",
        icon: <GoDotFill />,
      },
      {
        id: 8,
        name: "Container",
        icon: <GoDotFill />,
      },
      {
        id: 9,
        name: "Blank",
        icon: <GoDotFill />,
      },
    ],
  },
  {
    id: 3,
    name: "Front Pages",
    icon: <IoStorefrontOutline />,
    childItem: [
      {
        id: 1,
        name: "Landing",
        icon: <GoDotFill />,
      },
      {
        id: 2,
        name: "Pricing",
        icon: <GoDotFill />,
      },
      {
        id: 3,
        name: "Payment",
        icon: <GoDotFill />,
      },
      {
        id: 4,
        name: "Checkout",
        icon: <GoDotFill />,
      },
      {
        id: 5,
        name: "Help Center",
        icon: <GoDotFill />,
      },
    ],
  },
];
