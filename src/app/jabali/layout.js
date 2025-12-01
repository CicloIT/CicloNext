// app/jabali/layout.js
import { Final } from "../Components/Jabali/Final";
import { HeaderJ } from "../Components/Jabali/HeaderJ";

export const metadata = {
  title: "Jabali ~ WildTrack LoRaWAN",
  description: "Sistema de monitoreo de jabalíes con tecnología LoRaWAN",
};

export default function JabaliLayout({ children }) {
  return (
    <>
      <HeaderJ />    
      {children}
      <Final/>     
    </>
  );
}
