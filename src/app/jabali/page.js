
import { JabaliPage } from "../Components/Jabali/JabaliPage";
import es from "@/app/locales/es.json";
import en from "@/app/locales/en.json";

const translations = { es, en };
export default async function Page({params}) {
    params = await params;
    const { lang } = params;
      
  return (
      <main className="p-6 bg-white">                
            <JabaliPage />        
      </main>
    );
}
