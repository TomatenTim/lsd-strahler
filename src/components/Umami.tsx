import config from "@/config";
import Script from "next/script"


export default function Umami() {

  if(!config.umami.script || !config.umami.websiteID) {
    return <></>
  }

  return (
    <Script
      id="umami"
      strategy="afterInteractive"
      src={config.umami.script} 
      data-website-id={config.umami.websiteID}
    >
    </Script>
  );
}
