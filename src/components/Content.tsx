import { ContentHeader } from "./Header.content";
import { ContentBody } from "./Body.content";

export default function content() {
  return (
    <div aria-label='content' className="w-[100%] h-[100%] flex flex-col xs:p-1 sm:p-2 lg:p-4 gap-4">
      <ContentHeader />
      <ContentBody />
    </div >
  );
}