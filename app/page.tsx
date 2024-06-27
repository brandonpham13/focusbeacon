import { LinkExternal } from "@/components/link-external"
import { fmOAuthForAuthCodeUrl } from "@/lib/oauth"

export default function Home() {
  return (
    <LinkExternal href={fmOAuthForAuthCodeUrl} openInNewTab={false}>
      <button type="button">Login with Focusmate</button>
    </LinkExternal>
  )
}
