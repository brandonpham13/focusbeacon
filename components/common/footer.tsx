import { Footnote } from "@/components/ui/text"
import { LinkInternal } from "@/components/ui/link-internal"
import { LinkExternal } from "@/components/ui/link-external"
import { RiExternalLinkLine } from "@remixicon/react"

export const navItems = [
  {
    label: "Home",
    url: "/home",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Privacy",
    url: "/privacy",
  },
  {
    label: "Contact",
    url: "https://forms.gle/D7k33QwMUzK2m1vb7",
  },
  {
    label: "GitHub",
    url: "https://github.com/qu8n/focusbeacon",
  },
]

export function Footer() {
  return (
    <div className="w-full flex flex-col sm:flex-row-reverse justify-between items-center gap-6 mb-6">
      <div className="inline-flex gap-4">
        {navItems.map(({ label, url }) => {
          if (url[0] === "/") {
            return (
              <LinkInternal key={label} href={url}>
                <Footnote key={label}>{label}</Footnote>
              </LinkInternal>
            )
          } else {
            return (
              <LinkExternal
                key={label}
                href={url}
                openInNewTab
                className="flex flex-row items-center gap-1"
              >
                <RiExternalLinkLine className="size-3" color="gray" />
                <Footnote key={label}>{label}</Footnote>
              </LinkExternal>
            )
          }
        })}
      </div>
      <Footnote>© FocusBeacon</Footnote>
    </div>
  )
}
