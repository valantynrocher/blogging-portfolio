import { IconType } from "react-icons/lib/cjs/iconBase"

export interface MenuItemProps {
  text: string
  Icon: IconType
  to?: string
  SubmenuComponent?: JSX.Element
}

export interface HeaderProps {}
