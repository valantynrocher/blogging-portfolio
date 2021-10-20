import { navigate } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

export const setCookie = (cookie: string, value: string): void => {
  if (typeof window !== "undefined") {
    window.document.cookie = `${cookie}=${value}; path=/`
  }
}

export const getCookie = (cookie: string): string | null => {
  if (typeof window !== "undefined") {
    const cookies = window.document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split("=")
      if (key.trim() === cookie) {
        return value
      }
    }
  }
  return null
}

export const handleNavigate = (href: string) => {
  const isAnchroLink = href.startsWith("/#")
  navigate(href)
  if (isAnchroLink) {
    const anchorId = href.replace("/", "")
    scrollTo(anchorId, "start")
  }
}

export { default as themes } from "./theme"
