import { NavLink } from "@mantine/core";
import { IconCards, IconHome2 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavbarLinks = () => {
  const pathname = usePathname();
  const links = [
    {
      icon: <IconHome2 size={20} />,
      color: "green",
      label: "Home",
      path: "/",
    },
    {
      icon: <IconCards size={20} />,
      color: "green",
      label: "My NFT",
      path: "/mynft",
    },
  ];

  const [active, setActive] = useState(0);
  const linkElements = links.map((item, index) => (
    <NavLink
      component={Link}
      href={item.path}
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={item.icon}
      onClick={() => setActive(index)}
    />
  ));

  useEffect(() => {
    const index = links.findIndex((item) => item.path === pathname);
    setActive(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{linkElements}</div>;
};
