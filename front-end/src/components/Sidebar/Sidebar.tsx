import { useState, useEffect } from "react";
import {
  UserIcon,
  AdjustmentsIcon,
  ChartSquareBarIcon,
  FilmIcon,
  CalendarIcon,
  ShoppingBagIcon,
  ChatIcon,
  CogIcon,
  TemplateIcon,
  LockClosedIcon,
  MailIcon,
  BellIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

import SidebarSection from "./SidebarSection";
import SidebarSectionItem from "./SidebarSectionItem";
import SidebarTop from "./SidebarTop";
import SidebarHeader from "./SidebarHeader";
import { Studio, User } from "../../interfaces";
import { assetAvatar } from "../../services/Cdn";

const sectionsStudio = [
  {
    label: "Clients",
    icon: <UserIcon />,
    items: [
      {
        label: "Gestion des clients",
        link: "/test",
        icon: <AdjustmentsIcon />,
      },
      {
        label: "Gestion des abonnements",
        link: "/test",
        icon: <AdjustmentsIcon />,
      },
    ],
  },
  {
    label: "Contenu",
    icon: <UserIcon />,
    items: [
      {
        label: "Catégories",
        link: "categories",
        icon: <AdjustmentsIcon />,
      },
      {
        label: "Objectifs",
        link: "/test",
        icon: <ChartSquareBarIcon />,
      },
      {
        label: "Vidéos",
        link: "videos",
        icon: <FilmIcon />,
      },
      {
        label: "Calendrier",
        link: "/test",
        icon: <CalendarIcon />,
      },
    ],
  },
  {
    label: "Abonnements",
    icon: <ShoppingBagIcon />,
  },
  {
    label: "Communication",
    icon: <ChatIcon />,
  },
  {
    label: "Paramètres",
    icon: <CogIcon />,
    items: [
      {
        label: "Interfaces",
        link: "interface",
        icon: <TemplateIcon />,
      },
      {
        label: "Coachs",
        link: "/test",
        icon: <UserIcon />,
      },
      {
        label: "Autorisations",
        link: "/test",
        icon: <LockClosedIcon />,
      },
      {
        label: "Profil Studio",
        link: "profil",
        icon: <LockClosedIcon />,
      },
      {
        label: "Informations personnelles",
        link: "user",
        icon: <LockClosedIcon />,
      },
    ],
  },
  {
    label: "Messagerie",
    icon: <MailIcon />,
  },
  {
    label: "Notifications",
    icon: <BellIcon />,
  },
  {
    label: "Mon studio",
    icon: <BellIcon />,
  },
  {
    label: "Déconnexion",
    icon: <LogoutIcon />,
  },
];

const sectionsUser = [
  {
    label: "Profil",
    icon: <MailIcon />,
  },
  {
    label: "Messagerie",
    icon: <MailIcon />,
  },
  {
    label: "Studios",
    link: "/search-studio",
    icon: <BellIcon />,
  },
  {
    label: "Déconnexion",
    icon: <LogoutIcon />,
  },
];
const sectionsSuperAdmin = [
  {
    label: "Profil",
    link: "/user/:username",
    icon: <MailIcon />,
  },
  {
    label: "Messagerie",
    icon: <MailIcon />,
  },
  {
    label: "Questionnaire",
    link: "questionnaires",
    icon: <BellIcon />,
  },
  {
    label: "Reponses",
    link: "reponses",
    icon: <BellIcon />,
  },
  {
    label: "Notifications",
    icon: <BellIcon />,
  },
  {
    label: "Déconnexion",
    icon: <LogoutIcon />,
  },
];

export default function index({ layout }: any) {
  const [show, setShow] = useState(false);
  const [sections, setSections] = useState(sectionsUser);

  const toggleMenu = () => {
    if (layout.name) {
      setSections(sectionsStudio);
    }
    if (layout.role === 0) {
      setSections(sectionsSuperAdmin);
    }
  };

  useEffect(() => {
    toggleMenu();
  }, []);

  return (
    <div className="flex flex-col xl:flex:row relative z-50">
      {layout.name ? (
        <SidebarTop layoutName={layout.name} onToggle={setShow} />
      ) : (
        <SidebarTop layoutName={layout.username} onToggle={setShow} />
      )}

      <div
        className={`${
          show ? "translate-x-0" : "-translate-x-full"
        } fixed xl:w-1/5 ease-in-out transition duration-500 min-h-screen max-h-screen overflow-y-auto bg-gray-900 transform translate-y-16 xl:translate-y-0 xl:translate-x-0`}
      >
        {layout.name ? (
          <SidebarHeader
            layoutName={layout.name}
            layoutLogo={
              layout.logo
                ? layout.logo
                : "https://vectorified.com/images/man-icon-png-10.png"
            }
          />
        ) : (
          <SidebarHeader
            layoutName={layout.username}
            layoutLogo={
              layout.avatar
                ? assetAvatar(layout.avatar)
                : "https://vectorified.com/images/man-icon-png-10.png"
            }
          />
        )}

        {sections.map((section, i) => (
          <SidebarSection
            key={i}
            label={section.label}
            link={section?.link}
            icon={section.icon}
            layout={layout}
          >
            {section.items &&
              section.items.map((item, i) => (
                <SidebarSectionItem key={i} link={item.link} icon={item.icon}>
                  {item.label}
                </SidebarSectionItem>
              ))}
          </SidebarSection>
        ))}
      </div>
    </div>
  );
}
