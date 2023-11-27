import ChooseEntry from "../Entry/ChooseEntry";
import BlackBg from "../Form/BlackBg";
import Registration from "../Entry/Registration";
import Entry from "../Entry/Entry";
import Main from "../store/main";
import {observer} from "mobx-react-lite";

export function editForm() {
  switch (Main.getInstance().formStatus) {
    case "choose":
      return ChooseEntry
    case "registration":
      return Registration
    case "entry":
      return  Entry
    default:
      return ChooseEntry
  }
}

const OpenAuth = observer(() => {
  return(
    <BlackBg ChosenForm={editForm()}/>
  )
})

export default OpenAuth